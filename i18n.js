(() => {
  const storageKey = "mvk-portfolio-language";
  let language = localStorage.getItem(storageKey) || "nl";

  const applyLanguage = nextLanguage => {
    language = nextLanguage === "en" ? "en" : "nl";
    localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    document.querySelectorAll("[data-nl][data-en]").forEach(element => {
      element.innerHTML = element.dataset[language];
    });
    document.querySelectorAll("[data-nl-aria][data-en-aria]").forEach(element => {
      element.setAttribute("aria-label", element.dataset[`${language}Aria`]);
    });
    document.querySelectorAll("[data-alt-nl][data-alt-en]").forEach(element => {
      element.setAttribute("alt", element.dataset[`alt${language === "nl" ? "Nl" : "En"}`]);
    });
    const description = document.querySelector("meta[data-description-nl][data-description-en]");
    if (description) description.content = description.dataset[`description${language === "nl" ? "Nl" : "En"}`];
    const title = document.querySelector("title[data-title-nl][data-title-en]");
    if (title) title.textContent = title.dataset[`title${language === "nl" ? "Nl" : "En"}`];
    document.querySelectorAll("[data-language-toggle]").forEach(button => {
      button.textContent = language === "nl" ? "ENGLISH ↗" : "NEDERLANDS ↗";
      button.setAttribute("aria-label", language === "nl" ? "Switch to English" : "Schakel naar Nederlands");
    });
    const nav = document.querySelector("#nav");
    if (nav) nav.setAttribute("aria-label", language === "nl" ? "Hoofdnavigatie" : "Main navigation");
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) menuToggle.setAttribute("aria-label", language === "nl" ? "Open navigatie" : "Open navigation");
    document.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
  };

  window.portfolioLanguage = () => language;
  window.setPortfolioLanguage = applyLanguage;
  document.querySelectorAll("[data-language-toggle]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(language === "nl" ? "en" : "nl"));
  });
  applyLanguage(language);
})();
