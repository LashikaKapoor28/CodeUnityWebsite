const routes = {
  home: renderHome,
  programs: renderPrograms,
  team: renderTeam,
  contact: renderContact,
  projects: renderProjects,
  events: renderEvents,
};

const links = {
  enroll: "https://forms.gle/LGbbzjfVSJiERgML7",
  contact: "https://forms.gle/NMccEcTzwVXDVzf1A",
  team: "https://forms.gle/i4YVVrik8Y7SeXNp6",
};

const programs = [
  {
    title: "C.O.R.E",
    tag: "Algorithm & Problem Solving",
    description:
      "Learn Coding Through Real World Applications. Master problem-solving, algorithmic thinking, and build programs used in the real world.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=900&q=80",
    features: ["Competition prep", "Real-world projects", "Algorithmic thinking", "Collaborative learning"],
    tone: "indigo",
  },
  {
    title: "TurtleLab",
    tag: "Creative & Artistic",
    description:
      "Learn Coding Through Art. Overcome fear of coding by exploring the artistic side and creating visual projects while mastering Python fundamentals.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&q=80",
    features: ["Art-based learning", "Python fundamentals", "Creative projects", "Fun and engaging"],
    tone: "teal",
  },
];

const teamFounders = [
  ["Lashika Kapoor", "Founder and Co-President", "Massachusetts"],
  ["Saanvi Rangarajan", "Co-Founder and Co-President", "Minnesota"],
  ["Sneha Nagarajan", "Co-Founder and Co-President", "Massachusetts"],
];

const teamGroups = [
  {
    title: "Web Development Crew",
    color: "indigo",
    members: [["Kabir Tiwari", "Head of Web Development", "Massachusetts"]],
  },
  {
    title: "Outreach Team",
    color: "teal",
    members: [
      ["Anvi Jain", "Head of Outreach", "Massachusetts"],
      ["Aashritha Katuri", "Outreach Member", "Massachusetts"],
    ],
  },
  {
    title: "Social Media Team",
    color: "rose",
    members: [["Nissi Sanju", "Social Media Lead", "Florida"]],
  },
  {
    title: "Mentor Team",
    color: "amber",
    members: [
      ["Anvi Jain", "Mentor", ""],
      ["Nissi Sanju", "Mentor", ""],
      ["Saanvi Rangarajan", "Mentor", ""],
      ["Sneha Nagarajan", "Mentor", ""],
      ["Lashika Kapoor", "Mentor", ""],
    ],
  },
];

const faqs = [
  [
    "Are your programs really free?",
    "Yes! All CodeUnity programs cost $0 for students. We believe talent should not be limited by circumstance.",
  ],
  [
    "What are the requirements to join?",
    "No prior coding experience is required. Our programs are designed for beginners and for students looking to grow their skills.",
  ],
  [
    "Where are your programs offered?",
    "We currently operate in Massachusetts, Minnesota, Rhode Island, New Jersey, and Florida, and our online programs are open regardless of location.",
  ],
  [
    "How can I get involved if I already know Python?",
    "If you already know Python and want to join our team as a positional officer or mentor, fill out our team application form.",
  ],
  [
    "What programs do you offer?",
    "We offer C.O.R.E, TurtleLab, online learning, workshops, mentorship, and more.",
  ],
];

