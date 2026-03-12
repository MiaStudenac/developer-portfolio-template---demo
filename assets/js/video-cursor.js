function initVideoCursor() {
  const videoContainer = document.querySelector(".video-container");
  const actionBtn = document.querySelector(".read-project-btn");
  if (!videoContainer || !actionBtn) return;

  let isHovering = false;
  let hasMoved = false;

  actionBtn.style.opacity = "0";
  actionBtn.style.transform = "translate(-50%, -50%) scale(0.8)";
  actionBtn.style.left = "50%";
  actionBtn.style.top = "50%";

  function handleMouseMove(e) {
    if (!isHovering) return;

    const rect = videoContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    actionBtn.style.left = x + "px";
    actionBtn.style.top = y + "px";
    actionBtn.style.transform = "translate(-50%, -50%) scale(1)";

    if (!hasMoved) {
      hasMoved = true;
    }
  }

  function handleMouseEnter() {
    isHovering = true;
    actionBtn.style.opacity = "1";

    if (!hasMoved) {
      actionBtn.style.left = "50%";
      actionBtn.style.top = "50%";
      actionBtn.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }

  function handleMouseLeave() {
    isHovering = false;
    actionBtn.style.opacity = "0";
    actionBtn.style.transform = "translate(-50%, -50%) scale(0.8)";
    hasMoved = false;
  }

  function handleButtonClick(e) {
    e.preventDefault();
    window.open("https://example.com/your-project-link", "_blank");
  }

  videoContainer.addEventListener("mousemove", handleMouseMove);
  videoContainer.addEventListener("mouseenter", handleMouseEnter);
  videoContainer.addEventListener("mouseleave", handleMouseLeave);
  actionBtn.addEventListener("click", handleButtonClick);
}

function initImageCursor() {
  const imageContainer = document.querySelector(".image-container");
  const actionBtn = document.querySelector(".view-app-btn");
  if (!imageContainer || !actionBtn) return;

  let isHovering = false;
  let hasMoved = false;

  actionBtn.style.opacity = "0";
  actionBtn.style.transform = "translate(-50%, -50%) scale(0.8)";
  actionBtn.style.left = "50%";
  actionBtn.style.top = "50%";

  function handleMouseMove(e) {
    if (!isHovering) return;

    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    actionBtn.style.left = x + "px";
    actionBtn.style.top = y + "px";
    actionBtn.style.transform = "translate(-50%, -50%) scale(1)";

    if (!hasMoved) {
      hasMoved = true;
    }
  }

  function handleMouseEnter() {
    isHovering = true;
    actionBtn.style.opacity = "1";

    if (!hasMoved) {
      actionBtn.style.left = "50%";
      actionBtn.style.top = "50%";
      actionBtn.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }

  function handleMouseLeave() {
    isHovering = false;
    actionBtn.style.opacity = "0";
    actionBtn.style.transform = "translate(-50%, -50%) scale(0.8)";
    hasMoved = false;
  }

  function handleButtonClick(e) {
    e.preventDefault();
    window.open("https://example.com/your-project-link", "_blank");
  }

  imageContainer.addEventListener("mousemove", handleMouseMove);
  imageContainer.addEventListener("mouseenter", handleMouseEnter);
  imageContainer.addEventListener("mouseleave", handleMouseLeave);
  actionBtn.addEventListener("click", handleButtonClick);
}

document.addEventListener("DOMContentLoaded", function () {
  initVideoCursor();
  initImageCursor();
});
