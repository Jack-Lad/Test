const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.classList.remove("error");

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.classList.add("error");
    status.textContent = "Please fill in every field.";
    return;
  }

  if (!isValidEmail(email)) {
    status.classList.add("error");
    status.textContent = "That email does not look right.";
    return;
  }

  form.reset();
  status.textContent = `Thanks, ${name}. Message captured locally — nothing was sent.`;
});
