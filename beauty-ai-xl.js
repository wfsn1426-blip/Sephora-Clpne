
/* BEAUTY AI XL — Starter Shade Catalogue */

export const BEAUTY_AI_CATALOG_META = {
  version: "1.0.0",
  locale: "en-SA",
  currency: "SAR",
  depthScale: [
    "very-fair", "fair", "light", "light-medium",
    "medium", "medium-deep", "deep", "very-deep"
  ],
  undertones: [
    "cool", "neutral", "warm", "olive",
    "peach", "golden", "red", "unknown"
  ]
};

export const MAKEUP_CATEGORIES = [
  "foundation",
  "concealer",
  "powder",
  "tinted-moisturizer",
  "skin-tint",
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
];

const sources = {
  dior: "https://www.dior.com/en_sa/beauty",
  estee: "https://www.esteelauder.com/foundation-finder",
  mac: "https://www.maccosmetics-sa.com/products/face/foundations",
  fenty: "https://fentybeauty.com/en-sa"
};

function createShades(codes) {
  return codes.map(code => ({
    code,
    name: null,
    undertone: null,
    depth: null,
    image: null,
    verification: "requires-swatch-validation"
  }));
}

export const BEAUTY_AI_PRODUCTS = [
  {
    id: "dior-forever-skin-glow",
    brand: "DIOR",
    product: "Dior Forever Skin Glow",
    category: "foundation",
    finish: "natural glow",
    shades: [
      ["0", "neutral"],
      ["0.5", "neutral"],
      ["1", "cool rosy"],
      ["1", "neutral"],
      ["1", "warm"],
      ["1.5", "neutral"],
      ["2", "cool rosy"],
      ["2", "neutral"],
      ["2", "warm"],
      ["2", "warm olive"],
      ["2.5", "neutral"],
      ["2.5", "warm"],
      ["3", "cool"],
      ["3", "neutral"],
      ["3", "warm"],
      ["3.5", "neutral"],
      ["4", "neutral"],
      ["4", "warm"],
      ["5", "neutral"],
      ["5", "warm"],
      ["6", "neutral"],
      ["7", "neutral"],
      ["8", "neutral"],
      ["9", "neutral"]
    ].map(([code, undertone]) => ({
      code,
      name: null,
      undertone,
      depth: null,
      image: null,
      verification: "official-shade-selector"
    })),
    source: sources.dior
  },

  {
    id: "estee-lauder-double-wear",
    brand: "ESTEE LAUDER",
    product: "Double Wear Stay-in-Place Foundation",
    category: "foundation",
    shades: [
      ["0C1", "Cool", "Cool Sand"],
      ["0N1", "Neutral", "Alabaster"],
      ["0W1", "Warm", "Warm Ivory"],
      ["1C0", "Cool", "Shell"],
      ["1C1", "Cool", "Cool Bone"],
      ["1C2", "Cool", "Petal"],
      ["1N0", "Neutral", "Porcelain"],
      ["1N1", "Neutral", "Ivory Nude"],
      ["1N2", "Neutral", "Ecru"],
      ["1W0", "Warm", "Warm Porcelain"],
      ["1W1", "Warm", "Bone"],
      ["1W2", "Warm", "Sand"],
      ["2C0", "Cool", "Cool Vanilla"],
      ["2C1", "Cool", "Pure Beige"],
      ["2C2", "Cool", "Pale Almond"],
      ["2N1", "Neutral", "Desert Beige"],
      ["2N2", "Neutral", "Buff"],
      ["2N3", "Neutral", "Dolce"],
      ["2W0", "Warm", "Warm Vanilla"],
      ["2W1", "Warm", "Dawn"],
      ["2W2", "Warm", "Rattan"],
      ["3N1", "Neutral", "Ivory Beige"],
      ["3N2", "Neutral", "Wheat"],
      ["3W1", "Warm", "Tawny"],
      ["3W2", "Warm", "Cashew"],
      ["4N1", "Neutral", "Shell Beige"],
      ["4N2", "Neutral", "Spiced Sand"],
      ["4W1", "Warm", "Honey Bronze"],
      ["4W2", "Warm", "Toasty Toffee"],
      ["5N1", "Neutral", "Rich Ginger"],
      ["5W1", "Warm", "Bronze"],
      ["5W2", "Warm", "Rich Caramel"],
      ["6N1", "Neutral", "Mocha"],
      ["6N2", "Neutral", "Truffle"],
      ["6W1", "Warm", "Sandalwood"],
      ["7N1", "Neutral", "Deep Amber"],
      ["8N1", "Neutral", "Espresso"],
      ["9N1", "Neutral", "Ebony"]
    ].map(([code, undertone, name]) => ({
      code,
      undertone: undertone.toLowerCase(),
      name,
      depth: null,
      image: null,
      verification: "brand-shade-finder"
    })),
    source: sources.estee
  },

  {
    id: "mac-studio-fix-fluid",
    brand: "M·A·C",
    product: "Studio Fix Fluid Foundation",
    category: "foundation",
    shades: createShades([
      "NW15", "NW35", "NC42", "NC50", "NW30",
      "NW45", "NC15", "NW13", "NC20", "NC25",
      "NW20", "NW18", "NC30", "NW22", "NC35",
      "NW25", "NC37", "NC40", "NC45", "NC44",
      "NW43", "NW47", "NW50"
    ]),
    source: sources.mac
  },

  {
    id: "fenty-pro-filtr-concealer",
    brand: "FENTY BEAUTY",
    product: "Pro Filt'r Instant Retouch Concealer",
    category: "concealer",
    shades: createShades([
      "105", "110", "130", "140", "145", "150",
      "160", "170", "180", "185", "190", "200",
      "210", "220", "230", "235", "240", "250",
      "255", "260", "270", "280", "290", "300",
      "310", "320", "330", "340", "345", "350",
      "360", "370", "385", "390", "400", "410",
      "420", "430", "440", "445", "450", "460",
      "470", "480", "490", "495", "498"
    ]),
    source: sources.fenty
  },

  {
    id: "mac-lipsticks",
    brand: "M·A·C",
    product: "M·A·Cximal Lipstick",
    category: "lipstick",
    shades: [
      "Velvet Teddy", "Ruby Woo", "Chili",
      "Diva", "Mehr", "Taupe", "Honeylove",
      "Kinda Sexy", "Russian Red", "Whirl"
    ].map(name => ({
      name,
      undertone: null,
      depth: null,
      colorFamily: null,
      image: null,
      verification: "requires-swatch-validation"
    })),
    source: sources.mac
  },

  {
    id: "mac-blush",
    brand: "M·A·C",
    product: "M·A·C Blush",
    category: "blush",
    shades: [
      "Peachykeen", "Blushbaby", "Gingerly",
      "Pinch Me", "Coppertone", "Raizin The Roof",
      "Desert Rose", "Warm Soul", "Love Joy", "Dainty"
    ].map(name => ({
      name,
      undertone: null,
      depth: null,
      colorFamily: null,
      image: null,
      verification: "requires-swatch-validation"
    })),
    source: sources.mac
  }
];

/* Matching foundation and concealer shades */
export function matchComplexionShades({
  product,
  undertone,
  depth
}) {
  if (!product || !Array.isArray(product.shades)) {
    return [];
  }

  return product.shades.filter(shade => {
    const undertoneMatch =
      !undertone ||
      !shade.undertone ||
      shade.undertone === "unknown" ||
      shade.undertone === undertone;

    const depthMatch =
      !depth ||
      !shade.depth ||
      shade.depth === depth;

    return undertoneMatch && depthMatch;
  });
}

/* Color recommendations are separate from complexion shades */
export const COLOR_RECOMMENDATION_RULES = {
  blush: ["undertone", "depth", "desired-look"],
  bronzer: ["depth", "undertone"],
  contour: ["depth", "undertone"],
  highlighter: ["depth", "undertone", "finish"],
  lipstick: ["undertone", "depth", "desired-look"],
  eyeshadow: ["undertone", "depth", "desired-look"]
};
