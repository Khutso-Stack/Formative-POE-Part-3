/* ===========================
   MAIN JAVASCRIPT FOR WEBSITE
   Helping Hands Children’s Shelter
   =========================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     1. ACCORDION (FAQ)
     =========================== */
  const accordionButtons = document.querySelectorAll(".accordion-item");

  accordionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = btn.classList.contains("is-open");

      // Close all
      accordionButtons.forEach(b => {
        b.classList.remove("is-open");
        const p = b.nextElementSibling;
        if (p) p.style.maxHeight = null;
      });

      // Open current
      if (!isOpen) {
        btn.classList.add("is-open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });


  /* ===========================
     2. MODAL (Become a Volunteer)
     =========================== */
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

    // Close modal when clicking outside
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  setupModal("open-volunteer-modal", "close-volunteer-modal", "volunteer-modal");


  /* ===========================
     3. LIGHTBOX GALLERY
     =========================== */
  const images = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  if (lightbox && images.length > 0) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = img.alt;
        lightbox.classList.add("is-visible");
      });
    });

    const closeLB = () => {
      lightbox.classList.remove("is-visible");
    };

    lightboxClose.addEventListener("click", closeLB);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLB();
    });
  }


  /* ===========================
     4. DYNAMIC STORIES (Home Page)
     =========================== */
  const storiesData = [
    {
      name: "Thando (10)",
      text: "Joined Helping Hands in 2022 and now attends school regularly with improved nutrition."
    },
    {
      name: "Naledi (7)",
      text: "Improved literacy skills after joining our reading club."
    },
    {
      name: "Sipho (13)",
      text: "Now a peer mentor after attending after-school programmes."
    }
  ];

  const storiesGrid = document.getElementById("stories-grid");

  if (storiesGrid) {
    storiesData.forEach(story => {
      const card = document.createElement("article");
      card.className = "card story-card";
      card.innerHTML = `
        <h3>${story.name}</h3>
        <p>${story.text}</p>
      `;
      storiesGrid.appendChild(card);
    });
  }


  /* ======================================================
     5. FORM VALIDATION + ERROR HANDLING (Enquiry & Contact)
     ====================================================== */

  function validateForm(form, feedbackEl) {
    let valid = true;

    // Clear previous errors
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

    if (!valid) {
      feedbackEl.textContent = "Please correct the highlighted fields and try again.";
      feedbackEl.classList.add("error");
    }

    return valid;
  }

  // Fake backend submit (AJAX simulation)
  async function fakeSubmit(formData) {
    return new Promise(resolve => setTimeout(resolve, 800));
  }

  /* ENQUIRY FORM */
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

      enquiryFeedback.textContent = "Thank you! Your enquiry has been received.";
      enquiryFeedback.classList.add("success");
      enquiryForm.reset();
    });
  }

  /* CONTACT FORM */
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

      contactFeedback.textContent = "Your message has been sent. We will respond soon.";
      contactFeedback.classList.add("success");
      contactForm.reset();
    });
  }

});
