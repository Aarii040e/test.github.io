(function () {
  "use strict";

  const texts = window.CIBER_TEXTS;
  let currentUiLang = localStorage.getItem("ciberUiLang") || texts.defaultLang || "es";
  let currentLoaded = null;

  const els = {
    html: document.documentElement,
    metaDescription: document.getElementById("metaDescription"),
    brandSubtitle: document.getElementById("brandSubtitle"),
    headerLabel: document.getElementById("headerLabel"),
    navTitle: document.getElementById("navTitle"),
    searchInput: document.getElementById("searchInput"),
    sideNav: document.getElementById("sideNav"),
    introTitle: document.getElementById("introTitle"),
    introText: document.getElementById("introText"),
    quickGrid: document.getElementById("quickGrid"),
    viewerTitle: document.getElementById("viewerTitle"),
    viewerMeta: document.getElementById("viewerMeta"),
    openLink: document.getElementById("openLink"),
    emptyState: document.getElementById("emptyState"),
    emptyTitle: document.getElementById("emptyTitle"),
    emptyText: document.getElementById("emptyText"),
    viewerFrame: document.getElementById("viewerFrame"),
    footerText: document.getElementById("footerText")
  };

  function t() {
    return texts.ui[currentUiLang] || texts.ui[texts.defaultLang] || texts.ui.es;
  }

  function localized(value) {
    if (typeof value === "string") return value;
    return value[currentUiLang] || value[texts.defaultLang] || value.es || "";
  }

  function localizedForLang(value, lang) {
    if (typeof value === "string") return value;
    return value[lang] || value[texts.defaultLang] || value.es || "";
  }

  function contentLangToUiLang(lang) {
    return String(lang || "").toLowerCase();
  }

  function escapeAttr(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function getSearchText(element) {
    return normalizeText(
      (element.getAttribute("data-search") || "") + " " + element.textContent
    );
  }

  function languageButtons(files, code, title) {
    const ui = t();
    const order = ["ES", "EN", "EU"];

    return order.map(function (langCode) {
      const label = ui.languageNames[langCode] || langCode;
      const titleLang = contentLangToUiLang(langCode);
      const buttonTitle = localizedForLang(title, titleLang);
      return `
        <button
          class="lang-btn"
          type="button"
          data-file="${escapeAttr(files[langCode])}"
          data-code="${escapeAttr(code)}"
          data-title="${escapeAttr(buttonTitle)}"
          data-content-lang="${escapeAttr(langCode)}"
        >${label}</button>
      `;
    }).join("");
  }

  function renderNav() {
    const navParts = [];
    const cardParts = [];

    texts.topics.forEach(function (topic) {
      const topicTitle = localized(topic.title);
      const topicSubtitle = localized(topic.subtitle || "");
      const topicSearch = [
        topic.code,
        topicTitle,
        topicSubtitle,
        topic.title.es,
        topic.title.en,
        topic.title.eu,
        topic.subtitle && topic.subtitle.es,
        topic.subtitle && topic.subtitle.en,
        topic.subtitle && topic.subtitle.eu
      ].filter(Boolean).join(" ");

      if (topic.children) {
        const subSections = topic.children.map(function (child) {
          const childTitle = localized(child.title);
          const childSubtitle = localized(child.subtitle || "");
          const childSearch = [
            child.code,
            childTitle,
            childSubtitle,
            child.title.es,
            child.title.en,
            child.title.eu,
            child.subtitle && child.subtitle.es,
            child.subtitle && child.subtitle.en,
            child.subtitle && child.subtitle.eu,
            topicSearch
          ].filter(Boolean).join(" ");
          const buttons = languageButtons(child.files, child.code, child.title);

          cardParts.push(`
            <article class="topic-card" data-search="${escapeAttr(childSearch)}">
              <div class="topic-code">${child.code}</div>
              <h3>${childTitle}</h3>
              <p>${childSubtitle || topicTitle}</p>
              <div class="card-actions">${buttons}</div>
            </article>
          `);

          const subtitleMarkup = childSubtitle ? `<small>${childSubtitle}</small>` : "";

          return `
            <details class="sub-section" data-search="${escapeAttr(childSearch)}">
              <summary>
                <span class="sub-code">${child.code}</span>
                <span class="sub-text">
                  <span class="sub-title">${childTitle}</span>
                  ${subtitleMarkup}
                </span>
              </summary>
              <div class="lang-row">${buttons}</div>
            </details>
          `;
        }).join("");

        navParts.push(`
          <details class="nav-section" open data-search="${escapeAttr(topicSearch)}" data-has-children="true">
            <summary>
              <span class="section-code">${topic.code}</span>
              <span class="summary-text">
                <strong>${topicTitle}</strong>
                <small>${topicSubtitle}</small>
              </span>
            </summary>
            <div class="sub-list">${subSections}</div>
          </details>
        `);
      } else {
        const buttons = languageButtons(topic.files, topic.code, topic.title);

        navParts.push(`
          <details class="nav-section" open data-search="${escapeAttr(topicSearch)}" data-has-children="false">
            <summary>
              <span class="section-code">${topic.code}</span>
              <span class="summary-text">
                <strong>${topicTitle}</strong>
                <small>${topicSubtitle}</small>
              </span>
            </summary>
            <div class="lang-row single">${buttons}</div>
          </details>
        `);

        cardParts.push(`
          <article class="topic-card" data-search="${escapeAttr(topicSearch)}">
            <div class="topic-code">${topic.code}</div>
            <h3>${topicTitle}</h3>
            <p>${topicSubtitle}</p>
            <div class="card-actions">${buttons}</div>
          </article>
        `);
      }
    });

    els.sideNav.innerHTML = navParts.join("");
    els.quickGrid.innerHTML = cardParts.join("");

    document.querySelectorAll(".lang-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        loadTip(
          button.dataset.file,
          button.dataset.code + " · " + button.dataset.title,
          button.dataset.contentLang
        );
      });
    });

    applySearch();
    restoreActiveButton();
  }

  function renderUiTexts() {
    const ui = t();

    document.title = ui.documentTitle;
    els.html.lang = currentUiLang;
    els.metaDescription.setAttribute("content", ui.metaDescription);

    els.brandSubtitle.textContent = ui.brandSubtitle;
    els.headerLabel.textContent = ui.headerLabel;
    els.navTitle.textContent = ui.navTitle;
    els.searchInput.placeholder = ui.searchPlaceholder;
    els.introTitle.textContent = ui.introTitle;
    els.introText.textContent = ui.introText;
    els.emptyTitle.textContent = ui.noSelectionTitle;
    els.emptyText.textContent = ui.noSelectionText;
    els.openLink.textContent = ui.openTab;
    els.footerText.textContent = ui.footerText;

    if (currentLoaded) {
      els.viewerTitle.textContent = currentLoaded.title;
      els.viewerMeta.textContent = `${ui.contentLanguage}: ${currentLoaded.lang} · ${ui.fileLabel}: ${currentLoaded.file}`;
    } else {
      els.viewerTitle.textContent = ui.viewerNoSelection;
      els.viewerMeta.textContent = ui.viewerNoSelectionMeta;
      els.openLink.style.display = "none";
    }

    document.querySelectorAll(".ui-lang-btn").forEach(function (button) {
      button.classList.toggle("active", button.dataset.uiLang === currentUiLang);
    });
  }

  function restoreActiveButton() {
    if (!currentLoaded) return;

    document.querySelectorAll(".lang-btn").forEach(function (button) {
      button.classList.toggle("active", button.dataset.file === currentLoaded.file);
    });
  }

  function clearActiveButtons() {
    document.querySelectorAll(".lang-btn.active").forEach(function (button) {
      button.classList.remove("active");
    });
  }

  function loadTip(file, title, lang) {
    const uiLang = contentLangToUiLang(lang);

    if (uiLang && texts.ui[uiLang] && currentUiLang !== uiLang) {
      currentUiLang = uiLang;
      localStorage.setItem("ciberUiLang", uiLang);
      renderNav();
    }

    const ui = t();

    currentLoaded = { file, title, lang };

    renderUiTexts();

    els.viewerFrame.src = file;
    els.viewerFrame.style.display = "block";
    els.emptyState.style.display = "none";

    els.viewerTitle.textContent = title;
    els.viewerMeta.textContent = `${ui.contentLanguage}: ${lang} · ${ui.fileLabel}: ${file}`;

    els.openLink.href = file;
    els.openLink.style.display = "inline-block";

    clearActiveButtons();
    document.querySelectorAll(".lang-btn").forEach(function (button) {
      if (button.dataset.file === file) {
        button.classList.add("active");
      }
    });

    document.querySelector(".viewer").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function applySearch() {
    const query = normalizeText(els.searchInput.value);

    document.querySelectorAll(".topic-card").forEach(function (card) {
      const matches = !query || getSearchText(card).includes(query);
      card.classList.toggle("hidden", !matches);
    });

    document.querySelectorAll(".nav-section").forEach(function (section) {
      const hasChildren = section.dataset.hasChildren === "true";
      const sectionMatches = !query || getSearchText(section).includes(query);

      if (!hasChildren) {
        section.classList.toggle("hidden", !sectionMatches);
        if (query && sectionMatches) section.open = true;
        return;
      }

      let anyChildMatches = false;

      section.querySelectorAll(".sub-section").forEach(function (subSection) {
        const childMatches = !query || getSearchText(subSection).includes(query);
        subSection.classList.toggle("hidden", !childMatches);
        if (childMatches) {
          anyChildMatches = true;
          if (query) subSection.open = true;
        }
      });

      const shouldShow = !query || sectionMatches || anyChildMatches;
      section.classList.toggle("hidden", !shouldShow);

      if (query && shouldShow) {
        section.open = true;
      }
    });
  }

  function changeUiLanguage(lang) {
    currentUiLang = lang;
    localStorage.setItem("ciberUiLang", lang);

    renderUiTexts();
    renderNav();
  }

  document.querySelectorAll(".ui-lang-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      changeUiLanguage(button.dataset.uiLang);
    });
  });

  els.searchInput.addEventListener("input", applySearch);

  window.loadTip = loadTip;

  renderUiTexts();
  renderNav();
})();
