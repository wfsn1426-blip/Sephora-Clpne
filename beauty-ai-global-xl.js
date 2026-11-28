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


/* درجات Dior Forever Skin Glow - Swatches */

const diorSkinGlowLabels = [
  ["0", "Neutral", "0 Neutral", "#F5E1D2"],
  ["0.5", "Neutral", "0.5 Neutral", "#F0D8C8"],
  ["1", "Cool Rosy", "1 Cool Rosy", "#EED3C9"],
  ["1", "Neutral", "1 Neutral", "#EBCFBF"],
  ["1", "Warm", "1 Warm", "#E9C9AF"],
  ["1.5", "Neutral", "1.5 Neutral", "#E5C5B5"],
  ["2", "Cool Rosy", "2 Cool Rosy", "#E3BFAF"],
  ["2", "Neutral", "2 Neutral", "#E0BCA5"],
  ["2", "Warm", "2 Warm", "#DDB696"],
  ["2", "Warm Olive", "2 Warm Olive", "#D5B59A"],
  ["2", "Warm Peach", "2 Warm Peach", "#E2B69A"],
  ["2.5", "Neutral", "2.5 Neutral", "#D9B39C"],
  ["2.5", "Warm", "2.5 Warm", "#D5AA8C"],
  ["3", "Cool", "3 Cool", "#D1A58F"],
  ["3", "Neutral", "3 Neutral", "#D0A48A"],
  ["3", "Warm", "3 Warm", "#C99A7A"],
  ["3", "Warm Olive", "3 Warm Olive", "#C5A083"],
  ["3", "Warm Peach", "3 Warm Peach", "#D19B7C"],
  ["3.5", "Neutral", "3.5 Neutral", "#C69A83"],
  ["4", "Neutral", "4 Neutral", "#BC8E76"],
  ["4", "Warm", "4 Warm", "#B98568"],
  ["4", "Warm Olive", "4 Warm Olive", "#B89275"],
  ["4.5", "Neutral", "4.5 Neutral", "#B48770"],
  ["4.5", "Warm", "4.5 Warm", "#AE7D61"],
  ["5", "Neutral", "5 Neutral", "#A77962"],
  ["5", "Warm", "5 Warm", "#A16F54"],
  ["6", "Neutral", "6 Neutral", "#92664F"],
  ["6.5", "Neutral", "6.5 Neutral", "#855A45"],
  ["7", "Neutral", "7 Neutral", "#754C39"],
  ["7.5", "Neutral", "7.5 Neutral", "#68432F"],
  ["8", "Neutral", "8 Neutral", "#593A29"],
  ["9", "Neutral", "9 Neutral", "#493020"]
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
  ([code, officialUndertone, shadeName, swatchHex], index) => ({
    id: `dior-fsg-${index + 1}`,
    code,
    name: shadeName,
    officialUndertone,
    normalizedUndertone: normalizeUndertone(officialUndertone),
    skinDepth: null,
    swatchHex,
    color: swatchHex,
    swatchImage: null,
    sourceStatus: "official-brand-page",
    verificationNote:
      "Official undertone label captured; swatch colors are visual approximations."
  })
),

   source: {
  type: "brand-official",
  url: "https://www.dior.com/en_sa/beauty",
  checkedAt: "2026-11-12"
  }
},
  
const narsNaturalRadiantSwatches = {
  "L1": "#F2D8C9",
  "L2": "#EED8C8",
  "L2.5": "#E8CDBB",
  "L3": "#E6C6A8",
  "L3.5": "#E3C2A4",
  "L4": "#E8CDB5",
  "L4.5": "#E0C2B0",
  "L5": "#DDBB9B",

  "M1": "#D9B18C",
  "M1.2": "#D8B79C",
  "M1.5": "#D2AA91",
  "M2": "#D1AC94",
  "M2.5": "#CDA17E",
  "M3": "#C99B76",
  "M3.5": "#C49372",
  "M4": "#BD8B68",
  "M5": "#B98561",
  "M6": "#B27D62",

  "MD1": "#AA7859",
  "MD2": "#A77963",
  "MD2.6": "#9F735F",
  "MD3.3": "#95694F",
  "MD3.6": "#8E624A",
  "MD4": "#875C46",

  "D1": "#815A4C",
  "D3": "#76523F",
  "D4": "#6E4938",
  "D5": "#633F31",
  "D6": "#56382D"
};
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

  swatchHex: narsNaturalRadiantSwatches[shade.code] || "#D8CBB9",
  color: narsNaturalRadiantSwatches[shade.code] || "#D8CBB9",

  swatchImage: null,
  sourceStatus: "official-brand-page",
  verificationNote:
    "Shade swatch color is a visual approximation."
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
  },
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
  image: "assets/makeup/huda-beauty-easy-blur-foundation.jpg",
  
  shades: [
    ["100B", "Milkshake", "cool"],
    ["110N", "Angel Food", "neutral"],
    ["120B", "Vanilla", "unknown"],
    ["140G", "Cashew", "unknown"],
    ["150G", "Creme Brulee", "unknown"],
    ["200B", "Shortbread", "unknown"],
    ["210B", "Chai", "unknown"],
    ["220N", "Custard", "unknown"],
    ["230N", "Macaroon", "unknown"],
    ["240N", "Toasted Coconut", "unknown"],
    ["250G", "Cheesecake", "unknown"],
    ["255B", "Apple Pie", "unknown"],
    ["260W", "Cream Puff", "unknown"],
    ["300N", "Latte", "unknown"],
    ["305C", "Iced Frappe", "cool"],
    ["307N", "Golden Milk", "unknown"],
    ["310G", "Amaretti", "unknown"],
    ["320G", "TresLeches", "unknown"],
    ["330N", "Butter Pecan", "unknown"],
    ["340G", "Baklava", "unknown"],
    ["350G", "Dulce De Leche", "unknown"],
    ["355W", "Creme Caramel", "unknown"],
    ["400G", "Macchiato", "warm"],
    ["420G", "Toffee", "unknown"],
    ["425N", "Pistachio Cream", "unknown"],
    ["430N", "Gingerbread", "unknown"],
    ["440G", "Cinnamon", "unknown"],
    ["450G", "Chocolate Mousse", "unknown"],
    ["455R", "Peanut Butter", "unknown"],
    ["500G", "Mocha", "unknown"],
    ["510R", "Cocoa", "unknown"],
    ["550R", "Hot Fudge", "unknown"],
    ["560R", "Ganache", "unknown"],
    ["570W", "Chocolate Swirl", "unknown"],
    ["580N", "Truffle Cake", "unknown"],
    ["590R", "True Lava Cake", "unknown"],
    ["595N", "Molten Cocoa", "unknown"],
    ["600N", "Espresso", "unknown"]
  ].map(([code, name, undertone], index) => ({
    id: `huda-easy-blur-${index + 1}`,
    code,
    name,
    normalizedUndertone: undertone,
    skinDepth: null,
    sourceStatus: "official-brand-page"
  })),

  source: {
  type: "brand-official-product-page",
  url: "https://hudabeauty.com/en-sa/products/easy-blur-natural-airbrush-foundation-with-niacinamide-hb01166m",
  checkedAt: "2026-11-15"
}
},
{
  id: "urban-decay-face-bond-foundation",
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
},
];

