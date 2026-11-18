(function () {
  "use strict";

  /* ---------- Utilidades ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  /* [[clave]] o [[clave|texto]]  ->  botón con definición emergente */
  function rich(s) {
    return s.replace(/\[\[([\w-]+)(?:\|([^\]]+))?\]\]/g, (m, k, txt) => {
      const g = GLOSSARY[k];
      if (!g) return txt || k;
      return `<button type="button" class="term" data-term="${k}">${txt || esc(g.t)}</button>`;
    });
  }

  /* Convierte los marcadores del HTML estático (antes de que Bootstrap lo observe) */
  const mainEl = $("main.rich");
  mainEl.innerHTML = rich(mainEl.innerHTML);

  /* ---------- Resaltado de sintaxis ---------- */
  function hx(src) {
    return esc(src)
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="t-cmt">$1</span>')
      .replace(/(&lt;\?[\s\S]*?\?&gt;)/g, '<span class="t-pro">$1</span>')
      .replace(/(&lt;\/?)([\w:.-]+)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?&gt;)/g,
        (m, open, name, attrs, end) => {
          const a = attrs.replace(/([\w:.-]+)(\s*=\s*)("[^"]*"|'[^']*')/g,
            '<span class="t-attr">$1</span>$2<span class="t-val">$3</span>');
          return `<span class="t-tag">${open}${name}</span>${a}<span class="t-tag">${end}</span>`;
        })
      .replace(/(<\/span>)([^<\n]+)(<span class="t-tag">&lt;\/)/g, '$1<span class="t-txt">$2</span>$3')
      .replace(/(&amp;(?:lt|gt|amp|quot|apos|#\d+);)/g, '<span class="t-ent">$1</span>');
  }
  function hj(src) {
    return esc(src).replace(/("(?:[^"\\]|\\.)*")(\s*:)?|(-?\b\d+(?:\.\d+)?\b)/g, (m, str, colon, num) => {
      if (str) return colon ? `<span class="t-key">${str}</span>${colon}` : `<span class="t-val">${str}</span>`;
      return `<span class="t-num">${num}</span>`;
    });
  }

  /* ---------- Ventanas emergentes de términos ---------- */
  function disposeTerms(root) {
    $$(".term", root).forEach((el) => {
      const inst = bootstrap.Popover.getInstance(el);
      if (inst) inst.dispose();
    });
  }
  function initTerms(root) {
    $$(".term", root).forEach((el) => {
      if (bootstrap.Popover.getInstance(el)) return;
      const g = GLOSSARY[el.dataset.term];
      if (!g) return;
      new bootstrap.Popover(el, {
        trigger: "click", placement: "auto", container: "body",
        title: g.t, content: g.d, html: false
      });
    });
  }
  document.addEventListener("click", (e) => {
    const current = e.target.closest(".term");
    if (e.target.closest(".popover")) return;
    $$(".term").forEach((el) => {
      if (el === current) return;
      const inst = bootstrap.Popover.getInstance(el);
      if (inst) inst.hide();
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $$(".term").forEach((el) => { const i = bootstrap.Popover.getInstance(el); if (i) i.hide(); });
  });

  /* =========================================================
     HISTORIA DEL INTERNET
     ========================================================= */
  const stageNav = $("#stageNav"), stagePanel = $("#stagePanel"), stageProg = $("#stageProgress");
  let stageIdx = 0;

  stageNav.innerHTML = STAGES.map((s, i) =>
    `<button class="stage-pill" role="tab" data-i="${i}"><small>${s.years}</small><b>${s.title}</b></button>`).join("");

  function renderStage(i, scrollPill) {
    stageIdx = i;
    const s = STAGES[i];
    disposeTerms(stagePanel);
    const col = s.events.length === 1 ? "col-12" : s.events.length === 2 ? "col-md-6" : "col-md-6 col-lg-4";
    const title = s.title.replace(/(\S+)$/, "<span>$1</span>");
    stagePanel.innerHTML = rich(`
      <div class="stage-panel">
        <div class="stage-head mb-3">
          <div class="ico"><i class="bi ${s.icon}"></i></div>
          <div>
            <span class="eyebrow">Etapa ${i + 1} de ${STAGES.length} · ${s.years}</span>
            <h3>${title}</h3>
          </div>
        </div>
        <p class="mb-4" style="max-width:820px">${s.intro}</p>
        <div class="row g-3">
          ${s.events.map((ev) => `
            <div class="${col}"><article class="event-card">
              <span class="event-year">${ev.y}</span>
              <h4>${ev.t}</h4>
              <p>${ev.d}</p>
            </article></div>`).join("")}
        </div>
        <div class="callout mt-4"><b>Idea clave:</b> ${s.key}</div>
      </div>`);
    initTerms(stagePanel);

    $$(".stage-pill", stageNav).forEach((b, k) => {
      b.classList.toggle("active", k === i);
      b.setAttribute("aria-selected", k === i);
    });
    stageProg.style.width = ((i + 1) / STAGES.length) * 100 + "%";
    $("#stagePrev").disabled = i === 0;
    $("#stageNext").disabled = i === STAGES.length - 1;
    if (scrollPill) {
      const pill = $$(".stage-pill", stageNav)[i];
      const left = pill.offsetLeft - (stageNav.clientWidth - pill.clientWidth) / 2;
      stageNav.scrollTo({ left, behavior: "smooth" });
    }
  }
  stageNav.addEventListener("click", (e) => {
    const b = e.target.closest(".stage-pill");
    if (b) renderStage(+b.dataset.i, true);
  });
  $("#stagePrev").addEventListener("click", () => renderStage(Math.max(0, stageIdx - 1), true));
  $("#stageNext").addEventListener("click", () => renderStage(Math.min(STAGES.length - 1, stageIdx + 1), true));
  renderStage(0, false);

  /* =========================================================
     XML: comparador XML vs HTML
     ========================================================= */
  const CMP = {
    xml: {
      code: '<precio moneda="MXN">500</precio>',
      mission: "Explicar <b>qué significa</b> cada dato.",
      vocab: "Libre, creado a la medida del negocio.",
      pc: "«Hay un precio de 500 y la moneda es peso mexicano.» Puede sumarlo, ordenarlo, validarlo o enviarlo a otro sistema.",
      extra: ""
    },
    html: {
      code: "<b>500</b>",
      mission: "<b>Dibujar</b> elementos en el navegador.",
      vocab: "Cerrado y predefinido por el estándar (<code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;a&gt;</code>…).",
      pc: "«Debo mostrar el texto 500 en negritas.» No sabe si es un precio, una edad o un número de casa.",
      extra: '<div class="mt-3 small text-secondary">Resultado visual en el navegador:</div><div class="fs-4"><b>500</b></div>'
    }
  };
  function renderCmp(k) {
    const c = CMP[k];
    const color = k === "xml" ? "var(--cyan)" : "var(--indigo)";
    $("#cmpOut").innerHTML = `
      <div class="col-lg-6"><div class="compare-box">
        <h5>Ejemplo</h5>
        <pre class="code">${hx(c.code)}</pre>${c.extra}
      </div></div>
      <div class="col-lg-6"><div class="compare-box" style="border-color:${color}">
        <h5>Misión</h5><p>${c.mission}</p>
        <h5>Vocabulario</h5><p>${c.vocab}</p>
        <h5>Lo que entiende la computadora</h5><p class="mb-0">${c.pc}</p>
      </div></div>`;
  }
  $("#cmpSeg").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#cmpSeg button").forEach((x) => x.classList.toggle("active", x === b));
    renderCmp(b.dataset.k);
  });
  renderCmp("xml");

  /* =========================================================
     XML: cronología y ecosistema
     ========================================================= */
  const XML_STEPS = [
    { y: "1986", t: "Era SGML", s: "Estándar ISO potente pero difícil de programar.",
      d: "En 1986 se publicó [[sgml|SGML]] como norma [[iso|ISO]] (ISO 8879). Era muy poderoso para documentación técnica en industrias como la aeronáutica y la defensa, pero sus reglas eran tan complejas que escribir un programa capaz de leerlo resultaba muy costoso." },
    { y: "1994", t: "Crisis en la Web", s: "HTML resulta insuficiente para el comercio electrónico.",
      d: "[[html|HTML]] era sencillo, pero sus etiquetas están fijadas de antemano para presentar páginas. No servía para describir datos como facturas, pedidos o catálogos, justo cuando el comercio electrónico empezaba a despegar. Hacía falta algo más flexible que HTML y menos complejo que SGML." },
    { y: "Nov 1996", t: "Misión Bosak", s: "Jon Bosak reúne expertos en el W3C para simplificar SGML.",
      d: "Jon Bosak impulsó dentro del [[w3c|W3C]] un grupo de trabajo de expertos con una meta clara: llevar la potencia de SGML a la Web, pero con reglas mucho más sencillas, de modo que cualquier programador pudiera escribir un [[parser]] en poco tiempo." },
    { y: "Feb 1998", t: "Nace XML 1.0", s: "El 80% del poder de SGML con el 20% de su complejidad.",
      d: "El 10 de febrero de 1998 el W3C publicó XML 1.0 como recomendación. Conservó la mayor parte del poder de SGML (se suele resumir como «80% del poder con 20% de la complejidad») y se convirtió rápidamente en el estándar para intercambiar datos." }
  ];
  const xmlLine = $("#xmlLine"), xmlDetail = $("#xmlLineDetail");
  xmlLine.innerHTML = XML_STEPS.map((s, i) =>
    `<div class="xml-step" data-i="${i}" tabindex="0" role="button" aria-label="${s.t}">
       <span class="dot"></span><b>${s.y}</b><h5>${s.t}</h5><p>${s.s}</p></div>`).join("");
  function renderStep(i) {
    const s = XML_STEPS[i];
    disposeTerms(xmlDetail);
    $$(".xml-step", xmlLine).forEach((el, k) => el.classList.toggle("active", k === i));
    xmlDetail.innerHTML = rich(`<span class="eyebrow">${s.y}</span><h4 class="mt-1" style="font-size:1.3rem">${s.t}</h4><p class="mb-0">${s.d}</p>`);
    initTerms(xmlDetail);
  }
  xmlLine.addEventListener("click", (e) => { const el = e.target.closest(".xml-step"); if (el) renderStep(+el.dataset.i); });
  xmlLine.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { const el = e.target.closest(".xml-step"); if (el) { e.preventDefault(); renderStep(+el.dataset.i); } }
  });
  renderStep(3);

  const ECO = [
    { id: "xsd", ico: "bi-shield-check", color: "var(--cyan)", t: "XSD / DTD", s: "Contratos que validan tipos de datos y reglas.",
      d: "Un esquema describe qué elementos puede tener un documento, en qué orden y de qué tipo. Si llega un dato que no cumple (por ejemplo, un texto donde debería ir un número), el documento se rechaza. [[dtd|DTD]] es la forma antigua y simple; [[xsd|XSD]] es la moderna y con tipos de datos.",
      code: '<xs:element name="edad" type="xs:integer"/>\n<!-- «22» es válido, «veinte» no -->' },
    { id: "xpath", ico: "bi-search", color: "var(--indigo)", t: "XPath", s: "Buscador preciso de nodos dentro del árbol.",
      d: "[[xpath|XPath]] usa rutas parecidas a las de las carpetas de un disco para ubicar nodos concretos, y permite filtrar con condiciones. Pruébalo en el laboratorio más abajo.",
      code: "//producto[@id='2']/nombre\n<!-- devuelve: Impresora -->" },
    { id: "xslt", ico: "bi-shuffle", color: "var(--green)", t: "XSLT", s: "Convierte XML en páginas HTML o archivos PDF.",
      d: "[[xslt|XSLT]] define plantillas que transforman un XML en otro formato. Así un mismo catálogo en XML puede mostrarse como página web, imprimirse como PDF o convertirse a otro XML para un sistema distinto.",
      code: '<xsl:template match="producto">\n  <li><xsl:value-of select="nombre"/></li>\n</xsl:template>' },
    { id: "soap", ico: "bi-diagram-3", color: "var(--red)", t: "SOAP", s: "Mensajería blindada para banca y telecomunicaciones.",
      d: "[[soap|SOAP]] define cómo se estructuran los mensajes entre sistemas: un «sobre» con encabezado y cuerpo. Sus reglas estrictas, junto con la validación por esquema, lo hacen muy usado en banca y telecomunicaciones, donde cada campo debe ser exacto.",
      code: "<soap:Envelope>\n  <soap:Body>\n    <ConsultarSaldo>\n      <cuenta>1234</cuenta>\n    </ConsultarSaldo>\n  </soap:Body>\n</soap:Envelope>" }
  ];
  const ecoGrid = $("#ecoGrid");
  ecoGrid.innerHTML = ECO.map((e) => `
    <div class="col-md-6 col-lg-3"><div class="eco-card">
      <i class="bi ${e.ico} ico" style="color:${e.color}"></i>
      <h4>${e.t}</h4>
      <p>${e.s}</p>
      <button class="btn-more" data-bs-toggle="collapse" data-bs-target="#eco-${e.id}" aria-expanded="false">Ver detalle <i class="bi bi-chevron-down"></i></button>
      <div class="collapse" id="eco-${e.id}">
        <p class="mt-3 mb-0 small">${rich(e.d)}</p>
        <pre class="code">${hx(e.code)}</pre>
      </div>
    </div></div>`).join("");
  initTerms(ecoGrid);

  /* =========================================================
     XML vs JSON: comparador de tamaño
     ========================================================= */
  (function () {
    const xml = '<persona>\n  <nombre>Ana López</nombre>\n  <edad>22</edad>\n  <ciudad>Monterrey</ciudad>\n</persona>';
    const json = JSON.stringify({ nombre: "Ana López", edad: 22, ciudad: "Monterrey" }, null, 2);
    $("#sizeXml").innerHTML = hx(xml);
    $("#sizeJson").innerHTML = hj(json);
    const a = xml.length, b = json.length, m = Math.max(a, b);
    $("#szX").textContent = a; $("#szJ").textContent = b;
    $("#barX").style.width = (a / m) * 100 + "%";
    $("#barJ").style.width = (b / m) * 100 + "%";
  })();

  /* =========================================================
     XML: anatomía interactiva
     ========================================================= */
  const ANAT = {
    prologo: ["1. El prólogo (declaración)", "Línea inicial que avisa al lector la versión de XML y la codificación. Con <code>encoding=\"UTF-8\"</code> se habilitan acentos y eñes. Debe ir al inicio del documento, sin espacios ni líneas antes."],
    raiz: ["2. El nodo raíz (root)", "El tronco del árbol: una etiqueta madre única que abraza todo el documento. Todos los demás elementos viven dentro de ella y no puede haber un segundo raíz."],
    hijo: ["3. Elemento hijo", "Sirve para representar datos visibles o estructuras anidadas. Un elemento puede contener texto, otros elementos o ambos. Los que contienen otros son nodos padre; los que solo contienen texto son nodos hoja."],
    atributo: ["4. Atributo", "Ideal para IDs únicos, banderas o metadatos cortos. Siempre va en la etiqueta de apertura, con la forma nombre=\"valor\" y comillas obligatorias."],
    texto: ["5. Contenido / texto", "El valor real almacenado dentro de la etiqueta. Si incluye símbolos reservados (&lt; &gt; &amp;) debes escaparlos con entidades."],
    comentario: ["6. Comentario", "Anotaciones para humanos que el sistema ignora. Se escriben entre <code>&lt;!--</code> y <code>--&gt;</code> y no pueden contener dos guiones seguidos en su interior."]
  };
  const anatChips = $("#anatChips"), anatCode = $("#anatCode"), anatExplain = $("#anatExplain");
  anatChips.innerHTML = Object.entries(ANAT).map(([k, v]) =>
    `<button class="anat-chip" data-k="${k}"><b>${v[0]}</b></button>`).join("");
  anatExplain.innerHTML = '<p class="mb-0 text-secondary"><i class="bi bi-hand-index-thumb"></i> Selecciona una pieza de la izquierda para verla resaltada y leer su explicación.</p>';
  let anatCur = null;
  anatChips.addEventListener("click", (e) => {
    const b = e.target.closest(".anat-chip"); if (!b) return;
    const k = b.dataset.k;
    anatCur = anatCur === k ? null : k;
    $$(".anat-chip", anatChips).forEach((x) => x.classList.toggle("active", x.dataset.k === anatCur));
    $$("[data-part]", anatCode).forEach((x) => x.classList.toggle("on", x.dataset.part === anatCur));
    anatCode.classList.toggle("dim", !!anatCur);
    anatExplain.innerHTML = anatCur
      ? `<h5 style="color:var(--cyan);font-size:1.05rem">${ANAT[anatCur][0]}</h5><p class="mb-0">${ANAT[anatCur][1]}</p>`
      : '<p class="mb-0 text-secondary">Selecciona una pieza para ver su explicación.</p>';
  });

  /* =========================================================
     LABORATORIO XML
     ========================================================= */
  function treeLi(node, isRoot) {
    const kids = Array.from(node.children);
    let html = `<li><span class="n-el">&lt;${esc(node.nodeName)}&gt;</span>`;
    if (isRoot) html += '<span class="n-ro">raíz</span>';
    Array.from(node.attributes).forEach((a) => {
      html += ` <span class="n-at">@${esc(a.name)}="${esc(a.value)}"</span>`;
    });
    if (kids.length) {
      html += "<ul>" + kids.map((k) => treeLi(k, false)).join("") + "</ul>";
    } else if (node.textContent.trim()) {
      html += ` <span class="n-tx">“${esc(node.textContent.trim())}”</span>`;
    }
    return html + "</li>";
  }
  function parseXml(str) {
    const doc = new DOMParser().parseFromString(str, "application/xml");
    const err = doc.getElementsByTagName("parsererror")[0];
    return { doc, err };
  }

  const labTabs = $("#labTabs"), labCode = $("#labCode"), labNotes = $("#labNotes"), labTree = $("#labTree");
  const xpInput = $("#xpInput"), xpChips = $("#xpChips"), xpOut = $("#xpOut");
  let labDoc = null, labIdx = 0;

  labTabs.innerHTML = CASES.map((c, i) => `<button class="lab-tab" data-i="${i}">${c.title}</button>`).join("");
  function renderCase(i) {
    labIdx = i;
    const c = CASES[i];
    $$(".lab-tab", labTabs).forEach((b, k) => b.classList.toggle("active", k === i));
    labCode.innerHTML = hx(c.code);
    const p = parseXml(c.code);
    labDoc = p.doc;
    labTree.innerHTML = p.err ? "<li>Error al procesar el XML.</li>" : treeLi(p.doc.documentElement, true);
    labNotes.innerHTML = `<h5 class="mb-3" style="font-size:1.05rem">¿Qué observamos aquí?</h5>` +
      c.notes.map((n) => `<div class="rule"><i class="bi bi-eye" style="color:var(--green)"></i><span><b>${esc(n[0])}:</b> ${esc(n[1])}</span></div>`).join("");
    xpChips.innerHTML = c.xpath.map((x) => `<button class="chip" type="button">${esc(x)}</button>`).join("");
    xpInput.value = c.xpath[0];
    runXPath();
  }
  function runXPath() {
    const expr = xpInput.value.trim();
    if (!expr) { xpOut.innerHTML = '<span class="text-secondary">Escribe una expresión o toca un ejemplo.</span>'; return; }
    try {
      const r = labDoc.evaluate(expr, labDoc, null, XPathResult.ANY_TYPE, null);
      let html = "";
      if (r.resultType === XPathResult.NUMBER_TYPE) html = `<div class="item"><span class="t-num">${r.numberValue}</span> <span class="text-secondary">(número)</span></div>`;
      else if (r.resultType === XPathResult.STRING_TYPE) html = `<div class="item"><span class="t-val">“${esc(r.stringValue)}”</span> <span class="text-secondary">(texto)</span></div>`;
      else if (r.resultType === XPathResult.BOOLEAN_TYPE) html = `<div class="item"><span class="t-num">${r.booleanValue}</span> <span class="text-secondary">(booleano)</span></div>`;
      else {
        const items = []; let n;
        while ((n = r.iterateNext())) {
          if (n.nodeType === 1) items.push(`<div class="item">${hx(new XMLSerializer().serializeToString(n))}</div>`);
          else if (n.nodeType === 2) items.push(`<div class="item"><span class="t-attr">@${esc(n.name)}</span> = <span class="t-val">"${esc(n.value)}"</span></div>`);
          else items.push(`<div class="item"><span class="t-val">“${esc(n.nodeValue)}”</span></div>`);
        }
        html = items.length
          ? `<div class="text-secondary mb-1">${items.length} resultado${items.length > 1 ? "s" : ""}:</div>` + items.join("")
          : '<span class="text-secondary">Sin resultados: ningún nodo coincide con esa ruta.</span>';
      }
      xpOut.innerHTML = html;
    } catch (err) {
      xpOut.innerHTML = '<span style="color:var(--red)">Expresión XPath no válida. Revisa la sintaxis (por ejemplo, //producto/nombre).</span>';
    }
  }
  labTabs.addEventListener("click", (e) => { const b = e.target.closest(".lab-tab"); if (b) renderCase(+b.dataset.i); });
  xpChips.addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) { xpInput.value = b.textContent; runXPath(); } });
  xpInput.addEventListener("input", runXPath);
  renderCase(0);

  /* ---------- Validador ---------- */
  const VAL_LABELS = {
    ok: "✔ Documento correcto", sinCierre: "Etiqueta sin cerrar", mayus: "Mayúsculas distintas",
    comillas: "Atributo sin comillas", cruce: "Etiquetas cruzadas", raices: "Dos nodos raíz", ampersand: "Símbolo & sin escapar"
  };
  const valInput = $("#valInput"), valMsg = $("#valMsg"), valTree = $("#valTree");
  $("#valSamples").innerHTML = Object.keys(VALIDATOR_SAMPLES).map((k) =>
    `<button class="chip" type="button" data-k="${k}">${VAL_LABELS[k]}</button>`).join("");

  /* Revisión propia para dar mensajes claros en español */
  function checkXml(src) {
    const lineAt = (i) => src.slice(0, i).split("\n").length;
    const blank = (m) => m.replace(/[^\n]/g, " ");
    const s = src.replace(/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<\?[\s\S]*?\?>/g, blank);
    const stack = []; let roots = 0, m;
    const re = /<(\/?)([^\s\/>!?]+)([^>]*?)(\/?)>/g;
    while ((m = re.exec(s))) {
      const [, close, name, attrs, selfc] = m;
      const line = lineAt(m.index);
      if (!/^[A-Za-z_][\w.\-:]*$/.test(name))
        return `Línea ${line}: el nombre de etiqueta «${name}» no es válido. Debe empezar con letra o guion bajo y no llevar espacios.`;
      if (close) {
        if (!stack.length) return `Línea ${line}: la etiqueta de cierre </${name}> no tiene una etiqueta de apertura.`;
        const top = stack.pop();
        if (top.name !== name) {
          if (top.name.toLowerCase() === name.toLowerCase())
            return `Línea ${line}: XML distingue mayúsculas de minúsculas. Se abrió <${top.name}> (línea ${top.line}) pero se cerró </${name}>.`;
          return `Línea ${line}: se encontró </${name}> pero la etiqueta abierta más reciente es <${top.name}> (línea ${top.line}). Cada etiqueta debe cerrarse en orden inverso al de apertura.`;
        }
        if (!stack.length) roots++;
      } else {
        const leftover = attrs.replace(/\s+[\w:.\-]+\s*=\s*("[^"]*"|'[^']*')/g, "").trim();
        if (leftover) return `Línea ${line}: atributo mal escrito en <${name}>. Todo atributo debe tener la forma nombre="valor", con comillas.`;
        if (!stack.length && roots > 0) return `Línea ${line}: hay más de un nodo raíz. Todo el documento debe colgar de un único elemento.`;
        if (selfc) { if (!stack.length) roots++; } else stack.push({ name, line });
      }
    }
    if (stack.length) { const t = stack[stack.length - 1]; return `La etiqueta <${t.name}> (línea ${t.line}) nunca se cierra.`; }
    const text = s.replace(/<[^>]*>/g, blank);
    const amp = /&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/.exec(text);
    if (amp) return `Línea ${lineAt(amp.index)}: el símbolo & debe escribirse como &amp;amp; dentro del texto (es un carácter reservado de XML).`;
    return null;
  }

  function validate() {
    const src = valInput.value;
    valTree.innerHTML = "";
    if (!src.trim()) { valMsg.innerHTML = '<div class="msg-box msg-err"><span class="badge-info">Vacío</span> Escribe o carga un ejemplo.</div>'; return; }
    const { doc, err } = parseXml(src);
    const mine = checkXml(src);
    if (!err) {
      valMsg.innerHTML = '<div class="msg-box msg-ok"><span class="badge-ok"><i class="bi bi-check-circle-fill"></i> Bien formado</span><p class="mt-2 mb-0">El parser pudo leer el documento sin errores. Este es el árbol que construyó:</p></div>';
      valTree.innerHTML = treeLi(doc.documentElement, true);
    } else {
      const raw = (err.textContent || "").trim().split("\n").slice(0, 3).join(" ").slice(0, 260);
      valMsg.innerHTML = `<div class="msg-box msg-err"><span class="badge-err"><i class="bi bi-x-circle-fill"></i> No está bien formado</span>
        <p class="mt-2 mb-2"><b>${mine ? esc(mine).replace(/&amp;amp;/g, "&amp;") : "El parser encontró un error de sintaxis en el documento."}</b></p>
        <details class="small text-secondary"><summary>Mensaje original del navegador</summary><code>${esc(raw)}</code></details></div>`;
    }
  }
  $("#valSamples").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    valInput.value = VALIDATOR_SAMPLES[b.dataset.k]; validate();
  });
  $("#valBtn").addEventListener("click", validate);
  $("#valClear").addEventListener("click", () => { valInput.value = ""; valMsg.innerHTML = ""; valTree.innerHTML = ""; valInput.focus(); });
  valInput.addEventListener("keydown", (e) => {
    if (e.key === "Tab") { e.preventDefault(); const s = valInput.selectionStart; valInput.setRangeText("  ", s, valInput.selectionEnd, "end"); }
  });
  valInput.value = VALIDATOR_SAMPLES.sinCierre;
  validate();

  /* =========================================================
     Términos estáticos, revelado al hacer scroll y botón subir
     ========================================================= */
  initTerms(mainEl);

  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0, rootMargin: "0px 0px -4% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else revealEls.forEach((el) => el.classList.add("in"));

  const toTop = $("#toTop");
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 600), { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
