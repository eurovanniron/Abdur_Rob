# Abdur Rob — MEP & Interior Specialist Website

A luxury, dark-themed, mobile-first static business website designed for **Abdur Rob Miah** (MEP & Interior Specialist based in Al Madaya, Jazan Region, Saudi Arabia).

## Features
- **Zero-Backend Architecture:** 100% static HTML5, CSS3, and Vanilla JavaScript.
- **Client-Side Data Management:** All services, portfolio projects, testimonials, certificates, FAQs, and social links are managed inside `/js/site-data.js`.
- **Tri-lingual Engine (Arabic default, English, Bangla):** Instant switching without page reload. Full RTL support for Arabic.
- **Direct Leads Dispatcher:** Native JavaScript logic compiles structured quotation form entries into WhatsApp messages (`https://wa.me/966550082140`) and standard `mailto:` links.
- **Interactive UI Components:** Filterable portfolio, before/after slider, media lightbox, testimonial slider, and animated FAQs.
- **Mobile First Design:** Optimized touch targets with a sticky bottom navigation bar on small devices.

## File Hierarchy

```text
abdur-rob-website/
├── index.html
├── README.md
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── rtl.css
│   └── animations.css
└── js/
    ├── site-data.js
    ├── i18n.js
    ├── navigation.js
    ├── projects.js
    ├── gallery.js
    ├── testimonials.js
    ├── forms.js
    └── app.js