/* =========================================
   BLUSH - POWDER & CREAM
========================================= */

const blushProductDatabase = [
  {
  id: "nars-powder-blush",
  brand: "NARS",
  product: "Powder Blush",
  category: "blush",
  formula: "powder",
  finish: "matte / shimmer",
  priceSAR: 220,
  shades: [
    { code: "777", name: "Orgasm", colorDescription: "Peachy pink with golden shimmer", swatchHex: "#E78D91", normalizedUndertone: "warm", skinDepth: null },
    { code: "778", name: "Orgasm Edge", colorDescription: "Matte peachy pink", swatchHex: "#E99C91", normalizedUndertone: "warm", skinDepth: null },
    { code: "776", name: "Orgasm X", colorDescription: "Deep coral with gold pearl", swatchHex: "#D96858", normalizedUndertone: "warm", skinDepth: null },
    { code: "775", name: "Orgasm Rush", colorDescription: "Deep rose bronze shimmer", swatchHex: "#A75E62", normalizedUndertone: "warm", skinDepth: null },
    { code: "237", name: "Deep Throat", colorDescription: "Soft pink with golden sheen", swatchHex: "#D98D91", normalizedUndertone: "neutral", skinDepth: null },
    { code: "900", name: "Behave", colorDescription: "Matte pink mauve", swatchHex: "#B87991", normalizedUndertone: "cool", skinDepth: null },
    { code: "901", name: "Amour", colorDescription: "Matte warm pink", swatchHex: "#D76C78", normalizedUndertone: "warm", skinDepth: null },
    { code: "888", name: "Dolce Vita", colorDescription: "Matte dusty rose", swatchHex: "#B76C78", normalizedUndertone: "neutral", skinDepth: null },
    { code: "920", name: "Sex Appeal", colorDescription: "Matte soft peach", swatchHex: "#E8B19A", normalizedUndertone: "warm", skinDepth: null },
    { code: "921", name: "Gina", colorDescription: "Matte tangerine", swatchHex: "#E88949", normalizedUndertone: "warm", skinDepth: null },
    { code: "922", name: "Forbidden", colorDescription: "Matte beige coral", swatchHex: "#D58B72", normalizedUndertone: "warm", skinDepth: null },
    { code: "252", name: "Torrid", colorDescription: "Warm coral with golden shimmer", swatchHex: "#E47762", normalizedUndertone: "warm", skinDepth: null },
    { code: "923", name: "Obsession", colorDescription: "Matte papaya coral", swatchHex: "#E66D50", normalizedUndertone: "warm", skinDepth: null },
    { code: "950", name: "Thrill", colorDescription: "Matte cool light pink", swatchHex: "#F1A5C4", normalizedUndertone: "cool", skinDepth: null },
    { code: "951", name: "Dominant", colorDescription: "Matte poppy pink", swatchHex: "#E95779", normalizedUndertone: "cool", skinDepth: null },
    { code: "952", name: "Teased", colorDescription: "Matte fuchsia", swatchHex: "#C93685", normalizedUndertone: "cool", skinDepth: null },
    { code: "953", name: "Exhibit A", colorDescription: "Matte red", swatchHex: "#D94345", normalizedUndertone: "warm", skinDepth: null },
    { code: "955", name: "Taj Mahal", colorDescription: "Burnished orange with golden shimmer", swatchHex: "#D8792D", normalizedUndertone: "warm", skinDepth: null },
    { code: "956", name: "Foreplay", colorDescription: "Shimmering red brown", swatchHex: "#995449", normalizedUndertone: "warm", skinDepth: null },
    { code: "903", name: "Impassioned", colorDescription: "Matte pink orchid", swatchHex: "#C77CB4", normalizedUndertone: "cool", skinDepth: null },
    { code: "907", name: "Mad Love", colorDescription: "Mauve pink with gold shimmer", swatchHex: "#B87991", normalizedUndertone: "neutral", skinDepth: null },
    { code: "908", name: "Catch Me", colorDescription: "Matte cool pink", swatchHex: "#D47EA3", normalizedUndertone: "cool", skinDepth: null },
    { code: "909", name: "Wild Bunch", colorDescription: "Shimmering raspberry", swatchHex: "#B83C69", normalizedUndertone: "cool", skinDepth: null },
    { code: "910", name: "Never Enough", colorDescription: "Matte peachy rose", swatchHex: "#CF827D", normalizedUndertone: "neutral", skinDepth: null },
    { code: "961", name: "Hot One", colorDescription: "Matte burgundy", swatchHex: "#873C52", normalizedUndertone: "cool", skinDepth: null },
    { code: "962", name: "Hunger", colorDescription: "Shimmering plum", swatchHex: "#80517C", normalizedUndertone: "cool", skinDepth: null },
    { code: "902", name: "Infatuated", colorDescription: "Matte deep plumberry", swatchHex: "#743E56", normalizedUndertone: "cool", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://www.narscosmetics.eu/en/powder-blush/0194251140414.html",
    checkedAt: "2026-11-25"
  },
   swatchNote: "swatchHex values are approximate visual representations, not official brand color values."
},
{
  id: "dior-rosy-glow-blush",
  brand: "Dior",
  product: "Backstage Rosy Glow Blush",
  category: "blush",
  formula: "powder",
  finish: "natural / pearly",
  priceSAR: 210,
  shades: [
    { code: "001", name: "Pink", colorDescription: "Soft pink", swatchHex: "#E98EAF", normalizedUndertone: "cool", skinDepth: null },
    { code: "006", name: "Berry", colorDescription: "Berry pink", swatchHex: "#B94E78", normalizedUndertone: "cool", skinDepth: null },
    { code: "012", name: "Rosewood", colorDescription: "Muted rosewood", swatchHex: "#B97985", normalizedUndertone: "neutral", skinDepth: null },
    { code: "063", name: "Pink Lilac", colorDescription: "Cool lilac pink", swatchHex: "#CE91CB", normalizedUndertone: "cool", skinDepth: null },
    { code: "077", name: "Candy", colorDescription: "Bright candy pink", swatchHex: "#F17FA9", normalizedUndertone: "cool", skinDepth: null },
    { code: "103", name: "Toffee", colorDescription: "Warm nude brown", swatchHex: "#B98265", normalizedUndertone: "warm", skinDepth: null },
    { code: "106", name: "Pomelo", colorDescription: "Soft coral peach", swatchHex: "#F0927D", normalizedUndertone: "warm", skinDepth: null },
    { code: "107", name: "Dragonfruit", colorDescription: "Vibrant pink", swatchHex: "#D94887", normalizedUndertone: "cool", skinDepth: null },
    { code: "108", name: "Guava", colorDescription: "Warm coral pink", swatchHex: "#E87978", normalizedUndertone: "warm", skinDepth: null },
    { code: "109", name: "Goji", colorDescription: "Deep berry red", swatchHex: "#A83F57", normalizedUndertone: "cool", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://www.dior.com/en_sa/beauty/products/dior-backstage-rosy-glow-Y0000049.html",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations."
},
  {
  id: "dior-rosy-glow-stick",
  brand: "Dior",
  product: "Backstage Rosy Glow Stick",
  category: "blush",
  formula: "cream",
  finish: "dewy glow",
  priceSAR: 230,

  shades: [
    {
      code: "001",
      name: "Pink",
      colorDescription: "Soft pink",
      swatchHex: "#E98EAF",
      normalizedUndertone: "cool",
      skinDepth: null
    },
    {
      code: "006",
      name: "Berry",
      colorDescription: "Berry pink",
      swatchHex: "#B94E78",
      normalizedUndertone: "cool",
      skinDepth: null
    },
    {
      code: "012",
      name: "Rosewood",
      colorDescription: "Muted rosewood",
      swatchHex: "#B97985",
      normalizedUndertone: "neutral",
      skinDepth: null
    },
    {
      code: "063",
      name: "Pink Lilac",
      colorDescription: "Cool lilac pink",
      swatchHex: "#CE91CB",
      normalizedUndertone: "cool",
      skinDepth: null
    },
    {
      code: "077",
      name: "Candy",
      colorDescription: "Bright candy pink",
      swatchHex: "#F17FA9",
      normalizedUndertone: "cool",
      skinDepth: null
    },
    {
      code: "103",
      name: "Toffee",
      colorDescription: "Warm nude brown",
      swatchHex: "#B98265",
      normalizedUndertone: "warm",
      skinDepth: null
    },
    {
      code: "106",
      name: "Pomelo",
      colorDescription: "Soft coral peach",
      swatchHex: "#F0927D",
      normalizedUndertone: "warm",
      skinDepth: null
    },
    {
      code: "107",
      name: "Dragonfruit",
      colorDescription: "Vibrant pink",
      swatchHex: "#D94887",
      normalizedUndertone: "cool",
      skinDepth: null
    },
    {
      code: "108",
      name: "Guava",
      colorDescription: "Warm coral pink",
      swatchHex: "#E87978",
      normalizedUndertone: "warm",
      skinDepth: null
    },
    {
      code: "109",
      name: "Goji",
      colorDescription: "Deep berry red",
      swatchHex: "#A83F57",
      normalizedUndertone: "cool",
      skinDepth: null
    }
  ],

  source: {
    type: "brand-official",
    url: "https://www.dior.com/en_sa/beauty/products/dior-backstage-rosy-glow-stick",
    checkedAt: "2026-11-28"
  },

  swatchNote: "swatchHex values are approximate visual representations."
},
  {
  id: "mac-powder-blush",
  brand: "M·A·C",
  product: "Skinfinish Colourstruck Blush",
  category: "blush",
  formula: "powder",
  finish: "matte / radiant",
  priceSAR: 155,
  shades: [
    { code: "01", name: "Snob", colorDescription: "Light cool pink", swatchHex: "#E9A4BD", normalizedUndertone: "cool", skinDepth: null },
    { code: "02", name: "CB96", colorDescription: "Copper peach shimmer", swatchHex: "#C98255", normalizedUndertone: "warm", skinDepth: null },
    { code: "03", name: "Pony", colorDescription: "Soft peachy nude", swatchHex: "#DCA58C", normalizedUndertone: "warm", skinDepth: null },
    { code: "04", name: "Cheeky Chili", colorDescription: "Warm terracotta", swatchHex: "#C76D53", normalizedUndertone: "warm", skinDepth: null },
    { code: "05", name: "Sinner", colorDescription: "Deep berry", swatchHex: "#843D58", normalizedUndertone: "cool", skinDepth: null },
    { code: "06", name: "Loudspeaker", colorDescription: "Bright coral pink", swatchHex: "#E95D73", normalizedUndertone: "warm", skinDepth: null },
    { code: "07", name: "Honeylove", colorDescription: "Soft beige nude", swatchHex: "#C99B83", normalizedUndertone: "neutral", skinDepth: null },
    { code: "08", name: "Peachykeen", colorDescription: "Peachy pink shimmer", swatchHex: "#E69B86", normalizedUndertone: "warm", skinDepth: null },
    { code: "09", name: "Velvet Teddy", colorDescription: "Muted rosy brown", swatchHex: "#B77A70", normalizedUndertone: "neutral", skinDepth: null },
    { code: "10", name: "Antique Velvet", colorDescription: "Deep muted plum", swatchHex: "#81536B", normalizedUndertone: "cool", skinDepth: null },
    { code: "11", name: "LaLaLavender", colorDescription: "Lavender pink", swatchHex: "#C69CCF", normalizedUndertone: "cool", skinDepth: null },
    { code: "12", name: "Pinch Me", colorDescription: "Rosy coral", swatchHex: "#D77C83", normalizedUndertone: "warm", skinDepth: null },
    { code: "13", name: "Thanks, It's MAC", colorDescription: "Beige pink nude", swatchHex: "#C99B9A", normalizedUndertone: "neutral", skinDepth: null },
    { code: "14", name: "No Filter", colorDescription: "Muted mauve pink", swatchHex: "#B9829A", normalizedUndertone: "cool", skinDepth: null },
    { code: "15", name: "Sunbasque", colorDescription: "Warm peach bronze", swatchHex: "#CB8658", normalizedUndertone: "warm", skinDepth: null },
    { code: "16", name: "Blushbaby", colorDescription: "Muted beige pink", swatchHex: "#C39B8D", normalizedUndertone: "neutral", skinDepth: null },
    { code: "17", name: "Gingerly", colorDescription: "Warm peach brown", swatchHex: "#C88963", normalizedUndertone: "warm", skinDepth: null },
    { code: "18", name: "Ruby Wooed", colorDescription: "Ruby red", swatchHex: "#B94754", normalizedUndertone: "cool", skinDepth: null },
    { code: "19", name: "Peachtwist", colorDescription: "Peach bronze shimmer", swatchHex: "#D68D68", normalizedUndertone: "warm", skinDepth: null },
    { code: "20", name: "Pink Flamingo", colorDescription: "Bright pink", swatchHex: "#E75D91", normalizedUndertone: "cool", skinDepth: null },
    { code: "21", name: "Plush", colorDescription: "Mauve rose", swatchHex: "#BA7898", normalizedUndertone: "cool", skinDepth: null },
    { code: "22", name: "Your Heroine", colorDescription: "Warm rose", swatchHex: "#C86F75", normalizedUndertone: "warm", skinDepth: null },
    { code: "23", name: "Babygirl", colorDescription: "Soft pink", swatchHex: "#D98DAA", normalizedUndertone: "cool", skinDepth: null },
    { code: "24", name: "Coppertone", colorDescription: "Copper brown", swatchHex: "#B9784F", normalizedUndertone: "warm", skinDepth: null },
    { code: "25", name: "Raizin The Roof", colorDescription: "Deep plum brown", swatchHex: "#79464D", normalizedUndertone: "warm", skinDepth: null },
    { code: "26", name: "Film Noir Buff", colorDescription: "Deep neutral brown", swatchHex: "#79584F", normalizedUndertone: "neutral", skinDepth: null },
    { code: "27", name: "Desert Rose", colorDescription: "Dusty rose", swatchHex: "#B66E79", normalizedUndertone: "neutral", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://www.maccosmetics-sa.com/en/product/skinfinish-colourstruck-blush",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations and not official brand color values."
},
{
  id: "hourglass-ambient-blush",
  brand: "Hourglass",
  product: "Ambient Lighting Blush",
  category: "blush",
  formula: "powder",
  finish: "radiant",
  priceSAR: 240,
  shades: [
    { code: "SUBLIME FLUSH", name: "Sublime Flush", colorDescription: "Soft pink fused with lilac", swatchHex: "#D99ABF", normalizedUndertone: "cool", skinDepth: null },
    { code: "AT NIGHT", name: "At Night", colorDescription: "Brick red", swatchHex: "#A64E43", normalizedUndertone: "warm", skinDepth: null },
    { code: "DIFFUSED HEAT", name: "Diffused Heat", colorDescription: "Vibrant poppy coral", swatchHex: "#E46A52", normalizedUndertone: "warm", skinDepth: null },
    { code: "LUMINOUS FLUSH", name: "Luminous Flush", colorDescription: "Champagne rose", swatchHex: "#D99A9B", normalizedUndertone: "warm", skinDepth: null },
    { code: "RADIANT MAGENTA", name: "Radiant Magenta", colorDescription: "Golden fuchsia", swatchHex: "#D4488F", normalizedUndertone: "cool", skinDepth: null },
    { code: "DIM INFUSION", name: "Dim Infusion", colorDescription: "Subdued coral", swatchHex: "#D58A75", normalizedUndertone: "warm", skinDepth: null },
    { code: "ETHEREAL GLOW", name: "Ethereal Glow", colorDescription: "Cool pink", swatchHex: "#E5A1C5", normalizedUndertone: "cool", skinDepth: null },
    { code: "MOOD EXPOSURE", name: "Mood Exposure", colorDescription: "Soft plum", swatchHex: "#A77C9B", normalizedUndertone: "cool", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://hourglasscolor.com/products/ambient-lighting-blush",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations, not official brand color values."
},
{
  id: "huda-blush-filter",
  brand: "Huda Beauty",
  product: "Blush Filter Blurring Blushlighters Palette",
  category: "blush",
  formula: "powder",
  finish: "matte / radiant",
  priceSAR: 210,
  shades: [
    {
      code: "01",
      name: "Strawberry Latte",
      colorDescription: "Rosy pink and strawberry tones",
      swatchHex: "#D9829D",
      normalizedUndertone: "cool",
      skinDepth: null
    },
    {
      code: "02",
      name: "Rose Berry",
      colorDescription: "Berry rose tones",
      swatchHex: "#B85D7D",
      normalizedUndertone: "cool",
      skinDepth: null
    },
    {
      code: "03",
      name: "Toasty Peach",
      colorDescription: "Warm peach and coral tones",
      swatchHex: "#DF906E",
      normalizedUndertone: "warm",
      skinDepth: null
    },
    {
      code: "04",
      name: "Baby Pink",
      colorDescription: "Soft baby pink tones",
      swatchHex: "#E9A4BD",
      normalizedUndertone: "cool",
      skinDepth: null
    }
  ],
  source: {
    type: "brand-official",
    url: "https://hudabeauty.com/en-sa/collections/huda-beauty-face",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations. Palette shade descriptions are simplified for matching."
},
{
  id: "fenty-cheeks-out",
  brand: "Fenty Beauty",
  product: "Cheeks Out Freestyle Cream Blush",
  category: "blush",
  formula: "cream",
  finish: "natural",
  priceSAR: 165,
  shades: [
    { code: "01", name: "Petal Poppin", colorDescription: "Soft pink", swatchHex: "#E99CBF", normalizedUndertone: "cool", skinDepth: null },
    { code: "02", name: "Peach Face", colorDescription: "Peachy nude", swatchHex: "#E5A17D", normalizedUndertone: "warm", skinDepth: null },
    { code: "03", name: "Riri", colorDescription: "Soft rose", swatchHex: "#B87587", normalizedUndertone: "neutral", skinDepth: null },
    { code: "04", name: "Raisin Standardz", colorDescription: "Deep raisin berry", swatchHex: "#74404D", normalizedUndertone: "cool", skinDepth: null },
    { code: "05", name: "Cool Berry", colorDescription: "Cool berry pink", swatchHex: "#B94D78", normalizedUndertone: "cool", skinDepth: null },
    { code: "06", name: "Summertime Wine", colorDescription: "Wine rose", swatchHex: "#9D5364", normalizedUndertone: "cool", skinDepth: null },
    { code: "07", name: "Rosé Latte", colorDescription: "Muted rosy brown", swatchHex: "#B98177", normalizedUndertone: "neutral", skinDepth: null },
    { code: "08", name: "Fuego Flush", colorDescription: "Warm coral red", swatchHex: "#D96855", normalizedUndertone: "warm", skinDepth: null },
    { code: "09", name: "Big Melons", colorDescription: "Bright watermelon pink", swatchHex: "#E96D86", normalizedUndertone: "cool", skinDepth: null },
    { code: "10", name: "Strawberry Drip", colorDescription: "Strawberry pink", swatchHex: "#D94F79", normalizedUndertone: "cool", skinDepth: null },
    { code: "11", name: "Drama Cla$$", colorDescription: "Deep plum", swatchHex: "#8B3F61", normalizedUndertone: "cool", skinDepth: null },
    { code: "12", name: "Pinky Promise", colorDescription: "Bright pink", swatchHex: "#E85B9B", normalizedUndertone: "cool", skinDepth: null },
    { code: "13", name: "Daiquiri Dip", colorDescription: "Coral orange", swatchHex: "#E87952", normalizedUndertone: "warm", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://fentybeauty.com/en-sa/products/cheeks-out-freestyle-cream-blush-big-melons",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations, not official brand color values."
},
{
  id: "milk-lip-cheek",
  brand: "Milk Makeup",
  product: "Lip + Cheek Cream Blush Stick",
  category: "blush",
  formula: "cream",
  finish: "satin",
  priceSAR: 125,
  shades: [
    { code: "01", name: "Werk", colorDescription: "Natural dusty rose", swatchHex: "#C77D8D", normalizedUndertone: "neutral", skinDepth: null },
    { code: "02", name: "Dash", colorDescription: "Soft pink", swatchHex: "#E7A5B8", normalizedUndertone: "cool", skinDepth: null },
    { code: "03", name: "Rally", colorDescription: "Mauve pink with shimmer", swatchHex: "#C783A5", normalizedUndertone: "cool", skinDepth: null },
    { code: "04", name: "Perk", colorDescription: "Coral with shimmer", swatchHex: "#E58B79", normalizedUndertone: "warm", skinDepth: null },
    { code: "05", name: "Quirk", colorDescription: "Warm rose", swatchHex: "#C77A76", normalizedUndertone: "warm", skinDepth: null },
    { code: "06", name: "Pep", colorDescription: "Bright pink", swatchHex: "#E55B91", normalizedUndertone: "cool", skinDepth: null },
    { code: "07", name: "Muse", colorDescription: "Deep burgundy", swatchHex: "#873F52", normalizedUndertone: "cool", skinDepth: null },
    { code: "08", name: "Enigma", colorDescription: "Beige rose", swatchHex: "#B9857D", normalizedUndertone: "neutral", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://milkmakeup.com/products/lip-cheek",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations, not official brand color values."
},
{
  id: "nudestix-nudies-blush",
  brand: "Nudestix",
  product: "Nudies Blush Stick",
  category: "blush",
  formula: "cream",
  finish: "matte",
  priceSAR: 160,
  shades: [
    { code: "01", name: "Bare Back", colorDescription: "Neutral nude pink", swatchHex: "#C88F91", normalizedUndertone: "neutral", skinDepth: null },
    { code: "02", name: "Sweet Cheeks", colorDescription: "Soft rosy pink", swatchHex: "#D989A4", normalizedUndertone: "cool", skinDepth: null },
    { code: "03", name: "Bubba", colorDescription: "Dusty rose", swatchHex: "#B96F83", normalizedUndertone: "neutral", skinDepth: null },
    { code: "04", name: "Naughty N' Spice", colorDescription: "Deep rose", swatchHex: "#A85F70", normalizedUndertone: "neutral", skinDepth: null },
    { code: "05", name: "Sunkissed Pink", colorDescription: "Bright rose pink", swatchHex: "#E65D8C", normalizedUndertone: "cool", skinDepth: null },
    { code: "06", name: "Sunset Strip", colorDescription: "Warm bright coral", swatchHex: "#E77B58", normalizedUndertone: "warm", skinDepth: null },
    { code: "07", name: "Hot Fire", colorDescription: "Universal red", swatchHex: "#D94B48", normalizedUndertone: "warm", skinDepth: null },
    { code: "08", name: "Body Language", colorDescription: "Neutral nude rose", swatchHex: "#C28A85", normalizedUndertone: "neutral", skinDepth: null },
    { code: "09", name: "Picante", colorDescription: "Warm fresh orange", swatchHex: "#E7793E", normalizedUndertone: "warm", skinDepth: null },
    { code: "10", name: "In The Nude", colorDescription: "Warm nude peach", swatchHex: "#D6A080", normalizedUndertone: "warm", skinDepth: null },
    { code: "11", name: "Salty Siren", colorDescription: "Warm rosy coral", swatchHex: "#D67C70", normalizedUndertone: "warm", skinDepth: null },
    { code: "12", name: "Nude Peach", colorDescription: "Warm fresh peach", swatchHex: "#E3A17E", normalizedUndertone: "warm", skinDepth: null },
    { code: "13", name: "Moodie Blu", colorDescription: "Cool deep eggplant", swatchHex: "#68445F", normalizedUndertone: "cool", skinDepth: null },
    { code: "14", name: "Cherie", colorDescription: "Neutral nude coral rose", swatchHex: "#C9827E", normalizedUndertone: "neutral", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://www.nudestix.com/collections/face/products/nudies-blush",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations, not official brand color values."
},
{
  id: "rare-beauty-bouncy-blush",
  brand: "Rare Beauty",
  product: "Soft Pinch Matte Bouncy Blush",
  category: "blush",
  formula: "cream-to-powder",
  finish: "matte",
  priceSAR: 170,
  shades: [
    { code: "01", name: "Hope", colorDescription: "Nude mauve", swatchHex: "#B98291", normalizedUndertone: "neutral", skinDepth: null },
    { code: "02", name: "Happy", colorDescription: "Cool pink", swatchHex: "#E58DB5", normalizedUndertone: "cool", skinDepth: null },
    { code: "03", name: "Worth", colorDescription: "True rose", swatchHex: "#C96F85", normalizedUndertone: "neutral", skinDepth: null },
    { code: "04", name: "Grateful", colorDescription: "Soft red", swatchHex: "#D65B61", normalizedUndertone: "warm", skinDepth: null },
    { code: "05", name: "Alive", colorDescription: "Bright coral orange", swatchHex: "#F0784C", normalizedUndertone: "warm", skinDepth: null },
    { code: "06", name: "Thriving", colorDescription: "Bright raspberry", swatchHex: "#D63883", normalizedUndertone: "cool", skinDepth: null },
    { code: "07", name: "Truth", colorDescription: "Soft plum", swatchHex: "#A66D8B", normalizedUndertone: "cool", skinDepth: null },
    { code: "08", name: "Divine", colorDescription: "True tea rose", swatchHex: "#C77B84", normalizedUndertone: "neutral", skinDepth: null },
    { code: "09", name: "Spirited", colorDescription: "Mid-tone violet", swatchHex: "#9465A5", normalizedUndertone: "cool", skinDepth: null },
    { code: "10", name: "Soulful", colorDescription: "Deep berry", swatchHex: "#7D3F59", normalizedUndertone: "cool", skinDepth: null }
  ],
  source: {
    type: "brand-official",
    url: "https://www.rarebeauty.com/products/soft-pinch-matte-bouncy-blush",
    checkedAt: "2026-11-25"
  },
  swatchNote: "swatchHex values are approximate visual representations, not official brand color values."
},
];
/* =========================================
   CONCEALERS -
   Official shade data only
========================================= */

const concealerDepthMap = {
  "Very fair": "very-fair",
  "Very light": "very-fair",
  "Fair": "fair",
  "Fair to light": "light",
  "Light": "light",
  "Light to medium": "light-medium",
  "Light medium": "light-medium",
  "Light+": "light-medium",
  "Medium": "medium",
  "Medium to medium-deep": "medium-deep",
  "Medium-deep": "medium-deep",
  "Medium Deep": "medium-deep",
  "Medium to tan": "medium-deep",
  "Tan": "medium-deep",
  "Tan to deep": "deep",
  "Deep": "deep",
  "Deeper": "deep",
  "Very deep": "very-deep",
  "Rich deep": "very-deep"
};

function makeConcealerShade(
  id, code, name, depth, undertone
) {
  return {
    id,
    code,
    name: name || null,
    officialSkinDepth: depth || null,
    skinDepth: concealerDepthMap[depth] || null,
    officialUndertone: undertone || "unknown",
    normalizedUndertone: undertone || "unknown",
    sourceStatus: "official-brand-page"
  };
}

function addConcealer({
  id, brand, product, image, url, shades = [],
  formula = "liquid"
}) {
  BEAUTY_AI_PRODUCTS.push({
    id,
    brand,
    product,
    category: "concealer",
    formula,
    image,
    shades,
    source: {
      type: "brand-official-product-page",
      url
    }
  });
}

/* 1. NARS - RADIANT CREAMY CONCEALER */

addConcealer({
  id: "nars-radiant-creamy-concealer",
  brand: "NARS",
  product: "Radiant Creamy Concealer",
  image: "assets/makeup/nars-radiant-creamy-concealer.jpg.",
  url: "https://www.narscosmetics.com/USA/radiant-creamy-concealer/999NACRCC0001.html",
  shades: [
    ["L1", "Chantilly", "Very light", "neutral"],
    ["L1.25", "Affogato", "Very light", "cool"],
    ["L2", "Vanilla", "Very light", "neutral"],
    ["L2.2", "Nougatine", "Light", "warm"],
    ["L2.3", "Madeleine", "Light", "neutral"],
    ["L2.4", "Café au Lait", "Light", "neutral"],
    ["L2.5", "Crème Brulée", "Light", "cool"],
    ["L2.6", "Café Con Leche", "Light to medium", "warm"],
    ["L2.75", "Cannelle", "Light", "warm"],
    ["L2.8", "Marron Glacé", "Light to medium", "warm"],
    ["L3", "Honey", "Light to medium", "cool"],
    ["M0", "Crema Catalana", "Medium", "cool"],
    ["M1", "Custard", "Medium", "neutral"],
    ["M1.25", "Toffee", "Medium", "cool"],
    ["M1.5", "Macadamia", "Medium", "warm"],
    ["M1.75", "Tiramisu", "Medium", "neutral"],
    ["M2", "Ginger", "Medium", "warm"],
    ["M3", "Praline", "Medium to medium-deep", "warm"],
    ["MD1", "Biscuit", "Medium to medium-deep", "warm"],
    ["MD1.5", "Sucre D'Orge", "Medium to medium-deep", "warm"],
    ["MD2", "Caramel", "Medium to medium-deep", "warm"],
    ["MD2.5", "Chestnut", "Medium-deep", "cool"],
    ["MD2.6", "Walnut", "Medium-deep", "olive"],
    ["MD2.75", "Truffle", "Medium-deep", "warm"],
    ["MD3", "Amande", "Medium-deep to deep", "neutral"],
    ["MD4", "Hazelnut", "Medium-deep to deep", "cool"],
    ["D0", "Chocolat", "Medium-deep to deep", "warm"],
    ["D1", "Café", "Medium-deep to deep", "neutral"],
    ["D2", "Cacao", "Deep", "warm"],
    ["D3", "Dark Coffee", "Deep", "neutral"]
  ].map((s, i) =>
    makeConcealerShade(
      `nars-rcc-${i + 1}`, s[0], s[1], s[2], s[3]
    )
  )
});

/* 2. TARTE - SHAPE TAPE CONCEALER */

addConcealer({
  id: "tarte-shape-tape-concealer",
  brand: "Tarte",
  product: "Shape Tape Concealer",
  image: "assets/makeup/tarte-shape-tape-concealer.jpg",
  url: "https://tartecosmetics.com/en-sa/products/shape-tape-concealer",
  shades: [
    ["8B", "Porcelain Beige", "Very fair", "cool"],
    ["12B", "Fair Beige", "Fair", "cool"],
    ["12S", "Fair", "Fair", "golden"],
    ["12N", "Fair Neutral", "Fair", "neutral"],
    ["16N", "Fair-Light Neutral", "Fair to light", "neutral"],
    ["20B", "Light", "Light", "cool"],
    ["20S", "Light Sand", "Light", "golden"],
    ["22N", "Light Neutral", "Light", "neutral"],
    ["22B", "Light Beige", "Light", "cool"],
    ["27H", "Light-Medium Honey", "Light to medium", "peach"],
    ["27S", "Light-Medium Sand", "Light to medium", "golden"],
    ["27B", "Light-Medium Beige", "Light to medium", "cool"],
    ["29N", "Light-Medium", "Light to medium", "neutral"],
    ["34S", "Medium Sand", "Medium", "golden"],
    ["35H", "Medium Honey", "Medium", "peach"],
    ["35N", "Medium", "Medium", "neutral"],
    ["36S", "Medium-Tan Sand", "Medium to tan", "golden"],
    ["37G", "Medium-Tan Golden", "Medium to tan", "olive"],
    ["38N", "Medium-Tan Neutral", "Medium to tan", "neutral"],
    ["42S", "Tan Sand", "Tan", "golden"],
    ["44H", "Tan", "Tan", "peach"],
    ["47H", "Tan-Deep Honey", "Tan to deep", "peach"],
    ["47S", "Tan-Deep Sand", "Tan to deep", "golden"],
    ["48G", "Tan-Deep Golden", "Tan to deep", "olive"],
    ["49W", "Tan-Deep Warm", "Tan to deep", "unknown"],
    ["51H", "Deep Honey", "Deep", "peach"],
    ["53G", "Deep Golden", "Deep", "olive"],
    ["53N", "Deep", "Deep", "neutral"],
    ["53S", "Deep Sand", "Deep", "golden"],
    ["53H", "Deep Honey", "Deep", "peach"],
    ["54H", "Deep Honey", "Deep", "peach"],
    ["55W", "Rich Warm", "Deeper", "unknown"],
    ["57G", "Rich Golden", "Deeper", "olive"],
    ["57S", "Rich Sand", "Deeper", "golden"],
    ["57N", "Rich", "Deeper", "neutral"],
    ["57H", "Rich Honey", "Deeper", "peach"],
    ["59H", "Rich Honey", "Deeper", "peach"],
    ["59W", "Rich Warm", "Deeper", "unknown"],
    ["60N", "Mahogany", "Very deep", "neutral"],
    ["60H", "Mahogany Honey", "Very deep", "peach"],
    ["60W", "Mahogany Warm", "Very deep", "unknown"],
    ["61H", "Espresso", "Very deep", "peach"],
    ["61G", "Espresso Golden", "Very deep", "olive"],
    ["61N", "Espresso Neutral", "Very deep", "neutral"],
    ["62H", "Espresso Honey", "Very deep", "peach"],
    ["62W", "Espresso Warm", "Very deep", "unknown"],
    ["63N", "Espresso Neutral", "Very deep", "neutral"],
    ["64W", "Espresso Warm", "Very deep", "unknown"]
  ].map((s, i) =>
    makeConcealerShade(
      `tarte-shape-tape-${i + 1}`, s[0], s[1], s[2], s[3]
    )
  )
});

/* 3. KOSAS - REVEALER CONCEALER */

addConcealer({
  id: "kosas-revealer-concealer",
  brand: "Kosas",
  product: "Revealer Concealer",
  image: "assets/makeup/kosas-revealer-concealer.jpg",
  url: "https://kosas.com/products/revealer-concealer",
  shades: [
    ["0.5 N", "0.5 N", "Very light", "neutral"],
    ["0.7 C", "0.7 C", "Very light", "cool"],
    ["01 N", "01 N", "Very light", "neutral"],
    ["1.5 C", "1.5 C", "Light", "cool"],
    ["02 W", "02 W", "Light", "golden"],
    ["2.3 N", "2.3 N", "Light", "neutral"],
    ["2.5 C", "2.5 C", "Light", "cool"],
    ["2.6 C", "2.6 C", "Light", "cool"],
    ["03 W", "03 W", "Light", "golden"],
    ["3.2 O", "3.2 O", "Light+", "olive"],
    ["3.5 W", "3.5 W", "Light+", "peach"],
    ["3.6 C", "3.6 C", "Light+", "cool"],
    ["3.8 N", "3.8 N", "Light medium", "neutral"],
    ["04 N", "04 N", "Light medium", "golden"],
    ["4.5 N", "4.5 N", "Light medium", "neutral"],
    ["05 W", "05 W", "Medium", "golden"],
    ["5.3 C", "5.3 C", "Medium", "peach"],
    ["5.5 O", "5.5 O", "Medium", "olive"],
    ["5.8 N", "5.8 N", "Medium", "neutral"],
    ["06 O", "06 O", "Medium Tan", "olive"],
    ["6.2 N", "6.2 N", "Medium Tan", "neutral"],
    ["6.3 N", "6.3 N", "Medium Tan", "neutral"],
    ["6.5 O", "6.5 O", "Medium Tan", "olive"],
    ["6.8 W", "6.8 W", "Medium Tan", "peach"],
    ["07 N", "07 N", "Medium Deep", "golden"],
    ["7.3 N", "7.3 N", "Medium Deep", "peach"],
    ["7.5 W", "7.5 W", "Medium Deep", "peach"],
    ["7.8 N", "7.8 N", "Medium Deep", "neutral"],
    ["08 W", "08 W", "Medium Deep", "golden"],
    ["8.1 O", "8.1 O", "Medium Deep", "olive"],
    ["8.2 W", "8.2 W", "Deep", "golden"],
    ["8.5 C", "8.5 C", "Deep", "peach"],
    ["8.7 N", "8.7 N", "Deep", "golden"],
    ["8.8 N", "8.8 N", "Deep", "olive"],
    ["9.1 N", "9.1 N", "Deep", "neutral"],
    ["9.5 N", "9.5 N", "Deep", "red"],
    ["10 W", "10 W", "Rich deep", "golden"],
    ["10.5 N", "10.5 N", "Rich deep", "neutral"]
  ].map((s, i) =>
    makeConcealerShade(
      `kosas-revealer-${i + 1}`, s[0], s[1], s[2], s[3]
    )
  )
});

/* 4. FENTY BEAUTY - WE'RE EVEN */

addConcealer({
  id: "fenty-were-even-concealer",
  brand: "Fenty Beauty",
  product: "We're Even Hydrating Longwear Concealer",
  image: "assets/makeup/fenty-beauty-concealer.jpg",
  url: "https://fentybeauty.com/en-sa/products/we-re-even-hydrating-longwear-concealer-220w",
  shades: [
    "100C", "110W", "120N", "125C", "130W",
    "140N", "150N", "160W", "170C", "175W",
    "185C", "190W", "200C", "210W", "220W",
    "225N", "230W", "235W", "240N", "250W",
    "260N", "265W", "280C", "290W", "295W",
    "300N", "310W", "315W", "330W", "335W",
    "345C", "350C", "360W", "370N", "385W",
    "390C", "400N", "410W", "420W", "425W",
    "430W", "440W", "445N", "450N", "470W",
    "480N", "485C", "490N", "495C", "498N"
  ].map((code, i) =>
    makeConcealerShade(
      `fenty-were-even-${i + 1}`,
      code,
      code,
      null,
      code.endsWith("C") ? "cool" :
      code.endsWith("W") ? "warm" :
      "neutral"
    )
  )
});

/* 5. HUDA BEAUTY - FAUXFILTER */

addConcealer({
  id: "huda-fauxfilter-concealer",
  brand: "Huda Beauty",
  product: "#FauxFilter Luminous Matte Concealer",
  image: "assets/makeup/huda-beauty-fauxfilter-concealer.jpg",
  url: "https://hudabeauty.com/en-sa/products/fauxfilter-luminous-matte-concealer-hb00855m",
  shades: [
    "Whipped Cream 0.1",
    "Royal Icing 1.1",
    "Marshmallow 1.3",
    "Yogurt Drops 1.5",
    "Honey 1.7",
    "Meringue 2.1",
    "Cotton Candy 2.3",
    "Nougat 2.5",
    "Coconut Flakes 2.7",
    "Vanilla Swirl 3.1",
    "Marmalade 3.3",
    "Sugar Biscuit 3.5",
    "Graham Cracker 4.1",
    "Cookie Dough 4.3",
    "Granola 4.5",
    "Caramel Corn 5.1",
    "Toasted Almond 5.3",
    "Candied Ginger 6.1",
    "Praline 6.3",
    "Brittle 6.5",
    "Peanut Butter 6.7",
    "Crumble 7.1",
    "Salted Caramel 7.3",
    "Butterscotch 7.5",
    "Honeycomb 7.7",
    "Hazelnut 8.1",
    "Maple Syrup 8.3",
    "Brownie 8.5",
    "Chocolate Chip 8.7"
  ].map((name, i) =>
    makeConcealerShade(
      `huda-fauxfilter-${i + 1}`,
      name.split(" ").pop(),
      name,
      null,
      "unknown"
    )
  )
});

/* 6. TOO FACED - BORN THIS WAY */

addConcealer({
  id: "too-faced-born-this-way-concealer",
  brand: "Too Faced",
  product: "Born This Way Super Coverage Concealer",
  image: "assets/makeup/too-faced-born-this-way-concealer.jpg",
  url: "https://www.toofaced.com/product/23785/101564/face-makeup/concealer/born-this-way-super-coverage-multi-use-concealer",
  shades: [
    ["Cloud", "Very fair", "neutral"],
    ["Marshmallow", "Very fair", "cool"],
    ["Swan", "Very fair", "neutral"],
    ["Snow", "Very fair", "cool"],
    ["Cream Puff", "Very fair", "cool"],
    ["Almond", "Fair", "golden"],
    ["Porcelain", "Fair", "neutral"],
    ["Shortbread", "Very light", "golden"],
    ["Vanilla", "Very light", "neutral"],
    ["Nude", "Very light", "cool"],
    ["Golden Beige", "Light", "golden"],
    ["Light Beige", "Light", "neutral"],
    ["Taffy", "Light medium", "cool"],
    ["Natural Beige", "Light medium", "neutral"],
    ["Warm Beige", "Medium", "neutral"],
    ["Sand", "Medium", "golden"],
    ["Cookie", "Medium", "olive"],
    ["Warm Sand", "Tan", "golden"],
    ["Honey", "Tan", "neutral"],
    ["Butterscotch", "Deeper", "golden"],
    ["Caramel", "Deeper", "neutral"]
  ].map((s, i) =>
    makeConcealerShade(
      `too-faced-born-this-way-${i + 1}`,
      null,
      s[0],
      s[1],
      s[2]
    )
  )
});

/* 7. ESTEE LAUDER - DOUBLE WEAR CONCEALER */

addConcealer({
  id: "estee-lauder-double-wear-concealer",
  brand: "Estée Lauder",
  product: "Double Wear Stay-in-Place 24-Hour Concealer",
  image: "assets/makeup/estee-lauder-double-wear-concealer.jpg",
  url: "https://www.esteelauder.com/product/642/131399/product-catalog/makeup/face/concealer/double-wear/stay-in-place-24-hour-concealer",
  shades: [
    ".5C", ".5N", "1C", "1N", "1W",
    "2C", "2N", "2W", "2.5C", "3C",
    "3N", "3W", "3.5C", "4C", "4N",
    "4W", "5C", "5N", "5W", "5.5N",
    "6C", "6N", "6W", "6.5N", "7C",
    "7N", "7W", "8C", "8N", "9N"
  ].map((code, i) =>
    makeConcealerShade(
      `estee-double-wear-concealer-${i + 1}`,
      code,
      code,
      null,
      code.includes("C") ? "cool" :
      code.includes("W") ? "warm" :
      "neutral"
    )
  )
});

/* 8. MAC - STUDIO FIX 36HR */

addConcealer({
  id: "mac-studio-fix-36hr-concealer",
  brand: "M·A·C",
  product: "Studio Fix 36HR Smooth Angles Concealer",
  image: "assets/makeup/mac-studio-fix-concealer.jpg",
  url: "https://www.maccosmetics.com.au/product/13844/142119/products/makeup/face/concealer/studio-fix-36hr-smooth-angles-concealer",
  shades: [
    "NC11.5", "NC12", "NC13", "NC14", "NC15",
    "NC16", "NC17", "NC18", "NC20", "NC25",
    "NC27", "NC30", "NC35", "NC37", "NC38",
    "NC40", "NC42", "NC44", "NC45", "NC45.5",
    "NC47", "NC50", "NC55", "NC58", "NC60",
    "NC63", "NC65",
    "NW11.5", "NW12", "NW13", "NW14", "NW15",
    "NW16", "NW17", "NW18", "NW20", "NW25",
    "NW30", "NW35", "NW40", "NW43", "NW45",
    "NW50", "NW55", "NW58", "NW65"
  ].map((code, i) =>
    makeConcealerShade(
      `mac-studio-fix-36hr-${i + 1}`,
      code,
      code,
      null,
      "unknown"
    )
  )
});

/* 9. DIOR - FOREVER SKIN CORRECT */

addConcealer({
  id: "dior-forever-skin-correct",
  brand: "Dior",
  product: "Forever Skin Correct Concealer",
  image: "assets/makeup/dior-forever-skin-correct-concealer.jpg",
  url: "https://www.dior.com/en_sa/beauty/products/dior-forever-skin-correct-Y0326000.html",
  shades: [
    ["0", "0 Neutral", "neutral"],
    ["1.5", "1.5 Neutral", "neutral"],
    ["1", "1 Neutral", "neutral"],
    ["1", "1 Warm", "warm"],
    ["2.5", "2.5 Neutral", "neutral"],
    ["2", "2 Neutral", "neutral"],
    ["2", "2 Warm", "warm"],
    ["2", "2 Warm Olive", "olive"],
    ["2", "2 Warm Peach", "peach"],
    ["3.5", "3.5 Neutral", "neutral"],
    ["3", "3 Neutral", "neutral"],
    ["3", "3 Warm", "warm"],
    ["3", "3 Warm Olive", "olive"],
    ["4", "4 Neutral", "neutral"],
    ["4", "4 Warm", "warm"],
    ["4", "4 Warm Olive", "olive"]
  ].map((s, i) =>
    makeConcealerShade(
      `dior-skin-correct-${i + 1}`,
      s[0],
      s[1],
      null,
      s[2]
    )
  )
});

/* =========================================
   MATCH VERIFIED COMPLEXION SHADES
   Flexible undertone + skin depth matching
========================================= */

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

  if (!undertone) {
    return [];
  }

  const normalize = value =>
    String(value || "")
      .toLowerCase()
      .trim()
      .replace(/[_\s]+/g, "-");

  const selectedUndertone = normalize(undertone);
  const selectedDepth = normalize(skinDepth);

  // أولًا: درجات نفس الـ Undertone
  const undertoneMatches = product.shades.filter(shade => {
    const shadeUndertone = normalize(
      shade.normalizedUndertone || shade.undertone
    );

    return shadeUndertone === selectedUndertone;
  });

  if (!undertoneMatches.length) {
    return [];
  }

  // ثانيًا: نفضّل نفس عمق البشرة
  const depthMatches = undertoneMatches.filter(shade => {
    const shadeDepth = normalize(
      shade.skinDepth || shade.depth
    );

    return shadeDepth && shadeDepth === selectedDepth;
  });

  // إذا وجد درجات بنفس العمق والـ Undertone
  if (depthMatches.length) {
    return depthMatches;
  }

  // إذا لم يوجد تطابق بالعمق، لا نخفي الدرجات
  return undertoneMatches;
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

/* =========================================
   BLUSH - POWDER & CREAM
========================================= */

const blushShadeColors = [
  {
    code: "01",
    name: "Rose Pink",
    color: "#D98D9D",
    undertone: "cool"
  },
  {
    code: "02",
    name: "Dusty Mauve",
    color: "#B77C91",
    undertone: "cool"
  },
  {
    code: "03",
    name: "Rosewood",
    color: "#B66D70",
    undertone: "neutral"
  },
  {
    code: "04",
    name: "Soft Peach",
    color: "#EBA17F",
    undertone: "warm"
  },
  {
    code: "05",
    name: "Terracotta",
    color: "#C87555",
    undertone: "warm"
  },
  {
    code: "06",
    name: "Berry Rose",
    color: "#A94F70",
    undertone: "cool"
  },
  {
    code: "07",
    name: "Coral Peach",
    color: "#E88770",
    undertone: "warm"
  },
  {
    code: "08",
    name: "Rosy Beige",
    color: "#C58D83",
    undertone: "neutral"
  },
  {
    code: "09",
    name: "Cinnamon Rose",
    color: "#A96755",
    undertone: "olive"
  },
  {
    code: "10",
    name: "Deep Plum",
    color: "#81465F",
    undertone: "cool"
  }
];

const blushProducts = [
  ["nars-powder-blush", "NARS", "Powder Blush", "powder", 220],
  ["dior-rosy-glow-blush", "Dior", "Rosy Glow Blush", "powder", 210],
  ["mac-powder-blush", "M·A·C", "Powder Blush", "powder", 155],
  ["hourglass-ambient-blush", "Hourglass", "Ambient Lighting Blush", "powder", 240],
  ["huda-blush-filter", "Huda Beauty", "Blush Filter Palette", "powder", 205],
  ["fenty-cheeks-out", "Fenty Beauty", "Cheeks Out Cream Blush", "cream", 145],
  ["dior-rosy-glow-stick", "Dior", "Rosy Glow Stick", "cream", 230],
  ["milk-lip-cheek", "Milk Makeup", "Lip + Cheek", "cream", 125],
  ["nudestix-nudies-blush", "Nudestix", "Nudies Blush", "cream", 145],
  ["rare-beauty-bouncy-blush", "Rare Beauty", "Soft Pinch Bouncy Blush", "cream", 170]
];

blushProducts.forEach(([id, brand, product, formula, priceSAR]) => {

  const officialBlush = blushProductDatabase.find(
    blush => blush.id === id
  );

  BEAUTY_AI_PRODUCTS.push({
    id,
    brand,
    product,
    category: "blush",
    formula,
    priceSAR,

    shades: (officialBlush?.shades || []).map(shade => ({
      id: `${id}-${shade.code}`,
      code: shade.code,
      name: shade.name,
      colorDescription: shade.colorDescription,
      swatchHex: shade.swatchHex,
      color: shade.swatchHex,
      normalizedUndertone: shade.normalizedUndertone,
      skinDepth: shade.skinDepth,
      officialUndertone: shade.officialUndertone || "",
      sourceStatus: "official-brand-page"
    })),

    source: {
      type: "official-brand-page",
      note: "درجات المنتج مرتبطة بقاعدة درجات المنتج الأصلية."
    }
  });

});
