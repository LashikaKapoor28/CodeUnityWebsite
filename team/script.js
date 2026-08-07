document.querySelectorAll("[data-initials]").forEach((avatar) => {
  const name = avatar.dataset.initials;
  avatar.textContent = name.split(" ").map((part) => part[0]).join("");
});
