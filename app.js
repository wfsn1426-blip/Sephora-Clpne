
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
  brand: "NARS",
  name: "Natural Radiant Longwear Foundation",
  description: "كريم أساس بتغطية متوسطة إلى كاملة ولمسة نهائية مشرقة طبيعية.",
  price: 291,
  category: "makeup",
  productType: "foundation",
  databaseId: "nars-natural-radiant-longwear",
  image: "assets/makeup/nars-natural-radiant.jpg"
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
{
  brand: "HUDA BEAUTY",
  name: "Easy Blur Natural Airbrush Foundation",
  description: "كريم أساس بلمسة إيربراش طبيعية وتقنية تمويه وتنعيم.",
  price: 225,
  category: "makeup",
  productType: "foundation",
  databaseId: "huda-easy-blur-foundation",
  image: "assets/makeup/huda-beauty-easy-blur-foundation.jpg",
  officialUrl: "https://hudabeauty.com/ar-sa/products/easy-blur-natural-airbrush-foundation-with-niacinamide-hb01166m"
},
{
  brand: "URBAN DECAY",
  name: "Face Bond Self-Setting Waterproof Foundation",
  description: "كريم أساس بتغطية متوسطة قابلة للبناء ولمسة مطفية طبيعية.",
  price: 235,
  category: "makeup",
  productType: "foundation",
  databaseId: "urban-decay-face-bond",
  image: "assets/makeup/urban-decay-face-bond.jpg",
  officialUrl: "https://www.sephora.me/sa-en/p/face-bond-self-setting-waterproof-foundation/P10059355"
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

    // مقارنة إضاءة الخدين عند تحليل الوجه فقط
if (selectedTarget !== "hand") {
  let leftBrightness = 0;
  let rightBrightness = 0;
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < pixels.length; i += 4) {
    const pixelIndex = i / 4;
    const x = pixelIndex % 80;

    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const alpha = pixels[i + 3];

    const pixelBrightness = (r + g + b) / 3;

    if (
      alpha < 200 ||
      pixelBrightness < 20 ||
      pixelBrightness > 245
    ) continue;

    if (x < 40) {
      leftBrightness += pixelBrightness;
      leftCount++;
    } else {
      rightBrightness += pixelBrightness;
      rightCount++;
    }
  }

  if (leftCount < 500 || rightCount < 500) {
    analysisMessage.textContent =
      "تعذّر تحليل الخدين بوضوح. أعيدي التصوير بإضاءة طبيعية.";
    return;
  }

  const leftAverage = leftBrightness / leftCount;
  const rightAverage = rightBrightness / rightCount;

  if (Math.abs(leftAverage - rightAverage) > 25) {
    analysisMessage.textContent =
      "الإضاءة غير متوازنة على الوجه. اختاري إضاءة موزعة بالتساوي وأعيدي التصوير.";
    return;
  }
}
    
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
  counter.textContent = `${currentCategory + 1} / ${categories.length}`;

  productArea.innerHTML = "";
  productArea.style.display = "grid";
  productArea.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(150px, 1fr))";
  productArea.style.gap = "12px";

  navigation.hidden = false;

  if (categoryProducts.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "لا توجد منتجات مضافة لهذا القسم حاليًا.";
    empty.style.gridColumn = "1 / -1";
    empty.style.textAlign = "center";
    empty.style.padding = "25px";
    empty.style.color = "#888";
    productArea.appendChild(empty);
  }

  categoryProducts.forEach(product => {
    const card = document.createElement("article");

    card.style.cssText = `
      border: 1px solid #eee;
      border-radius: 14px;
      padding: 12px;
      background: white;
      text-align: center;
      cursor: pointer;
      min-width: 0;
      transition: .2s;
    `;

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";
    image.style.cssText = `
      width: 100%;
      height: 125px;
      object-fit: contain;
      margin-bottom: 8px;
    `;
    image.onerror = () => image.style.display = "none";

    const brand = document.createElement("strong");
    brand.textContent = product.brand;
    brand.style.cssText = `
      display: block;
      font-size: 13px;
      margin-bottom: 5px;
    `;

    const name = document.createElement("p");
    name.textContent = product.name;
    name.style.cssText = `
      font-size: 12px;
      color: #555;
      margin: 0 0 8px;
    `;

    const price = document.createElement("strong");
    price.textContent = `${product.price} ر.س`;
    price.style.cssText = `
      display: block;
      color: #343a36;
      font-size: 13px;
      margin-bottom: 10px;
    `;

    const choose = document.createElement("span");
    choose.textContent = "اختاري درجتك";
    choose.style.cssText = `
      display: inline-block;
      color: #687968;
      font-size: 12px;
      border: 1px solid #879487;
      border-radius: 20px;
      padding: 6px 14px;
    `;

    card.append(image, brand, name, price, choose);

    card.addEventListener("click", () => {
      showProductDetails(product);
    });

    productArea.appendChild(card);
  });

  previousButton.disabled = currentCategory === 0;
  nextButton.disabled = currentCategory === categories.length - 1;
  previousButton.style.opacity = previousButton.disabled ? "0.4" : "1";
  nextButton.style.opacity = nextButton.disabled ? "0.4" : "1";
}

