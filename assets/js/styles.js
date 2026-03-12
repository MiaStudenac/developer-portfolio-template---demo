function addDynamicStyles() {
  const style = document.createElement("style");
  style.textContent = `
        .nav-link.active {
            color: var(--accent-color) !important;
            text-shadow: 0 0 5px var(--accent-color) !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .project-card,
        .stat-item,
        .contact-item {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .project-card.animate-in,
        .stat-item.animate-in,
        .contact-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .form-submit:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        .submit-arrow {
            display: inline-block;
        }
    `;
  document.head.appendChild(style);
}

addDynamicStyles();
