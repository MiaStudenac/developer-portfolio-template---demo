function updateFavicon() {
  const favicon = document.getElementById("favicon");
  if (!favicon) return;

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isTabActive = !document.hidden;

  const isProjectPage = window.location.pathname.includes("projects/");

  if (isTabActive) {
    favicon.href = isProjectPage
      ? "../assets/images/icon-black.png"
      : "assets/images/icon-black.png";
  } else {
    favicon.href = isProjectPage
      ? "../assets/images/icon-white.png"
      : "assets/images/icon-white.png";
  }
}

function initFavicon() {
  updateFavicon();

  document.addEventListener("visibilitychange", updateFavicon);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", updateFavicon);
}

document.addEventListener("DOMContentLoaded", initFavicon);
