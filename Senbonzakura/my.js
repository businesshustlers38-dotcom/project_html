// Mål: Skapa en sökmotor för min livsstil-hemsida

const product = {
  data: [
    { productName: "Mascara", category: "Cosmetics", price: "100", image: "Mas-cara.jpg" },
    { productName: "Parfume", category: "Smell-good", price: "99", image: "Par-fume.jpg" },
    { productName: "Lipstick", category: "Cosmetics", price: "399", image: "Lip-stick.jpg" },
    { productName: "Eyeliner", category: "Cosmetics", price: "90", image: "Eye-liner.jpg" },
    { productName: "French", category: "Smell-good", price: "120", image: "French-fume.jpg" },
    { productName: "Rose Stick", category: "Cosmetics", price: "160", image: "Rose-stick.jpg" }
  ]
};

// Gör kategorier säkra: lowercase + bindestreck
const normalize = (text) => text.toLowerCase().trim().replace(/\s+/g, "-");

// Skapa produktkort
const productsDiv = document.getElementById("products");

for (const i of product.data) {
  const card = document.createElement("div");

  const cat = normalize(i.category);
  card.classList.add("card", cat, "hide");
  card.dataset.category = cat;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = i.image;
  image.alt = i.productName;

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  const container = document.createElement("div");
  container.classList.add("container");

  const name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  const price = document.createElement("h6");
  price.innerText =  i.price + "kr";
  container.appendChild(price);

  card.appendChild(container);
  productsDiv.appendChild(card);
}

// Filter
function filterProduct(value) {
  const v = normalize(value);

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (v === "all") {
      card.classList.remove("hide");
    } else {
      card.classList.toggle("hide", card.dataset.category !== v);
    }
  });
}

// Event delegation för knapparna
document.getElementById("buttons").addEventListener("click", (e) => {
  const btn = e.target.closest(".button-value");
  if (!btn) return;

  const value = btn.dataset.filter;
  filterProduct(value);

  document.querySelectorAll(".button-value").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
});

// Sök
function runSearch() {
  const searchInput = document.getElementById("search-input").value.trim().toUpperCase();
  const names = document.querySelectorAll(".product-name");
  const cards = document.querySelectorAll(".card");

  if (searchInput === "") {
    cards.forEach((c) => c.classList.remove("hide"));
    return;
  }

  names.forEach((el, index) => {
    const match = el.innerText.toUpperCase().includes(searchInput);
    cards[index].classList.toggle("hide", !match);
  });
}

// Event för sök
document.getElementById("search").addEventListener("click", runSearch);
document.getElementById("search-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") runSearch();
});

function updateEmptyState() {
  const cards = document.querySelectorAll(".card");
  const hasVisible = [...cards].some(card => !card.classList.contains("hide"));
  document.getElementById("empty-state").classList.toggle("hide", hasVisible);
}

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


// Visa allt vid start
window.addEventListener("load", () => {
  filterProduct("all");
});