const projects = [
  {
    name: "SmartCare Evaluator",
    tag: "Healthcare - Conditionals",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    link: "https://colab.research.google.com/drive/1oW0c0Efdr4rIeHOWNCk4ujBhSE-CBZZX?usp=sharing",
    description:
      "A patient evaluation program that collects health data, uses nested conditionals, and determines an appropriate triage level for each patient.",
  },
  {
    name: "ScholarSelect Evaluation System",
    tag: "Education - Data Analysis",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
    link: "https://colab.research.google.com/drive/1S8wF9IlZLJu01glYmJp45rMVTq1qSNaE?usp=sharing",
    description:
      "A scholarship review program that scores applications using GPA, family income, community service, and leadership experience.",
  },
  {
    name: "Stock Price Checker",
    tag: "Finance - Logic",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    link: "https://colab.research.google.com/drive/1AbvXonSpC9iBn8XKHvxwrtZeA1YiJQ7W?usp=sharing",
    description:
      "A menu-driven stock checker that matches selected companies with predefined prices and introduces practical conditional logic.",
  },
  {
    name: "ThrillGuide Ride Recommender",
    tag: "Entertainment - Recommendations",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&q=80",
    link: "https://colab.research.google.com/drive/1LLMoT5x-kLtpQ9HDg953Uk7waJMeQz_R?usp=sharing",
    description:
      "An interactive recommender that helps users choose rollercoaster rides based on fears, comfort level, and personal preferences.",
  },
  {
    name: "AquaGuide Age Access System",
    tag: "Recreation - Access Control",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=900&q=80",
    link: "https://colab.research.google.com/drive/13cRZn4Ht0uD7NKzD-3TRDNvush3m-OFH?usp=sharing",
    description:
      "A water park access program that uses age-based conditionals to guide visitors toward appropriate attractions.",
  },
];

function renderHome() {
  return `
    <article class="page">
      <section class="hero">
        <div class="container hero-content">
          <div class="brand-kicker"><span class="brand-mark">&lt;/&gt;</span> CodeUnity</div>
          <h1>Code Together. Grow Together.</h1>
          <p class="lead">CodeUnity creates an environment where students collaborate fearlessly, experiment boldly, and solve real problems through inclusive coding education.</p>
          <div class="hero-actions">
            <a class="button primary" href="${links.enroll}" target="_blank" rel="noreferrer">Start Learning</a>
            <a class="button outline" href="#programs" data-route="programs">Explore Programs</a>
          </div>
          <div class="stats-row">
            <div class="stat-pill"><strong>5</strong><span>States reached</span></div>
            <div class="stat-pill"><strong>$0</strong><span>Cost to students</span></div>
            <div class="stat-pill"><strong>100%</strong><span>Free coding bootcamps</span></div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container split">
          <div class="feature-image">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80" alt="Students working together in a coding classroom">
          </div>
          <div>
            <span class="eyebrow">Who We Are</span>
            <h2>Code Together. Grow Together</h2>
            <p class="lead">As our world continues to evolve, so must our mindset. We believe coding is more than a technical skill; it is a catalyst for growth, confidence, and meaningful impact.</p>
            <p class="lead">Through inclusivity, mentorship, and hands-on innovation, we transform curiosity into capability and spark ideas that refuse to stay small.</p>
            <div class="metric-row">
              <div class="metric"><strong>5</strong><span>States reached</span></div>
              <div class="metric"><strong>100%</strong><span>Free programs</span></div>
              <div class="metric"><strong>$0</strong><span>Cost to students</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section tint">
        <div class="container">
          <div class="center narrow container">
            <span class="eyebrow">What We Do</span>
            <h2>Empowering students through action</h2>
            <p class="lead">We create a learning environment where every student, regardless of background or identity, feels seen, supported, and capable.</p>
          </div>
          <div class="grid three mt-lg">
            ${featureCard("01", "Student-Led Programs", "Engaging, mentor-driven initiatives that inspire collaboration and hands-on learning.")}
            ${featureCard("02", "Online Learning", "Structured lessons, live sessions, coding projects, and personalized feedback.")}
            ${featureCard("03", "Workshops & Events", "In-person sessions with schools, libraries, and community organizations.")}
          </div>
          <div class="grid two mt-lg">
            ${simpleCard("Promoting Collaboration", "We organize online hackathons and friendly coding competitions where participants work in groups on fun, challenging problems.")}
            ${simpleCard("Promoting Growth", "Students use Google Classroom to discuss practice problems, share approaches, and build confidence through a supportive community.")}
          </div>
        </div>
      </section>

      <section class="section soft">
        <div class="container">
          <div class="center narrow container">
            <span class="eyebrow">Our Programs</span>
            <h2>Two paths, endless possibilities</h2>
            <p class="lead">Whether you want to compete in coding challenges or express creativity through art, our programs help you grow as a coder and problem-solver.</p>
          </div>
          <div class="grid two mt-lg">${programs.map(programCard).join("")}</div>
        </div>
      </section>

      <section class="section dark">
        <div class="container">
          <div class="center narrow container">
            <span class="eyebrow">Our Reach</span>
            <h2>Growing together across states</h2>
            <p class="lead">From Massachusetts to Florida, we are building a community where every student can learn to code fearlessly and confidently.</p>
          </div>
          <div class="grid four mt-lg">
            ${statCard("MA, MN, RI, NJ, FL", "States", "A growing student network")}
            ${statCard("$0", "Cost", "Programs remain free")}
            ${statCard("Online", "Access", "Students can join from anywhere")}
            ${statCard("Mentors", "Support", "Guidance from peers and leaders")}
          </div>
          <div class="quote-panel">
            <blockquote>"We cannot promise the world, but we can promise that no one will ever be left behind."</blockquote>
            <cite>- CodeUnity Team</cite>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="center narrow container">
            <span class="eyebrow">Get Involved</span>
            <h2>Join the movement</h2>
            <p class="lead">Help us expand our reach and impact. Whether you mentor students or partner with us, you are helping break barriers in tech education.</p>
          </div>
          <div class="grid two mt-lg">
            ${ctaCard("Enroll as a Student", "Want to learn coding? Join one of our programs and start your journey.", "Student Enrollment Form", links.enroll, "primary")}
            ${ctaCard("Join Our Team", "Already know Python? Join CodeUnity as a positional officer or mentor.", "Team Application Form", links.team, "teal")}
          </div>
          <div class="cta-band center">
            <h3>Stay connected with our mission</h3>
            <p>Get monthly updates on student success stories, upcoming events, and ways you can make an impact.</p>
            <form class="form-row" onsubmit="event.preventDefault(); alert('Thanks for subscribing!');">
              <input type="email" required placeholder="Enter your email" aria-label="Email address">
              <button class="button light" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </article>
  `;
}

