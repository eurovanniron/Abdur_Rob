/* ==========================================================================
   APP — loader, hero entrance, scroll reveal, counters, FAQ, before/after,
   service card glow, back-to-top, footer year
   ========================================================================== */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     LOADING SCREEN
     --------------------------------------------------------------------- */
  const loader = document.getElementById("loader");
  const hero = document.getElementById("hero");
  const heroImg = document.querySelector(".hero-media img");

  function finishLoading() {
    if (loader) loader.classList.add("hidden");
    if (hero) hero.classList.add("play");
    document.body.style.overflow = "";
  }

  window.addEventListener("load", () => {
    if (heroImg) {
      heroImg.classList.add("loaded");
      document.querySelector(".hero-overlay")?.classList.add("loaded");
    }
    // Minimum display time keeps the loader feeling intentional, not glitchy
    setTimeout(finishLoading, 900);
  });
  // Safety net in case 'load' fires very late (slow connections)
  setTimeout(finishLoading, 4000);

  /* ---------------------------------------------------------------------
     SCROLL REVEAL — IntersectionObserver
     --------------------------------------------------------------------- */
  const revealEls = () => document.querySelectorAll(".reveal:not(.in-view)");

  let revealObserver;
  function setupReveal() {
    if (!("IntersectionObserver" in window)) {
      revealEls().forEach((el) => el.classList.add("in-view"));
      return;
    }
    revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls().forEach((el) => revealObserver.observe(el));
  }
  setupReveal();
  // Re-scan after dynamic content (projects/gallery) renders
  window.ARR_reobserve = setupReveal;
  window.addEventListener("load", setupReveal);
  setTimeout(setupReveal, 400);

  /* ---------------------------------------------------------------------
     ANIMATED STAT COUNTERS
     --------------------------------------------------------------------- */
  const counters = document.querySelectorAll("[data-counter]");
  function animateCounter(el) {
    const target = parseInt(el.dataset.counter, 10);
    if (isNaN(target)) return;
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }
  if (counters.length && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = c.dataset.counter));
  }

  /* ---------------------------------------------------------------------
     PROCESS LINE FILL
     --------------------------------------------------------------------- */
  const processTrack = document.getElementById("processTrack");
  const processFill = document.getElementById("processLineFill");
  if (processTrack && "IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (processFill) processFill.style.width = "92%";
            processTrack.querySelectorAll(".process-step").forEach((step, i) => {
              setTimeout(() => step.classList.add("active"), i * 160);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    ).observe(processTrack);
  }

  /* ---------------------------------------------------------------------
     SERVICE CARD CURSOR GLOW
     --------------------------------------------------------------------- */
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  /* ---------------------------------------------------------------------
     FAQ ACCORDION
     --------------------------------------------------------------------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-a").style.maxHeight = null;
          openItem.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        a.style.maxHeight = null;
        q.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------------------------------------------------------------------
     BEFORE / AFTER SLIDER
     --------------------------------------------------------------------- */
  function initBASlider(root) {
    const afterWrap = root.querySelector(".ba-after-wrap");
    const handle = root.querySelector(".ba-handle");
    if (!afterWrap || !handle) return;

    function setPosition(pct) {
      pct = Math.max(2, Math.min(98, pct));
      afterWrap.style.width = pct + "%";
      handle.style.left = pct + "%";
    }

    function fromClientX(clientX) {
      const rect = root.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setPosition(pct);
    }

    let dragging = false;
    const start = () => (dragging = true);
    const stop = () => (dragging = false);
    const move = (clientX) => dragging && fromClientX(clientX);

    handle.addEventListener("mousedown", start);
    window.addEventListener("mouseup", stop);
    window.addEventListener("mousemove", (e) => move(e.clientX));

    handle.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchend", stop);
    window.addEventListener(
      "touchmove",
      (e) => {
        if (dragging && e.touches[0]) move(e.touches[0].clientX);
      },
      { passive: true }
    );

    // Click anywhere on slider to jump
    root.addEventListener("click", (e) => {
      if (e.target === handle || handle.contains(e.target)) return;
      fromClientX(e.clientX);
    });

    setPosition(50);
  }
  document.querySelectorAll(".ba-slider").forEach(initBASlider);

  /* Before/after set tabs (if multiple comparison sets exist) */
  const baSets = {
    1: { before: "assets/images/before-01.jpg", after: "assets/images/after-01.jpg" },
    2: { before: "assets/images/before-02.jpg", after: "assets/images/after-02.jpg" },
  };
  document.querySelectorAll(".ba-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".ba-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const set = baSets[tab.dataset.set];
      if (!set) return;
      const slider = document.querySelector(".ba-slider");
      slider.querySelector(".ba-before").src = set.before;
      slider.querySelector(".ba-after-wrap img").src = set.after;
    });
  });

  /* ---------------------------------------------------------------------
     BACK TO TOP
     --------------------------------------------------------------------- */
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      () => backToTop.classList.toggle("show", window.scrollY > 700),
      { passive: true }
    );
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
  }

  /* ---------------------------------------------------------------------
     FOOTER YEAR
     --------------------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------------
     SMOOTH ANCHOR SCROLL (accounts for fixed navbar height)
     --------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById("navbar")?.offsetHeight || 84;
      const top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });
})();
