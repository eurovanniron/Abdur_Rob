/* ==========================================================================
   NAVIGATION — navbar scroll state, mobile menu, active section highlight
   ========================================================================== */
(function () {
  "use strict";

  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuClose = document.getElementById("mobileMenuClose");
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a[href^='#']") : [];
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = document.querySelectorAll("main section[id]");

  /* ---- Navbar background on scroll ---- */
  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu open / close ---- */
  function openMenu() {
    mobileMenu.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
    });
  }
  if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMenu);
  mobileLinks.forEach((a) => a.addEventListener("click", closeMenu));

  /* Close mobile menu on Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
  });

  /* ---- Active link highlighting via IntersectionObserver ---- */
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((sec) => spy.observe(sec));
  }
})();
