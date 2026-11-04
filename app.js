
const products = [
  // MAKEUP - المكياج
  {
    brand: "NARS",
    name: "Radiant Creamy Concealer",
    category: "makeup",
    image: "assets/makeup/nars-radiant-creamy-concealer.jpg"
  },
  {
    brand: "CLINIQUE",
    name: "Cult Classic Lip Duo",
    category: "makeup",
    image: "assets/makeup/clinique-cult-classic-lip-duo.jpg"
  },
  {
    brand: "HUDA BEAUTY",
    name: "Easy Bake Powder",
    category: "makeup",
    image: "assets/makeup/huda-beauty-easy-bake-powder.jpg"
  },
  {
    brand: "DOLCE & GABBANA",
    name: "Compact Powder",
    category: "makeup",
    image: "assets/makeup/dolce-gabbana-compact-powder.jpg"
  },
  {
    brand: "PATRICK TA",
    name: "Blush Duo",
    category: "makeup",
    image: "assets/makeup/patrick-ta-blush-duo.jpg"
  },
  {
    brand: "MILK MAKEUP",
    name: "Bronzer Stick",
    category: "makeup",
    image: "assets/makeup/milk-makeup-bronzer-stick.jpg"
  },
  {
    brand: "MAKEUP TOOLS",
    name: "Makeup Brush",
    category: "makeup",
    image: "assets/makeup/makeup-brush.jpg"
  },

  // FRAGRANCE - العطور
  {
    brand: "JEAN PAUL GAULTIER",
    name: "La Favorite",
    category: "fragrance",
    image: "assets/fragrance/jean-paul-gaultier-la-favorite.png"
  },
  {
    brand: "CAROLINA HERRERA",
    name: "Good Girl Blush Set",
    category: "fragrance",
    image: "assets/fragrance/carolina-herrera-good-girl-set.jpg"
  },
  {
    brand: "PENHALIGON'S",
    name: "The Tragedy of Lord George",
    category: "fragrance",
    image: "assets/fragrance/penhaligons-lord-george.png"
  },
  {
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 91",
    category: "fragrance",
    image: "assets/fragrance/sol-de-janeiro-cheirosa-91.png"
  },
  {
    brand: "GIORGIO ARMANI",
    name: "Armani Perfume",
    category: "fragrance",
    image: "assets/fragrance/giorgio-armani-perfume.png"
  },
  {
    brand: "KAYALI",
    name: "Oudgasm Smoky Oud",
    category: "fragrance",
    image: "assets/fragrance/kayali-oudgasm-smoky-oud.png"
  },

  // SKINCARE - العناية بالبشرة
  {
    brand: "ANUA",
    name: "Daily Routine Set",
    category: "skincare",
    image: "assets/skincare/anua-daily-routine-set.jpg"
  },
  {
    brand: "ESTÉE LAUDER",
    name: "Night Repair Set",
    category: "skincare",
    image: "assets/skincare/estee-lauder-night-repair-set.jpg"
  },
  {
    brand: "CLINIQUE",
    name: "Moisture Surge Set",
    category: "skincare",
    image: "assets/skincare/clinique-moisture-surge-set.png"
  },
  {
    brand: "CLINIQUE",
    name: "3-Step Skincare Set",
    category: "skincare",
    image: "assets/skincare/clinique-3-step-skincare-set.png"
  }
];

let cart = [];

function renderProducts(list, container) {
  if (!container) return;

  container.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    image.onerror = () => {
      image.alt = "صورة المنتج غير متاحة";
      image.style.display = "none";
    };

    const imageBox = document.createElement("div");
    imageBox.className = "product-image";
    imageBox.appendChild(image);

    const info = document.createElement("div");
    info.className = "product-info";

    const brand = document.createElement("span");
    brand.className = "product-brand";
    brand.textContent = product.brand;

    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = "السعر قريباً";

    const button = document.createElement("button");
    button.textContent = "أضيفي إلى السلة";
    button.type = "button";

    button.addEventListener("click", () => {
      cart.push(product);
      updateCartCount();
      button.textContent = "تمت الإضافة ✓";
    });

    info.append(brand, name, price, button);
    card.append(imageBox, info);
    container.appendChild(card);
  });
}

function updateCartCount() {
  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) cartBtn.textContent = `السلة (${cart.length})`;
}

function showCategory(category, containerId) {
  const container = document.getElementById(containerId);
  const items = products.filter(p => p.category === category);
  renderProducts(items, container);
}

showCategory("makeup", "makeupGrid");
showCategory("fragrance", "fragranceGrid");
showCategory("skincare", "skincareGrid");

renderProducts(products, document.getElementById("productsGrid"));

// Search
const searchBtn = document.getElementById("searchBtn");
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchInput");

searchBtn?.addEventListener("click", () => {
  searchSection?.classList.toggle("active");
  searchInput?.focus();
});

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  const results = products.filter(product =>
    product.brand.toLowerCase().includes(query) ||
    product.name.toLowerCase().includes(query)
  );

  renderProducts(results, document.getElementById("productsGrid"));
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn?.addEventListener("click", () => {
  navigation?.classList.toggle("active");
});

navigation?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// Cart
document.getElementById("cartBtn")?.addEventListener("click", () => {
  if (!cart.length) {
    alert("سلتك فارغة حالياً");
    return;
  }

  alert(
    "منتجات سلتك:\n" +
    cart.map(p => `${p.brand} - ${p.name}`).join("\n")
  );
});

// Account
document.getElementById("accountBtn")?.addEventListener("click", () => {
  alert("مرحباً بكِ في BEAUTY");
});

// Newsletter
document.getElementById("newsletterForm")?.addEventListener("submit", event => {
  event.preventDefault();
  alert("شكراً لاشتراكك في BEAUTY");
  event.target.reset();
});
