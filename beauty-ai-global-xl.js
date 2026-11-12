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
        normalizedUndertone:
          normalizeUndertone(officialUndertone),
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
    id: "mac-studio-fix-fluid",
    brand: "M·A·C",
    product: "Studio Fix Fluid",
    category: "foundation",
    formula: "liquid",
    finish: null,
    coverage: null,
    shades: [],

    source: {
      type: "brand-official-shade-guide",
      url: "https://www.maccosmetics.com/pages/foundation-shade-finder",
      checkedAt: "2026-11-12"
    },

    verificationNote:
      "Add individual shades only after checking the exact formula's current official shade selector."
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
