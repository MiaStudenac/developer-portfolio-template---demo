function initMobileVideoHandler() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (!isMobile) return;

  const videos = document.querySelectorAll(".project-video");

  videos.forEach((video) => {
    const shouldAutoplay = video.hasAttribute("autoplay");

    if (shouldAutoplay) {
      video.removeAttribute("autoplay");

      video.addEventListener("loadedmetadata", () => {
        attemptVideoPlay(video);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              attemptVideoPlay(video);
            }
          });
        },
        { threshold: 0.5 }
      );

      const videoContainer = video.closest(".video-container");
      if (videoContainer) {
        observer.observe(videoContainer);
      }

      videoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        attemptVideoPlay(video);
      });

      videoContainer.addEventListener("touchstart", (e) => {
        e.preventDefault();
        attemptVideoPlay(video);
      });
    }
  });
}

function attemptVideoPlay(video) {
  if (video.paused) {
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Video autoplay successful");
        })
        .catch((error) => {
          console.log("Autoplay prevented, user interaction required:", error);
          showPlayButton(video);
        });
    }
  }
}

function showPlayButton(video) {
  const videoContainer = video.closest(".video-container");
  if (!videoContainer) return;

  const existingButton = videoContainer.querySelector(".mobile-play-button");
  if (existingButton) return;

  const playButton = document.createElement("div");
  playButton.className = "mobile-play-button";
  playButton.innerHTML = `
    <div class="play-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </div>
    <span class="play-text">Tap to play</span>
  `;

  playButton.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    z-index: 10;
    transition: all 0.3s ease;
  `;

  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    playButton.addEventListener("mouseenter", () => {
      playButton.style.background = "rgba(0, 0, 0, 0.9)";
      playButton.style.transform = "translate(-50%, -50%) scale(1.05)";
    });

    playButton.addEventListener("mouseleave", () => {
      playButton.style.background = "rgba(0, 0, 0, 0.8)";
      playButton.style.transform = "translate(-50%, -50%) scale(1)";
    });
  }

  playButton.addEventListener("click", (e) => {
    e.stopPropagation();
    video
      .play()
      .then(() => {
        playButton.remove();
      })
      .catch((error) => {
        console.log("Play failed:", error);
      });
  });

  videoContainer.appendChild(playButton);

  video.addEventListener("play", () => {
    if (playButton) {
      playButton.remove();
    }
  });
}

document.addEventListener("DOMContentLoaded", initMobileVideoHandler);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMobileVideoHandler);
} else {
  initMobileVideoHandler();
}
