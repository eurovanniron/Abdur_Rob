/* ==========================================================================
   FORMS — quote request form, WhatsApp message builder, mailto builder
   No backend, no database. The browser only PREPARES the message —
   the visitor must press Send in WhatsApp or their email app themselves.
   ========================================================================== */
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "966550082140"; // no + or spaces, used for wa.me link
  const EMAIL_ADDRESS = "eurovanniron@gmail.com";

  const form = document.getElementById("quoteForm");
  if (!form) return;

  const fields = {
    name: form.querySelector("#f_name"),
    phone: form.querySelector("#f_phone"),
    whatsapp: form.querySelector("#f_whatsapp"),
    email: form.querySelector("#f_email"),
    projectType: form.querySelector("#f_projectType"),
    location: form.querySelector("#f_location"),
    service: form.querySelector("#f_service"),
    description: form.querySelector("#f_description"),
    area: form.querySelector("#f_area"),
    budget: form.querySelector("#f_budget"),
    startDate: form.querySelector("#f_startDate"),
  };

  const REQUIRED = ["name", "phone", "projectType", "location", "service", "description"];

  function clearErrors() {
    Object.values(fields).forEach((el) => {
      if (!el) return;
      el.classList.remove("invalid");
      const err = document.getElementById(el.id + "_error");
      if (err) err.textContent = "";
    });
  }

  function validate() {
    clearErrors();
    let valid = true;
    REQUIRED.forEach((key) => {
      const el = fields[key];
      if (el && !el.value.trim()) {
        el.classList.add("invalid");
        const err = document.getElementById(el.id + "_error");
        if (err) err.textContent = "This field is required.";
        valid = false;
      }
    });
    return valid;
  }

  function val(key) {
    const el = fields[key];
    return el && el.value.trim() ? el.value.trim() : "Not specified";
  }

  function buildMessageLines() {
    return [
      "Hello Abdur Rob,",
      "",
      "I would like to request a quotation.",
      "",
      `Name: ${val("name")}`,
      `Phone: ${val("phone")}`,
      `WhatsApp: ${fields.whatsapp && fields.whatsapp.value.trim() ? fields.whatsapp.value.trim() : val("phone")}`,
      `Email: ${val("email")}`,
      `Project Type: ${val("projectType")}`,
      `Location: ${val("location")}`,
      `Service: ${val("service")}`,
      `Project Area: ${val("area")}`,
      `Estimated Budget: ${val("budget")}`,
      `Expected Start Date: ${val("startDate")}`,
      "",
      "Project Details:",
      val("description"),
      "",
      "Please let me know the next steps.",
    ];
  }

  function showFormMessage(text, isError) {
    let msgEl = document.getElementById("formStatusMsg");
    if (!msgEl) {
      msgEl = document.createElement("p");
      msgEl.id = "formStatusMsg";
      msgEl.className = "form-note";
      form.querySelector(".form-actions").after(msgEl);
    }
    msgEl.textContent = text;
    msgEl.style.color = isError ? "#d98066" : "var(--gold)";
  }

  /* ---- WhatsApp ---- */
  document.getElementById("sendWhatsapp")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validate()) {
      showFormMessage("Please fill in the required fields marked with *.", true);
      return;
    }
    const message = buildMessageLines().join("\n");
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener");
    showFormMessage("WhatsApp has been opened with your message ready — press Send to submit it.", false);
  });

  /* ---- Email ---- */
  document.getElementById("sendEmail")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validate()) {
      showFormMessage("Please fill in the required fields marked with *.", true);
      return;
    }
    const subject = encodeURIComponent("Project Inquiry — Abdur Rob");
    const body = encodeURIComponent(buildMessageLines().join("\n"));
    const mailto = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    showFormMessage("Your email app should now open with the message ready — press Send to submit it.", false);
  });

  /* Prevent native submit (no backend to receive it) */
  form.addEventListener("submit", (e) => e.preventDefault());

  /* Clear individual field error on input */
  Object.values(fields).forEach((el) => {
    if (!el) return;
    el.addEventListener("input", () => {
      el.classList.remove("invalid");
      const err = document.getElementById(el.id + "_error");
      if (err) err.textContent = "";
    });
  });
})();