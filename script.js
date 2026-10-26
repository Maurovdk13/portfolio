const projects = [
  {
    number: "01", slug: "artonella", title: { nl: "p Art O’Nella", en: "p Art O’Nella" },
    category: { nl: "Webdesign / UX·UI", en: "Website design / UX·UI" }, year: "2026",
    description: { nl: "Logo en CMS-website voor de tekenlessen en kunstwerken van mijn moeder.", en: "A logo and CMS website for my mother’s drawing lessons and artworks." },
    liveUrl: "https://partonella.great-site.net/", designUrl: "https://www.figma.com/design/MCdoFYgsqQP5Kf0nlP9EPa/website-p-Art-O-Nella?node-id=0-1&t=se4NyQfQZaHoR2cB-1", cover: "artonella"
  },
  {
    number: "02", slug: "licht-en-liefde", title: { nl: "Licht & Liefde", en: "Licht & Liefde" },
    category: { nl: "Webdesign / UX·UI", en: "Website design / UX·UI" }, year: "2026",
    projectType: { nl: "FIGMA-PROTOTYPE · TEAMPROJECT", en: "FIGMA PROTOTYPE · TEAM PROJECT" },
    description: { nl: "Samen met twee teamleden herontwierp ik de site. Ik ontwierp in Figma de pagina’s Visuele beperking, Activiteiten en Verhalen en nieuws.", en: "I worked with two teammates on a redesign, creating the Visual Impairment, Activities, and Stories and News pages in Figma." },
    designUrl: "https://www.figma.com/design/67jjheIDqdhwXxevvUzYeT/User-Center-design-II---Licht---Liefde?node-id=7-2&t=k2gqoQ675TCOPBpz-1",
    mindmapUrl: "https://www.figma.com/board/tnNzvmPIM7M5vgyYvzkApo/Mindmap-Licht-en-Liefde?node-id=0-1&t=vO9HhWzWBRFDx1Dh-1",
    cover: "lichtliefde"
  },
  {
    number: "03", slug: "next", title: { nl: "NEXT — Groeien op jouw tempo", en: "NEXT — Grow at your own pace" },
    category: { nl: "Webdesign / UX·UI", en: "Website design / UX·UI" }, year: "2026",
    projectType: { nl: "TEAMPROJECT", en: "TEAM PROJECT" },
    description: { nl: "Na gezamenlijk onderzoek ontwierp ik de volledige website, passend bij de nieuwe branding van NEXT.", en: "After collaborative research, I designed the full website to match NEXT’s new brand identity." },
    liveUrl: "https://next.is-best.net/", designUrl: "https://www.figma.com/design/hfQDNi1gjAnyr2dB5wzUHx/Projectnext_Lab4?node-id=184-2&t=96iyw7WOIaRNauX9-1", cover: "next"
  }
];

