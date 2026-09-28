(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const bold = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };

  const ICONS = {
    email: '<path d="M4 6h16v12H4z M4 6l8 7 8-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    cv: '<path d="M6 3h9l4 4v14H6z M14 3v5h5 M9 13h7 M9 17h7" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    github: '<path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>',
    linkedin: '<path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/>',
    scholar: '<path fill="currentColor" d="M12 3 1 9l11 6 9-4.9V17h2V9zM5 13.2v4L12 21l7-3.8v-4L12 17z"/>',
    twitter: '<path fill="currentColor" d="M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.8L.6 3h6.8l4.7 6.2zm-1.2 16h1.8L6.8 4.9H4.9z"/>',
  };
  const LABELS = { email: "Email", cv: "CV", github: "GitHub", linkedin: "LinkedIn", scholar: "Google Scholar", twitter: "X / Twitter" };
  const icon = (k) => (ICONS[k] ? `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>` : "");
  const initials = S.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  // Theme
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

  // Header / hero
  document.title = S.name;
  $("brand").textContent = S.name;
  $("name").textContent = S.name;
  $("subtitle").textContent = [S.title, S.affiliation, S.location].filter(Boolean).join(" · ");
  $("seeking").textContent = S.seeking || "";
  $("seeking").hidden = !S.seeking;
  $("bio").innerHTML = (S.bio || []).map((p) => `<p>${bold(p)}</p>`).join("");
  $("interests").innerHTML = (S.interests || []).map((t) => `<li>${esc(t)}</li>`).join("");

  const photo = $("photo"), fallback = $("photo-fallback");
  const showFallback = () => { photo.hidden = true; fallback.hidden = false; fallback.textContent = initials; };
  photo.alt = `Photo of ${S.name}`;
  photo.onerror = showFallback;
  if (S.photo) photo.src = S.photo; else showFallback();

  const L = S.links || {};
  $("links").innerHTML = Object.keys(LABELS)
    .filter((k) => L[k])
    .map((k) => {
      if (k === "cv") return `<a class="btn primary" href="cv.html">${icon(k)}${LABELS[k]}</a>`;
      const href = k === "email" ? `mailto:${L[k]}` : L[k];
      return `<a class="btn" href="${esc(href)}" target="_blank" rel="noopener">${icon(k)}${LABELS[k]}</a>`;
    })
    .join("");
  const navCv = $("nav-cv");
  if (L.cv) navCv.href = "cv.html"; else navCv.hidden = true;

  // Simple list sections
  const section = (id, items, render) => {
    const has = items && items.length;
    $(id + "-section").hidden = !has;
    if (has) $(id).innerHTML = items.map(render).join("");
  };
  section("news", S.news, (n) => `<li><span class="date">${esc(n.date)}</span><span>${bold(n.text)}</span></li>`);
  section("awards", S.awards, (a) => `<li><span class="date">${esc(a.year)}</span><span>${bold(a.text)}</span></li>`);

  const LINK_LABELS = { doi: "DOI", pdf: "PDF" };
  const firstLink = (links) => Object.values(links || {}).find(Boolean);
  // Links after the first one (the first is already on the title).
  const extraLinks = (links) => Object.fromEntries(Object.entries(links || {}).filter(([, v]) => v).slice(1));
  const linkBtns = (links) =>
    Object.entries(links || {})
      .filter(([, v]) => v)
      .map(([k, v]) => `<a class="btn" href="${esc(v)}" target="_blank" rel="noopener">${esc(LINK_LABELS[k] || k[0].toUpperCase() + k.slice(1))}</a>`)
      .join("");

  section("publications", S.publications, (p) => `
    <li>
      <div class="ptitle">${firstLink(p.links) ? `<a href="${esc(firstLink(p.links))}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title)}</div>
      <div class="authors">${bold(p.authors)}</div>
      <div class="venue">${esc(p.venue)}</div>
      ${p.role ? `<div class="role"><span>Role</span> ${esc(p.role)}</div>` : ""}
      <div class="links">${linkBtns(extraLinks(p.links))}</div>
    </li>`);

  const timeline = (items, a, b) =>
    (items || []).map((e) => `
      <li>
        <span class="years">${esc(e.years)}</span>
        <h3>${esc(e[a])}</h3>
        <div class="org">${esc(e[b])}</div>
        ${e.detail ? `<div class="detail">${bold(e.detail)}</div>` : ""}
      </li>`).join("");
  $("education").innerHTML = timeline(S.education, "degree", "school");
  $("experience-list").innerHTML = timeline(S.experience, "role", "org");

  // Research & Projects (one shared Cards/List setting)
  let view = store.get("projectView") || "card";
  const badge = (p) => p.badge || p.title.split(/\s+/).filter((w) => /^[A-Z]/.test(w)).map((w) => w[0]).join("").slice(0, 3);
  // The title links to the repo (`code`), or else to the first link; the remaining links become buttons.
  const mainKey = (links) => (links?.code ? "code" : Object.keys(links || {}).find((k) => links[k]));
  const titleLink = (p) => {
    const k = mainKey(p.links);
    return k ? `<a href="${esc(p.links[k])}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title);
  };
  const otherLinks = (links) => {
    const k = mainKey(links);
    return Object.fromEntries(Object.entries(links || {}).filter(([key]) => key !== k));
  };
  const galleries = [];
  const featureSets = [];
  const featuresBtn = (p) => {
    if (!p.details?.sections?.length) return "";
    const i = featureSets.push(p.details) - 1;
    return `<button class="btn" type="button" data-features="${i}">${esc(p.details.button || "Features")}</button>`;
  };
  const thumb = (p) => {
    if (p.screens?.length) {
      const g = galleries.push(p.screens) - 1;
      return `<button class="thumb screens" type="button" data-gallery="${g}" aria-label="View ${esc(p.title)} screenshots">
        ${p.screens.slice(0, 3).map((sc) => `<img src="${esc(sc.src)}" alt="" loading="lazy">`).join("")}
        <span class="screens-count">${p.screens.length} screens</span>
      </button>`;
    }
    if (p.image && p.figures?.length) {
      const g = galleries.push(p.figures) - 1;
      return `<button class="thumb figures" type="button" data-gallery="${g}" aria-label="View ${esc(p.title)} figures">
        <img src="${esc(p.image)}" alt="" loading="lazy">
        <span class="screens-count">${p.figures.length} ${p.figuresLabel || "figures"}</span>
      </button>`;
    }
    return p.image
      ? `<div class="thumb"><img src="${esc(p.image)}" alt="" loading="lazy"></div>`
      : `<div class="thumb placeholder">${esc(badge(p))}</div>`;
  };
  const card = (p) => `
    <article class="project">
      ${thumb(p)}
      <div class="body">
        <h3>${titleLink(p)}</h3>
        <div class="meta">${esc([p.context, p.year].filter(Boolean).join(" · "))}</div>
        <p>${bold(p.description)}</p>
        <div class="tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        ${p.note ? `<p class="note">${bold(p.note)}</p>` : ""}
        <div class="links">${linkBtns(otherLinks(p.links))}${featuresBtn(p)}</div>
      </div>
    </article>`;

  const groups = [["research", S.research], ["projects", S.projects]];
  function renderProjects() {
    galleries.length = 0;
    featureSets.length = 0;
    document.querySelectorAll(".view-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    for (const [id, items] of groups) {
      const grid = $(id === "research" ? "research-grid" : "project-grid");
      $(id).hidden = !(items && items.length);
      grid.className = `projects ${view}-view`;
      grid.innerHTML = (items || []).map(card).join("");
    }
  }
  document.querySelectorAll(".view-toggle button").forEach((b) => {
    b.onclick = () => { view = b.dataset.view; store.set("projectView", view); renderProjects(); };
  });
  renderProjects();

  // Screenshot gallery (lightbox): arrows, keyboard, swipe, and tap-left/right on the image
  const lb = $("lightbox");
  const lbImg = $("lb-img");
  let lbItems = [], lbIndex = 0;
  const preload = (i) => { const it = lbItems[(i + lbItems.length) % lbItems.length]; if (it) new Image().src = it.src; };
  const showSlide = (i) => {
    lbIndex = (i + lbItems.length) % lbItems.length;
    const it = lbItems[lbIndex];
    lbImg.src = it.src;
    lbImg.alt = it.caption || "";
    $("lb-caption").textContent = it.caption || "";
    $("lb-dots").innerHTML = lbItems.length > 1
      ? `<span class="lb-count">${lbIndex + 1} / ${lbItems.length}</span>` +
        lbItems.map((_, k) => `<i class="${k === lbIndex ? "on" : ""}"></i>`).join("")
      : "";
    preload(lbIndex + 1);
    preload(lbIndex - 1);
  };
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-gallery]");
    if (!t) return;
    lbItems = galleries[Number(t.dataset.gallery)] || [];
    if (!lbItems.length) return;
    lb.classList.toggle("single", lbItems.length < 2);
    showSlide(0);
    lb.showModal();
  });
  $("lb-prev").onclick = () => showSlide(lbIndex - 1);
  $("lb-next").onclick = () => showSlide(lbIndex + 1);
  $("lb-close").onclick = () => lb.close();
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") showSlide(lbIndex - 1);
    if (e.key === "ArrowRight") showSlide(lbIndex + 1);
  });
  // Swipe left/right anywhere in the viewer.
  let touchX = null, touchY = null, swiped = false;
  lb.addEventListener("touchstart", (e) => {
    const t = e.touches[0]; touchX = t.clientX; touchY = t.clientY; swiped = false;
  }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null || lbItems.length < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchX, dy = t.clientY - touchY;
    touchX = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      swiped = true;
      setTimeout(() => { swiped = false; }, 400);
      showSlide(lbIndex + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });
  // Tap the left or right half of the image.
  lbImg.addEventListener("click", (e) => {
    if (swiped) { swiped = false; return; }
    if (lbItems.length < 2) return;
    const r = lbImg.getBoundingClientRect();
    showSlide(lbIndex + (e.clientX < r.left + r.width / 2 ? -1 : 1));
  });

  // Feature catalog dialog (tabs · collapsible groups · search)
  const ft = $("features");
  let ftSet = null, ftTab = 0;
  // Items are [name, description] pairs; plain strings are subheadings.
  const countItems = (sec) => sec.groups.reduce((n, g) => n + g.items.filter(Array.isArray).length, 0);
  const highlight = (text, q) => {
    const t = esc(text);
    if (!q) return t;
    const i = text.toLowerCase().indexOf(q);
    return i < 0 ? t : esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  };
  function renderFeatures() {
    const q = $("ft-search").value.trim().toLowerCase();
    $("ft-tabs").innerHTML = ftSet.sections.map((sec, i) =>
      `<button type="button" role="tab" aria-selected="${i === ftTab}" class="${i === ftTab ? "active" : ""}" data-tab="${i}">${esc(sec.label)} <span>${countItems(sec)}</span></button>`
    ).join("");
    const sec = ftSet.sections[ftTab];
    let shown = 0;
    const groups = sec.groups.map((g) => {
      // Keep each tool whose name, description, subheading or group matches; keep a subheading only if a tool under it survives.
      let sub = "";
      const rows = [];
      for (const it of g.items) {
        if (!Array.isArray(it)) { sub = it; continue; }
        const [n, d] = it;
        if (q && !(n + " " + d + " " + sub + " " + g.name).toLowerCase().includes(q)) continue;
        if (sub && rows.at(-1)?.sub !== sub) rows.push({ sub, head: true });
        rows.push({ sub, n, d });
      }
      const count = rows.filter((r) => !r.head).length;
      shown += count;
      if (!count) return "";
      return `<details class="ft-group" open>
        <summary><span class="ft-gname">${esc(g.name)}</span><span class="ft-count ${g.tone ? "tone-" + g.tone : ""}">${count}</span></summary>
        ${g.intro ? `<p class="ft-gintro">${esc(g.intro)}</p>` : ""}
        <ul>${rows.map((r) => r.head
          ? `<li class="ft-sub">${highlight(r.sub, q)}</li>`
          : `<li><strong>${highlight(r.n, q)}</strong><span>${highlight(r.d, q)}</span></li>`).join("")}</ul>
      </details>`;
    }).join("");
    $("ft-body").innerHTML = `<p class="ft-intro">${esc(sec.intro)}</p>` +
      (shown ? groups : `<p class="empty">Nothing matches “${esc(q)}” in ${esc(sec.label)}.</p>`);
    $("ft-toggle").textContent = "Collapse all";
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-features]");
    if (!b) return;
    ftSet = featureSets[Number(b.dataset.features)];
    ftTab = 0;
    $("ft-title").textContent = ftSet.title || "Features";
    $("ft-subtitle").textContent = ftSet.subtitle || "";
    $("ft-search").value = "";
    renderFeatures();
    ft.showModal();
    $("ft-body").scrollTop = 0;
  });
  $("ft-tabs").addEventListener("click", (e) => {
    const t = e.target.closest("[data-tab]");
    if (!t) return;
    ftTab = Number(t.dataset.tab);
    renderFeatures();
    $("ft-body").scrollTop = 0;
  });
  $("ft-tabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = ftSet.sections.length;
    ftTab = (ftTab + (e.key === "ArrowRight" ? 1 : n - 1)) % n;
    renderFeatures();
    $("ft-tabs").querySelector(".active")?.focus();
  });
  $("ft-search").addEventListener("input", renderFeatures);
  $("ft-toggle").onclick = () => {
    const all = [...$("ft-body").querySelectorAll("details")];
    const open = all.some((d) => d.open);
    all.forEach((d) => (d.open = !open));
    $("ft-toggle").textContent = open ? "Expand all" : "Collapse all";
  };
  $("ft-close").onclick = () => ft.close();
  ft.addEventListener("click", (e) => { if (e.target === ft) ft.close(); });

  section("skills", S.skills, (k) => `<li><span class="date">${esc(k.label)}</span><span>${esc(k.items)}</span></li>`);

  $("footer-text").textContent = `© ${new Date().getFullYear()} ${S.name}`;
})();
