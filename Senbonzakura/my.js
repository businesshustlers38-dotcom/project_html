
  
// Mål: Skapa en sökmoter för min livstil hemsida

// 1. Interaktivitet & DOM

  function toggleModal() {
    modalBox.classList.toggle('modal--is-open');
  }
  console.log("Modal setup complete.");

  // 2. Events & användarflöde

  openModalButton.addEventListener('click', toggleModal);
  closeModalButton.addEventListener('click', toggleModal);

  // 3.  Data & logik

  // 4. Validering & felhantering (grund)

  let product = {
    data:[{
      productName: "Mascara",
      category: "Cosmetics",
      price: 299,
      image: "senbonzakura_cosmetics_3d_20251029092059_1 (1).webp"
    },
  
  {
      productName: "Parfume",
      category: "Smell good",
      price: 299,
      image: "senbonzakura_cosmetics_3d_20251029092059_1 (1).webp"
    },
  
  {
      productName: "Lipstick",
      category: "Cosmetics",
      price: 299,
      image: "senbonzakura_cosmetics_3d_20251029092059_1 (1).webp"
    },
  
  {
      productName: "Eyeliner",
      category: "Cosmetics",
      price: 299,
      image: "senbonzakura_cosmetics_3d_20251029092059_1 (1).webp"
    }]
  };

  for (let i of product.data) {
    let card = document.createElement("div");
    card.classList.add("card", "i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card);
  }