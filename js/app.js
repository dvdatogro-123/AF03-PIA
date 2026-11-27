/* =========================================================
   LINK DE LA EXPOSICIÓN AF5: cambia SOLO esta línea si cambia de dirección.
   ========================================================= */
const AF5_URL = "https://dvdatogro-123.github.io/AF5-Exposiciones/";

(function () {
  "use strict";

  /* ---------- Utilidades ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const normal = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const abrir = (url) => window.open(url, "_blank", "noopener");

  /* =========================================================
     Integrantes
     ========================================================= */
  const initials = (n) => n.split(" ").filter(Boolean).slice(0, 1)
    .concat(n.split(" ").filter(Boolean).slice(-2, -1)).map((w) => w[0]).join("");

  $("#teamGrid").innerHTML = TEAM.map((m, i) => `
    <div class="col-sm-6 col-lg-4 col-xl-3 reveal" data-buscar="${esc(normal(m.nombre + " " + m.matricula))}">
      <article class="team-card" id="int-${i}">
        <div class="avatar" aria-hidden="true">${esc(initials(m.nombre))}</div>
        <h3>${esc(m.nombre)}</h3>
        <p class="mat">Matrícula <b>${esc(m.matricula)}</b></p>
        <div class="team-links">
          <a class="btn btn-lime js-salir" data-nombre="${esc(m.nombre)}" data-tipo="Prácticas profesionales" href="${esc(m.practicas)}" target="_blank" rel="noopener" aria-label="Prácticas profesionales de ${esc(m.nombre)} (abre en otra pestaña)"><i class="bi bi-briefcase" aria-hidden="true"></i> Prácticas</a>
          <a class="btn btn-ghost js-salir" data-nombre="${esc(m.nombre)}" data-tipo="Becas aplicables" href="${esc(m.becas)}" target="_blank" rel="noopener" aria-label="Becas aplicables de ${esc(m.nombre)} (abre en otra pestaña)"><i class="bi bi-mortarboard" aria-hidden="true"></i> Becas</a>
        </div>
      </article>
    </div>`).join("");

  $("#nTeam").textContent = TEAM.length;
  $("#nPages").textContent = TEAM.length * 2;

  /* =========================================================
     ALERTAS
     ========================================================= */

  // 1) Buscador: filtra mientras escribes y, al buscar, una alerta te lleva a su página
  $("#lista-team").innerHTML = TEAM.map((m) => `<option value="${esc(m.nombre)}">${esc(m.matricula)}</option>`).join("");

  const input = $("#q");
  const cols = $$("#teamGrid > [data-buscar]");
  const vacio = $("#vacio");

  function filtrar() {
    const q = normal(input.value);
    let visibles = 0;
    cols.forEach((c) => {
      const ok = !q || c.dataset.buscar.includes(q);
      c.hidden = !ok;
      if (ok) { visibles++; c.classList.add("in"); }
    });
    vacio.hidden = visibles > 0;
  }
  input.addEventListener("input", filtrar);

  $("#buscador").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const q = normal(input.value);
    if (!q) return;
    const i = TEAM.findIndex((m) => normal(m.nombre + " " + m.matricula).includes(q));

    if (i < 0) {
      alert(`No encontré a ningún integrante con "${input.value.trim()}".\n\nIntegrantes del equipo:\n• ${TEAM.map((m) => m.nombre).join("\n• ")}`);
      return;
    }

    const m = TEAM[i];
    if (confirm(`Integrante encontrado: ${m.nombre}\nMatrícula: ${m.matricula}\n\n¿Quieres abrir su página de PRÁCTICAS PROFESIONALES?\n\n(Cancelar = ver otras opciones)`)) {
      abrir(m.practicas);
    } else if (confirm(`¿Entonces quieres abrir su página de BECAS APLICABLES?\n\n${m.becas}`)) {
      abrir(m.becas);
    } else {
      input.value = ""; filtrar();
      const card = $("#int-" + i);
      card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      card.classList.remove("destacar"); void card.offsetWidth; card.classList.add("destacar");
    }
  });

  // 2) Botones de las tarjetas: alerta antes de salir del sitio
  document.addEventListener("click", (ev) => {
    const a = ev.target.closest("a.js-salir");
    if (a && !confirm(`Vas a abrir la página de ${a.dataset.tipo} de ${a.dataset.nombre} en otra pestaña.\n\n¿Continuar?`)) ev.preventDefault();
  });

  // 3) Botones de la exposición AF5: alerta antes de abrirla
  $$(".js-af5").forEach((a) => {
    a.href = AF5_URL;
    a.addEventListener("click", (ev) => {
      if (!confirm("Vas a abrir nuestra exposición AF5: Historia del Internet y lenguaje XML.\n\n¿Quieres continuar?")) ev.preventDefault();
    });
  });

  /* =========================================================
     Revelado al hacer scroll y botón subir
     ========================================================= */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0, rootMargin: "0px 0px -4% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else revealEls.forEach((el) => el.classList.add("in"));

  const toTop = $("#toTop");
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 600), { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));
})();
