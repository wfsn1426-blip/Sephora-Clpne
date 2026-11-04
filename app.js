
// BEAUTY - Main JavaScript

const products = [
  {
    brand: "NARS",
    name: "Radiant Creamy Concealer",
    price: null,
    category: "makeup",
    image: "assets/nars.jpg"
  },
  {
    brand: "HUDA BEAUTY",
    name: "Easy Bake Loose Powder",
    price: null,
    category: "makeup",
    image: "assets/huda.jpg"
  },
  {
    brand: "DIOR",
    name: "Forever Skin Correct",
    price: null,
    category: "makeup",
    image: "assets/dior.jpg"
  },
  {
    brand: "FENTY BEAUTY",
    name: "Gloss Bomb",
    price: null,
    category: "makeup",
    image: "assets/fenty.jpg"
  },
  {
    brand: "RARE BEAUTY",
    name: "Soft Pinch Blush",
    price: null,
    category: "makeup",
    image: "assets/rare.jpg"
  },
  {
    brand: "CHARLOTTE TILBURY",
    name: "Beauty Highlighter",
    price: null,
    category: "makeup",
    image: "assets/charlotte.jpg"
  },
  {
    brand: "THE ORDINARY",
    name: "Niacinamide Serum",
    price: null,
    category: "skincare",
    image: "assets/ordinary.jpg"
  },
  {
    brand: "CERAVE",
    name: "Moisturizing Cream",
    price: null,
    category: "skincare",
    image: "assets/cerave.jpg"
  }
];

let cart = [];

const productsGrid = document.getElementById("productsGrid");
const makeupGrid = document.getElementById("makeupGrid");
const skincareGrid = document.getElementById("skincareGrid");

// Display products

function displayProducts(list, container) {
  if (!container) return;

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>لا توجد منتجات مطابقة للبحث.</p>";
    return;
  }

  list.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const priceText = product.price
      ? `${product.price} ر.س`
      : "السعر قريباً";

    card.innerHTML = `
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.brand} ${product.name}"
          onerror="this.style.display='none'; this.parentElement.innerHTML='<span>BEAUTY</span>';"
        >
      </div>

      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${priceText}</p>
        <button type="button" data-product-index="${index}">
          أضيفي إلى السلة
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Initial display

displayProducts(products, productsGrid);
displayProducts(
  products.filter(product => product.category === "makeup"),
  makeupGrid
);
displayProducts(
  products.filter(product => product.category === "skincare"),
  skincareGrid
);

// Add to cart

document.addEventListener("click", function (event) {
  const button = event.target.closest("[data-product-index]");

  if (!button) return;

  const index = Number(button.dataset.productIndex);
  const product = products[index];

  if (!product) return;

  cart.push(product);

  button.textContent = "تمت الإضافة ✓";

  updateCartCount();
});

// Cart count

function updateCartCount() {
  const cartButton = document.getElementById("cartBtn");

  if (cartButton) {
    cartButton.textContent = `♡ ${cart.length}`;
  }
}

// Search

const searchBtn = document.getElementById("searchBtn");
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchSection) {
  searchBtn.addEventListener("click", () => {
    searchSection.classList.toggle("active");

    if (searchSection.classList.contains("active")) {
      searchInput?.focus();
    }
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );

    displayProducts(filtered, productsGrid);

    if (query) {
      productsGrid?.scrollIntoView({ behavior: "smooth" });
    } else {
      displayProducts(products, productsGrid);
    }
  });
}

// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });
}

// Close mobile menu after choosing a link

navigation?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// Account button

document.getElementById("accountBtn")?.addEventListener("click", () => {
  alert("مرحباً بكِ في BEAUTY!");
});

// Cart button

document.getElementById("cartBtn")?.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("سلتك فارغة حالياً.");
    return;
  }

  const items = cart
    .map(product => `${product.brand} - ${product.name}`)
    .join("\n");

  alert("منتجات سلتك:\n\n" + items);
});

// Newsletter

document.getElementById("newsletterForm")?.addEventListener("submit", event => {
  event.preventDefault();
  alert("شكراً لاشتراكك في BEAUTY!");
  event.target.reset();
});
