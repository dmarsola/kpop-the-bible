// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !nav.contains(e.target) &&
    !hamburger.contains(e.target) &&
    nav.classList.contains("active")
  ) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  }
});

// Accordion functionality for lyrics
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isActive = button.classList.contains("active");

    // Close all accordions
    accordionButtons.forEach((btn) => {
      btn.classList.remove("active");
      content.classList.remove("active");
      btn.nextElementSibling.style.maxHeight = null;
    });

    // Toggle current accordion
    if (!isActive) {
      button.classList.add("active");
      content.classList.add("active");
      // content.style.maxHeight = "250px";
    }
  });
});

// Protected email display
const emailElement = document.querySelector(".email-protected");
if (emailElement) {
  const user = emailElement.dataset.user;
  const domain = emailElement.dataset.domain;
  const tld = emailElement.dataset.tld;
  const emailText = emailElement.querySelector(".email-text");

  if (emailText) {
    emailText.textContent = `${user}@${domain}.${tld}`;
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