const projectGrid = document.querySelector("#project-grid");
if (projectGrid) {
  const renderProjects = () => {
    const language = window.portfolioLanguage?.() || "nl";
    const t = (value, fallback = "") => typeof value === "object" ? value[language] : value || fallback;
    projectGrid.innerHTML = projects.map(project => {
      const title = t(project.title);
      const detailUrl = `project.html?project=${project.slug}`;
      let preview;
      if (project.gallery) {
        preview = `<div class="poster-gallery">${project.gallery.map(image => `<a class="poster-thumb" href="${detailUrl}" aria-label="${language === "nl" ? "Bekijk project" : "View project"}: ${language === "nl" ? image.altNl : image.alt}"><img src="${image.image}" alt="${language === "nl" ? image.altNl : image.alt}" loading="lazy"></a>`).join("")}</div>`;
      } else if (project.cover === "next") {
        preview = `<a class="cover-link" href="${detailUrl}" aria-label="${language === "nl" ? "Bekijk project NEXT" : "View NEXT project"}"><div class="next-cover"><span class="next-logo">NE<span>X</span>T</span><span class="next-eyebrow">${language === "nl" ? "JONGEREN · DAGBESTEDING" : "YOUTH · DAY PROGRAMME"}</span><strong>${language === "nl" ? "Groeien op<br>jouw tempo." : "Grow at<br>your own pace."}</strong><span class="next-bottom">${language === "nl" ? "DE VOLGENDE STAP, OP JOUW TEMPO" : "THE NEXT STEP, AT YOUR OWN PACE"} <b>↗</b></span><i class="next-shape"></i></div></a>`;
      } else if (project.cover === "lichtliefde") {
        preview = `<a class="cover-link" href="${detailUrl}" aria-label="${language === "nl" ? "Bekijk project Licht & Liefde" : "View Licht & Liefde project"}"><div class="licht-cover"><span class="licht-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="licht-wordmark">licht<span>&</span>liefde</span><span class="licht-kicker">${language === "nl" ? "WEBSITE REBUILD" : "WEBSITE REDESIGN"}</span><strong>${language === "nl" ? "Een website<br>voor iedereen." : "A website<br>for everyone."}</strong><span class="licht-nav">ONDERSTEUNING　 ·　 ACTIVITEITEN　 ·　 VERHALEN</span></div></a>`;
      } else if (project.cover === "artonella") {
        preview = `<a class="cover-link" href="${detailUrl}" aria-label="${language === "nl" ? "Bekijk het websiteontwerp van p Art O’Nella" : "View the p Art O’Nella website design"}"><img class="artonella-card-preview" src="assets/artonella-hero.jpg" alt="${language === "nl" ? "Voorbeeld van de p Art O’Nella-website met tekenatelier op de voorgrond" : "Preview of the p Art O’Nella website showing the art studio"}" loading="lazy"></a>`;
      } else {
        preview = `<a class="cover-link" href="${detailUrl}" aria-label="${language === "nl" ? "Bekijk project p Art O’Nella" : "View p Art O’Nella project"}"><div class="cover-brand"><span class="cover-mark">p</span><span class="cover-name">Art<br>O’Nella</span><span class="cover-caption">${language === "nl" ? "INDIVIDUELE TEKENBEGELEIDING<br>OP JOUW TEMPO, IN ALLE RUST" : "ONE-TO-ONE DRAWING GUIDANCE<br>AT YOUR OWN PACE, IN A CALM SPACE"}</span><span class="cover-cta">${language === "nl" ? "BEKIJK PROJECT" : "VIEW PROJECT"} ↗</span></div></a>`;
      }
      const year = project.year ? `${project.year} · ${t(project.projectType, language === "nl" ? "PERSOONLIJK PROJECT" : "PERSONAL PROJECT")}` : (language === "nl" ? "PERSOONLIJK PROJECT" : "PERSONAL PROJECT");
      return `<article class="project-card">
        <div class="project-image ${project.cover ? `project-cover project-cover-${project.cover}` : ""} ${project.gallery ? "poster-project" : ""}">${preview}<span class="project-number">${project.number}</span></div>
        <div class="project-info">
          <h3><a href="${detailUrl}">${title}</a></h3><a class="project-arrow" href="${detailUrl}" aria-label="${language === "nl" ? `Open projectpagina ${title}` : `Open ${title} case study`}">↗</a>
          <p>${t(project.category)}</p><p class="year">${year}</p>
          ${project.description ? `<p class="project-description">${t(project.description)}</p>` : ""}
          <a class="project-design-link" href="${detailUrl}">${language === "nl" ? "BEKIJK PROJECTVERHAAL ↗" : "VIEW PROJECT STORY ↗"}</a>
          ${project.liveUrl ? `<a class="project-design-link" href="${project.liveUrl}" target="_blank" rel="noreferrer">${language === "nl" ? "BEKIJK LIVE WEBSITE ↗" : "VIEW LIVE WEBSITE ↗"}</a>` : ""}
          ${project.designUrl ? `<a class="project-design-link" href="${project.designUrl}" target="_blank" rel="noreferrer">${language === "nl" ? "BEKIJK FIGMA-ONTWERP ↗" : "VIEW FIGMA DESIGN ↗"}</a>` : ""}
        </div>
      </article>`;
    }).join("");
  };
  renderProjects();
  document.addEventListener("portfolio:languagechange", renderProjects);
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Sluit navigatie" : "Open navigatie");
  nav?.classList.toggle("is-open", open);
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigatie");
}));

const avatarViewer = document.querySelector("#mauro-model");
const avatarStatus = document.querySelector("#model-loading");
avatarViewer?.addEventListener("load", () => {
  if (avatarStatus) avatarStatus.hidden = true;
}, { once: true });
avatarViewer?.addEventListener("error", () => {
  if (!avatarStatus) return;
  avatarStatus.classList.add("has-error");
  avatarStatus.innerHTML = window.portfolioLanguage?.() === "en"
    ? "The 3D model could not be loaded. Please try refreshing the page."
    : "Het 3D-model kon niet geladen worden. Vernieuw de pagina om opnieuw te proberen.";
}, { once: true });
