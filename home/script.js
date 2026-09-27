const testimonialGrid = document.querySelector("[data-home-testimonials]");
const testimonialTools = window.CodeUnityTestimonials;
const featuredStories = testimonialTools?.stories.slice(0, 3) || [];
const rotationImages = [
  "../content/image/Who_we_are.jpg",
  "../content/image/IMG_6745%20-%20Megha%20Thakkar%20(2).jpeg",
  "../content/image/20260825_102226%20-%20Aishwarya%20Ramakrishnan%20(1).jpg"
];

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("[data-image-rotator]").forEach((rotator) => {
    const layers = Array.from(rotator.querySelectorAll("img"));
    let activeLayer = 0;
    let currentIndex = Number(rotator.dataset.startIndex) || 0;

    window.setInterval(() => {
      const incomingLayer = activeLayer === 0 ? 1 : 0;
      currentIndex = (currentIndex + 1) % rotationImages.length;
      layers[incomingLayer].src = rotationImages[currentIndex];
      layers[incomingLayer].classList.add("is-active");
      layers[activeLayer].classList.remove("is-active");
      activeLayer = incomingLayer;
    }, 10000);
  });
}

function createHomeTestimonial(story) {
  const card = document.createElement("section");
  card.className = `card testimonial-card testimonial-card--${story.accent} reveal`;

  const mark = document.createElement("div");
  mark.className = "testimonial-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = "“";

  const quote = document.createElement("blockquote");
  quote.textContent = story.quote;

  const person = document.createElement("div");
  person.className = "testimonial-person";
  person.append(testimonialTools.createAvatar(story, "testimonial-avatar"));

  const details = document.createElement("div");
  const name = document.createElement("cite");
  name.textContent = story.name;
  const program = document.createElement("span");
  program.textContent = story.program;
  details.append(name, program);
  person.append(details);

  card.append(mark, quote, person);
  return card;
}

if (testimonialGrid) {
  if (featuredStories.length) {
    const fragment = document.createDocumentFragment();
    featuredStories.forEach((story) => fragment.append(createHomeTestimonial(story)));
    testimonialGrid.append(fragment);
  } else {
    const emptyState = document.createElement("p");
    emptyState.className = "card card-pad center testimonial-empty";
    emptyState.textContent = "More student messages are on the way.";
    testimonialGrid.append(emptyState);
  }
}

document.querySelector("[data-subscribe-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  input.value = "";
  input.placeholder = "Thanks for subscribing!";
});