function showProductDetails(product) {
  const databaseProducts =
    window.BEAUTY_AI_DATABASE?.BEAUTY_AI_PRODUCTS || [];

  const databaseProduct = databaseProducts.find(
    item => item.id === product.databaseId
  );

  const allShades = (databaseProduct?.shades || []).filter(
    shade => shade.sourceStatus === "official-brand-page"
  );

  const undertoneMap = {
    "محايد": "neutral",
    "دافئ": "warm",
    "بارد": "cool"
  };

  const selectedUndertone = undertoneMap[type] || null;

  const matchingShades = allShades.filter(
    shade =>
      selectedUndertone &&
      shade.normalizedUndertone === selectedUndertone
  );

  const shadesToShow = matchingShades.length
    ? matchingShades
    : allShades;

  productArea.innerHTML = "";
  productArea.style.display = "block";
  navigation.hidden = true;

  const backButton = document.createElement("button");
  backButton.textContent = "→ العودة للمنتجات";
  backButton.style.cssText = `
    border: 0;
    background: transparent;
    color: #687968;
    cursor: pointer;
    padding: 8px 0;
    margin-bottom: 14px;
  `;
  backButton.onclick = renderCategory;

  const title = document.createElement("h3");
  title.textContent = product.brand;
  title.style.margin = "0 0 5px";

  const productName = document.createElement("p");
  productName.textContent = product.name;
  productName.style.color = "#777";
  productName.style.fontSize = "13px";

  const productPrice = document.createElement("strong");
  productPrice.textContent = `${product.price} ر.س`;

  const subtitle = document.createElement("p");
  subtitle.textContent = matchingShades.length
    ? "درجات متوافقة مع مؤشر الاندرتون"
    : "الدرجات الموثقة المتاحة";
  subtitle.style.cssText = `
    font-size: 13px;
    color: #879487;
    margin: 18px 0 12px;
  `;

  productArea.append(
    backButton,
    title,
    productName,
    productPrice,
    subtitle
  );

  if (!shadesToShow.length) {
    const empty = document.createElement("p");
    empty.textContent =
      "لم تتم إضافة درجات موثقة لهذا المنتج حتى الآن.";
    empty.style.cssText = `
      text-align: center;
      color: #888;
      padding: 25px 10px;
    `;
    productArea.appendChild(empty);
    return;
  }

  const shadeGrid = document.createElement("div");
  shadeGrid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
  `;

  let selectedShade = null;

  shadesToShow.forEach(shade => {
    const shadeButton = document.createElement("button");
    shadeButton.type = "button";
    shadeButton.style.cssText = `
      border: 1px solid #e5e5e5;
      border-radius: 10px;
      background: white;
      padding: 8px 4px;
      cursor: pointer;
      min-width: 0;
    `;

    const swatch = document.createElement("div");
    swatch.style.cssText = `
      width: 100%;
      height: 38px;
      border-radius: 7px;
      background: #eeeae4;
      margin-bottom: 7px;
    `;

    if (shade.swatchImage) {
      swatch.style.backgroundImage = `url("${shade.swatchImage}")`;
      swatch.style.backgroundSize = "cover";
      swatch.style.backgroundPosition = "center";
    }

    const code = document.createElement("strong");
    code.textContent = shade.code;
    code.style.cssText = "display:block;font-size:12px";

    const undertone = document.createElement("small");
    undertone.textContent = shade.officialUndertone || "";
    undertone.style.cssText = `
      display:block;
      font-size:10px;
      color:#888;
      margin-top:3px;
    `;

    shadeButton.append(swatch, code, undertone);

    shadeButton.addEventListener("click", () => {
      selectedShade = shade;

      [...shadeGrid.children].forEach(button => {
        button.style.border = "1px solid #e5e5e5";
        button.style.background = "white";
      });

      shadeButton.style.border = "2px solid #27945c";
      shadeButton.style.background = "#f1f7f2";
    });

    shadeGrid.appendChild(shadeButton);
  });

  productArea.appendChild(shadeGrid);

  const note = document.createElement("p");
  note.textContent =
    "المطابقة أولية حسب الاندرتون؛ عمق البشرة يحتاج بيانات موثقة.";
  note.style.cssText = `
    font-size: 11px;
    color: #888;
    margin-top: 12px;
  `;
  productArea.appendChild(note);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "أضيفي للسلة";
  addButton.disabled = true;
  addButton.style.cssText = `
    width: 100%;
    padding: 12px;
    margin-top: 14px;
    border: 0;
    border-radius: 22px;
    background: #879487;
    color: white;
    cursor: pointer;
    opacity: .5;
  `;

  shadeGrid.addEventListener("click", () => {
    addButton.disabled = !selectedShade;
    addButton.style.opacity = selectedShade ? "1" : ".5";
  });

  productArea.appendChild(addButton);
}

// شاشة تفاصيل المنتج والدرجات
function showProductDetails(product) {
  productArea.innerHTML = "";
  navigation.hidden = true;

  heading.textContent = "اختاري درجتك";
  counter.textContent = product.brand;

  let selectedShade = null;
  let showingAllShades = false;

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.textContent = "→ العودة للمنتجات";
  backButton.style.border = "none";
  backButton.style.background = "transparent";
  backButton.style.color = "#687968";
  backButton.style.cursor = "pointer";
  backButton.style.marginBottom = "14px";

  backButton.addEventListener("click", renderCategory);

  const details = document.createElement("div");
  details.style.textAlign = "center";
  details.style.padding = "12px";
  details.style.background = "#fff";
  details.style.border = "1px solid #eee";
  details.style.borderRadius = "14px";
  details.style.marginBottom = "15px";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;
  image.style.width = "100%";
  image.style.height = "105px";
  image.style.objectFit = "contain";

  const brand = document.createElement("strong");
  brand.textContent = product.brand;
  brand.style.display = "block";
  brand.style.fontSize = "13px";

  const name = document.createElement("p");
  name.textContent = product.name;
  name.style.fontSize = "12px";
  name.style.color = "#666";

  const price = document.createElement("strong");
  price.textContent =
    `${Number(product.price).toLocaleString("en-US")} ر.س`;
  price.style.color = "#526452";
  price.style.fontSize = "14px";

  details.append(image, brand, name, price);

  const databaseProducts =
    window.BEAUTY_AI_DATABASE?.BEAUTY_AI_PRODUCTS || [];

  const databaseProduct = databaseProducts.find(
    item => item.id === product.databaseId
  );

  const verifiedShades = (
    databaseProduct?.shades || []
  ).filter(item =>
    item.sourceStatus === "official-brand-page"
  );

  const matchingShades = verifiedShades.filter(item =>
    item.normalizedUndertone ===
    ({
      "محايد": "neutral",
      "دافئ": "warm",
      "بارد": "cool"
    }[type])
  );

  const availableShades =
    matchingShades.length > 0
      ? matchingShades
      : verifiedShades;

  const uniqueShades = [
    ...new Map(
      availableShades.map(item => [
        item.id || item.code,
        item
      ])
    ).values()
  ];

  const shadeTitle = document.createElement("p");
  shadeTitle.textContent = "الدرجات المتاحة";
  shadeTitle.style.fontSize = "13px";
  shadeTitle.style.fontWeight = "600";
  shadeTitle.style.margin = "12px 0";

  const shadeGrid = document.createElement("div");
  shadeGrid.style.display = "grid";
  shadeGrid.style.gridTemplateColumns =
    "repeat(4, minmax(0, 1fr))";
  shadeGrid.style.gap = "7px";

  const moreButton = document.createElement("button");
  moreButton.type = "button";
  moreButton.textContent = "عرض المزيد";
  moreButton.style.margin = "12px auto";
  moreButton.style.padding = "7px 14px";
  moreButton.style.border = "1px solid #879487";
  moreButton.style.borderRadius = "20px";
  moreButton.style.background = "#fff";
  moreButton.style.color = "#526452";
  moreButton.style.cursor = "pointer";

  function renderShadeOptions() {
    shadeGrid.innerHTML = "";

    const visibleShades = showingAllShades
      ? uniqueShades
      : uniqueShades.slice(0, 4);

    visibleShades.forEach(item => {
      const shadeCard = document.createElement("button");
      shadeCard.type = "button";

      shadeCard.style.border =
        selectedShade === item
          ? "2px solid #879487"
          : "1px solid #e5e5e5";

      shadeCard.style.borderRadius = "9px";
      shadeCard.style.background =
        selectedShade === item ? "#f2f5f0" : "#fff";
      shadeCard.style.padding = "8px 3px";
      shadeCard.style.cursor = "pointer";
      shadeCard.style.minWidth = "0";

      const swatch = document.createElement("span");
      swatch.style.display = "block";
      swatch.style.width = "23px";
      swatch.style.height = "23px";
      swatch.style.margin = "0 auto 5px";
      swatch.style.borderRadius = "50%";
      swatch.style.background = "#d8cbb9";
      swatch.style.border = "1px solid #ddd";

      if (item.swatchImage) {
        swatch.style.backgroundImage =
          `url("${item.swatchImage}")`;
        swatch.style.backgroundSize = "cover";
      }

      const code = document.createElement("span");
      code.textContent = item.code;
      code.style.display = "block";
      code.style.fontSize = "11px";
      code.style.fontWeight = "600";

      const undertone = document.createElement("span");
      undertone.textContent = item.officialUndertone || "";
      undertone.style.display = "block";
      undertone.style.fontSize = "9px";
      undertone.style.color = "#888";

      shadeCard.append(swatch, code, undertone);

      shadeCard.addEventListener("click", () => {
        selectedShade = item;
        renderShadeOptions();
      });

      shadeGrid.appendChild(shadeCard);
    });

    moreButton.textContent = showingAllShades
      ? "عرض أقل"
      : "عرض المزيد";

    moreButton.hidden = uniqueShades.length <= 4;
  }
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

// =====================================
// BEAUTY AI - فتح وإغلاق سلة المشتريات
// =====================================

const beautyCartButton = document.getElementById("beautyCartButton");
const beautyCartOverlay = document.getElementById("beautyCartOverlay");
const closeBeautyCart = document.getElementById("closeBeautyCart");

beautyCartButton?.addEventListener("click", () => {
  if (beautyCartOverlay) {
    beautyCartOverlay.hidden = false;
  }
});

closeBeautyCart?.addEventListener("click", () => {
  if (beautyCartOverlay) {
    beautyCartOverlay.hidden = true;
  }
});

beautyCartOverlay?.addEventListener("click", (event) => {
  if (event.target === beautyCartOverlay) {
    beautyCartOverlay.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && beautyCartOverlay) {
    beautyCartOverlay.hidden = true;
  }
});
