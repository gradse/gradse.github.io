(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };

  // Theme (shared preference with the home page)
  const saved = store.get("theme");
  if (saved) document.documentElement.dataset.theme = saved;
  $("theme-toggle").onclick = () => {
    const dark = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("theme", next);
  };

  $("brand").textContent = S.name;
  document.title = `CV · ${S.name}`;
  $("footer-text").textContent = `© ${new Date().getFullYear()} ${S.name}`;

  const cv = (S.links || {}).cv;
  if (!cv) {
    $("cv-missing").hidden = false;
    $("cv-mobile").hidden = true;
    return;
  }

  const file = `${S.name.replace(/\s+/g, "_")}_CV.pdf`;
  $("cv-actions").innerHTML = `
    <a class="btn primary" href="${esc(cv)}" download="${esc(file)}">Download PDF</a>
    <a class="btn" href="${esc(cv)}" target="_blank" rel="noopener">Open PDF</a>`;

  // #view=FitH fits the page width in Chrome/Firefox/Safari's built-in viewers.
  $("cv-frame-wrap").innerHTML =
    `<iframe class="cv-frame" src="${esc(cv)}#view=FitH" title="${esc(S.name)} CV"></iframe>`;
})();
