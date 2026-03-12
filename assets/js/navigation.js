function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const menuOverlay = document.querySelector(".menu-overlay");

  if (hamburger && navMenu && menuOverlay) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      menuOverlay.classList.toggle("active");
    });

    menuOverlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  }

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetHref = this.getAttribute("href");

      const hashIndex = targetHref.indexOf("#");
      const targetId =
        hashIndex !== -1 ? targetHref.substring(hashIndex) : targetHref;

      if (targetHref.includes("../index.html")) {
        window.location.href = targetHref;
        return;
      }

      const targetSection = document.querySelector(targetId);

      if (hamburger && navMenu && menuOverlay) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
      }

      if (targetSection && window.lenis) {
        window.lenis.scrollTo(targetSection, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    });
  });

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");

  function highlightNavigation() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === "#" + current) {
        item.classList.add("active");

        const itemRect = item.getBoundingClientRect();
        const menuRect = navMenu.getBoundingClientRect();
        const lineLeft = itemRect.left - menuRect.left;
        const lineWidth = itemRect.width;

        navMenu.style.setProperty("--line-left", lineLeft + "px");
        navMenu.style.setProperty("--line-width", lineWidth + "px");
        navMenu.classList.add("line-active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);
}
