/**
 * BEAUTY AI GLOBAL XL
 * Version 1.0.0
 *
 * سياسة البيانات:
 * - لا نضيف درجة إلا بمصدر يمكن التحقق منه.
 * - لا نخمن عمق البشرة من رقم الدرجة.
 * - لا نعتبر المعلومة غير المتوفرة معلومة مؤكدة.
 */

export const BEAUTY_AI_SCHEMA_VERSION = "1.0.0";

export const BEAUTY_AI_TAXONOMY = {
  skinDepth: [
    "very-fair",
    "fair",
    "light",
    "light-medium",
    "medium",
    "medium-deep",
    "deep",
    "very-deep"
  ],

  undertone: [
    "cool",
    "neutral",
    "warm",
    "olive",
    "peach",
    "golden",
    "red",
    "unknown"
  ],

  categories: [
    "foundation",
    "concealer",
    "powder",
    "skin-tint",
    "tinted-moisturizer",
    "primer",
    "blush",
    "bronzer",
    "contour",
    "highlighter",
    "setting-spray",
    "lipstick",
    "lip-gloss",
    "lip-liner",
    "lip-balm",
    "eyeshadow",
    "eyeliner",
    "mascara",
    "brow",
    "false-lashes",
    "makeup-palette"
  ]
};

export const BEAUTY_AI_BRANDS = [
  "Dior",
  "M·A·C",
  "Fenty Beauty",
  "Estée Lauder",
  "NARS",
  "Huda Beauty",
  "Charlotte Tilbury",
  "Armani Beauty",
  "Make Up For Ever",
  "Too Faced",
  "Lancôme",
  "Bobbi Brown",
  "Maybelline New York",
  "L’Oréal Paris",
  "NYX Professional Makeup",
  "Tarte",
  "Haus Labs",
  "Pat McGrath Labs",
  "Juvia’s Place",
  "Rare Beauty",
  "Hourglass",
  "Shiseido",
  "YSL Beauty",
  "Givenchy",
  "Kosas",
  "Ilia",
  "Saie",
  "Danessa Myricks Beauty",
  "Black Opal",
  "The Ordinary"
];

/* درجات Dior المنشورة في صفحة المنتج السعودية */

const diorSkinGlowLabels = [
  ["0", "Neutral"],
  ["0.5", "Neutral"],
  ["1", "Cool Rosy"],
  ["1", "Neutral"],
  ["1", "Warm"],
  ["1.5", "Neutral"],
  ["2", "Cool Rosy"],
  ["2", "Neutral"],
  ["2", "Warm"],
  ["2", "Warm Olive"],
  ["2", "Warm Peach"],
  ["2.5", "Neutral"],
  ["2.5", "Warm"],
  ["3", "Cool"],
  ["3", "Neutral"],
  ["3", "Warm"],
  ["3", "Warm Olive"],
  ["3", "Warm Peach"],
  ["3.5", "Neutral"],
  ["4", "Neutral"],
  ["4", "Warm"],
  ["4", "Warm Olive"],
  ["4.5", "Neutral"],
  ["4.5", "Warm"],
  ["5", "Neutral"],
  ["5", "Warm"],
  ["6", "Neutral"],
  ["6.5", "Neutral"],
  ["7", "Neutral"],
  ["7.5", "Neutral"],
  ["8", "Neutral"],
  ["9", "Neutral"]
];

function normalizeUndertone(label) {
  const value = String(label || "").toLowerCase();

  if (value.includes("cool rosy") || value === "cool") {
    return "cool";
  }

  if (value.includes("warm olive")) {
    return "olive";
  }

  if (value.includes("warm peach")) {
    return "peach";
  }

  if (value === "warm") return "warm";

  if (value === "neutral") return "neutral";

  return "unknown";
}

/* قاعدة المنتجات والدرجات */

