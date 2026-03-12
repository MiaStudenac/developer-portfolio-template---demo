function initCustomCursor() {
  if (window.matchMedia("(hover: none)").matches) {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.display = "none";
    }
    return;
  }

  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  const outer = cursor.querySelector(".outer-stroke");

  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  }
  animate();

  const interactiveEls = document.querySelectorAll(
    "a, button, .interactive, .skill-badge, .myimage img, .project-card, .stat-item, .skill-card, .skill-pill, .nav-link, .footer-link, .back-to-top, .download-cv, .form-submit"
  );

  interactiveEls.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      outer.classList.add("hovered");
    });
    el.addEventListener("mouseleave", () => {
      outer.classList.remove("hovered");
    });
  });
}
