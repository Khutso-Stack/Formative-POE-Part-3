✨ JavaScript Enhancements (Part 3 Requirements)

This phase introduced full JavaScript interactivity across the website.
All JavaScript code is contained in js/main.js, which is linked on every page using:

<script src="js/main.js" defer></script>


The defer attribute ensures the script loads after the page content, improving performance and preventing blocking.

🔹 1. FAQ Accordion (Home & About)

A dynamic accordion was implemented to make long answers collapsible:

Each FAQ item expands when clicked.

Only one panel opens at a time (others auto-collapse).

Smooth animations added using max-height and CSS transitions.

Improves readability and reduces scrolling.

This uses DOM manipulation and event listeners to toggle .is-open classes.


🔹 2. Lightbox Image Viewer (Home & Programs)

All gallery images were upgraded with a click-to-enlarge lightbox viewer:

Clicking a .gallery-item opens the image in a full-screen overlay.

Caption automatically generated using the image’s alt text.

Users can close the lightbox via:

the close button (×)

clicking outside the image

This provides an interactive, media-rich experience.


🔹 3. Volunteer Modal Popup (Home Page)

The “Become a Volunteer” button triggers a custom modal window:

Modal opens when the <a id="open-volunteer-modal"> is clicked.

Closes when clicking:

the close icon (#close-volunteer-modal)

outside the modal content

Uses ARIA attributes (aria-hidden) for accessibility.

This improves visibility of volunteer opportunities and increases engagement.


🔹 4. Dynamic “Success Stories” Section

Success stories are generated using JavaScript arrays instead of hard-coded HTML:

A list of children’s stories is stored in an array.

JS loops over this data and creates <article> cards dynamically.

Cards are appended to the #stories-grid container.

This demonstrates DOM creation, iteration, and dynamic content rendering.


🔹 5. Program Search & Filter (Programs Page)

A live, instant search bar was added to filter programs by keywords:

Input field: #program-search-input

Program cards: .program-card with data-tags

JS listens for input events and shows/hides cards based on:

text content (title + description)

tags in data-tags

Examples users can search: nutrition, education, shelter, community, family.

This greatly improves usability and shows practical DOM filtering logic.


🔹 6. Form Validation (Enquiry & Contact Pages)

Both forms use JavaScript-powered validation and error messaging:

Forms:

#enquiry-form

#contact-form

JS checks:

required fields

email format using checkValidity()

minimum/maximum lengths

Invalid inputs get:

.has-error class

Inline <span class="field-error"> messages

Errors scroll with the page for accessibility.

This ensures users cannot submit incomplete forms.


🔹 7. AJAX Simulation (Fake Submit)

Although the site runs on GitHub Pages, the forms simulate real submissions:

JS creates a FormData object.

A fakeSubmit() function returns a Promise with a timeout.

A loading delay replicates real server requests.

On success:

Feedback text appears (#enquiry-feedback or #contact-feedback)

Form resets

This demonstrates knowledge of asynchronous JavaScript and realistic form handling.


🔹 8. Modal, Accordion, Lightbox & Forms Reuse One JS File

All features reuse the same JavaScript file, showing:

✔ Clean separation of structure (HTML) + style (CSS) + behaviour (JS)
✔ Modular functions
✔ Shared event listeners
✔ Reusability across pages



🧩 JavaScript Features (Part 3 Enhancements)

Interactive behaviour for the Helping Hands website is implemented entirely in the external script js/main.js. JavaScript was used to improve user experience, handle form validations, and dynamically update content.

✔ FAQ Accordion

Expandable and collapsible FAQ sections on the Home and About pages using event listeners and DOM manipulation.

✔ Lightbox Image Viewer

Clickable gallery images open in a full-screen lightbox overlay with captions sourced from the alt attribute.

✔ Volunteer Modal Popup

Custom modal opens from the Home page CTA and closes when clicking outside the modal or using the close button.

✔ Dynamic Success Stories

Children’s success stories generated at runtime using JavaScript arrays and DOM element creation.

✔ Program Search Filter

Real-time search input that filters .program-card elements based on keywords and data-tags.

✔ Form Validation (Enquiry & Contact)

JavaScript validates required fields, email format, and message length.
Invalid fields get inline error messages and visual indicators.

✔ AJAX-Style Submission Simulation

Forms mimic asynchronous submission using Promises, show success messages, and reset fields.

All enhancements make the site more interactive, user-friendly, and aligned with the assignment requirements for JavaScript integration (Part 3).



⭐ SEO Section for the Helping Hands NGO Website

Search Engine Optimization (SEO) was implemented across all five pages of the Helping Hands NGO website to improve visibility, accessibility, and discoverability on search engines. The optimisation process focused on structural tags, meta information, image optimisation, and crawler accessibility. The following SEO techniques were implemented to meet assignment requirements and align with best practices.

1. Title Tags Optimization

Each page includes a clear, descriptive, and unique <title> tag to help search engines understand page purpose. Titles contain relevant keywords such as Helping Hands, Children’s Shelter, Programs, and Contact.
Examples include:

Helping Hands – Home

Helping Hands – Our Programs

Helping Hands – Contact

Optimised titles help improve relevance scores and support better indexing.

2. Meta Keywords

Although modern search engines place less priority on meta keywords, they are included for academic and structural completeness.
Keywords chosen are relevant, context-specific, and avoid keyword stuffing. Examples:

<meta name="keywords" content="Helping Hands, Children's Shelter, South Africa NGO, Volunteer Gauteng, Feeding Programs, Child Protection, Education Support">


These keywords reflect the organisation’s services and geographical focus.

3. Meta Descriptions

All pages contain well-written meta descriptions summarising the purpose and content of each page. Descriptions improve click-through rates and help search engines understand page intent.

Example (Home Page):

<meta name="description" content="Helping Hands Children's Shelter provides food, shelter, and education to vulnerable children across Gauteng, South Africa.">


These descriptions are concise, relevant, and under the recommended 160-character limit.


4. Image File Names and ALT Text

Images were optimised using descriptive file names and meaningful alt attributes. This improves SEO and accessibility for users with assistive devices.

Examples:

File name: feeding-program-2.jpg

ALT text: "Feeding program providing meals to children in South Africa"

This ensures that all images contribute to keyword relevance while meeting WCAG accessibility requirements.

5. robots.txt Implementation

A robots.txt file was added to the root directory to instruct web crawlers and enhance indexing behaviour.
The file allows full access to all pages and specifies the location of the sitemap.

robots.txt file:

User-agent: *
Allow: /

Sitemap:(https://khutso-stack.github.io/Formative-POE-Part-3/sitemap.xml)

This ensures search engines can access the site structure without restriction.

6. XML Sitemap

A fully structured XML Sitemap was created to help search engines discover and crawl the website more efficiently.
The sitemap lists all major pages, ensuring they are indexed correctly.

Included pages:

Home

About Us

Programs

Get Involved

Contact

This improves the website's crawl efficiency and supports ranking accuracy.


7. Performance and Page Speed

The website was optimised for speed through:

Using compressed and appropriately sized images

Minimising CSS complexity

Avoiding unnecessary JavaScript

Implementing responsive images using CSS and optimised file formats

These measures improve loading performance on both mobile and desktop devices.


8. Security Considerations

Although GitHub Pages automatically provides HTTPS, additional security best practices were followed:

No inline JavaScript (improves trust and reduces XSS risk)

External scripts loaded with defer to avoid render-blocking

No external insecure HTTP resources

Clean file structure limits attack surface

These enhancements support a safer browsing experience for users.


⭐ SEO Summary Table
SEO Requirement	Status	Description
Title Tags	✔ Complete	Unique, descriptive titles on all pages
Meta Keywords	✔ Complete	Relevant and properly structured keywords
Meta Descriptions	✔ Complete	Clear and optimised for each page
Image ALT Text	✔ Complete	Accessible, descriptive alt attributes
robots.txt	✔ Complete	Allows crawling and links sitemap
sitemap.xml	✔ Complete	Lists all important URLs for indexing
Page Speed	✔ Optimised	Lightweight, responsive layout
Security	✔ Implemented	Secure structure, no inline JS
