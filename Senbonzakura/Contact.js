// Emils kontaktformulär
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msgBox = document.getElementById("form-msg");

    const errors = [];
    if (name.length < 2) errors.push("Skriv ditt namn (minst 2 tecken).");
    if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Skriv en giltig email.");
    if (message.length < 10) errors.push("Meddelandet måste vara minst 10 tecken.");

    if (errors.length) {
      msgBox.textContent = errors.join(" ");
      msgBox.className = "error";
      return;
    }

    msgBox.textContent = "Tack! Ditt meddelande är skickat.";
    msgBox.className = "success";
    form.reset();
  });
}