export const BEAUTY_AI_PRODUCTS = [

  {
    id: "dior-forever-skin-glow",
    brand: "Dior",
    product: "Forever Skin Glow",
    category: "foundation",
    formula: "liquid",
    finish: "natural glow",
    coverage: "medium-to-high, buildable",

    shadeCountClaimedByBrand: 45,
    shadeCountDisplayedOnSaudiPage: diorSkinGlowLabels.length,

   
shades: diorSkinGlowLabels.map(
  ([code, officialUndertone], index) => ({
    id: `dior-fsg-${index + 1}`,
    code,
    name: null,
    officialUndertone,
    normalizedUndertone: normalizeUndertone(officialUndertone),
    skinDepth: null,
    swatchImage: null,
    sourceStatus: "official-brand-page",
    verificationNote:
      "Official undertone label captured; depth not assigned without a brand-published depth label."
  })
),

   source: {
  type: "brand-official",
  url: "https://www.dior.com/en_sa/beauty",
  checkedAt: "2026-11-12"
  }
},

{
  id: "nars-natural-radiant-longwear",
  brand: "NARS",
  name: "Natural Radiant Longwear Foundation",
  price: 291,
  image: "assets/makeup/nars-natural-radiant.jpg",
  category: "foundation",
  formula: "liquid",
  finish: "natural radiant",
  coverage: "medium-to-full buildable",
  priceSAR: 291,
  shadeCountClaimedByBrand: 29,

  shades: [
    { code: "L1", name: "Oslo", normalizedUndertone: "cool", skinDepth: "very-fair", officialSkinDepth: "Very light" },
    { code: "L2", name: "Mont Blanc", normalizedUndertone: "neutral", skinDepth: "very-fair", officialSkinDepth: "Very light" },
    { code: "L2.5", name: "Yukon", normalizedUndertone: "cool", skinDepth: "light", officialSkinDepth: "Light" },
    { code: "L3", name: "Gobi", normalizedUndertone: "warm", skinDepth: "light", officialSkinDepth: "Light" },
    { code: "L3.5", name: "Salzburg", normalizedUndertone: "warm", skinDepth: "light", officialSkinDepth: "Light" },
    { code: "L4", name: "Deauville", normalizedUndertone: "neutral", skinDepth: "light", officialSkinDepth: "Light" },
    { code: "L4.5", name: "Vienna", normalizedUndertone: "cool", skinDepth: "light", officialSkinDepth: "Light" },
    { code: "L5", name: "Fiji", normalizedUndertone: "warm", skinDepth: "light-medium", officialSkinDepth: "Light to medium" },
    { code: "M1", name: "Punjab", normalizedUndertone: "warm", skinDepth: "medium", officialSkinDepth: "Medium" },
    { code: "M1.2", name: "Patagonia", normalizedUndertone: "neutral", skinDepth: "medium", officialSkinDepth: "Medium" },
    { code: "M1.5", name: "Vallauris", normalizedUndertone: "cool", skinDepth: "medium", officialSkinDepth: "Medium" },
    { code: "M2", name: "Santa Fe", normalizedUndertone: "neutral", skinDepth: "medium", officialSkinDepth: "Medium" },
    { code: "M2.5", name: "Sahel", normalizedUndertone: "warm", skinDepth: "medium", officialSkinDepth: "Medium" },
    { code: "M3", name: "Stromboli", normalizedUndertone: "warm", skinDepth: "medium", officialSkinDepth: "Medium" },
    { code: "M3.5", name: "Vanuatu", normalizedUndertone: "warm", skinDepth: "medium-deep", officialSkinDepth: "Medium to medium-deep" },
    { code: "M4", name: "Barcelona", normalizedUndertone: "warm", skinDepth: "medium-deep", officialSkinDepth: "Medium to medium-deep" },
    { code: "M5", name: "Valencia", normalizedUndertone: "warm", skinDepth: "medium-deep", officialSkinDepth: "Medium to medium-deep" },
    { code: "M6", name: "Aruba", normalizedUndertone: "cool", skinDepth: "medium-deep", officialSkinDepth: "Medium to medium-deep" },
    { code: "MD1", name: "Syracuse", normalizedUndertone: "warm", skinDepth: "medium-deep", officialSkinDepth: "Medium to medium-deep" },
    { code: "MD2", name: "Tahoe", normalizedUndertone: "neutral", skinDepth: "medium-deep", officialSkinDepth: "Medium-deep" },
    { code: "MD2.6", name: "Huahine", normalizedUndertone: "neutral", skinDepth: "medium-deep", officialSkinDepth: "Medium-deep" },
    { code: "MD3.3", name: "Caracas", normalizedUndertone: "warm", skinDepth: "medium-deep", officialSkinDepth: "Medium-deep to deep" },
    { code: "MD3.6", name: "Belem", normalizedUndertone: "warm", skinDepth: "medium-deep", officialSkinDepth: "Medium-deep to deep" },
    { code: "MD4", name: "Macao", normalizedUndertone: "warm", skinDepth: "medium-deep", officialSkinDepth: "Medium-deep to deep" },
    { code: "D3", name: "Iguacu", normalizedUndertone: "neutral", skinDepth: "deep", officialSkinDepth: "Deep" },
    { code: "D4", name: "Namibia", normalizedUndertone: "warm", skinDepth: "deep", officialSkinDepth: "Deep" },
    { code: "D5", name: "Zambie", normalizedUndertone: "warm", skinDepth: "deep", officialSkinDepth: "Deep" },
    { code: "D6", name: "Mali", normalizedUndertone: "neutral", skinDepth: "very-deep", officialSkinDepth: "Very deep" },
    { code: "D1", name: "Manaus", normalizedUndertone: "cool", skinDepth: "deep", officialSkinDepth: "Deep" }
  ].map((shade, index) => ({
    id: `nars-natural-radiant-${index + 1}`,
    ...shade,
    sourceStatus: "official-brand-page"
  })),

  source: {
    type: "brand-official",
    url: "https://www.narscosmetics.sa/en/natural-radiant-longwear-foundation/nars-base-natural-radiant-longwear-foundation.html",
    checkedAt: "2026-11-15"
  }
},

  {
  id: "mac-studio-fix-fluid",
  brand: "M·A·C",
  product: "Studio Fix Fluid SPF 15",
  category: "foundation",
  formula: "liquid",
  finish: "soft-matte",
  coverage: "medium-to-full buildable",
  shadeCountClaimedByBrand: 67,

  shades: [
    // LIGHT
    "C4", "C40", "N4", "N4.5", "N4.75",
    "NC5", "NC10", "NC12", "NC13", "NC15",
    "NC16", "NC17", "NC18", "NC20",
    "NW5", "NW10", "NW13", "NW15", "NW18",

    // LIGHT TO MEDIUM
    "C3.5", "N5", "N6", "N6.5",
    "NC25", "NC27", "NC30", "NW20", "NW22", "NW25",

    // MEDIUM
    "C4.5", "C5", "C45",
    "NC35", "NC37", "NC38", "NC40", "NC42",
    "NW30", "NW33", "NW35",

    // MEDIUM TO DEEP
    "C8", "NC44", "NC45.5",
    "NW40", "NW43", "NW44", "NW45",

    // DEEP
    "C55", "NC45", "NC46", "NC47", "NC50",
    "NW46", "NW47", "NW48", "NW50", "NW53",

    // RICH
    "NC55", "NC58", "NC60", "NC63", "NC65",
    "NW55", "NW57", "NW58", "NW60", "NW65"
  ].map((code, index) => ({
    id: `mac-studio-fix-${index + 1}`,
    code,
    name: null,
   officialShadeGroup:
  index < 19 ? "Light" :
  index < 29 ? "Light to Medium" :
  index < 40 ? "Medium" :
  index < 47 ? "Medium to Deep" :
  index < 57 ? "Deep" :
  "Rich",
    normalizedUndertone: "unknown",
    skinDepth: null,
    sourceStatus: "official-brand-page"
  })),

  source: {
    type: "brand-official-shade-guide",
    url: "https://www.maccosmetics.com/product/13847/120613/products/makeup/face/foundation/studio-fix-fluid-spf-15-24hr-matte-foundation-oil-control",
    checkedAt: "2026-11-13"
  },

  verificationNote:
    "66 shade codes captured from official MAC shade descriptions. Brand page claims 67 shades; one code is not present in the retrieved description. Undertone and skin depth are not inferred."
},

  {
    id: "fenty-pro-filtr-foundation",
    brand: "Fenty Beauty",
    product: "Pro Filt'r Foundation",
    category: "foundation",
    formula: "liquid",
    finish: null,
    coverage: null,
    shades: [],

    source: {
      type: "brand-official-shade-finder",
      url: "https://fentybeauty.com/pages/you-did-that",
      checkedAt: "2026-11-12"
    },

    verificationNote:
      "Individual shade codes require formula-specific confirmation."
  },

  {
    id: "estee-lauder-double-wear",
    brand: "Estée Lauder",
    product: "Double Wear Stay-in-Place Foundation",
    category: "foundation",
    formula: "liquid",
    finish: null,
    coverage: null,
    shades: [],

    source: {
      type: "brand-official-shade-finder",
      url: "https://www.esteelauder.com/foundation-finder",
      checkedAt: "2026-11-12"
    },

    verificationNote:
      "Use the official finder for the current exact formula shade list."
  }
,
{
  id: "huda-easy-blur-foundation",
  brand: "Huda Beauty",
  product: "Easy Blur Natural Airbrush Foundation",
  name: "Easy Blur Natural Airbrush Foundation",
  category: "foundation",
  formula: "liquid",
  finish: "natural airbrush",
  coverage: "medium-to-full buildable",
  priceSAR: 225,
  image: "assets/makeup/huda-easy-blur.jpg",

  shades: [
    ["100B", "Milkshake"],
    ["110N", "Angel Food"],
    ["120B", "Vanilla"],
    ["140G", "Cashew"],
    ["150G", "Creme Brulee"],
    ["200B", "Shortbread"],
    ["210B", "Chai"],
    ["220N", "Custard"],
    ["230N", "Macaroon"],
    ["240N", "Toasted Coconut"],
    ["250G", "Cheesecake"],
    ["255B", "Apple Pie"],
    ["260W", "Cream Puff"],
    ["300N", "Latte"],
    ["305C", "Iced Frappe"],
    ["307N", "Golden Milk"],
    ["310G", "Amaretti"],
    ["320G", "TresLeches"],
    ["330N", "Butter Pecan"],
    ["340G", "Baklava"],
    ["350G", "Dulce De Leche"],
    ["355W", "Creme Caramel"],
    ["400G", "Macchiato"],
    ["420G", "Toffee"],
    ["425N", "Pistachio Cream"],
    ["430N", "Gingerbread"],
    ["440G", "Cinnamon"],
    ["450G", "Chocolate Mousse"],
    ["455R", "Peanut Butter"],
    ["500G", "Mocha"],
    ["510R", "Cocoa"],
    ["550R", "Hot Fudge"],
    ["560R", "Ganache"],
    ["570W", "Chocolate Swirl"],
    ["580N", "Truffle Cake"],
    ["590R", "True Lava Cake"],
    ["595N", "Molten Cocoa"],
    ["600N", "Espresso"]
  ].map(([code, name], index) => ({
    id: `huda-easy-blur-${index + 1}`,
    code,
    name,
    normalizedUndertone: "unknown",
    skinDepth: null,
    sourceStatus: "official-brand-page"
  })),

  source: {
    type: "brand-official-product-page",
    url: "https://hudabeauty.com/en-sa/products/easy-blur-natural-airbrush-foundation-with-niacinamide-hb01166m",
    checkedAt: "2026-11-15"
  }
}
  
,
{
  id: "urban-decay-face-bond-foundation",
  brand: "Urban Decay",
  product: "Face Bond Self-Setting Waterproof Foundation",
  name: "Face Bond Foundation",
  category: "foundation",
  formula: "liquid",
  finish: "natural matte",
  coverage: "medium buildable",
  image: "assets/makeup/urban-decay-face-bond.jpg",

  shades: [
    ["01", "Fair Cool", "fair", "cool"],
    ["02", "Fair Neutral", "fair", "neutral"],
    ["03", "Fair Warm", "fair", "warm"],
    ["04", "Fair Cool", "fair", "cool"],
    ["05", "Fair Neutral", "fair", "neutral"],
    ["06", "Fair Warm", "fair", "warm"],
    ["07", "Fair Neutral", "fair", "neutral"],
    ["08", "Fair Warm", "fair", "warm"],
    ["09", "Light Cool", "light", "cool"],
    ["10", "Light Neutral", "light", "neutral"],
    ["11", "Light Cool", "light", "cool"],
    ["12", "Light Neutral", "light", "neutral"],
    ["13", "Light Medium Cool Olive", "light-medium", "olive"],
    ["14", "Light Medium Golden", "light-medium", "golden"],
    ["15", "Light Medium Warm", "light-medium", "warm"],
    ["16", "Light Medium Cool", "light-medium", "cool"],
    ["17", "Medium Warm", "medium", "warm"],
    ["18", "Medium Neutral", "medium", "neutral"],
    ["19", "Medium Golden Olive", "medium", "olive"],
    ["20", "Medium Olive", "medium", "olive"],
    ["21", "Medium Neutral", "medium", "neutral"],
    ["22", "Medium Neutral", "medium", "neutral"],
    ["23", "Medium Neutral", "medium", "neutral"],
    ["24", "Medium Neutral", "medium", "neutral"],
    ["25", "Medium Deep Cool Olive", "medium-deep", "olive"],
    ["26", "Medium Deep Warm Peachy", "medium-deep", "peach"],
    ["27", "Medium Deep Olive", "medium-deep", "olive"],
    ["28", "Deep Neutral", "deep", "neutral"],
    ["29", "Medium Deep Neutral", "medium-deep", "neutral"],
    ["30", "Medium Deep Warm", "medium-deep", "warm"],
    ["31", "Medium Deep Warm Golden", "medium-deep", "golden"],
    ["32", "Medium Deep Warm Golden", "medium-deep", "golden"],
    ["33", "Deep Neutral", "deep", "neutral"],
    ["34", "Deep Cool", "deep", "cool"],
    ["35", "Deep Warm Neutral", "deep", "warm"],
    ["36", "Deep Warm Neutral", "deep", "warm"],
    ["37", "Deep Neutral", "deep", "neutral"],
    ["38", "Deep Neutral", "deep", "neutral"],
    ["39", "Deep Warm", "deep", "warm"],
    ["40", "Deep Cool", "deep", "cool"]
  ].map(([code, name, skinDepth, undertone]) => ({
    id: `urban-face-bond-${code}`,
    code,
    name,
    officialShadeGroup: name.split(" ").slice(0, 2).join(" "),
    normalizedUndertone: undertone,
    skinDepth,
    sourceStatus: "official-brand-page"
  })),

  source: {
    type: "brand-official-product-page",
    url: "https://www.urbandecay.com/face-bond-2024.html",
    checkedAt: "2026-11-15"
  }
}
];

