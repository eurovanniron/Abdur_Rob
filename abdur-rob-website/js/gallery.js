/**
 * Gallery Renderer with Filter and Lightbox System
 */
let currentGalleryItems = [];
let currentLightboxIndex = 0;

function renderGallery(filter = "all") {
  const container = document.getElementById("galleryGrid");
  if (!container) return;

  currentGalleryItems = (filter === "all")
    ? siteData.gallery
    : siteData.gallery.filter(g => g.category === filter);

  container.innerHTML = currentGalleryItems.map((item, index) => `
    <div class="gallery-item" onclick="openLightbox(${index})">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-caption">${item.title}</span>
      </div>
    </div>
  `).join('');
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  
  if (currentGalleryItems[index]) {
    img.src = currentGalleryItems[index].image;
    caption.textContent = currentGalleryItems[index].title;
    modal.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();

  const filterBtns = document.querySelectorAll("#galleryFilters .filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.getAttribute("data-gfilter"));
    });
  });

  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  if (prevBtn) prevBtn.addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex > 0) ? currentLightboxIndex - 1 : currentGalleryItems.length - 1;
    openLightbox(currentLightboxIndex);
  });
  if (nextBtn) nextBtn.addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex < currentGalleryItems.length - 1) ? currentLightboxIndex + 1 : 0;
    openLightbox(currentLightboxIndex);
  });
});