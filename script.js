(() => {
  "use strict";
  const data = window.PORTFOLIO_DATA || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  };
  const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = value || ""; };

  function renderStaticText() {
    setText("[data-site-name]", data.siteName || "Portfolio");
    document.title = data.siteName ? data.siteName + " — Portfolio" : "Portfolio";
    setText("[data-hero-eyebrow]", data.home?.eyebrow);
    setText("[data-hero-title]", data.home?.title);
    setText("[data-hero-description]", data.home?.description);
    setText("[data-about-heading]", data.about?.heading);
    setText("[data-footer-text]", data.footerText);
    const about = $("[data-about-description]");
    (data.about?.paragraphs || []).forEach(text => about?.appendChild(el("p", "", text)));
  }

  function renderProjects() {
    const grid = $("#projects-grid"), empty = $("#projects-empty");
    const projects = Array.isArray(data.projects) ? data.projects : [];
    if (empty) empty.hidden = projects.length > 0;
    projects.forEach(project => {
      const card = el("button", "project-card");
      card.type = "button";
      card.setAttribute("aria-label", "View details for " + (project.title || "project"));
      const thumb = el("div", "project-thumb");
      if (project.image) {
        const image = el("img"); image.src = project.image; image.alt = (project.title || "Project") + " artwork"; image.loading = "lazy";
        image.onerror = () => { image.remove(); thumb.appendChild(el("span", "", "✳")); };
        thumb.appendChild(image);
      } else thumb.appendChild(el("span", "", "✳"));
      const body = el("div", "project-card-content");
      body.append(el("span", "project-category", project.category || "Project"), el("h3", "", project.title || "Untitled project"), el("p", "", project.description || ""), el("span", "project-more", "View details ↗"));
      card.append(thumb, body);
      card.addEventListener("click", () => openProject(project));
      grid?.appendChild(card);
    });
  }

  function renderMedia() {
    const grid = $("#featured-media-grid");
    (Array.isArray(data.media) ? data.media : []).forEach(item => {
      const card = el("article", "media-card");
      let frame;
      if (item.kind === "youtube" && item.id) {
        frame = el("iframe", "embed-frame");
        frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(item.id);
        frame.title = item.title || "YouTube video"; frame.loading = "lazy";
        frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        frame.allowFullscreen = true;
      } else if (item.kind === "spotify" && item.embedUrl) {
        frame = el("iframe", "embed-frame spotify"); frame.src = item.embedUrl;
        frame.title = item.title || "Spotify embed"; frame.loading = "lazy";
        frame.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      } else return;
      card.appendChild(frame); card.appendChild(el("h3", "", item.title || "Featured media"));
      if (item.description) card.appendChild(el("p", "", item.description));
      grid?.appendChild(card);
    });
    if (grid && !grid.children.length) grid.appendChild(el("p", "empty-state", "Featured videos and music will appear here."));
  }

  function renderSocials() {
    const grid = $("#social-links");
    (Array.isArray(data.socials) ? data.socials : []).forEach(item => {
      if (!item.url) return;
      const link = el("a", "social-card"); link.href = item.url; link.target = "_blank"; link.rel = "noopener noreferrer";
      const mark = el("span", "social-mark", item.mark || "↗"), copy = el("span");
      copy.appendChild(el("strong", "", item.name || "Social profile"));
      if (item.handle) copy.appendChild(el("small", "", item.handle));
      link.append(mark, copy); grid?.appendChild(link);
    });
    if (grid && !grid.children.length) grid.appendChild(el("p", "empty-state", "Your social links will appear here."));
  }

  function openProject(project) {
    const dialog = $("#project-dialog");
    setText("[data-dialog-category]", project.category || "Project");
    setText("[data-dialog-title]", project.title || "Untitled project");
    setText("[data-dialog-description]", project.description || "");
    const tags = $("[data-dialog-tags]"); tags.replaceChildren();
    (project.tags || []).forEach(tag => tags.appendChild(el("span", "tag", tag)));
    const subprojects = $("[data-dialog-subprojects]"); subprojects.replaceChildren();
    (project.subprojects || []).forEach(sub => {
      const card = el("article", "subproject-card");
      card.appendChild(el("h3", "", sub.name || "Module"));
      if (sub.description) card.appendChild(el("p", "", sub.description));
      if (sub.link) { const link = el("a", "", "Explore ↗"); link.href = sub.link; link.target = "_blank"; link.rel = "noopener noreferrer"; card.appendChild(link); }
      subprojects.appendChild(card);
    });
    const mainLink = $("[data-dialog-link]");
    if (project.link) { mainLink.href = project.link; mainLink.hidden = false; }
    else { mainLink.hidden = true; mainLink.removeAttribute("href"); }
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function setupNavigation() {
    const nav = $("#primary-nav"), toggle = $(".menu-toggle");
    const views = [...document.querySelectorAll(".view")];
    function showView(id) {
      if (!views.some(view => view.id === id)) return;
      views.forEach(view => view.classList.toggle("active", view.id === id));
      document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === id));
      nav?.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
    document.querySelectorAll("[data-go-view]").forEach(button => button.addEventListener("click", () => showView(button.dataset.goView)));
    document.querySelectorAll("[data-view-link]").forEach(link => link.addEventListener("click", event => { event.preventDefault(); showView(link.dataset.viewLink); }));
    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open)); nav?.classList.toggle("open", open);
    });
  }

  function setupDialog() {
    const dialog = $("#project-dialog");
    $(".dialog-close")?.addEventListener("click", () => dialog.close());
    dialog?.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderStaticText(); renderProjects(); renderMedia(); renderSocials(); setupNavigation(); setupDialog();
  });
})();
