function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const currentSection = getCurrentSection();
      const sections = Array.from(document.querySelectorAll("section"));
      const currentIndex = sections.indexOf(currentSection);

      let nextIndex;
      if (e.key === "ArrowDown") {
        nextIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      if (window.lenis) {
        window.lenis.scrollTo(sections[nextIndex], {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  });

  function getCurrentSection() {
    let current = null;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = section;
      }
    });

    return current || sections[0];
  }
}