function renderPrograms() {
  return `
    <article class="page">
      ${pageHero("Our Programs", "Whether you want to master problem-solving or explore the creative side of coding, we have a program for you - completely free.")}
      <section class="section">
        <div class="container grid two">${programs.map(programCard).join("")}</div>
      </section>
      <section class="section soft">
        <div class="container narrow center">
          <span class="eyebrow">After the Basics</span>
          <h2>Build a strong foundation for advanced programs</h2>
          <p class="lead">Classes combine to promote collaboration. Students learn advanced topics like machine learning and data science, then create projects that benefit society.</p>
          <div class="grid three mt-lg">
            ${simpleCard("Combined Classes", "Promote collaboration")}
            ${simpleCard("Advanced Topics", "Machine learning and data science")}
            ${simpleCard("Complex Projects", "Projects that benefit society")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container grid two">
          ${ctaCard("Enroll as a Student", "Want to learn coding? Join one of our programs and start your journey.", "Student Enrollment Form", links.enroll, "primary")}
          ${ctaCard("Join Our Team", "Already know Python? Join CodeUnity as a positional officer or mentor.", "Team Application Form", links.team, "teal")}
        </div>
      </section>
    </article>
  `;
}

function renderTeam() {
  return `
    <article class="page">
      ${pageHero("Meet the people making it happen", "CodeUnity is powered by passionate students and mentors committed to breaking barriers and creating opportunities in tech education.", "Our Team")}
      <section class="section">
        <div class="container">
          <div class="center narrow container">
            <span class="eyebrow">Founders</span>
            <h2>The visionaries who started it all</h2>
          </div>
          <div class="grid three mt-lg">${teamFounders.map(personCard).join("")}</div>
        </div>
      </section>
      <section class="section soft">
        <div class="container">
          <div class="center narrow container">
            <span class="eyebrow">Our Teams</span>
            <h2>Dedicated individuals working together</h2>
          </div>
          <div class="grid two mt-lg">${teamGroups.map(teamBlock).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="container narrow center">
          <h2>Want to join our team?</h2>
          <p class="lead">If you are passionate about coding education and want to make a difference, we would love to have you on board.</p>
          <div class="action-row" style="justify-content:center"><a class="button primary" href="${links.team}" target="_blank" rel="noreferrer">Apply to Join</a></div>
        </div>
      </section>
    </article>
  `;
}

