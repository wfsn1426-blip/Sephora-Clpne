// BEAUTY AI - Shade Database
// قاعدة بيانات درجات المكياج

const shadeDatabase = {
  brands: [
    {
      id: "nars",
      name: "NARS",
      foundation: [],
      concealer: []
    },
    {
      id: "dior",
      name: "Dior",
      foundation: [],
      concealer: []
    },
    {
      id: "fenty",
      name: "Fenty Beauty",
      foundation: [],
      concealer: []
    },
    {
      id: "huda",
      name: "Huda Beauty",
      foundation: [
        {
          product: "FauxFilter Foundation",
          shades: [
            { name: "Milkshake", code: "100B", depth: "Fair", undertone: "Beige" },
            { name: "Angel Food", code: "110N", depth: "Fair", undertone: "Neutral" },
            { name: "Vanilla", code: "120B", depth: "Fair", undertone: "Beige" },
            { name: "Panna Cotta", code: "130G", depth: "Fair", undertone: "Golden" },
            { name: "Cashew", code: "140G", depth: "Deep Fair", undertone: "Golden Peach" },
            { name: "Crème Brulée", code: "150G", depth: "Deep Fair", undertone: "Golden" },
            { name: "Shortbread", code: "200B", depth: "Light", undertone: "Beige" },
            { name: "Chai", code: "210B", depth: "Light", undertone: "Beige Golden" },
            { name: "Custard", code: "220N", depth: "Light", undertone: "Neutral Peach" },
            { name: "Macaroon", code: "230N", depth: "Light", undertone: "Neutral Rose" },
            { name: "Toasted Coconut", code: "240N", depth: "Deep Light", undertone: "Neutral Golden" },
            { name: "Cheesecake", code: "250G", depth: "Deep Light", undertone: "Golden Peach" },
            { name: "Latte", code: "300N", depth: "Light Medium", undertone: "Neutral" },
            { name: "Amaretti", code: "310G", depth: "Light Medium", undertone: "Golden" },
            { name: "Tres Leches", code: "320G", depth: "Medium", undertone: "Golden" },
            { name: "Butter Pecan", code: "330N", depth: "Medium", undertone: "Neutral" },
            { name: "Baklava", code: "340G", depth: "Deep Medium", undertone: "Golden Neutral" },
            { name: "Dulce De Leche", code: "350G", depth: "Deep Medium", undertone: "Golden" },
            { name: "Macchiato", code: "400G", depth: "Tan", undertone: "Golden Neutral" },
            { name: "Brown Sugar", code: "410G", depth: "Tan", undertone: "Golden" },
            { name: "Toffee", code: "420G", depth: "Tan", undertone: "Golden" },
            { name: "Gingerbread", code: "430N", depth: "Tan", undertone: "Neutral" },
            { name: "Cinnamon", code: "440G", depth: "Ultra Tan", undertone: "Golden" },
            { name: "Chocolate Mousse", code: "450G", depth: "Ultra Tan", undertone: "Golden Neutral" },
            { name: "Mocha", code: "500G", depth: "Rich", undertone: "Golden" },
            { name: "Cocoa", code: "510R", depth: "Rich", undertone: "Red" },
            { name: "Nutmeg", code: "520G", depth: "Rich", undertone: "Golden" },
            { name: "Coffee Bean", code: "530R", depth: "Rich", undertone: "Red" },
            { name: "Chocolate Truffle", code: "540G", depth: "Deep Rich", undertone: "Golden" },
            { name: "Hot Fudge", code: "550R", depth: "Deep Rich", undertone: "Red" }
          ]
        }
      ],
      concealer: []
    },
    {
      id: "mac",
      name: "MAC",
      foundation: [],
      concealer: []
    },
    {
      id: "estee-lauder",
      name: "Estée Lauder",
      foundation: [],
      concealer: []
    },
    {
      id: "rare-beauty",
      name: "Rare Beauty",
      foundation: [],
      concealer: []
    },
    {
      id: "charlotte-tilbury",
      name: "Charlotte Tilbury",
      foundation: [],
      concealer: []
    }
  ]
};
