
// تحميل مكتبة تحليل الوجه واليد
const visionTasksPromise = import(
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs"
).catch(error => {
  console.error("MediaPipe loading error:", error);
  return null;
});

const products = [
  // MAKEUP
  {
    brand: "NARS",
    name: "Radiant Creamy Concealer",
    description: "كونسيلر كريمي يمنح تغطية قابلة للبناء ويساعد على توحيد مظهر البشرة.",
    price: 190,
    category: "makeup",
    image: "assets/makeup/nars-radiant-creamy-concealer.jpg"
  },
  {
    brand: "CLINIQUE",
    name: "Cult Classic Lip Duo",
    description: "ثنائي شفاه يجمع بين اللون الجميل والعناية.",
    price: 180,
    suggested: true,
    category: "makeup",
    image: "assets/makeup/clinique-cult-classic-lip-duo.jpg"
  },
  {
    brand: "HUDA BEAUTY",
    name: "Easy Bake Powder",
    description: "بودرة تثبيت ناعمة تمنح البشرة مظهرًا مخمليًا.",
    price: 219,
    category: "makeup",
    image: "assets/makeup/huda-beauty-easy-bake-powder.jpg"
  },
  {
    brand: "DOLCE & GABBANA",
    name: "Compact Powder",
    description: "بودرة مضغوطة تمنح البشرة مظهرًا متجانسًا.",
    price: 256,
    category: "makeup",
    image: "assets/makeup/dolce-gabbana-compact-powder.jpg"
  },
  {
    brand: "PATRICK TA",
    name: "Blush Duo",
    description: "ثنائي بلاشر لإضافة لون وحيوية إلى الخدود.",
    price: 230,
    suggested: true,
    category: "makeup",
    image: "assets/makeup/patrick-ta-blush-duo.jpg"
  },
  {
    brand: "MILK MAKEUP",
    name: "Bronzer Stick",
    description: "برونزر كريمي سهل الدمج يمنح البشرة دفئًا طبيعيًا.",
    price: 125,
    category: "makeup",
    image: "assets/makeup/milk-makeup-bronzer-stick.jpg"
  },
  {
    brand: "HOURGLASS",
    name: "Makeup Brush Set",
    description: "مجموعة فرش ناعمة لتوزيع ودمج مستحضرات المكياج.",
    price: 245,
    category: "makeup",
    image: "assets/makeup/makeup-brush.jpg"
  },

  // FRAGRANCE
  {
    brand: "JEAN PAUL GAULTIER",
    name: "La Favorite",
    description: "عطر أنثوي بطابع جذاب وأنيق.",
    price: 650,
    suggested: true,
    category: "fragrance",
    image: "assets/fragrance/jean-paul-gaultier-la-favorite.png"
  },
  {
    brand: "CAROLINA HERRERA",
    name: "Good Girl Blush Set",
    description: "مجموعة عطرية أنثوية مناسبة للإهداء والمناسبات.",
    price: 780,
    originalPrice: 1114,
    category: "fragrance",
    image: "assets/fragrance/carolina-herrera-good-girl-set.jpg"
  },
  {
    brand: "PENHALIGON'S",
    name: "The Tragedy of Lord George",
    description: "عطر فاخر من مجموعة Portraits.",
    price: 1745,
    category: "fragrance",
    image: "assets/fragrance/penhaligons-lord-george.png"
  },
  {
    brand: "SOL DE JANEIRO",
    name: "Cheirosa 91",
    description: "رذاذ عطري بلمسة زهرية وفاكهية.",
    price: 125,
    category: "fragrance",
    image: "assets/fragrance/sol-de-janeiro-cheirosa-91.png"
  },
  {
    brand: "GIORGIO ARMANI",
    name: "Armani Sì",
    description: "ماء عطر أنيق بطابع أنثوي راقٍ.",
    price: 723,
    category: "fragrance",
    image: "assets/fragrance/giorgio-armani-perfume.png"
  },
  {
    brand: "KAYALI",
    name: "Oudgasm Smoky Oud 07",
    description: "عطر عود بطابع دافئ ومدخّن.",
    price: 620,
    category: "fragrance",
    image: "assets/fragrance/kayali-oudgasm-smoky-oud.png"
  },

  // SKINCARE
  {
    brand: "ANUA",
    name: "Daily Routine Set",
    description: "مجموعة روتين يومي للتنظيف والعناية والترطيب.",
    price: 245,
    originalPrice: 377,
    category: "skincare",
    image: "assets/skincare/anua-daily-routine-set.jpg"
  },
  {
    brand: "ESTÉE LAUDER",
    name: "Nighttime Experts Set",
    description: "مجموعة عناية ليلية للترطيب وتحسين مظهر البشرة.",
    price: 385,
    originalPrice: 550,
    category: "skincare",
    image: "assets/skincare/estee-lauder-night-repair-set.jpg"
  },
  {
    brand: "CLINIQUE",
    name: "Moisture Surge Set",
    description: "مجموعة ترطيب تمنح البشرة نعومة ومظهرًا ممتلئًا.",
    price: 255,
    originalPrice: 413,
    category: "skincare",
    image: "assets/skincare/clinique-moisture-surge-set.png"
  },
  {
    brand: "CLINIQUE",
    name: "3-Step Skincare Set",
    description: "مجموعة عناية من ثلاث خطوات لتنظيف البشرة وتقشيرها وترطيبها.",
    price: 569,
    originalPrice: 809,
    category: "skincare",
    image: "assets/skincare/clinique-3-step-skincare-set.png"
  },
  {
    brand: "DIOR",
    name: "Forever Skin Glow Foundation",
    description: "كريم أساس بلمسة نهائية مضيئة طبيعية، بتغطية متوسطة إلى عالية قابلة للبناء، وثبات يصل إلى 24 ساعة.",
    price: 320,
    category: "makeup",
    productType: "foundation",
    databaseId: "dior-forever-skin-glow",
    image: "assets/makeup/dior-forever-skin-glow.jpg",
    officialUrl: "https://www.dior.com/ar_sa/beauty/products/dior-forever-skin-glow-E000001130.html"
  },
  {
  brand: "ESTÉE LAUDER",
  name: "Double Wear Stay-in-Place Foundation",
  description: "كريم أساس ثابت بتغطية قابلة للبناء ومظهر مطفي.",
  price: 280,
  category: "makeup",
  productType: "foundation",
  databaseId: "estee-lauder-double-wear",
  image: "assets/makeup/estee-lauder-double-wear.jpg",
  officialUrl: "https://www.esteelauder.com/product/643/141225/product-catalog/makeup/face/foundation/double-wear/stay-in-place-longwear-matte-foundation"
},
  {
  brand: "M·A·C",
  name: "Studio Fix Fluid Foundation",
  description: "كريم أساس بتغطية متوسطة إلى كاملة ولمسة نهائية طبيعية مطفية.",
  price: 250,
  category: "makeup",
  productType: "foundation",
  databaseId: "mac-studio-fix-fluid",
  image: "assets/makeup/mac-studio-fix-fluid.png"
},
{
  brand: "FENTY BEAUTY",
  name: "Pro Filt'r Foundation",
  description: "كريم أساس بلمسة نهائية مطفية ناعمة وتغطية قابلة للبناء.",
  price: 230,
  category: "makeup",
  productType: "foundation",
  databaseId: "fenty-pro-filtr-foundation",
  image: "assets/makeup/fenty-pro-filtr-foundation.jpg"
},
];

