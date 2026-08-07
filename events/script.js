document.querySelectorAll(".winner-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 80}ms`;
});
