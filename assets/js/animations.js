function initAnimations() {
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  const commands = document.querySelectorAll(".command");
  commands.forEach((command, index) => {
    const originalText = command.textContent;
    command.textContent = "";

    setTimeout(() => {
      typeWriter(command, originalText, 100);
    }, index * 1000);
  });

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const planets = document.querySelectorAll(".planet");

    planets.forEach((planet, index) => {
      const speed = 0.5 + index * 0.1;
      planet.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("project-card")) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.add("animate-in");
        }
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".project-card, .stat-item, .contact-item"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const planets = document.querySelectorAll(".planet");
    planets.forEach((planet, index) => {
      const speed = 0.02 + index * 0.01;
      const x = (mouseX - window.innerWidth / 2) * speed;
      const y = (mouseY - window.innerHeight / 2) * speed;

      planet.style.transform += ` translate(${x}px, ${y}px)`;
    });
  });
}
