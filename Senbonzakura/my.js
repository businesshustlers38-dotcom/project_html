// Mål: Skapa en sökmotor för min livsstil-hemsida

const product = {
  data: [
    { productName: "Mascara", category: "Cosmetics", price: "100", image: "Mas-cara.jpg" },
    { productName: "Parfume", category: "Smell-good", price: "99", image: "Par-fume.jpg" },
    { productName: "Lipstick", category: "Cosmetics", price: "399", image: "Lip-stick.jpg" },
    { productName: "Eyeliner", category: "Cosmetics", price: "60", image: "Eye-liner.jpg" },
    { productName: "French", category: "Smell-good", price: "60", image: "French-fume.jpg" },
    { productName: "Rose Stick", category: "Cosmetics", price: "60", image: "Rose-stick.jpg" }


  ]
  
  
};

// Skapa produktkort
const productsDiv = document.getElementById("products");

for (const i of product.data) {
  const card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

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
  price.innerText = "kr " + i.price;
  container.appendChild(price);

  card.appendChild(container);
  productsDiv.appendChild(card);
}

// Filter
function filterProduct(value) {
  const buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.getAttribute("onclick")?.includes(`'${value}'`));
  });

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (value === "all") {
      card.classList.remove("hide");
    } else {
      card.classList.toggle("hide", !card.classList.contains(value));
    }
  });
}

// Sök
function runSearch() {
  const searchInput = document.getElementById("search-input").value.trim().toUpperCase();
  const names = document.querySelectorAll(".product-name");
  const cards = document.querySelectorAll(".card");

  // Om tom sök: visa alla
  if (searchInput === "") {
    cards.forEach((c) => c.classList.remove("hide"));
    return;
  }

  names.forEach((el, index) => {
    const match = el.innerText.toUpperCase().includes(searchInput);
    cards[index].classList.toggle("hide", !match);
  });
}

// Event
document.getElementById("search").addEventListener("click", runSearch);
document.getElementById("search-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") runSearch();
});

// Visa allt vid start
window.addEventListener("load", () => filterProduct("all"));