// عرض المنتجات
function renderProducts(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = products.filter(product => product.category === category);
  container.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageBox = document.createElement("div");
    imageBox.className = "product-image";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = `${product.brand} ${product.name}`;
    image.loading = "lazy";

    image.onerror = () => {
      image.style.display = "none";
      imageBox.classList.add("image-unavailable");
    };

    imageBox.appendChild(image);

    const info = document.createElement("div");
    info.className = "product-info";

    const brand = document.createElement("span");
    brand.className = "product-brand";
    brand.textContent = product.brand;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const priceBox = document.createElement("div");
    priceBox.className = "product-prices";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent =
      `${product.price.toLocaleString("en-US")} ر.س`;

    priceBox.appendChild(price);

    if (product.originalPrice) {
      const oldPrice = document.createElement("del");
      oldPrice.className = "product-old-price";
      oldPrice.textContent =
        `${product.originalPrice.toLocaleString("en-US")} ر.س`;
      priceBox.appendChild(oldPrice);
    }

    if (product.suggested) {
      const note = document.createElement("small");
      note.className = "suggested-price";
      note.textContent = "سعر مقترح";
      priceBox.appendChild(note);
    }

    info.append(brand, name, description, priceBox);
    card.append(imageBox, info);
    container.appendChild(card);
  });
}

