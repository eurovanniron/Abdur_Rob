/* ==========================================================================
   PROJECTS — data, grid render, filter, full-screen modal
   Edit the PROJECTS array below to add / change / remove projects.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     PROJECT DATA
     category must be one of: residential, commercial, interior, mep, renovation
     images[0] is used as the card cover; all images appear in the modal.
     --------------------------------------------------------------------- */
  const PROJECTS = [
    {
      id: 1,
      title: "Modern Residence",
      type: "Residential",
      category: "residential",
      location: "Al Madaya, Jazan",
      duration: "6 weeks",
      area: "320 m²",
      services: ["Interior Development", "Electrical", "Plumbing"],
      description:
        "Complete interior refresh and MEP upgrade for a family home, covering new wiring, updated plumbing lines and a full interior finish including false ceiling and lighting design.",
      images: ["assets/images/project-01.jpg", "assets/images/project-01-2.jpg", "assets/images/project-01-3.jpg"],
    },
    {
      id: 2,
      title: "Riverside Restaurant Fit-Out",
      type: "Restaurant",
      category: "commercial",
      location: "Jazan City",
      duration: "8 weeks",
      area: "480 m²",
      services: ["Interior", "HVAC", "Electrical", "Fire Alarm"],
      description:
        "Kitchen and dining area fit-out with new ventilation, electrical distribution and a fire alarm system, finished with a warm, modern interior identity.",
      images: ["assets/images/project-02.jpg", "assets/images/project-02-2.jpg", "assets/images/project-02-3.jpg"],
    },
    {
      id: 3,
      title: "Corporate Office Renovation",
      type: "Office",
      category: "commercial",
      location: "Abu Arish, Jazan",
      duration: "5 weeks",
      area: "600 m²",
      services: ["Renovation", "Electrical", "CCTV", "UPS / IPS"],
      description:
        "Office-wide renovation including partitioning, DB upgrades, structured CCTV coverage and a backup power (UPS) setup for uninterrupted operations.",
      images: ["assets/images/project-03.jpg", "assets/images/project-03-2.jpg", "assets/images/project-03-3.jpg"],
    },
    {
      id: 4,
      title: "Villa Full Renovation",
      type: "Residential",
      category: "renovation",
      location: "Al Madaya, Jazan",
      duration: "10 weeks",
      area: "540 m²",
      services: ["Renovation", "Plumbing", "Mechanical", "Interior"],
      description:
        "Ground-up villa renovation covering plumbing replacement, HVAC servicing, structural finishing and a complete interior redesign across all rooms.",
      images: ["assets/images/project-04.jpg", "assets/images/project-04-2.jpg", "assets/images/project-04-3.jpg"],
    },
    {
      id: 5,
      title: "Retail Shop Interior",
      type: "Shop",
      category: "interior",
      location: "Sabya, Jazan",
      duration: "3 weeks",
      area: "140 m²",
      services: ["Interior", "Decoration", "Electrical"],
      description:
        "Compact retail interior with custom lighting, decorative wall finishes and a fresh electrical layout designed around the shop's display needs.",
      images: ["assets/images/project-05.jpg", "assets/images/project-05-2.jpg", "assets/images/project-05-3.jpg"],
    },
    {
      id: 6,
      title: "Hotel Suite MEP Upgrade",
      type: "Hotel",
      category: "mep",
      location: "Jazan City",
      duration: "4 weeks",
      area: "260 m²",
      services: ["Mechanical", "Electrical", "Plumbing", "HVAC"],
      description:
        "Full MEP upgrade across a block of hotel suites — new AC units, refreshed plumbing lines and an updated electrical circuit for guest comfort and safety.",
      images: ["assets/images/project-06.jpg", "assets/images/project-06-2.jpg", "assets/images/project-06-3.jpg"],
    },
    {
      id: 7,
      title: "Industrial Facility Maintenance",
      type: "Industrial",
      category: "mep",
      location: "Jazan Industrial Zone",
      duration: "Ongoing",
      area: "1,200 m²",
      services: ["Generator Repair", "Machine Repair", "Electrical"],
      description:
        "Scheduled maintenance and repair for facility generators, production machinery and the site's electrical distribution network.",
      images: ["assets/images/project-07.jpg", "assets/images/project-07-2.jpg", "assets/images/project-07-3.jpg"],
    },
    {
      id: 8,
      title: "Apartment Interior Upgrade",
      type: "Residential",
      category: "interior",
      location: "Al Madaya, Jazan",
      duration: "4 weeks",
      area: "180 m²",
      services: ["Interior", "Home Decoration", "Civil Work"],
      description:
        "A tailored interior upgrade covering flooring, tiling, false ceiling and decorative lighting to modernise a family apartment.",
      images: ["assets/images/project-08.jpg", "assets/images/project-08-2.jpg", "assets/images/project-08-3.jpg"],
    },
  ];

  const grid = document.getElementById("projectsGrid");
  const filterBar = document.getElementById("projectFilters");
  if (!grid) return;

  /* ---- Render grid ---- */
  function renderGrid() {
    grid.innerHTML = PROJECTS.map(
      (p, i) => `
      <article class="project-card reveal" data-category="${p.category}" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.title} project details">
        <img src="${p.images[0]}" alt="${p.title} — ${p.type} project in ${p.location}" loading="lazy">
        <div class="project-overlay"></div>
        <span class="project-num">${String(i + 1).padStart(2, "0")}</span>
        <div class="project-info">
          <span class="project-type">${p.type} &middot; ${p.location}</span>
          <h3>${p.title}</h3>
          <p class="project-loc">${p.services.slice(0, 2).join(" · ")}</p>
          <span class="project-view">View Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </article>`
    ).join("");
  }
  renderGrid();

  /* ---- Filtering ---- */
  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll("#projectsGrid .project-card").forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden-card", !match);
      });
    });
  }

  /* ---------------------------------------------------------------------
     MODAL
     --------------------------------------------------------------------- */
  const modal = document.getElementById("projectModal");
  const modalGallery = document.getElementById("modalGallery");
  const modalDots = document.getElementById("modalDots");
  const modalBody = document.getElementById("modalBody");
  let activeProject = null;
  let activeImgIndex = 0;

  function openModal(id) {
    const p = PROJECTS.find((proj) => proj.id === Number(id));
    if (!p) return;
    activeProject = p;
    activeImgIndex = 0;
    renderModal();
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function renderModal() {
    const p = activeProject;
    modalGallery.querySelector("img")?.remove();
    const img = document.createElement("img");
    img.src = p.images[activeImgIndex];
    img.alt = p.title + " image " + (activeImgIndex + 1);
    modalGallery.prepend(img);

    modalDots.innerHTML = p.images
      .map((_, i) => `<span class="${i === activeImgIndex ? "active" : ""}" data-i="${i}"></span>`)
      .join("");

    modalBody.innerHTML = `
      <span class="project-type">${p.type} &middot; ${p.location}</span>
      <h2>${p.title}</h2>
      <div class="modal-meta">
        <div><span>Type</span><strong>${p.type}</strong></div>
        <div><span>Location</span><strong>${p.location}</strong></div>
        <div><span>Duration</span><strong>${p.duration}</strong></div>
        <div><span>Area</span><strong>${p.area}</strong></div>
      </div>
      <p class="desc">${p.description}</p>
      <div class="modal-services">${p.services.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
    `;
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function nextImage(dir) {
    if (!activeProject) return;
    const len = activeProject.images.length;
    activeImgIndex = (activeImgIndex + dir + len) % len;
    renderModal();
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (card) openModal(card.dataset.id);
  });
  grid.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".project-card")) {
      e.preventDefault();
      openModal(e.target.closest(".project-card").dataset.id);
    }
  });

  document.getElementById("modalClose")?.addEventListener("click", closeModal);
  document.getElementById("modalPrev")?.addEventListener("click", () => nextImage(-1));
  document.getElementById("modalNext")?.addEventListener("click", () => nextImage(1));
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  modalDots?.addEventListener("click", (e) => {
    if (e.target.dataset.i !== undefined) {
      activeImgIndex = Number(e.target.dataset.i);
      renderModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") nextImage(-1);
    if (e.key === "ArrowRight") nextImage(1);
  });
})();