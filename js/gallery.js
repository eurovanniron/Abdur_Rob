/**
 * Gallery Renderer with Filter, Source & Lightbox System
 */

// ===============================
// Gallery Data
// ===============================

const galleryData = [

  {
    title: "Electrical Installation Work",
    category: "electrical",
    image: "assets/images/gallery/electrical-01.jpg",
    source: "Own Photo",
  },

  {
    title: "Electrical Distribution Panel",
    category: "electrical",
    image: "assets/images/gallery/electrical-02.jpg",
    source: "Own Photo",
  },

  {
    title: "Electrical Installation Work",
    category: "electrical",
    image: "assets/images/gallery/electrical-03.jpg",
    source: "Own Photo",
  },

  {
    title: "Bathroom Renovation",
    category: "interior",
    image: "assets/images/gallery/interior-01.jpg",
    source: "Sample Photo",
  },

  {
    title: "Drowing Room Renovation",
    category: "interior",
    image: "assets/images/gallery/interior-02.jpg",
    source: "Sample Photo",
  },
  {
    title: "Drowning Room Renovation",
    category: "interior",
    image: "assets/images/gallery/interior-03.jpg",
    source: "Own Photo",
  },
  {
    title: "Working time",
    category: "mechanical",
    image: "assets/images/gallery/mechanical-01.jpg",
    source: "Own Photo",
  },
  {
    title: "Our Team",
    category: "mechanical",
    image: "assets/images/gallery/mechanical-02.jpg",
    source: "Own Photo",
  },
  {
    title: "Working time",
    category: "mechanical",
    image: "assets/images/gallery/mechanical-03.jpg",
    source: "Own Photo",
  },
  {
    title: "Washroom Renovation",
    category: "renovation",
    image: "assets/images/gallery/other-01.jpg",
    source: "Own Photo",
  },
  {
    title: "Washroom Renovation",
    category: "renovation",
    image: "assets/images/gallery/other-02.jpg",
    source: "Own Photo",
  },
  {
    title: "Plumbing Work",
    category: "plumbing",
    image: "assets/images/gallery/plumbing-01.jpg",
    source: "Own Photo",
  },
   {
    title: "Plumbing Work",
    category: "plumbing",
    image: "assets/images/gallery/plumbing-02.jpg",
    source: "Own Photo",
  },
   {
    title: "Complete project",
    category: "renovation",
    image: "assets/images/gallery/renovation-03.jpg",
    source: "Own Photo",
  },

];


// ===============================
// Gallery Variables
// ===============================

let currentGalleryItems = [];
let currentLightboxIndex = 0;


// ===============================
// Render Gallery
// ===============================

function renderGallery(filter = "all") {

  const container = document.getElementById("galleryGrid");

  if (!container) return;


  // Filter gallery items
  if (filter === "all") {
    currentGalleryItems = galleryData;
  } else {
    currentGalleryItems = galleryData.filter(
      item => item.category === filter
    );
  }


  // If no image found
  if (currentGalleryItems.length === 0) {

    container.innerHTML = `
      <div class="no-gallery-item">
        <p>No images found.</p>
      </div>
    `;

    return;
  }


  // Create gallery HTML
  container.innerHTML = currentGalleryItems.map((item, index) => {

    return `
      <div class="gallery-item"
           onclick="openLightbox(${index})">

        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy"
        >

        <div class="gallery-overlay">

          <span class="gallery-caption">
            ${item.title}
          </span>

          <span class="gallery-source">
            Source:
            
            <a
              href="${item.sourceUrl}"
              target="_blank"
              rel="noopener noreferrer"
              onclick="event.stopPropagation();")
            >
              ${item.source}
            </a>

          </span>

        </div>

      </div>
    `;

  }).join("");
}


// ===============================
// Open Lightbox
// ===============================

function openLightbox(index) {

  currentLightboxIndex = index;

  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const source = document.getElementById("lightboxSource");


  // Check item
  if (!currentGalleryItems[index]) {
    return;
  }


  const item = currentGalleryItems[index];


  // Set image
  img.src = item.image;

  // Set image title
  caption.textContent = item.title;


  // Set source
  if (source) {

    source.innerHTML = `
      Source:
      <span>${item.source}</span>
    `;

  }


  // Show modal
  modal.classList.add("active");


  // Prevent body scrolling
  document.body.style.overflow = "hidden";
}


// ===============================
// Close Lightbox
// ===============================

function closeLightbox() {

  const modal = document.getElementById("lightboxModal");

  if (!modal) return;

  modal.classList.remove("active");

  // Enable body scrolling again
  document.body.style.overflow = "";
}


// ===============================
// Previous Image
// ===============================

function showPreviousImage() {

  if (currentGalleryItems.length === 0) return;


  if (currentLightboxIndex > 0) {

    currentLightboxIndex--;

  } else {

    currentLightboxIndex =
      currentGalleryItems.length - 1;

  }


  openLightbox(currentLightboxIndex);
}


// ===============================
// Next Image
// ===============================

function showNextImage() {

  if (currentGalleryItems.length === 0) return;


  if (
    currentLightboxIndex <
    currentGalleryItems.length - 1
  ) {

    currentLightboxIndex++;

  } else {

    currentLightboxIndex = 0;

  }


  openLightbox(currentLightboxIndex);
}


// ===============================
// DOM Loaded
// ===============================

document.addEventListener("DOMContentLoaded", function () {


  // ============================
  // Initial Gallery
  // ============================

  renderGallery("all");


  // ============================
  // Filter Buttons
  // ============================

  const filterButtons =
    document.querySelectorAll(
      "#galleryFilters .filter-btn"
    );


  filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


      // Remove active class
      filterButtons.forEach(function (btn) {

        btn.classList.remove("active");

      });


      // Add active class
      button.classList.add("active");


      // Get filter value
      const filter =
        button.getAttribute("data-gfilter");


      // Render filtered gallery
      renderGallery(filter);

    });

  });


  // ============================
  // Lightbox Elements
  // ============================

  const modal =
    document.getElementById("lightboxModal");

  const closeButton =
    document.getElementById("lightboxClose");

  const previousButton =
    document.getElementById("lightboxPrev");

  const nextButton =
    document.getElementById("lightboxNext");


  // ============================
  // Close Button
  // ============================

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeLightbox
    );

  }


  // ============================
  // Previous Button
  // ============================

  if (previousButton) {

    previousButton.addEventListener(
      "click",
      showPreviousImage
    );

  }


  // ============================
  // Next Button
  // ============================

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      showNextImage
    );

  }


  // ============================
  // Close when clicking outside
  // ============================

  if (modal) {

    modal.addEventListener(
      "click",
      function (event) {

        if (event.target === modal) {

          closeLightbox();

        }

      }
    );

  }


  // ============================
  // Keyboard Controls
  // ============================

  document.addEventListener(
    "keydown",
    function (event) {

      // ESC = Close
      if (event.key === "Escape") {

        closeLightbox();

      }


      // Left Arrow = Previous
      if (event.key === "ArrowLeft") {

        showPreviousImage();

      }


      // Right Arrow = Next
      if (event.key === "ArrowRight") {

        showNextImage();

      }

    }
  );

});