// تشغيل أقسام المتجر
renderProducts("makeup", "makeupProducts");
renderProducts("fragrance", "fragranceProducts");
renderProducts("skincare", "skincareProducts");

// فتح وإغلاق BEAUTY AI
const undertoneSection = document.getElementById("undertone");
const openBeautyAI = document.getElementById("openBeautyAI");
const closeBeautyAI = document.getElementById("closeBeautyAI");

openBeautyAI?.addEventListener("click", () => {
  undertoneSection.hidden = false;
  undertoneSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

closeBeautyAI?.addEventListener("click", () => {
  stopCameraStream();
  undertoneSection.hidden = true;
  document.getElementById("beauty-ai").scrollIntoView({
    behavior: "smooth"
  });
});

// عناصر التحليل
const cameraVideo = document.getElementById("cameraVideo");
const analysisImage = document.getElementById("analysisImage");
const analysisCanvas = document.getElementById("analysisCanvas");
const uploadPhoto = document.getElementById("uploadPhoto");
const startCamera = document.getElementById("startCamera");
const capturePhoto = document.getElementById("capturePhoto");
const analyzePhoto = document.getElementById("analyzePhoto");
const analysisMessage = document.getElementById("analysisMessage");
const analysisResult = document.getElementById("analysisResult");

let cameraStream = null;
let selectedImage = null;
let selectedTarget = "face";

let visionFilesetPromise = null;
let faceLandmarker = null;
let handLandmarker = null;

async function getVisionLandmarker(target) {
  const vision = await visionTasksPromise;

  if (!vision) {
    throw new Error("تعذر تحميل مكتبة تحليل الصور");
  }

  if (!visionFilesetPromise) {
    visionFilesetPromise = vision.FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
    );
  }

  const fileset = await visionFilesetPromise;

  if (target === "hand") {
    if (!handLandmarker) {
      handLandmarker = await vision.HandLandmarker.createFromOptions(
        fileset,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"
          },
          runningMode: "IMAGE",
numHands: 1,
minHandDetectionConfidence: 0.3,
minHandPresenceConfidence: 0.3
        }
      );
    }

    return handLandmarker;
  }

  if (!faceLandmarker) {
    faceLandmarker = await vision.FaceLandmarker.createFromOptions(
      fileset,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
        },
        runningMode: "IMAGE",
        numFaces: 1
      }
    );
  }

  return faceLandmarker;
}

// اختيار الوجه أو اليد

document.getElementById("faceOption")?.addEventListener("click", () => {
    selectedTarget = "face";

    document.getElementById("faceOption").classList.add("active");
    document.getElementById("handOption").classList.remove("active");

    analysisMessage.textContent = "تم اختيار تحليل الوجه.";
});

document.getElementById("handOption")?.addEventListener("click", () => {
    selectedTarget = "hand";

    document.getElementById("handOption").classList.add("active");
    document.getElementById("faceOption").classList.remove("active");

    analysisMessage.textContent = "تم اختيار تحليل اليد.";
});


// إيقاف الكاميرا
function stopCameraStream() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }

  if (cameraVideo) cameraVideo.srcObject = null;
}

// عرض الصورة المختارة
function showAnalysisImage(source) {
  analysisImage.onload = () => {
    analysisImage.hidden = false;
    cameraVideo.hidden = true;

    selectedImage = analysisImage;

    capturePhoto.disabled = true;
    analyzePhoto.disabled = false;

    analysisResult.hidden = true;

    analysisMessage.textContent =
      "تم اختيار الصورة بنجاح. اضغطي ابدئي تحليل بشرتك.";
  };

  analysisImage.onerror = () => {
    analysisMessage.textContent =
      "تعذر عرض الصورة. جربي اختيار صورة أخرى.";
  };

  analysisImage.src = source;
}

