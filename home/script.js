document.querySelector("[data-subscribe-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  input.value = "";
  input.placeholder = "Thanks for subscribing!";
});
