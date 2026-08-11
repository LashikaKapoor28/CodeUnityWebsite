document.querySelectorAll(".winner-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 80}ms`;
});

document.querySelectorAll(".event-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.closest(".event-panel");
    const isOpen = panel.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
