
const products = [
  // MAKEUP - المكياج
  {
    brand: "NARS",
    name: "Radiant Creamy Concealer",
    description: "كونسيلر كريمي يمنح تغطية قابلة للبناء، ويساعد على إخفاء العيوب وتوحيد مظهر البشرة.",
    price: 190,
    category: "makeup",
    image: "assets/makeup/nars-radiant-creamy-concealer.jpg"
  },
  {
    brand: "CLINIQUE",
    name: "Cult Classic Lip Duo",
    description: "ثنائي شفاه يجمع بين اللون الجميل والعناية، لإطلالة ناعمة وأنيقة.",
    price: 180,
    suggested: true,
    category: "makeup",
    image: "assets/makeup/clinique-cult-classic-lip-duo.jpg"
  },
  {
    brand: "HUDA BEAUTY",
    name: "Easy Bake Powder",
    description: "بودرة تثبيت ناعمة تساعد على تثبيت المكياج وتقليل اللمعان ومنح البشرة مظهرًا مخمليًا.",
    price: 219,
    category: "makeup",
    image: "assets/makeup/huda-beauty-easy-bake-powder.jpg"
  },
  {
    brand: "DOLCE & GABBANA",
    name: "Compact Powder",
    description: "بودرة أساس مضغوطة تمنح البشرة تغطية أنيقة ومظهرًا متجانسًا مع لمسة فاخرة.",
    price: 256,
    category: "makeup",
    image: "assets/makeup/dolce-gabbana-compact-powder.jpg"
  },
  {
    brand: "PATRICK TA",
    name: "Blush Duo",
    description: "ثنائي بلاشر يجمع بين قوامين متكاملين لإضافة لون وحيوية إلى الخدود.",
    price: 230,
    suggested: true,
    category: "makeup",
    image: "assets/makeup/patrick-ta-blush-duo.jpg"
  },
  {
    brand: "MILK MAKEUP",
    name: "Bronzer Stick",
    description: "قلم برونزر كريمي سهل الدمج يمنح البشرة دفئًا ولمسة طبيعية.",
    price: 125,
    category: "makeup",
    image: "assets/makeup/milk-makeup-bronzer-stick.jpg"
  },
  {
    brand: "HOURGLASS",
    name: "Makeup Brush Set",
    description: "مجموعة فرش ناعمة بتصميم أنيق، تساعد على توزيع ودمج مستحضرات المكياج بسهولة.",
    price: 245,
    category: "makeup",
    image: "assets/makeup/makeup-brush.jpg"
  },

  // FRAGRANCE - العطور
  {
    brand: "JEAN PAUL GAULTIER",
    name: "La Favorite",
    description: "عطر أنثوي بطابع جذاب وأنيق، يضيف لمسة مميزة إلى إطلالتك.",
    price: 650,
    suggested: true,
    category: "fragrance",
    image: "assets/fragrance/jean-paul-gaultier-la-favorite.png"
  },
  {
    brand: "CAROLINA HERRERA",
    name: "Good Girl Blush Set",
    description: "مجموعة عطرية أنثوية تجمع بين الأناقة والجاذبية، مناسبة للإهداء والمناسبات.",
    price: 780,
    originalPrice: 1114,
    category: "fragrance",
    image: "assets/fragrance/carolina-herrera-good-girl-set.jpg"
  },
  {
    brand: "PENHALIGON'S",
    name: "The Tragedy of Lord George",
    description: "عطر فاخر من مجموعة Portraits، يتميز بطابع راقٍ وحضور عطري مميز.",
    price: 1745,
    category: "fragrance",
    image: "assets/fragrance/penhaligons-lord-george.png"
  },
  {
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 91",
    description: "رذاذ عطري بلمسة زهرية وفاكهية، يمنحك إحساسًا منعشًا ومشرقًا.",
    price: 125,
    category: "fragrance",
    image: "assets/fragrance/sol-de-janeiro-cheirosa-91.png"
  },
  {
    brand: "GIORGIO ARMANI",
    name: "Armani Sì",
    description: "ماء عطر أنيق بطابع أنثوي راقٍ، مناسب لمن تحب الروائح المميزة.",
    price: 723,
    category: "fragrance",
    image: "assets/fragrance/giorgio-armani-perfume.png"
  },
  {
    brand: "KAYALI",
    name: "Oudgasm Smoky Oud 07",
    description: "عطر عود بطابع دافئ ومدخّن، يمنح إطلالتك حضورًا قويًا وفخمًا.",
    price: 620,
    category: "fragrance",
    image: "assets/fragrance/kayali-oudgasm-smoky-oud.png"
  },

  // SKINCARE - العناية بالبشرة
  {
    brand: "ANUA",
    name: "Daily Routine Set",
    description: "مجموعة روتين يومي تضم أربعة منتجات للتنظيف والعناية والترطيب، لبشرة تبدو أكثر نضارة.",
    price: 245,
    originalPrice: 377,
    category: "skincare",
    image: "assets/skincare/anua-daily-routine-set.jpg"
  },
  {
    brand: "ESTÉE LAUDER",
    name: "Nighttime Experts Set",
    description: "مجموعة عناية ليلية تضم منتجات تساعد على ترطيب البشرة وتحسين مظهرها ومنحها إشراقة.",
    price: 385,
    originalPrice: 550,
    category: "skincare",
    image: "assets/skincare/estee-lauder-night-repair-set.jpg"
  },
  {
    brand: "CLINIQUE",
    name: "Moisture Surge Set",
    description: "مجموعة ترطيب متكاملة تساعد على منح البشرة ترطيبًا ونعومة ومظهرًا ممتلئًا.",
    price: 255,
    originalPrice: 413,
    category: "skincare",
    image: "assets/skincare/clinique-moisture-surge-set.png"
  },
  {
    brand: "CLINIQUE",
    name: "3-Step Skincare Set",
    description: "مجموعة عناية من ثلاث خطوات لتنظيف البشرة وتقشيرها وترطيبها، مناسبة للبشرة المختلطة إلى الجافة.",
    price: 569,
    originalPrice: 809,
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

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const priceBox = document.createElement("div");
    priceBox.className = "product-prices";

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = `${product.price.toLocaleString("en-US")} ر.س`;

    priceBox.appendChild(price);

    if (product.originalPrice) {
      const oldPrice = document.createElement("span");
      oldPrice.className = "product-old-price";
      oldPrice.textContent =
        `${product.originalPrice.toLocaleString("en-US")} ر.س`;
      priceBox.appendChild(oldPrice);
    }

    if (product.suggested) {
      const suggested = document.createElement("small");
      suggested.className = "suggested-price";
      suggested.textContent = "سعر مقترح";
      priceBox.appendChild(suggested);
    }

    const button = document.createElement("button");
    button.className = "add-to-cart";
    button.textContent = "أضيفي إلى السلة";
    button.type = "button";

    button.addEventListener("click", () => {
      cart.push(product);
      updateCartCount();
      button.textContent = "تمت الإضافة ✓";
    });

    info.append(brand, name, description, priceBox, button);
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
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
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

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  alert(
    "منتجات سلتك:\n" +
    cart.map(p =>
      `${p.brand} - ${p.name} - ${p.price} ر.س`
    ).join("\n") +
    `\n\nالإجمالي: ${total.toLocaleString("en-US")} ر.س`
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

const undertoneForm = document.getElementById("undertoneForm");
const undertoneResult = document.getElementById("undertoneResult");

undertoneForm?.addEventListener("submit", event => {
  event.preventDefault();

  const answers = [
    document.getElementById("veins").value,
    document.getElementById("sun").value,
    document.getElementById("jewelry").value
  ];

  const scores = {
    cool: 0,
    warm: 0,
    neutral: 0,
    olive: 0
  };

  answers.forEach(answer => scores[answer]++);

  const descriptions = {
    cool: {
      title: "اندرتون بارد Cool",
      description: "تميل بشرتكِ إلى النغمات الوردية أو الزرقاء. جربي درجات الأساس ذات القاعدة الوردية أو المحايدة الباردة."
    },
    warm: {
      title: "اندرتون دافئ Warm",
      description: "تميل بشرتكِ إلى النغمات الذهبية أو الصفراء. جربي درجات الأساس ذات القاعدة الذهبية أو الصفراء."
    },
    neutral: {
      title: "اندرتون محايد Neutral",
      description: "تتوازن في بشرتكِ النغمات الباردة والدافئة. غالبًا تناسبكِ الدرجات المحايدة."
    },
    olive: {
      title: "اندرتون زيتوني Olive",
      description: "تظهر في بشرتكِ نغمة زيتونية مائلة للأخضر. جربي درجات الأساس ذات القاعدة الزيتونية أو المحايدة المناسبة."
    }
  };

  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter(
    key => scores[key] === maxScore
  );

  const result = winners.length === 1
    ? descriptions[winners[0]]
    : {
        title: "اندرتون مختلط",
        description: "إجاباتكِ تشير إلى مزيج من النغمات. جربي درجات محايدة، واختبري اللون على خط الفك في ضوء النهار."
      };

  undertoneResult.innerHTML = `
    <span>نتيجتكِ من BEAUTY</span>
    <h3>${result.title}</h3>
    <p>${result.description}</p>
    <small>النتيجة إرشادية؛ اختبري درجة الأساس على بشرتكِ للتأكد من تطابقها.</small>
  `;

  undertoneResult.hidden = false;
  undertoneResult.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});