// تشغيل الكاميرا
startCamera?.addEventListener("click", async () => {
  try {
    stopCameraStream();

    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false
    });

    cameraVideo.srcObject = cameraStream;
   analysisMessage.textContent =
  "وجّهي الكاميرا نحو الوجه أو اليد في إضاءة طبيعية، وابتعدي عن الفلاش.";
    
    cameraVideo.hidden = false;
    analysisImage.hidden = true;
    selectedImage = null;
    capturePhoto.disabled = false;
    analyzePhoto.disabled = true;

    analysisMessage.textContent =
      "الكاميرا تعمل. ضعي الوجه أو اليد في إضاءة طبيعية.";

  } catch (error) {
    analysisMessage.textContent =
      "تعذر تشغيل الكاميرا. تأكدي من السماح باستخدام الكاميرا أو ارفعي صورة.";
  }
});

// التقاط صورة
capturePhoto?.addEventListener("click", () => {
  if (!cameraVideo.videoWidth) {
    analysisMessage.textContent = "انتظري حتى تعمل الكاميرا.";
    return;
  }

  analysisCanvas.width = cameraVideo.videoWidth;
  analysisCanvas.height = cameraVideo.videoHeight;

  const context = analysisCanvas.getContext("2d");
  context.drawImage(
    cameraVideo,
    0,
    0,
    analysisCanvas.width,
    analysisCanvas.height
  );

  const photo = analysisCanvas.toDataURL("image/jpeg", 0.9);
  showAnalysisImage(photo);
  stopCameraStream();
});

// رفع صورة
uploadPhoto?.addEventListener("change", event => {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    analysisMessage.textContent = "اختاري ملف صورة صالح.";
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    showAnalysisImage(reader.result);
    stopCameraStream();
  };

  reader.readAsDataURL(file);
});


