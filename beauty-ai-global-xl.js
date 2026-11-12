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