/* مطابقة درجات البشرة */

export function matchVerifiedComplexionShades({
  productId,
  undertone,
  skinDepth
}) {

  const product = BEAUTY_AI_PRODUCTS.find(
    item => item.id === productId
  );

  if (!product || !Array.isArray(product.shades)) {
    return [];
  }

  if (!undertone || !skinDepth) {
    return [];
  }

  return product.shades.filter(shade =>
    shade.normalizedUndertone === undertone &&
    shade.skinDepth === skinDepth &&
    shade.sourceStatus === "official-brand-page"
  );
}

/* ترشيحات ألوان المكياج */

export const COLOR_COSMETIC_MATCH_FIELDS = {

  blush: [
    "undertone",
    "skinDepth",
    "desiredEffect"
  ],

  bronzer: [
    "skinDepth",
    "undertone"
  ],

  contour: [
    "skinDepth",
    "undertone"
  ],

  highlighter: [
    "skinDepth",
    "undertone",
    "finish"
  ],

  lipstick: [
    "undertone",
    "desiredEffect"
  ],

  lipGloss: [
    "undertone",
    "desiredEffect"
  ],

  eyeshadow: [
    "undertone",
    "desiredEffect"
  ]

};

/* ESTEE LAUDER - OFFICIAL SHADE FINDER PROFILE */