// تحليل الصورة
analyzePhoto?.addEventListener("click", async () => {
  if (!selectedImage || !selectedImage.complete || !selectedImage.naturalWidth) {
    analysisMessage.textContent = "اختاري صورة أولاً.";
    return;
  }

  try {
    analysisMessage.textContent = "جاري تجهيز أدوات التحليل...";

    const landmarker = await getVisionLandmarker(selectedTarget);
    const detection = landmarker.detect(selectedImage);
    console.log("نوع التحليل:", selectedTarget);
console.log("نتيجة الاكتشاف:", detection);
console.log("عدد الأيدي المكتشفة:", detection?.landmarks?.length || 0);
console.log("عدد الوجوه المكتشفة:", detection?.faceLandmarks?.length || 0);
    
    const hasTarget = selectedTarget === "hand"
      ? detection.landmarks?.length
      : detection.faceLandmarks?.length;

    if (!hasTarget) {
      analysisMessage.textContent = selectedTarget === "hand"
        ? "لم نتمكن من اكتشاف اليد. حاولي تصوير راحة اليد بوضوح."
        : "لم نتمكن من اكتشاف الوجه. حاولي تصوير الوجه بوضوح.";
      return;
    }

    analysisMessage.textContent = "تم اكتشاف الصورة، جاري إكمال التحليل...";

    const width = selectedImage.naturalWidth;
    const height = selectedImage.naturalHeight;

    
analysisCanvas.width = 80;
analysisCanvas.height = 80;

const context = analysisCanvas.getContext("2d");

const landmarks = selectedTarget === "hand"
  ? detection.landmarks[0]
  : detection.faceLandmarks[0];

if (selectedTarget === "face") {
  // أخذ عينات من منطقتي الخدين
  const cheekPoints = [123, 352];

  cheekPoints.forEach((index, position) => {
    const point = landmarks[index];
    const cropSize = width * 0.045;

    const sx = Math.max(
      0,
      Math.min(width - cropSize, point.x * width - cropSize / 2)
    );

    const sy = Math.max(
      0,
      Math.min(height - cropSize, point.y * height - cropSize / 2)
    );

    context.drawImage(
      selectedImage,
      sx,
      sy,
      cropSize,
      cropSize,
      position * 40,
      0,
      40,
      80
    );
  });

} else {
  // أخذ عينة أصغر من وسط اليد
  const wrist = landmarks[0];
  const middleBase = landmarks[9];

  const centerX = (wrist.x + middleBase.x) / 2;
  const centerY = (wrist.y + middleBase.y) / 2;

  const cropSize = Math.min(
    width,
    height,
    Math.hypot(
      (middleBase.x - wrist.x) * width,
      (middleBase.y - wrist.y) * height
    ) * 0.30
  );

  const sx = Math.max(
    0,
    Math.min(width - cropSize, centerX * width - cropSize / 2)
  );

  const sy = Math.max(
    0,
    Math.min(height - cropSize, centerY * height - cropSize / 2)
  );

  context.drawImage(
    selectedImage,
    sx,
    sy,
    cropSize,
    cropSize,
    0,
    0,
    80,
    80
  );
}

analysisCanvas.hidden = false;
analysisCanvas.style.width = "240px";
analysisCanvas.style.height = "240px";
analysisCanvas.style.display = "block";
analysisCanvas.style.border = "2px solid red";
analysisCanvas.style.margin = "15px auto";
analysisCanvas.style.background = "#eeeeee";    

const pixels = context.getImageData(0, 0, 80, 80).data;

// التحقق من صلاحية عينة البشرة
if (!pixels || pixels.length !== 80 * 80 * 4) {
  throw new Error("Invalid skin sample");
}

const redValues = [];
const greenValues = [];
const blueValues = [];

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  const alpha = pixels[i + 3];

  if (alpha < 200) continue;

  // استبعاد البكسلات شديدة الظلام أو شديدة السطوع
  const brightness = (r + g + b) / 3;

  if (brightness < 20 || brightness > 245) continue;

  redValues.push(r);
  greenValues.push(g);
  blueValues.push(b);
}

if (redValues.length < 100) {
  throw new Error("Insufficient skin color samples");
}

function getMedian(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}

const red = getMedian(redValues);
const green = getMedian(greenValues);
const blue = getMedian(blueValues);

const totalPixels = pixels.length / 4;
const validSamples = redValues.length;
const sampleQuality = (validSamples / totalPixels) * 100;
// التأكد من أن عينة البشرة كافية للتحليل
if (sampleQuality < 35) {
  analysisMessage.textContent =
    "لم نتمكن من أخذ عينة واضحة من البشرة. أعيدي التصوير بإضاءة طبيعية وبدون فلاتر.";
  return;
}
  console.log("جودة عينة البشرة:", {
  totalPixels,
  validSamples,
  rejectedPixels: totalPixels - validSamples,
  sampleQuality: sampleQuality.toFixed(1) + "%"
});
    
const averageBrightness = (red + green + blue) / 3;

if (averageBrightness < 45 || averageBrightness > 220) {
  analysisMessage.textContent =
    "الإضاءة غير مناسبة للتحليل. استخدمي إضاءة طبيعية متوازنة ومن دون فلاش.";
  return;
}


   
const brightness = (red + green + blue) / 3;

// تحويل اللون إلى مؤشرات لونية نسبية
const redGreen = red - green;
const blueYellow = (red + green) / 2 - blue;
    console.log("قيم تحليل البشرة:", {
  red,
  green,
  blue,
  redGreen,
  blueYellow
});
    
// تصنيف مبدئي وليس قياسًا مؤكدًا للاندرتون
let type;
let description;
let colors;


const undertoneScore = blueYellow - redGreen;

if (undertoneScore > 10) {
  type = "دافئ";
  description = "تظهر مؤشرات دافئة مبدئيًا. قد تناسبك الدرجات الذهبية والخوخية.";
  colors = ["#D69B68", "#C9825B", "#E5B58B", "#A96D45"];

} else if (undertoneScore < -10) {
  type = "بارد";
  description = "تظهر مؤشرات باردة مبدئيًا. قد تناسبك الدرجات الوردية والتوتية.";
  colors = ["#D8A0A8", "#A96D88", "#B8A1C9", "#C58B9D"];

} else {
  type = "محايد";
  description = "المؤشرات اللونية متقاربة. قد تناسبك الدرجات المتوازنة.";
  colors = ["#C9A58A", "#D4B8A5", "#B78F83", "#C7B4A1"];
}

// عمق البشرة: تقدير أولي يتأثر بالإضاءة والكاميرا
let skinTone;

if (brightness >= 210) {
  skinTone = "فاتح";
} else if (brightness >= 180) {
  skinTone = "فاتح متوسط";
} else if (brightness >= 145) {
  skinTone = "متوسط";
} else if (brightness >= 110) {
  skinTone = "قمحي";
} else if (brightness >= 75) {
  skinTone = "داكن";
} else {
  skinTone = "عميق";
}

displayUndertoneResult(type, description, colors, skinTone);


 } catch (error) {
  console.error("Beauty AI analysis error:", error);

  analysisMessage.textContent =
    "تعذر تشغيل أدوات التحليل. تأكدي من اتصال الإنترنت ثم حاولي مرة أخرى.";
}
});