function renderContact() {
  return `
    <article class="page">
      ${pageHero("Get in Touch", "We value questions, feedback, and collaboration. Reach out to us anytime.")}
      <section class="section">
        <div class="container grid two">
          ${simpleCard("Have a Question or Want to Collaborate?", "Fill out our contact form and we will get back to you as soon as possible.", `<a class="button primary" href="${links.contact}" target="_blank" rel="noreferrer">Open Contact Form</a>`)}
          ${simpleCard("Our Reach", "Operating in MA, MN, FL, RI, and NJ. All students are welcome to join our programs regardless of location.")}
        </div>
      </section>
      <section class="section soft">
        <div class="container">
          <div class="center narrow container"><h2>Direct Contacts</h2></div>
          <div class="grid three mt-lg">
            ${contactCard("Lashika Kapoor", "lashika.codeunity@gmail.com")}
            ${contactCard("Saanvi Rangarajan", "saanvi.codeunity@gmail.com")}
            ${contactCard("Sneha Nagarajan", "sneha.codeunity@gmail.com")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container narrow">
          <div class="center"><h2>Frequently Asked Questions</h2></div>
          <div class="stack mt-lg">${faqs.map(faqItem).join("")}</div>
        </div>
      </section>
    </article>
  `;
}

function renderProjects() {
  return `
    <article class="page">
      ${pageHero("Project Samples", "This page honors the people who have shown creativity and innovation in their journey with CodeUnity.")}
      <section class="section">
        <div class="container narrow center card">
          <strong>Click on a project title to open the code and run it in Google Colab.</strong>
        </div>
        <div class="container stack mt-lg">${projects.map(projectCard).join("")}</div>
      </section>
    </article>
  `;
}

function renderEvents() {
  return `
    <article class="page">
      ${pageHero("Events", "Celebrating CodeUnity students, competitions, and community milestones.")}
      <section class="section">
        <div class="container narrow card event-panel">
          <div class="event-header">
            <span class="eyebrow">CodeUnity</span>
            <h2>2026 Hackathon</h2>
          </div>
          <div class="event-body center">
            <p class="lead">We are thrilled to declare our inaugural hackathon a resounding success. The caliber of code and innovation was outstanding, making the final judging incredibly difficult.</p>
            <h3 class="mt-lg">Our Winners</h3>
            <div class="grid three mt-lg">
              ${winner("1st Place", "Anika Rangarajan")}
              ${winner("2nd Place", "Ethan Huynh")}
              ${winner("3rd Place", "Sidharth Subeesh")}
            </div>
          </div>
        </div>
      </section>
    </article>
  `;
}

function featureCard(icon, title, description) {
  return `<section class="card"><div class="icon-box">${icon}</div><h3>${title}</h3><p>${description}</p></section>`;
}

function simpleCard(title, description, extra = "") {
  return `<section class="card"><h3>${title}</h3><p>${description}</p>${extra ? `<div class="action-row">${extra}</div>` : ""}</section>`;
}

function statCard(value, label, description) {
  return `<section class="card center"><h3>${value}</h3><p><strong>${label}</strong></p><p>${description}</p></section>`;
}

