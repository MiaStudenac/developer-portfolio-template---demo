function initLoading() {
  const loading = document.getElementById("loading");

  if (!loading) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      loading.classList.add("hidden");
      setTimeout(() => {
        loading.remove();
      }, 500);
    }, 1500);
  });
}