// عرض نتيجة التحليل والتوصيات
function displayUndertoneResult(type, description, colors, skinTone) {

  document.getElementById("undertoneName").textContent =
    `الاندرتون التقديري: ${type}`;

  document.getElementById("undertoneDescription").textContent =
    description;

  document.getElementById("skinToneName").textContent =
    skinTone || "غير محدد";

  // عرض لوحة الألوان
  const palette = document.getElementById("colorPalette");
  palette.innerHTML = "";

  colors.forEach(color => {
    const swatch = document.createElement("span");
    swatch.style.backgroundColor = color;
    palette.appendChild(swatch);
  });

  // تجهيز أقسام المكياج
  const recommendations = document.getElementById("matchedProducts");
  recommendations.innerHTML = "";

  const categories = [
    { id: "foundation", name: "كريم الأساس" },
    { id: "concealer", name: "الكونسيلر" },
    { id: "blush", name: "البلاشر" },
    { id: "lipstick", name: "الأرواج" },
    { id: "contour", name: "الكونتور" },
    { id: "lipliner", name: "محدد الشفاه" }
  ];

  // تحديد نوع المنتج من بياناته أو اسمه
  function getProductType(product) {
    if (product.productType) {
      return product.productType.toLowerCase();
    }

    const name = (
      (product.name || "") + " " +
      (product.description || "")
    ).toLowerCase();

    if (/foundation|skin glow|كريم اساس|فاونديشن/.test(name)) {
      return "foundation";
    }

    if (/concealer|كونسيلر/.test(name)) {
      return "concealer";
    }

    if (/blush|blusher|cheek|بلاشر|خدود/.test(name)) {
      return "blush";
    }

    if (/lipstick|lip duo|lip color|أحمر شفاه|روج|ارواج/.test(name)) {
      return "lipstick";
    }

    if (/contour|bronzer|كونتور|برونزر/.test(name)) {
      return "contour";
    }

    if (/lip liner|lipliner|محدد شفاه|محدد الشفاه/.test(name)) {
      return "lipliner";
    }

    return null;
  }

  const makeupProducts = products.filter(
    product => product.category === "makeup"
  );

  const groupedProducts = {};

  categories.forEach(category => {
    groupedProducts[category.id] = makeupProducts.filter(
      product => getProductType(product) === category.id
    );
  });

  // إنشاء واجهة التنقل
  let currentCategory = 0;

  const section = document.createElement("section");
  section.className = "beauty-recommendation-section";

  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.marginBottom = "16px";

  const heading = document.createElement("h3");
  heading.style.margin = "0";
  heading.style.fontSize = "20px";

  const counter = document.createElement("span");
  counter.style.fontSize = "13px";
  counter.style.color = "#888";

  header.append(heading, counter);

  const productArea = document.createElement("div");
 productArea.style.display = "grid";
productArea.style.gridTemplateColumns =
  "repeat(auto-fit, minmax(150px, 1fr))";
productArea.style.justifyContent = "stretch";
productArea.style.gap = "12px";
productArea.style.width = "100%";
  
  const navigation = document.createElement("div");
  navigation.style.display = "flex";
  navigation.style.justifyContent = "space-between";
  navigation.style.alignItems = "center";
  navigation.style.marginTop = "20px";
  navigation.style.gap = "12px";

  function createArrow(label, symbol) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = symbol + " " + label;
    button.style.padding = "10px 16px";
    button.style.border = "1px solid #d8cbb9";
    button.style.borderRadius = "20px";
    button.style.background = "#fff";
    button.style.color = "#343a36";
    button.style.cursor = "pointer";
    return button;
  }

  const previousButton = createArrow("السابق", "→");
  const nextButton = createArrow("التالي", "←");

  navigation.append(previousButton, nextButton);

  section.append(header, productArea, navigation);
  recommendations.appendChild(section);

  // عرض القسم الحالي
  function renderCategory() {
    const category = categories[currentCategory];
    const categoryProducts = groupedProducts[category.id];

    heading.textContent = category.name;
    counter.textContent =
      `${currentCategory + 1} / ${categories.length}`;

    productArea.innerHTML = "";

    if (categoryProducts.length === 0) {
      const empty = document.createElement("p");
      empty.textContent = "لا توجد منتجات مضافة لهذا القسم حاليًا.";
      empty.style.gridColumn = "1 / -1";
      empty.style.textAlign = "center";
      empty.style.padding = "25px 10px";
      empty.style.color = "#888";
      productArea.appendChild(empty);
    }

    categoryProducts.forEach(product => {
      const card = document.createElement("article");

      card.style.textAlign = "center";
      card.style.padding = "12px";
      card.style.border = "1px solid #eee";
      card.style.borderRadius = "14px";
      card.style.background = "#fff";
      card.style.minWidth = "0";

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      image.loading = "lazy";
      image.style.width = "100%";
      image.style.height = "130px";
      image.style.objectFit = "contain";
      image.style.display = "block";
      image.style.margin = "0 auto 10px";

      image.onerror = () => {
        image.style.display = "none";
      };

      const brand = document.createElement("strong");
      brand.textContent = product.brand;
      brand.style.display = "block";
      brand.style.fontSize = "13px";
      brand.style.marginBottom = "5px";

      const name = document.createElement("p");
      name.textContent = product.name;
      name.style.fontSize = "12px";
      name.style.margin = "0 0 8px";
      name.style.color = "#555";

     
const shade = document.createElement("p");

const undertoneMap = {
  "محايد": "neutral",
  "دافئ": "warm",
  "بارد": "cool"
};

const selectedUndertone = undertoneMap[type] || null;

const databaseProducts =
  window.BEAUTY_AI_DATABASE?.BEAUTY_AI_PRODUCTS || [];

const databaseProduct = databaseProducts.find(
  item => item.id === product.databaseId
  console.log("PRODUCT ID:", product.databaseId);
console.log("DATABASE PRODUCT:", databaseProduct);
console.log("SHADES COUNT:", databaseProduct?.shades?.length);
console.log("FIRST SHADE:", databaseProduct?.shades?.[0]);
);

const allVerifiedShades = (
  databaseProduct?.shades || []
).filter(item =>
  item.sourceStatus === "official-brand-page"
);

const matchingUndertoneShades = allVerifiedShades.filter(item =>
  selectedUndertone &&
  item.normalizedUndertone === selectedUndertone
);

const shadeCodes = [
  ...new Set(matchingUndertoneShades.map(item => item.code))
];

const allShadeCodes = [
  ...new Set(allVerifiedShades.map(item => item.code))
];

const hasClassifiedUndertones = allVerifiedShades.some(
  item => item.normalizedUndertone !== "unknown"
);

if (product.recommendedShade) {
  shade.textContent = `الدرجة: ${product.recommendedShade}`;
} else if (shadeCodes.length > 0) {
  shade.textContent =
    `درجات بنفس الاندرتون ${type}: ${shadeCodes.join("، ")} — تحتاج تأكيد عمق البشرة`;
} else if (allShadeCodes.length > 0 && !hasClassifiedUndertones) {
  shade.textContent =
    `الدرجات المتاحة: ${allShadeCodes.join("، ")} — لم يُحدد الاندرتون لكل درجة`;
} else {
  shade.textContent = "لم تتوفر درجة موثقة حاليًا";
}

shade.style.fontSize = "12px";
shade.style.margin = "0";
shade.style.color = "#879487";
      
      card.append(image, brand, name, shade);
      productArea.appendChild(card);
    });

    previousButton.disabled = currentCategory === 0;
    nextButton.disabled = currentCategory === categories.length - 1;

    previousButton.style.opacity =
      previousButton.disabled ? "0.4" : "1";

    nextButton.style.opacity =
      nextButton.disabled ? "0.4" : "1";
  }

  previousButton.addEventListener("click", () => {
    if (currentCategory > 0) {
      currentCategory--;
      renderCategory();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentCategory < categories.length - 1) {
      currentCategory++;
      renderCategory();
    }
  });

  renderCategory();

  analysisResult.hidden = false;

  analysisMessage.textContent =
    "هذه قراءة لونية أولية، والدرجات المعروضة لا تُعد مطابقة مؤكدة إلا بعد التحقق منها.";

  analysisResult.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// إعادة التحليل
