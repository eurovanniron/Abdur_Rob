/* ==========================================================================
   TESTIMONIALS — sample/demo data and slider
   IMPORTANT: These are placeholder reviews for demonstration only.
   Replace with verified client testimonials before publishing.
   ========================================================================== */
(function () {
  "use strict";

  const TESTIMONIALS = [
    {
      name: "Mohammed Al-Qahtani",
      role: "Homeowner, Al Madaya",
      project: "Villa Renovation",
      rating: 5,
      text: "Abdur Rob handled our villa renovation from start to finish. Every stage of the electrical and plumbing work was explained clearly before it began, and the finish looks excellent.",
    },
    {
      name: "Fahad Hakami",
      role: "Restaurant Owner, Jazan City",
      project: "Restaurant Interior Fit-Out",
      rating: 5,
      text: "Our kitchen ventilation and dining interior were completed on schedule. Clear communication about cost and timing made the whole process easy to plan around.",
    },
    {
      name: "Sara Abdullah",
      role: "Office Manager, Abu Arish",
      project: "Office Renovation",
      rating: 5,
      text: "The UPS and electrical upgrade for our office was handled with real attention to detail. It's clear this comes from decades of hands-on experience.",
    },
    {
      name: "Ibrahim Zaila",
      role: "Shop Owner, Sabya",
      project: "Retail Interior",
      rating: 5,
      text: "A small shop project, but treated with the same care as a large one. The lighting and interior finishing gave the space a completely new feel.",
    },
  ];

  const track = document.getElementById("testiTrack");
  const dotsWrap = document.getElementById("testiDots");
  if (!track) return;

  function starSVG() {
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z"/></svg>`;
  }

  track.innerHTML = TESTIMONIALS.map(
    (t) => `
    <div class="testi-slide">
      <div class="testi-card">
        <div class="testi-quote">&ldquo;</div>
        <div class="testi-stars">${starSVG().repeat(t.rating)}</div>
        <p class="testi-text">${t.text}</p>
        <div class="testi-name">${t.name}</div>
        <div class="testi-role">${t.role} &middot; ${t.project}</div>
      </div>
    </div>`
  ).join("");

  dotsWrap.innerHTML = TESTIMONIALS.map((_, i) => `<span data-i="${i}" class="${i === 0 ? "active" : ""}"></span>`).join("");

  let current = 0;
  let autoTimer = null;

  function goTo(i) {
    current = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll("span").forEach((d, idx) => d.classList.toggle("active", idx === current));
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), 6000);
  }
  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  document.getElementById("testiPrev")?.addEventListener("click", () => { goTo(current - 1); startAuto(); });
  document.getElementById("testiNext")?.addEventListener("click", () => { goTo(current + 1); startAuto(); });
  dotsWrap.addEventListener("click", (e) => {
    if (e.target.dataset.i !== undefined) { goTo(Number(e.target.dataset.i)); startAuto(); }
  });

  /* Pause autoplay when the section is off-screen */
  const section = document.getElementById("reviews");
  if ("IntersectionObserver" in window && section) {
    new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? startAuto() : stopAuto()));
    }, { threshold: 0.3 }).observe(section);
  } else {
    startAuto();
  }

  /* Basic swipe support */
  let touchStartX = null;
  track.addEventListener("touchstart", (e) => (touchStartX = e.touches[0].clientX), { passive: true });
  track.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
      touchStartX = null;
      startAuto();
    },
    { passive: true }
  );
})();
