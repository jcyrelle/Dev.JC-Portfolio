const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Smooth scroll navigation
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
        nav.classList.remove("active");
      });
    });

    // Contact form
    document.getElementById("contactForm").addEventListener("submit", e => {
      e.preventDefault();
      const button = e.target.querySelector('button');
      const originalText = button.textContent;
      
      button.textContent = "Sending...";
      button.style.background = "#555";
      
      setTimeout(() => {
        button.textContent = "Message Sent! ✓";
        button.style.background = "#28a745";
        
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = "#111";
          e.target.reset();
        }, 2000);
      }, 1000);
    });

    // Scroll animations
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Header scroll effect
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Scroll to top button
    const scrollTopBtn = document.getElementById("scrollTop");
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    // Logo click to home
    document.querySelector('.logo').addEventListener('click', () => {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    