document.getElementById("resetAnalysis")?.addEventListener("click", () => {
  stopCameraStream();

  selectedImage = null;
  analysisImage.hidden = true;
  cameraVideo.hidden = true;
  analysisResult.hidden = true;
  analyzePhoto.disabled = true;
  capturePhoto.disabled = true;

  uploadPhoto.value = "";
  analysisMessage.textContent = "اختاري صورة جديدة للبدء.";
});

// =====================================
// تحريك أشرطة المنتجات والصور بالأسهم
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const sliders = [
    {
      track: ".products-track",
      prev: ".slider-arrow.prev",
      next: ".slider-arrow.next"
    },
    {
      track: ".featured-track",
      prev: ".featured-arrow.prev",
      next: ".featured-arrow.next"
    },
    {
      track: ".brands-track",
      prev: ".brands-arrow.prev",
      next: ".brands-arrow.next"
    }
  ];

  sliders.forEach(function (slider) {
    const track = document.querySelector(slider.track);
    const prev = document.querySelector(slider.prev);
    const next = document.querySelector(slider.next);

    if (!track) return;

    const move = function (direction) {
      const card = track.querySelector(":scope > *");
      const gap = 20;
      const amount = card
        ? card.getBoundingClientRect().width + gap
        : track.clientWidth * 0.8;

      track.scrollBy({
        left: direction * amount,
        behavior: "smooth"
      });
    };

    if (prev) {
      prev.addEventListener("click", function () {
        move(1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        move(-1);
      });
    }
  });
});

