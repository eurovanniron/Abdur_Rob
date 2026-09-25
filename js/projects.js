/* ==========================================================================
   PROJECTS — data, grid render, filter, full-screen modal
   Edit the PROJECTS array below to add / change / remove projects.
   Each translatable field is an { en, ar, bn } object — add all three.
   ========================================================================== */
(function () {
  "use strict";

  function lang() { return (window.ARM_i18n && window.ARM_i18n.getLang()) || "en"; }
  function tr(obj) { return obj[lang()] || obj.en; }
  function t(key) { return (window.ARM_i18n && window.ARM_i18n.t(key)) || key; }

  /* ---------------------------------------------------------------------
     PROJECT DATA
     category must be one of: residential, commercial, interior, mep, renovation
     images[0] is used as the card cover; all images appear in the modal.
     Location names are kept as proper nouns (same across languages).
     --------------------------------------------------------------------- */
  const PROJECTS = [
    {
      id: 1,
      title: { en:"Modern Residence", ar:"منزل عصري", bn:"আধুনিক বাসভবন" },
      type: { en:"Residential", ar:"سكني", bn:"আবাসিক" },
      category: "residential",
      location: "Al Madaya, Jazan",
      duration: { en:"6 weeks", ar:"6 أسابيع", bn:"৬ সপ্তাহ" },
      area: "320 m²",
      services: { en:["Interior Development","Electrical","Plumbing"], ar:["تطوير الديكور الداخلي","كهرباء","سباكة"], bn:["ইন্টেরিয়র ডেভেলপমেন্ট","ইলেকট্রিক্যাল","প্লাম্বিং"] },
      description: {
        en:"Complete interior refresh and MEP upgrade for a family home, covering new wiring, updated plumbing lines and a full interior finish including false ceiling and lighting design.",
        ar:"تجديد داخلي كامل وترقية الأعمال الكهروميكانيكية لمنزل عائلي، يشمل تمديدات كهربائية جديدة، تحديث خطوط السباكة، وتشطيب داخلي كامل بما في ذلك الأسقف المستعارة وتصميم الإضاءة.",
        bn:"একটি পারিবারিক বাসার জন্য সম্পূর্ণ ইন্টেরিয়র রিফ্রেশ ও এমইপি আপগ্রেড, যার মধ্যে রয়েছে নতুন ওয়্যারিং, আপডেটেড প্লাম্বিং লাইন এবং ফলস সিলিং ও লাইটিং ডিজাইনসহ সম্পূর্ণ ইন্টেরিয়র ফিনিশিং।"
      },
      images: ["assets/images/project-01.jpg", "assets/images/project-01-2.jpg", "assets/images/project-01-3.jpg"],
    },
    {
      id: 2,
      title: { en:"Riverside Restaurant Fit-Out", ar:"تجهيز مطعم على النهر", bn:"রিভারসাইড রেস্টুরেন্ট ফিট-আউট" },
      type: { en:"Restaurant", ar:"مطعم", bn:"রেস্টুরেন্ট" },
      category: "commercial",
      location: "Jazan City",
      duration: { en:"8 weeks", ar:"8 أسابيع", bn:"৮ সপ্তাহ" },
      area: "480 m²",
      services: { en:["Interior","Electrical","Fire Alarm"], ar:["ديكور داخلي","تكييف","كهرباء","إنذار حريق"], bn:["ইন্টেরিয়র","এইচভিএসি","ইলেকট্রিক্যাল","ফায়ার অ্যালার্ম"] },
      description: {
        en:"Kitchen and dining area fit-out with new ventilation, electrical distribution and a fire alarm system, finished with a warm, modern interior identity.",
        ar:"تجهيز المطبخ ومنطقة تناول الطعام بتهوية جديدة وتوزيع كهربائي ونظام إنذار حريق، مع تشطيب بهوية داخلية عصرية ودافئة.",
        bn:"নতুন ভেন্টিলেশন, ইলেকট্রিক্যাল ডিস্ট্রিবিউশন ও ফায়ার অ্যালার্ম সিস্টেমসহ কিচেন ও ডাইনিং এরিয়ার ফিট-আউট, একটি উষ্ণ ও আধুনিক ইন্টেরিয়র পরিচয় নিয়ে সম্পন্ন।"
      },
      images: ["assets/images/project-02.jpg", "assets/images/project-02-2.jpg", "assets/images/project-02-3.jpg"],
    },
    {
      id: 3,
      title: { en:"Corporate Office Renovation", ar:"تجديد مكتب شركة", bn:"কর্পোরেট অফিস রেনোভেশন" },
      type: { en:"Office", ar:"مكتب", bn:"অফিস" },
      category: "commercial",
      location: "Abu Arish, Jazan",
      duration: { en:"5 weeks", ar:"5 أسابيع", bn:"৫ সপ্তাহ" },
      area: "600 m²",
      services: { en:["Renovation","Electrical","UPS / IPS"], ar:["ترميم","كهرباء","كاميرات مراقبة","UPS / IPS"], bn:["রেনোভেশন","ইলেকট্রিক্যাল","সিসিটিভি","ইউপিএস/আইপিএস"] },
      description: {
        en:"Office-wide renovation including partitioning, DB upgrades, structured controller coverage and a backup power (UPS) setup for uninterrupted operations.",
        ar:"تجديد شامل للمكتب يشمل التقسيمات، ترقية لوحات التوزيع، تغطية منظمة بكاميرات المراقبة، ونظام طاقة احتياطي (UPS) لضمان استمرارية العمل.",
        bn:"পার্টিশনিং, ডিবি আপগ্রেড, সংগঠিত কভারেজ এবং নিরবচ্ছিন্ন কার্যক্রমের জন্য ব্যাকআপ পাওয়ার (ইউপিএস) সেটআপসহ সম্পূর্ণ অফিস রেনোভেশন।"
      },
      images: ["assets/images/project-03.jpg", "assets/images/project-03-2.jpg", "assets/images/project-03-3.jpg"],
    },
    {
      id: 4,
      title: { en:"Villa Full Renovation", ar:"ترميم فيلا كامل", bn:"ভিলা সম্পূর্ণ রেনোভেশন" },
      type: { en:"Residential", ar:"سكني", bn:"আবাসিক" },
      category: "renovation",
      location: "Al Madaya, Jazan",
      duration: { en:"10 weeks", ar:"10 أسابيع", bn:"১০ সপ্তাহ" },
      area: "540 m²",
      services: { en:["Renovation","Plumbing","Interior"], ar:["ترميم","سباكة","ديكور داخلي"], bn:["রেনোভেশন","প্লাম্বিং","ইন্টেরিয়র"] },
      description: {
        en:"Ground-up villa renovation covering plumbing replacement, structural finishing and a complete interior redesign across all rooms.",
        ar:"ترميم شامل لفيلا من الأساس يشمل استبدال السباكة، صيانة التكييف، التشطيبات الإنشائية وإعادة تصميم داخلي كامل لجميع الغرف.",
        bn:"ভিলার সম্পূর্ণ রেনোভেশন, যার মধ্যে রয়েছে প্লাম্বিং প্রতিস্থাপন, এইচভিএসি সার্ভিসিং, স্ট্রাকচারাল ফিনিশিং এবং সব রুমে সম্পূর্ণ ইন্টেরিয়র রিডিজাইন।"
      },
      images: ["assets/images/project-04.jpg", "assets/images/project-04-2.jpg", "assets/images/project-04-3.jpg"],
    },
    {
      id: 5,
      title: { en:"Retail Shop Interior", ar:"ديكور داخلي لمحل تجاري", bn:"রিটেইল শপ ইন্টেরিয়র" },
      type: { en:"Shop", ar:"محل", bn:"দোকান" },
      category: "interior",
      location: "Sabya, Jazan",
      duration: { en:"3 weeks", ar:"3 أسابيع", bn:"৩ সপ্তাহ" },
      area: "140 m²",
      services: { en:["Interior","Decoration","Electrical"], ar:["ديكور داخلي","تزيين","كهرباء"], bn:["ইন্টেরিয়র","ডেকোরেশন","ইলেকট্রিক্যাল"] },
      description: {
        en:"Compact retail interior with custom lighting, decorative wall finishes and a fresh electrical layout designed around the shop's display needs.",
        ar:"ديكور داخلي مدمج لمحل تجاري مع إضاءة مخصصة، تشطيبات جدارية ديكورية، وتخطيط كهربائي جديد مصمم وفقًا لاحتياجات عرض المحل.",
        bn:"কাস্টম লাইটিং, ডেকোরেটিভ ওয়াল ফিনিশ এবং দোকানের ডিসপ্লে প্রয়োজন অনুযায়ী নতুন ইলেকট্রিক্যাল লেআউটসহ কমপ্যাক্ট রিটেইল ইন্টেরিয়র।"
      },
      images: ["assets/images/project-05.jpg", "assets/images/project-05-2.jpg", "assets/images/project-05-3.jpg"],
    },
    {
      id: 6,
      title: { en:"Hotel Suite MEP Upgrade", ar:"ترقية الأعمال الكهروميكانيكية لجناح فندقي", bn:"হোটেল স্যুট এমইপি আপগ্রেড" },
      type: { en:"Hotel", ar:"فندق", bn:"হোটেল" },
      category: "mep",
      location: "Jazan City",
      duration: { en:"4 weeks", ar:"4 أسابيع", bn:"৪ সপ্তাহ" },
      area: "260 m²",
      services: { en:["Electrical","Plumbing"], ar:["كهرباء","سباكة"], bn:["ইলেকট্রিক্যাল","প্লাম্বিং"] },
      description: {
        en:"Full MEP upgrade across a block of hotel suites — new AC units, refreshed plumbing lines and an updated electrical circuit for guest comfort and safety.",
        ar:"ترقية كاملة للأعمال الكهروميكانيكية في مجموعة من الأجنحة الفندقية — وحدات تكييف جديدة، خطوط سباكة محدثة ودائرة كهربائية محدثة لراحة وسلامة النزلاء.",
        bn:"একটি ব্লকের হোটেল স্যুটে সম্পূর্ণ এমইপি আপগ্রেড — নতুন এসি ইউনিট, রিফ্রেশড প্লাম্বিং লাইন এবং অতিথিদের আরাম ও নিরাপত্তার জন্য আপডেটেড ইলেকট্রিক্যাল সার্কিট।"
      },
      images: ["assets/images/project-06.jpg", "assets/images/project-06-2.jpg", "assets/images/project-06-3.jpg"],
    },
    {
      id: 7,
      title: { en:"Industrial Facility Maintenance", ar:"صيانة منشأة صناعية", bn:"ইন্ডাস্ট্রিয়াল ফ্যাসিলিটি মেইনটেন্যান্স" },
      type: { en:"Industrial", ar:"صناعي", bn:"শিল্প" },
      category: "mep",
      location: "Jazan Industrial Zone",
      duration: { en:"Ongoing", ar:"مستمر", bn:"চলমান" },
      area: "1,200 m²",
      services: { en:["Generator Repair","Machine Repair","Electrical"], ar:["إصلاح المولدات","إصلاح الآلات","كهرباء"], bn:["জেনারেটর মেরামত","মেশিন মেরামত","ইলেকট্রিক্যাল"] },
      description: {
        en:"Scheduled maintenance and repair for facility generators, production machinery and the site's electrical distribution network.",
        ar:"صيانة وإصلاح مجدول لمولدات المنشأة وآلات الإنتاج وشبكة التوزيع الكهربائي للموقع.",
        bn:"স্থাপনার জেনারেটর, উৎপাদন যন্ত্রপাতি এবং সাইটের ইলেকট্রিক্যাল ডিস্ট্রিবিউশন নেটওয়ার্কের জন্য নির্ধারিত মেইনটেনেন্স ও মেরামত।"
      },
      images: ["assets/images/project-07.jpg", "assets/images/project-07-2.jpg", "assets/images/project-07-3.jpg"],
    },
    {
      id: 8,
      title: { en:"Apartment Interior Upgrade", ar:"ترقية ديكور داخلي لشقة", bn:"অ্যাপার্টমেন্ট ইন্টেরিয়র আপগ্রেড" },
      type: { en:"Residential", ar:"سكني", bn:"আবাসিক" },
      category: "interior",
      location: "Al Madaya, Jazan",
      duration: { en:"4 weeks", ar:"4 أسابيع", bn:"৪ সপ্তাহ" },
      area: "180 m²",
      services: { en:["Interior","Home Decoration","Civil Work"], ar:["ديكور داخلي","ديكور منزلي","أعمال مدنية"], bn:["ইন্টেরিয়র","হোম ডেকোরেশন","সিভিল ওয়ার্ক"] },
      description: {
        en:"A tailored interior upgrade covering flooring, tiling, false ceiling and decorative lighting to modernise a family apartment.",
        ar:"ترقية داخلية مخصصة تشمل الأرضيات، البلاط، الأسقف المستعارة والإضاءة الديكورية لتحديث شقة عائلية.",
        bn:"একটি পারিবারিক অ্যাপার্টমেন্ট আধুনিকীকরণের জন্য ফ্লোরিং, টাইলিং, ফলস সিলিং ও ডেকোরেটিভ লাইটিংসহ একটি কাস্টমাইজড ইন্টেরিয়র আপগ্রেড।"
      },
      images: ["assets/images/project-08.jpg", "assets/images/project-08-2.jpg", "assets/images/project-08-3.jpg"],
    },
  ];

  const grid = document.getElementById("projectsGrid");
  const filterBar = document.getElementById("projectFilters");
  if (!grid) return;

  let activeFilter = "all";

  /* ---- Render grid ---- */
  function renderGrid() {
    grid.innerHTML = PROJECTS.map(
      (p, i) => `
      <article class="project-card reveal${activeFilter !== "all" && p.category !== activeFilter ? " hidden-card" : ""}" data-category="${p.category}" data-id="${p.id}" tabindex="0" role="button" aria-label="${t("projectsSection.viewProject")} — ${tr(p.title)}">
        <img src="${p.images[0]}" alt="${tr(p.title)} — ${tr(p.type)} ${p.location}" loading="lazy">
        <div class="project-overlay"></div>
        <span class="project-num">${String(i + 1).padStart(2, "0")}</span>
        <div class="project-info">
          <span class="project-type">${tr(p.type)} &middot; ${p.location}</span>
          <h3>${tr(p.title)}</h3>
          <p class="project-loc">${tr(p.services).slice(0, 2).join(" · ")}</p>
          <span class="project-view">${t("projectsSection.viewProject")}
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
      activeFilter = btn.dataset.filter;
      document.querySelectorAll("#projectsGrid .project-card").forEach((card) => {
        const match = activeFilter === "all" || card.dataset.category === activeFilter;
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
    img.alt = tr(p.title) + " " + (activeImgIndex + 1);
    modalGallery.prepend(img);

    modalDots.innerHTML = p.images
      .map((_, i) => `<span class="${i === activeImgIndex ? "active" : ""}" data-i="${i}"></span>`)
      .join("");

    modalBody.innerHTML = `
      <span class="project-type">${tr(p.type)} &middot; ${p.location}</span>
      <h2>${tr(p.title)}</h2>
      <div class="modal-meta">
        <div><span>${t("modal.type")}</span><strong>${tr(p.type)}</strong></div>
        <div><span>${t("modal.location")}</span><strong>${p.location}</strong></div>
        <div><span>${t("modal.duration")}</span><strong>${tr(p.duration)}</strong></div>
        <div><span>${t("modal.area")}</span><strong>${p.area}</strong></div>
      </div>
      <p class="desc">${tr(p.description)}</p>
      <div class="modal-services">${tr(p.services).map((s) => `<span class="tag">${s}</span>`).join("")}</div>
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

  /* ---- Re-render in the new language when it changes ---- */
  window.addEventListener("langchange", () => {
    renderGrid();
    if (window.ARR_reobserve) window.ARR_reobserve();
    if (modal && modal.classList.contains("open") && activeProject) renderModal();
  });
})();