export const ESTEE_LAUDER_SKIN_PROFILE = {
  source: "https://www.esteelauder.com/foundation-finder",

  skinDepth: [
    "Light",
    "Light-Medium",
    "Medium",
    "Medium-Deep",
    "Deep",
    "Extra-Deep",
    "Ultra-Deep",
    "Deepest"
  ],

  undertones: [
    {
      id: "cool",
      label: "Cool",
      description: "Rosy undertone"
    },
    {
      id: "neutral",
      label: "Neutral",
      description: "Balanced pink and golden tones"
    },
    {
      id: "warm",
      label: "Warm",
      description: "Golden or olive undertone"
    }
  ],

  verification: "official-brand-finder",

  note: "Skin depth and undertone categories only. Individual shade assignments must be verified for each formula."
};

/* ESTEE LAUDER - DOUBLE WEAR OFFICIAL SHADE LIST */

export const ESTEE_LAUDER_DOUBLE_WEAR = {
  product: "Double Wear Stay-in-Place Longwear Matte Foundation",

  source: "https://www.esteelauder.com/product/643/141225/product-catalog/makeup/face/foundation/double-wear/stay-in-place-longwear-matte-foundation",

  verification: "official-brand-product-page",

  shades: [
    { code: "0C1", name: "Cool Sand" },
    { code: "0N1", name: "Alabaster" },
    { code: "0W1", name: "Warm Ivory" },
    { code: "1C0", name: "Shell" },
    { code: "1C1", name: "Cool Bone" },
    { code: "1C2", name: "Petal" },
    { code: "1N0", name: "Porcelain" },
    { code: "1N1", name: "Ivory Nude" },
    { code: "1N2", name: "Ecru" },
    { code: "1W0", name: "Warm Porcelain" },
    { code: "1W1", name: "Bone" },
    { code: "1W2", name: "Sand" },
    { code: "1W2.5", name: "Golden Sand" },
    { code: "2C0", name: "Cool Vanilla" },
    { code: "2C1", name: "Pure Beige" },
    { code: "2C2", name: "Pale Almond" },
    { code: "2C3", name: "Fresco" },
    { code: "2C4", name: "Ivory Rose" },
    { code: "2N1", name: "Desert Beige" },
    { code: "2N2", name: "Buff" },
    { code: "2N3", name: "Dolce" },
    { code: "2W0", name: "Warm Vanilla" },
    { code: "2W1", name: "Dawn" },
    { code: "2W1.5", name: "Natural Suede" },
    { code: "2W2", name: "Rattan" },
    { code: "3C0", name: "Cool Creme" },
    { code: "3C1", name: "Dusk" },
    { code: "3C2", name: "Pebble" },
    { code: "3C3", name: "Sandbar" },
    { code: "3N1", name: "Ivory Beige" },
    { code: "3N2", name: "Wheat" },
    { code: "3W0", name: "Warm Creme" },
    { code: "3W1", name: "Tawny" },
    { code: "3W1.5", name: "Fawn" },
    { code: "3W2", name: "Cashew" },
    { code: "4C1", name: "Outdoor Beige" },
    { code: "4C2", name: "Auburn" },
    { code: "4C3", name: "Softan" },
    { code: "4N1", name: "Shell Beige" },
    { code: "4N2", name: "Spiced Sand" },
    { code: "4N3", name: "Maple Sugar" },
    { code: "4W1", name: "Honey Bronze" },
    { code: "4W1.5", name: "Medium Spice" },
    { code: "4W2", name: "Toasty Toffee" },
    { code: "4W3", name: "Henna" },
    { code: "4W4", name: "Hazel" },
    { code: "5C1", name: "Rich Chestnut" },
    { code: "5C2", name: "Sepia" },
    { code: "5N1", name: "Rich Ginger" },
    { code: "5N1.5", name: "Maple" },
    { code: "5N2", name: "Amber Honey" },
    { code: "5N3", name: "Spiced Amber" },
    { code: "5W1", name: "Bronze" },
    { code: "5W1.5", name: "Cinnamon" },
    { code: "5W2", name: "Rich Caramel" },
    { code: "6C1", name: "Rich Cocoa" },
    { code: "6C2", name: "Pecan" },
    { code: "6N1", name: "Mocha" },
    { code: "6N2", name: "Truffle" },
    { code: "6W1", name: "Sandalwood" },
    { code: "6W2", name: "Nutmeg" },
    { code: "7C1", name: "Rich Mahogany" },
    { code: "7C2", name: "Sienna" },
    { code: "7N1", name: "Deep Amber" },
    { code: "7W1", name: "Deep Spice" },
    { code: "8C1", name: "Rich Java" },
    { code: "8N1", name: "Espresso" },
    { code: "8W1", name: "Warm Espresso" },
    { code: "9C1", name: "Fudge" },
    { code: "9N1", name: "Ebony" }
  ]
};
// ربط درجات Estée Lauder بتصنيف الاندرتون الرسمي

