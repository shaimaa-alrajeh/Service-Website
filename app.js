function openAndClose(element) {
  const content = element.nextElementSibling;
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// Filter
function showProducts(category, active) {
  const productscard = document.getElementById("products-card");
  productscard.innerHTML = "";

  const allproducts = {
    All: [
      {
        img: "Photo and Video/img/portfolio/portfolio-1.jpg",
        name: "Card 1",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-2.jpg",
        name: "Card 2",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-3.jpg",
        name: "Card 3",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-4.jpg",
        name: "Card 4",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-5.jpg",
        name: "Card 5",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-6.jpg",
        name: "Card 6",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-7.jpg",
        name: "Card 7",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-8.jpg",
        name: "Card 8",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-9.jpg",
        name: "Card 9",
        description: "description",
      },
    ],
    App: [
      {
        img: "Photo and Video/img/portfolio/portfolio-3.jpg",
        name: "Card 1",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-2.jpg",
        name: "Card 2",
        description: "description",
      },

      {
        img: "Photo and Video/img/portfolio/portfolio-7.jpg",
        name: "Card 4",
        description: "description",
      },
    ],
    Card: [
      {
        img: "Photo and Video/img/portfolio/portfolio-5.jpg",
        name: "Card 3",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-7.jpg",
        name: "Card 4",
        description: "description",
      },
    ],
    Web: [
      {
        img: "Photo and Video/img/portfolio/portfolio-8.jpg",
        name: "Card 3",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-1.jpg",
        name: "Card 4",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-4.jpg",
        name: "Card 4",
        description: "description",
      },
    ],
    "3d": [
      {
        img: "Photo and Video/img/portfolio/portfolio-8.jpg",
        name: "Card 7",
        description: "description",
      },
      {
        img: "Photo and Video/img/portfolio/portfolio-1.jpg",
        name: "Card 3",
        description: "description",
      },

      {
        img: "Photo and Video/img/portfolio/portfolio-9.jpg",
        name: "Card 9",
        description: "description",
      },
    ],
  };

  const products = allproducts[category];

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("prod-card", "flex-column");

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;

    const cardfooter = document.createElement("div");
    cardfooter.classList.add("card-footer", "flex-row");

    const Lcontain = document.createElement("div");
    Lcontain.classList.add("L-contain", "flex-column");

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productdescirp = document.createElement("p");
    productdescirp.textContent = product.description;

    Lcontain.appendChild(productName);
    Lcontain.appendChild(productdescirp);

    const Rcontain = document.createElement("div");
    Rcontain.classList.add("R-contain", "flex-row");

    const link1 = document.createElement("a");
    link1.href = "";
    const icone1 = document.createElement("i");
    icone1.classList.add("fa-solid", "fa-plus");
      link1.appendChild(icone1);
      link1.onclick = function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            toggleImageVisibility(imgElement);
        };

    const link2 = document.createElement("a");
    link2.href = "";
    const icone2 = document.createElement("i");
    icone2.classList.add("fa-solid", "fa-paperclip");
    link2.appendChild(icone2);

    Rcontain.appendChild(link1);
    Rcontain.appendChild(link2);

    cardfooter.appendChild(Lcontain);
    cardfooter.appendChild(Rcontain);

    card.appendChild(img);
    card.appendChild(cardfooter);

    productscard.appendChild(card);
  });

  const naviteam = document.querySelectorAll(".nav-iteam a");
  naviteam.forEach((iteam) => {
    iteam.classList.remove("active");
  });
  active.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  showProducts("All", document.querySelector(".nav-iteam a.active"));
});
