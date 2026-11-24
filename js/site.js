function setupHeader() {
  var header = document.querySelector(".site-header");
  var menuButton = document.querySelector(".menu-toggle");
  var themeButton = document.querySelector(".theme-toggle");
  var links = document.querySelectorAll(".nav-links a");
  var currentPage = window.location.pathname;
  var lastSlash = currentPage.lastIndexOf("/");
  currentPage = currentPage.substring(lastSlash + 1);

  if (currentPage === "") {
    currentPage = "index.html";
  }

  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === currentPage) {
      links[i].setAttribute("aria-current", "page");
    }
  }

  menuButton.onclick = function () {
    var isOpen = header.className.indexOf("menu-open") === -1;

    if (isOpen) {
      header.className += " menu-open";
      menuButton.setAttribute("aria-expanded", "true");
    } else {
      header.className = header.className.replace(" menu-open", "");
      menuButton.setAttribute("aria-expanded", "false");
    }
  };

  function updateThemeButton(isDark) {
    if (isDark) {
      themeButton.textContent = "Light mode";
      themeButton.setAttribute("aria-pressed", "true");
    } else {
      themeButton.textContent = "Dark mode";
      themeButton.setAttribute("aria-pressed", "false");
    }
  }

  var savedTheme = localStorage.getItem("hope-foundation-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  var isDark =
    document.documentElement.getAttribute("data-theme") === "dark";
  if (
    document.documentElement.getAttribute("data-theme") === null &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    isDark = true;
  }
  updateThemeButton(isDark);

  themeButton.onclick = function () {
    var darkModeIsOn = themeButton.getAttribute("aria-pressed") === "true";

    if (darkModeIsOn) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("hope-foundation-theme", "light");
      updateThemeButton(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("hope-foundation-theme", "dark");
      updateThemeButton(true);
    }
  };
}

setupHeader();
