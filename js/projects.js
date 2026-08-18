(function () {
  const projects = window.PORTFOLIO_PROJECTS || [];

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const icon = (name) => `<i class="uil uil-${name}" aria-hidden="true"></i>`;

  function renderShowcase() {
    const mount = document.querySelector("[data-project-showcase]");
    if (!mount) return;

    mount.innerHTML = projects.map((project, index) => {
      const image = project.images[0];
      const website = project.website
        ? `<a class="project-link project-link--text" href="${escapeHtml(project.website)}" target="_blank" rel="noopener noreferrer">Visit Website ${icon("external-link-alt")}</a>`
        : "";
      return `
        <article class="selected-project ${index === 0 ? "selected-project--featured" : ""}">
          <button class="browser-frame selected-project__media" type="button" data-lightbox-image="${escapeHtml(image[0])}" data-lightbox-alt="${escapeHtml(image[1])}">
            <span class="browser-frame__bar" aria-hidden="true"><span></span><span></span><span></span></span>
            <img src="${escapeHtml(image[0].replace("../", ""))}" alt="${escapeHtml(image[1])}" loading="${index === 0 ? "eager" : "lazy"}">
            <span class="browser-frame__expand">${icon("expand-arrows-alt")}<span class="sr-only">Open screenshot</span></span>
          </button>
          <div class="selected-project__content">
            <span class="selected-project__number">${escapeHtml(project.number)}</span>
            <p class="selected-project__category">${escapeHtml(project.category)}</p>
            <h3>${escapeHtml(project.name)}</h3>
            <p class="selected-project__lead">${escapeHtml(project.lead)}</p>
            <div class="project-status project-status--${escapeHtml(project.statusTone)}"><span></span>${escapeHtml(project.status)}</div>
            <ul class="technology-list" aria-label="Technologies">
              ${project.technologies.slice(0, 5).map(tech => `<li>${escapeHtml(tech)}</li>`).join("")}
            </ul>
            <div class="selected-project__actions">
              <a class="project-link project-link--primary" href="${escapeHtml(project.caseStudy)}">View Case Study ${icon("arrow-right")}</a>
              ${website}
            </div>
          </div>
        </article>`;
    }).join("");
  }

  function renderCaseStudy() {
    const mount = document.querySelector("[data-case-study]");
    if (!mount) return;
    const id = document.body.dataset.projectId;
    const projectIndex = projects.findIndex(item => item.id === id);
    const project = projects[projectIndex];
    if (!project) return;

    const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
    const next = projects[(projectIndex + 1) % projects.length];
    const website = project.website
      ? `<a class="project-link project-link--primary" href="${escapeHtml(project.website)}" target="_blank" rel="noopener noreferrer">Visit Website ${icon("external-link-alt")}</a>`
      : "";

    mount.innerHTML = `
      <section class="case-hero case-section">
        <div class="case-container case-hero__grid">
          <div class="case-hero__content">
            <p class="case-eyebrow">${escapeHtml(project.category)}</p>
            <h1>${escapeHtml(project.name)}</h1>
            <p class="case-hero__title">${escapeHtml(project.title)}</p>
            <div class="project-status project-status--${escapeHtml(project.statusTone)}"><span></span>${escapeHtml(project.status)}</div>
            <p class="case-hero__lead">${escapeHtml(project.lead)}</p>
            <div class="case-hero__actions">
              ${website}
              <a class="project-link project-link--outline" href="#capabilities">Explore the System ${icon("arrow-down")}</a>
            </div>
          </div>
          ${browserFrame(project.images[0], "case-hero__media", true)}
        </div>
        <div class="case-container project-snapshot">
          ${snapshotItem("user", "My Role", "Solo Full-Stack Developer")}
          ${snapshotItem("layers", "Scope", "Architecture, Frontend, Backend & Database")}
          ${snapshotItem("brackets-curly", "Stack", project.technologies.slice(0, 5).join(", "))}
        </div>
      </section>

      <section class="case-section case-narrative">
        <div class="case-container narrative-grid">
          <div><p class="section-label">01 · Context</p><h2>Project Overview</h2>${project.overview.map(p => `<p>${escapeHtml(p)}</p>`).join("")}</div>
          <div><p class="section-label">02 · Problem</p><h2>The Challenge</h2><p>${escapeHtml(project.challenge)}</p></div>
        </div>
        <div class="case-container solution-band">
          <div class="solution-band__icon">${icon("lightbulb-alt")}</div>
          <div><p class="section-label">03 · Approach</p><h2>The Solution</h2><p>${escapeHtml(project.solution)}</p></div>
        </div>
      </section>

      <section class="case-section" id="capabilities">
        <div class="case-container capabilities-layout">
          <div>
            <p class="section-label">04 · Product</p>
            <h2>Key Capabilities</h2>
            <ol class="capability-list">
              ${project.features.map((feature, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(feature[0])}</h3><p>${escapeHtml(feature[1])}</p></div></li>`).join("")}
            </ol>
          </div>
          <aside class="module-panel">
            <p class="section-label">System Map</p>
            <h2>Main Modules</h2>
            <ul>${project.modules.map(module => `<li>${icon(moduleIcon(module))}<span>${escapeHtml(module)}</span></li>`).join("")}</ul>
          </aside>
        </div>
      </section>

      <section class="case-section case-gallery-section" id="gallery">
        <div class="case-container">
          <p class="section-label">05 · Interface</p>
          <div class="case-section-heading"><div><h2>Interface Gallery</h2><p>Selected screens that communicate the public experience and the operational workflow.</p></div><button class="gallery-hint" type="button" data-open-first-gallery>${icon("expand-arrows-alt")} Open gallery</button></div>
          <div class="interface-gallery">
            ${project.images.map((image, index) => `<figure class="interface-gallery__item ${index === 0 ? "interface-gallery__item--wide" : ""}">${browserFrame(image, "", index === 0)}<figcaption><strong>${escapeHtml(image[1])}</strong><span>${escapeHtml(image[2])}</span></figcaption></figure>`).join("")}
          </div>
        </div>
      </section>

      <section class="case-section">
        <div class="case-container">
          <p class="section-label">06 · Outcome</p>
          <h2>Business Value</h2>
          <div class="business-value-list">${project.businessValue.map(item => `<article>${icon("check-circle")}<div><h3>${escapeHtml(item[0])}</h3><p>${escapeHtml(item[1])}</p></div></article>`).join("")}</div>
        </div>
      </section>

      <section class="case-section">
        <div class="case-container delivery-grid">
          <div><p class="section-label">Technology</p><h2>Technologies Used</h2><ul class="technology-list technology-list--large">${project.technologies.map(tech => `<li>${escapeHtml(tech)}</li>`).join("")}</ul></div>
          <div><p class="section-label">Delivery</p><h2>My Role & Development Scope</h2><ul class="role-list">${project.role.map(item => `<li>${icon("check-circle")}<span>${escapeHtml(item)}</span></li>`).join("")}</ul></div>
        </div>
      </section>

      <nav class="case-container project-pagination" aria-label="Project navigation">
        <a href="${escapeHtml(fileName(previous.caseStudy))}">${icon("arrow-left")}<span><small>Previous Project</small>${escapeHtml(previous.name)}</span></a>
        <a class="project-pagination__all" href="../index.html#portfolio">${icon("apps")} All Selected Projects</a>
        <a class="project-pagination__next" href="${escapeHtml(fileName(next.caseStudy))}"><span><small>Next Project</small>${escapeHtml(next.name)}</span>${icon("arrow-right")}</a>
      </nav>`;
  }

  function browserFrame(image, extraClass, eager) {
    return `<button class="browser-frame ${extraClass}" type="button" data-lightbox-image="${escapeHtml(image[0])}" data-lightbox-alt="${escapeHtml(image[1])}">
      <span class="browser-frame__bar" aria-hidden="true"><span></span><span></span><span></span></span>
      <img src="${escapeHtml(image[0])}" alt="${escapeHtml(image[1])}" loading="${eager ? "eager" : "lazy"}">
      <span class="browser-frame__expand">${icon("expand-arrows-alt")}<span class="sr-only">Open screenshot</span></span>
    </button>`;
  }

  function snapshotItem(iconName, label, value) {
    return `<div class="snapshot-item"><span>${icon(iconName)}</span><div><strong>${escapeHtml(label)}</strong><p>${escapeHtml(value)}</p></div></div>`;
  }

  function moduleIcon(module) {
    const name = module.toLowerCase();
    if (name.includes("dashboard")) return "create-dashboard";
    if (name.includes("client") || name.includes("customer")) return "users-alt";
    if (name.includes("case")) return "briefcase-alt";
    if (name.includes("calendar") || name.includes("hearing") || name.includes("appointment")) return "calendar-alt";
    if (name.includes("payment") || name.includes("finance") || name.includes("salary") || name.includes("expense")) return "bill";
    if (name.includes("report")) return "chart-line";
    if (name.includes("setting") || name.includes("permission")) return "setting";
    if (name.includes("product") || name.includes("car") || name.includes("unit")) return "cube";
    if (name.includes("document") || name.includes("contract")) return "file-alt";
    return "layer-group";
  }

  function fileName(path) {
    return path.split("/").pop();
  }

  function setupLightbox() {
    const lightbox = document.querySelector("[data-project-lightbox]");
    if (!lightbox) return;
    const image = lightbox.querySelector("img");
    const close = lightbox.querySelector("[data-lightbox-close]");
    let lastTrigger = null;

    function open(trigger) {
      lastTrigger = trigger;
      image.src = trigger.dataset.lightboxImage;
      image.alt = trigger.dataset.lightboxAlt || "Project interface";
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      close.focus();
    }
    function dismiss() {
      lightbox.hidden = true;
      image.removeAttribute("src");
      document.body.classList.remove("lightbox-open");
      lastTrigger?.focus();
    }
    document.addEventListener("click", event => {
      const trigger = event.target.closest("[data-lightbox-image]");
      if (trigger) open(trigger);
      if (event.target.closest("[data-lightbox-close]") || event.target === lightbox) dismiss();
      if (event.target.closest("[data-open-first-gallery]")) document.querySelector(".interface-gallery [data-lightbox-image]")?.click();
    });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && !lightbox.hidden) dismiss(); });
  }

  function setupCaseTheme() {
    const button = document.querySelector("[data-case-theme]");
    if (!button) return;
    const selected = localStorage.getItem("selected-theme");
    document.body.classList.toggle("dark-theme", selected === "dark");
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("selected-theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
  }

  renderShowcase();
  renderCaseStudy();
  setupLightbox();
  setupCaseTheme();
})();