// =====================================
// BEAUTY - Slider Navigation
// =====================================

document.addEventListener("DOMContentLoaded", function () {

  const sliderGroups = [
    {
      track: ".products-track",
      previous: ".slider-arrow.prev",
      next: ".slider-arrow.next"
    },
    {
      track: ".featured-track",
      previous: ".featured-arrow.prev",
      next: ".featured-arrow.next"
    },
    {
      track: ".brands-track",
      previous: ".brands-arrow.prev",
      next: ".brands-arrow.next"
    }
  ];

  sliderGroups.forEach(function (slider) {

    const track = document.querySelector(slider.track);
    const previous = document.querySelector(slider.previous);
    const next = document.querySelector(slider.next);

    if (!track) return;

    function moveSlider(direction) {
      const firstCard = track.firstElementChild;
      if (!firstCard) return;

      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const distance = firstCard.getBoundingClientRect().width + gap;

      track.scrollBy({
        left: direction * distance,
        behavior: "smooth"
      });
    }

    previous?.addEventListener("click", function () {
      moveSlider(1);
    });

    next?.addEventListener("click", function () {
      moveSlider(-1);
    });

  });
  }); 

/* Load BEAUTY AI Global Database */

import("./beauty-ai-global-xl.js")
  .then(database => {
    window.BEAUTY_AI_DATABASE = database;

    console.log("BEAUTY AI database loaded successfully");
    console.log("Verified products:", database.BEAUTY_AI_PRODUCTS.length);
  })
  .catch(error => {
    console.error("BEAUTY AI database loading error:", error);
  });
