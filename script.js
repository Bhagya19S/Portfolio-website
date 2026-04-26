/* Active nav link */
const path = window.location.pathname.split("/").pop();
const currentPage = (path === "" || path === "/") ? "index.html" : path;

document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/*  Hamburger menu  */
const menuBtn   = document.getElementById("menuBtn");
const navLinks  = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

/*  Contact form  */
const sendBtn      = document.getElementById("sendBtn");
const successToast = document.getElementById("successToast");
const errorToast   = document.getElementById("errorToast");

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Hide any existing toasts
    if (successToast) successToast.classList.remove("show");
    if (errorToast)   errorToast.classList.remove("show");

    // Validate
    if (!name || !email || !subject || !message) {
      if (errorToast) {
        errorToast.classList.add("show");
        setTimeout(() => errorToast.classList.remove("show"), 4000);
      }
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (errorToast) {
        errorToast.textContent = "⚠️ Please enter a valid email address.";
        errorToast.classList.add("show");
        setTimeout(() => errorToast.classList.remove("show"), 4000);
      }
      return;
    }

    // Simulate send
    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;

    setTimeout(() => {
      // Reset form
      document.getElementById("name").value    = "";
      document.getElementById("email").value   = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      // Show success
      if (successToast) successToast.classList.add("show");

      sendBtn.innerHTML = `
        Send Message`;
      sendBtn.disabled = false;

      setTimeout(() => {
        if (successToast) successToast.classList.remove("show");
      }, 5000);
    }, 1200);
  });
}


