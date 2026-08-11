const depth = document.body.dataset.depth === "root" ? "" : "../";
const topShell = document.getElementById("site-shell-top");
const bottomShell = document.getElementById("site-shell-bottom");

const pages = [
  ["home", "Home", `${depth}home/index.html`],
  ["programs", "Programs", `${depth}programs/index.html`],
  ["project-samples", "Projects", `${depth}project-samples/index.html`],
  ["events", "Events", `${depth}events/index.html`],
  ["team", "Team", `${depth}team/index.html`],
  ["contact", "Contact", `${depth}contact/index.html`],
];

const brandMark = `
  <span class="brand-mark" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="m9 6-6 6 6 6M15 6l6 6-6 6M14 4l-4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
`;

if (topShell) {
  topShell.innerHTML = `
    <nav class="site-nav" data-site-nav>
      <div class="nav-inner">
        <a class="brand" href="${depth}index.html" aria-label="CodeUnity home">
          ${brandMark}
          <span>CodeUnity</span>
        </a>
        <div class="nav-links" data-menu>
          ${pages.map(([id, label, href]) => `<a href="${href}" data-page-link="${id}">${label}</a>`).join("")}
          <a class="button primary nav-mobile-cta" href="https://forms.gle/LGbbzjfVSJiERgML7" target="_blank" rel="noreferrer">Enroll Now</a>
        </div>
        <div class="nav-actions">
          <a class="button primary" href="https://forms.gle/LGbbzjfVSJiERgML7" target="_blank" rel="noreferrer">Enroll Now</a>
        </div>
        <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-label="Open navigation menu"></button>
      </div>
    </nav>
  `;
}

if (bottomShell) {
  bottomShell.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <section>
            <a class="footer-brand" href="${depth}index.html">
              ${brandMark}
              <span>CodeUnity</span>
            </a>
            <p>Code Together. Grow Together. Breaking barriers in tech education across Massachusetts, Minnesota, Rhode Island, New Jersey, and Florida.</p>
            <div class="footer-social" aria-label="Social links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>
          </section>
          <section>
            <h2>Quick Links</h2>
            <ul>
              <li><a href="${depth}programs/index.html">C.O.R.E Program</a></li>
              <li><a href="${depth}programs/index.html">TurtleLab Program</a></li>
              <li><a href="${depth}project-samples/index.html">Student Projects</a></li>
              <li><a href="${depth}events/index.html">Events</a></li>
              <li><a href="https://forms.gle/LGbbzjfVSJiERgML7" target="_blank" rel="noreferrer">Student Enrollment</a></li>
            </ul>
          </section>
          <section>
            <h2>Where We Are</h2>
            <ul class="dot-list">
              <li>Massachusetts</li>
              <li>Minnesota</li>
              <li>Rhode Island</li>
              <li>New Jersey</li>
              <li>Florida</li>
            </ul>
            <p class="mt-4"><em>...and expanding!</em></p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <ul>
              <li><a href="mailto:lashika.codeunity@gmail.com">lashika.codeunity@gmail.com</a></li>
              <li><a href="mailto:saanvi.codeunity@gmail.com">saanvi.codeunity@gmail.com</a></li>
              <li><a href="mailto:sneha.codeunity@gmail.com">sneha.codeunity@gmail.com</a></li>
              <li><a href="https://forms.gle/NMccEcTzwVXDVzf1A" target="_blank" rel="noreferrer">Contact Form</a></li>
            </ul>
          </section>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 CodeUnity. All rights reserved. 501(c)(3) Nonprofit Organization.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

const nav = document.querySelector("[data-site-nav]");
const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const pageName = document.body.dataset.page;

function updateNavState() {
  nav?.classList.toggle("is-scrolled", window.scrollY > 20);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  nav?.classList.remove("menu-active");
  menu?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open navigation menu");
  if (menuButton) {
    menuButton.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }
}

function openMenu() {
  document.body.classList.add("menu-open");
  nav?.classList.add("menu-active");
  menu?.classList.add("open");
  menuButton?.setAttribute("aria-expanded", "true");
  menuButton?.setAttribute("aria-label", "Close navigation menu");
  if (menuButton) {
    menuButton.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }
}

document.querySelectorAll("[data-page-link]").forEach((link) => {
  link.classList.toggle("active", link.dataset.pageLink === pageName);
});

menuButton?.addEventListener("click", () => {
  if (menu?.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-page-link]");
  if (link && menu?.classList.contains("open")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.classList.contains("open")) {
    closeMenu();
    menuButton?.focus();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

window.addEventListener("scroll", updateNavState, { passive: true });
updateNavState();
closeMenu();
