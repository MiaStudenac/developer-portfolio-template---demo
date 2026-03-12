function initInteractiveEffects() {
  const interactiveElements = document.querySelectorAll(
    ".project-card, .stat-item, .nav-link"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    element.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}
