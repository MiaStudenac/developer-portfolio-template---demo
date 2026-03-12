function initFormHandling() {
  // BUYER NOTE: This contact form currently opens the user's email app (mailto).
  // Replace the email below, or swap this logic with Formspree/Netlify/server API.
  const contactForm = document.querySelector(".contact-form-content");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      const message = this.querySelector('textarea[name="message"]').value;

      if (!name || !email || !message) {
        showNotification("Please fill in all fields", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      const subject = `Portfolio Contact from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

      // BUYER EDIT: Replace with your real contact email.
      const mailtoLink = `mailto:hello@averyportfolio.dev?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      showNotification("Opening your email client...", "success");

      this.reset();
    });
  }
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#00ff88"
            : type === "error"
            ? "#ff6b6b"
            : "#45b7d1"
        };
        color: ${type === "success" ? "#000" : "#fff"};
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}