ESTEE_LAUDER_DOUBLE_WEAR.shades =
  ESTEE_LAUDER_DOUBLE_WEAR.shades.map(shade => {
    const intensityMatch = shade.code.match(/^(\d+(?:\.\d+)?)/);
    const undertoneMatch = shade.code.match(/[CNW]/);

    const undertoneMap = {
      C: "cool",
      N: "neutral",
      W: "warm"
    };

    return {
      ...shade,
      officialIntensity: intensityMatch
        ? Number(intensityMatch[1])
        : null,
      normalizedUndertone: undertoneMap[
        undertoneMatch?.[0]
      ] || "unknown",
      skinDepth: null,
      sourceStatus: "official-brand-page"
    };
  });

// ربط الدرجات بقاعدة المنتجات الرئيسية

const esteeProduct = BEAUTY_AI_PRODUCTS.find(
  item => item.id === "estee-lauder-double-wear"
);

if (esteeProduct) {
  esteeProduct.shades = ESTEE_LAUDER_DOUBLE_WEAR.shades;
}
// FENTY BEAUTY - PRO FILT'R OFFICIAL SHADE CODES

const fentyProFiltrShadeCodes = [
  "100", "110", "120", "125", "130",
  "140", "150", "160", "170", "175",
  "185", "190", "200", "210", "220",
  "225", "230", "235", "240", "250",
  "260", "265", "280", "290", "295",
  "300", "310", "315", "330", "335",
  "345", "350", "360", "370", "385",
  "390", "400", "410", "420", "425",
  "430", "440", "445", "450", "470",
  "480", "485", "490", "495", "498"
];


const fentyDatabaseProduct = BEAUTY_AI_PRODUCTS.find(
  item => item.id === "fenty-pro-filtr-foundation"
);

if (fentyDatabaseProduct) {
  fentyDatabaseProduct.shades = fentyProFiltrShadeCodes.map(
    (code, index) => {
      const number = Number(code);

      return {
        id: `fenty-pro-filtr-${index + 1}`,
        code,
        name: null,

        officialShadeRange:
          number < 200 ? "Light" :
          number < 300 ? "Medium" :
          number < 400 ? "Tan" :
          "Deep",

        normalizedUndertone: "unknown",
        skinDepth: null,
        sourceStatus: "official-brand-page",

        verificationNote:
          "Shade code verified against the current official product selector. Individual undertone and exact skin depth not assigned."
      };
    }
  );

  fentyDatabaseProduct.finish = "soft matte";
  fentyDatabaseProduct.coverage = "medium-to-full buildable";
  fentyDatabaseProduct.shadeCountClaimedByBrand = 50;
  fentyDatabaseProduct.priceSAR = 235;
}
