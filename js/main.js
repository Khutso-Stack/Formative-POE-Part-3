/* ==========================================
   Helping Hands NGO - Main JavaScript
   Adds interactivity, validation & dynamic content
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     1. FAQ / Info Accordions
     ----------------------------- */
  const accordionButtons = document.querySelectorAll(".accordion-item");

  accordionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = btn.classList.contains("is-open");

      // close all
      accordionButtons.forEach(b => {
        b.classList.remove("is-open");
        const p = b.nextElementSibling;
        if (p && p.classList.contains("accordion-panel")) {
          p.style.maxHeight = null;
        }
      });

      // open clicked one
      if (!isOpen && panel && panel.classList.contains("accordion-panel")) {
        btn.classList.add("is-open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* -----------------------------
     2. Volunteer Modal (Home)
     ----------------------------- */
  function setupModal(openId, closeId, modalId) {
    const openBtn = document.getElementById(openId);
    const closeBtn = document.getElementById(closeId);
    const modal = document.getElementById(modalId);

    if (!openBtn || !closeBtn || !modal) return;

    const openModal = (e) => {
      e.preventDefault();
      modal.classList.add("is-visible");
      modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
      modal.classList.remove("is-visible");
      modal.setAttribute("aria-hidden", "true");
    };

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  setupModal("open-volunteer-modal", "close-volunteer-modal", "volunteer-modal");

  /* -----------------------------
     3. Lightbox Gallery
     ----------------------------- */
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  if (lightbox && lightboxImage && lightboxCaption && lightboxClose && galleryItems.length > 0) {
    galleryItems.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || "";
        lightboxCaption.textContent = img.alt || "";
        lightbox.classList.add("is-visible");
      });
    });

    const closeLB = () => lightbox.classList.remove("is-visible");

    lightboxClose.addEventListener("click", closeLB);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLB();
    });
  }

  /* -----------------------------
     4. Dynamic Success Stories (Home)
     ----------------------------- */
  const storiesData = [
    {
      name: "Thando (10)",
      text: "Joined Helping Hands in 2022 and now attends school regularly with improved nutrition."
    },
    {
      name: "Naledi (7)",
      text: "Improved reading and confidence after joining our after-school homework club."
    },
    {
      name: "Sipho (13)",
      text: "Became a peer mentor after receiving counselling and life-skills support."
    }
  ];

  const storiesGrid = document.getElementById("stories-grid");
  if (storiesGrid) {
    storiesData.forEach(story => {
      const card = document.createElement("article");
      card.className = "card story-card fade-in";
      card.innerHTML = `
        <h3>${story.name}</h3>
        <p>${story.text}</p>
      `;
      storiesGrid.appendChild(card);
    });
  }

  /* -----------------------------
     5. Program Search Filter (Programs)
     ----------------------------- */
  const searchInput = document.getElementById("program-search-input");
  const programCards = document.querySelectorAll(".program-card");

  if (searchInput && programCards.length > 0) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase().trim();

      programCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const tags = (card.dataset.tags || "").toLowerCase();
        const match = !term || text.includes(term) || tags.includes(term);
        card.style.display = match ? "" : "none";
      });
    });
  }

  /* -----------------------------
     6. Shared Form Validation
     ----------------------------- */
  function validateForm(form, feedbackEl) {
    let valid = true;

    form.querySelectorAll(".field-error").forEach(el => el.remove());
    form.querySelectorAll(".has-error").forEach(el => el.classList.remove("has-error"));

    const fields = form.querySelectorAll("input[required], textarea[required], select[required]");

    fields.forEach(field => {
      if (!field.checkValidity()) {
        valid = false;
        field.classList.add("has-error");

        const error = document.createElement("span");
        error.className = "field-error";
        error.textContent = field.validationMessage || "Invalid input.";
        field.insertAdjacentElement("afterend", error);
      }
    });

    if (!valid && feedbackEl) {
      feedbackEl.textContent = "Please correct the highlighted fields and try again.";
      feedbackEl.classList.remove("success");
      feedbackEl.classList.add("error");
    }

    return valid;
  }

  // fake async submit
  function fakeSubmit(formData) {
    return new Promise(resolve => setTimeout(resolve, 800));
  }

  /* -----------------------------
     7. Enquiry Form
     ----------------------------- */
  const enquiryForm = document.getElementById("enquiry-form");
  const enquiryFeedback = document.getElementById("enquiry-feedback");

  if (enquiryForm && enquiryFeedback) {
    enquiryForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      enquiryFeedback.textContent = "";
      enquiryFeedback.classList.remove("error", "success");

      if (!validateForm(enquiryForm, enquiryFeedback)) return;

      const formData = new FormData(enquiryForm);
      await fakeSubmit(formData);

      const name = formData.get("name") || "Friend";
      enquiryFeedback.textContent = `Thank you, ${name}. Your enquiry has been received and we will contact you soon.`;
      enquiryFeedback.classList.add("success");
      enquiryForm.reset();
    });
  }

  /* -----------------------------
     8. Contact Form
     ----------------------------- */
  const contactForm = document.getElementById("contact-form");
  const contactFeedback = document.getElementById("contact-feedback");

  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      contactFeedback.textContent = "";
      contactFeedback.classList.remove("error", "success");

      if (!validateForm(contactForm, contactFeedback)) return;

      const formData = new FormData(contactForm);
      await fakeSubmit(formData);

      const name = formData.get("name") || "Friend";
      contactFeedback.textContent = `Thank you, ${name}. Your message has been sent and we will respond as soon as possible.`;
      contactFeedback.classList.add("success");
      contactForm.reset();
    });
  }

  /* -----------------------------
     9. Fade-in on scroll
     ----------------------------- */
  const fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeElements.forEach((el) => observer.observe(el));
  } else if (fadeElements.length > 0) {
    // Fallback: if IntersectionObserver not supported, just show elements
    fadeElements.forEach((el) => el.classList.add("visible"));
  }

});