function ctaCard(title, description, label, url, tone) {
  return `<section class="card"><div class="icon-box">${tone === "teal" ? "++" : "{}"}</div><h3>${title}</h3><p>${description}</p><div class="action-row"><a class="button ${tone}" href="${url}" target="_blank" rel="noreferrer">${label}</a></div></section>`;
}

function programCard(program) {
  return `
    <section class="card program-card ${program.tone}">
      <img src="${program.image}" alt="${program.title} program">
      <div class="card-body">
        <span class="badge">${program.tag}</span>
        <h3 style="margin-top:16px">${program.title}</h3>
        <p>${program.description}</p>
        <ul class="check-list">${program.features.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </section>
  `;
}

function pageHero(title, text, eyebrow = "") {
  return `<section class="page-hero"><div class="container">${eyebrow ? `<div class="center"><span class="eyebrow">${eyebrow}</span></div>` : ""}<h1>${title}</h1><p class="lead">${text}</p></div></section>`;
}

function personCard(person) {
  const initials = person[0].split(" ").map((part) => part[0]).join("");
  return `<section class="card team-person"><div class="avatar">${initials}</div><h3>${person[0]}</h3><p class="role">${person[1]}</p><p class="location">${person[2]}</p></section>`;
}

function teamBlock(group) {
  return `
    <section class="card team-block">
      <h3>${group.title}</h3>
      <div class="member-list">
        ${group.members.map((member) => `<div class="member"><strong>${member[0]}</strong><p>${member[1]}${member[2] ? ` - ${member[2]}` : ""}</p></div>`).join("")}
      </div>
    </section>
  `;
}

function contactCard(name, email) {
  const initials = name.split(" ").map((part) => part[0]).join("");
  return `<section class="card contact-card"><div class="avatar">${initials}</div><h3>${name}</h3><p><a href="mailto:${email}">${email}</a></p></section>`;
}

function faqItem(item, index) {
  return `<section class="faq-item ${index === 0 ? "open" : ""}"><button class="faq-button" type="button" aria-expanded="${index === 0}"><span>${item[0]}</span><span>+</span></button><div class="faq-answer">${item[1]}</div></section>`;
}

function projectCard(project) {
  return `
    <section class="card project-card">
      <img src="${project.image}" alt="${project.name}">
      <div class="card-body">
        <span class="badge">${project.tag}</span>
        <h3 style="margin-top:16px"><a href="${project.link}" target="_blank" rel="noreferrer">${project.name}</a></h3>
        <p class="muted">Class: C.O.R.E</p>
        <p>${project.description}</p>
      </div>
    </section>
  `;
}

function winner(place, name) {
  return `<section class="card winner-card"><p class="winner-place">${place}</p><h3>${name}</h3></section>`;
}

function navigate(routeName) {
  const route = routes[routeName] ? routeName : "home";
  document.getElementById("app").innerHTML = routes[route]();
  document.title = route === "home" ? "CodeUnity" : `CodeUnity | ${route[0].toUpperCase()}${route.slice(1)}`;
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route);
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  closeMenu();
}

function currentRoute() {
  return (location.hash || "#home").replace("#", "").toLowerCase();
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  document.getElementById("site-header").classList.remove("menu-active");
  document.getElementById("nav-links").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest("[data-route]");
  if (routeLink) {
    event.preventDefault();
    location.hash = routeLink.dataset.route;
    navigate(routeLink.dataset.route);
  }

  const faqButton = event.target.closest(".faq-button");
  if (faqButton) {
    const item = faqButton.closest(".faq-item");
    const isOpen = item.classList.toggle("open");
    faqButton.setAttribute("aria-expanded", String(isOpen));
  }
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("nav-links");
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  document.getElementById("site-header").classList.toggle("menu-active", isOpen);
  document.getElementById("menu-toggle").setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", () => navigate(currentRoute()));
window.addEventListener("scroll", () => {
  document.getElementById("site-header").classList.toggle("scrolled", window.scrollY > 20);
});

navigate(currentRoute());
