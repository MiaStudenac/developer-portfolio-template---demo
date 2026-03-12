document.addEventListener("DOMContentLoaded", function () {
  // BUYER NOTE:
  // This is the main startup file.
  // If you disable any feature, remove its init call here.
  initLoading();
  initSmoothScrolling();
  initCustomCursor();
  initNavigation();
  initAnimations();
  initFormHandling();
  initKeyboardNavigation();
  initInteractiveEffects();
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
});
