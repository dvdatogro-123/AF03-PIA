(function () {
  "use strict";

  /* ---------- Utilidades ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* =========================================================
     Integrantes
     ========================================================= */
  const initials = (n) => n.split(" ").filter(Boolean).slice(0, 1)
    .concat(n.split(" ").filter(Boolean).slice(-2, -1)).map((w) => w[0]).join("");
  $("#teamGrid").innerHTML = TEAM.map((m) => `
    <div class="col-sm-6 col-lg-4 col-xl-3 reveal">
      <article class="team-card">
        <div class="avatar" aria-hidden="true">${esc(initials(m.nombre))}</div>
        <h3>${esc(m.nombre)}</h3>
        <p class="mat">Matrícula <b>${esc(m.matricula)}</b></p>
        <div class="team-links">
          <a class="btn btn-lime" href="${esc(m.practicas)}" target="_blank" rel="noopener" aria-label="Prácticas profesionales de ${esc(m.nombre)} (abre en otra pestaña)"><i class="bi bi-briefcase"></i> Prácticas</a>
          <a class="btn btn-ghost" href="${esc(m.becas)}" target="_blank" rel="noopener" aria-label="Becas aplicables de ${esc(m.nombre)} (abre en otra pestaña)"><i class="bi bi-mortarboard"></i> Becas</a>
        </div>
      </article>
    </div>`).join("");

  $("#nTeam").textContent = TEAM.length;
  $("#nPages").textContent = TEAM.length * 2;

  /* =========================================================
     Revelado al hacer scroll y botón subir
     ========================================================= */
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
