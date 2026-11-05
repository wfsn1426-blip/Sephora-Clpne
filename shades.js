// BEAUTY AI - Official Shade Database
// قاعدة بيانات درجات المكياج

const shadeDatabase = {
  brands: [
    {
      id: "nars",
      name: "NARS",
      foundation: [
        {
          product: "Light Reflecting Foundation",
          shades: [
            { name: "YangYang", code: "L0.5", depth: "Very Light", undertone: "Cool" },
            { name: "Oslo", code: "L1", depth: "Very Light", undertone: "Cool" },
            { name: "Kailash", code: "L1.25", depth: "Very Light", undertone: "Warm Peach" },
            { name: "Yulong", code: "L1.5", depth: "Very Light", undertone: "Neutral Pink" },
            { name: "Gion", code: "L1.75", depth: "Very Light", undertone: "Neutral Peach" },
            { name: "Mont Blanc", code: "L2", depth: "Very Light", undertone: "Neutral" },
            { name: "Gobi", code: "L3", depth: "Light", undertone: "Warm Yellow" },
            { name: "Lima", code: "L3.25", depth: "Light", undertone: "Neutral" },
            { name: "Salzburg", code: "L3.5", depth: "Light", undertone: "Warm Peach" },
            { name: "Bruges", code: "L3.75", depth: "Light", undertone: "Warm" },
            { name: "Deauville", code: "L4", depth: "Light", undertone: "Neutral Peach" },
            { name: "Vienna", code: "L4.5", depth: "Light", undertone: "Cool" },
            { name: "Fiji", code: "L5", depth: "Light Medium", undertone: "Warm" }
          ]
        }
      ],
      concealer: [
        {
          product: "Radiant Creamy Concealer",
          shades: [
            { name: "Chantilly", code: "L1", depth: "Very Light", undertone: "Neutral" },
            { name: "Affogato", code: "L1.25", depth: "Very Light", undertone: "Cool" },
            { name: "Vanilla", code: "L2", depth: "Very Light", undertone: "Neutral" },
            { name: "Nougatine", code: "L2.2", depth: "Light", undertone: "Warm" },
            { name: "Madeleine", code: "L2.3", depth: "Light", undertone: "Neutral" },
            { name: "Cafe au Lait", code: "L2.4", depth: "Light", undertone: "Neutral Peach" },
            { name: "Creme Brulee", code: "L2.5", depth: "Light", undertone: "Cool" },
            { name: "Cafe Con Leche", code: "L2.6", depth: "Light Medium", undertone: "Warm" },
            { name: "Cannelle", code: "L2.75", depth: "Light", undertone: "Warm" },
            { name: "Marron Glace", code: "L2.8", depth: "Light Medium", undertone: "Warm Peach" },
            { name: "Honey", code: "L3", depth: "Light Medium", undertone: "Cool" },
            { name: "Crema Catalana", code: "M0", depth: "Medium", undertone: "Cool" },
            { name: "Custard", code: "M1", depth: "Medium", undertone: "Neutral" },
            { name: "Toffee", code: "M1.25", depth: "Medium", undertone: "Cool" },
            { name: "Macadamia", code: "M1.5", depth: "Medium", undertone: "Warm" },
            { name: "Tiramisu", code: "M1.75", depth: "Medium", undertone: "Neutral" },
            { name: "Ginger", code: "M2", depth: "Medium", undertone: "Warm Golden" },
            { name: "Praline", code: "M3", depth: "Medium Deep", undertone: "Warm" },
            { name: "Biscuit", code: "MD1", depth: "Medium Deep", undertone: "Warm Golden" },
            { name: "Sucre D'Orge", code: "MD1.5", depth: "Medium Deep", undertone: "Warm Peach" },
            { name: "Caramel", code: "MD2", depth: "Medium Deep", undertone: "Warm" },
            { name: "Chestnut", code: "MD2.5", depth: "Medium Deep", undertone: "Cool" },
            { name: "Walnut", code: "MD2.6", depth: "Medium Deep", undertone: "Warm Olive" },
            { name: "Truffle", code: "MD2.75", depth: "Medium Deep", undertone: "Warm Peach" },
            { name: "Amande", code: "MD3", depth: "Deep", undertone: "Neutral" },
            { name: "Hazelnut", code: "MD4", depth: "Deep", undertone: "Cool" },
            { name: "Chocolat", code: "D0", depth: "Deep", undertone: "Warm" },
            { name: "Cafe", code: "D1", depth: "Deep", undertone: "Neutral" },
            { name: "Cacao", code: "D2", depth: "Deep", undertone: "Warm" },
            { name: "Dark Coffee", code: "D3", depth: "Deep", undertone: "Neutral" }
          ]
        }
      ]
    },

   {
  id: "dior",
  name: "Dior",
  foundation: [
    {
      product: "Dior Forever",
      shades: [
        { name: "00", code: "00", depth: "Very Fair", undertone: "Neutral" },
        { name: "0N", code: "0N", depth: "Very Fair", undertone: "Neutral" },
        { name: "0.5N", code: "0.5N", depth: "Very Fair", undertone: "Neutral" },
        { name: "1N", code: "1N", depth: "Fair", undertone: "Neutral" },
        { name: "1W", code: "1W", depth: "Fair", undertone: "Warm" },
        { name: "1.5N", code: "1.5N", depth: "Fair", undertone: "Neutral" },
        { name: "1.5W", code: "1.5W", depth: "Fair", undertone: "Warm" },
        { name: "2N", code: "2N", depth: "Light", undertone: "Neutral" },
        { name: "2W", code: "2W", depth: "Light", undertone: "Warm" },
        { name: "2WO", code: "2WO", depth: "Light", undertone: "Warm Olive" },
        { name: "2WP", code: "2WP", depth: "Light", undertone: "Warm Peach" },
        { name: "2.5N", code: "2.5N", depth: "Light", undertone: "Neutral" },
        { name: "2CR", code: "2CR", depth: "Light", undertone: "Cool Rosy" },
        { name: "3N", code: "3N", depth: "Medium", undertone: "Neutral" },
        { name: "3W", code: "3W", depth: "Medium", undertone: "Warm" },
        { name: "3WO", code: "3WO", depth: "Medium", undertone: "Warm Olive" },
        { name: "3.5N", code: "3.5N", depth: "Medium", undertone: "Neutral" },
        { name: "3C", code: "3C", depth: "Medium", undertone: "Cool" },
        { name: "3CR", code: "3CR", depth: "Medium", undertone: "Cool Rosy" },
        { name: "3WP", code: "3WP", depth: "Medium", undertone: "Warm Peach" },
        { name: "4N", code: "4N", depth: "Medium", undertone: "Neutral" },
        { name: "4W", code: "4W", depth: "Medium", undertone: "Warm" },
        { name: "4WO", code: "4WO", depth: "Medium", undertone: "Warm Olive" },
        { name: "4.5N", code: "4.5N", depth: "Tan", undertone: "Neutral" },
        { name: "5N", code: "5N", depth: "Tan", undertone: "Neutral" },
        { name: "6N", code: "6N", depth: "Deep", undertone: "Neutral" },
        { name: "7N", code: "7N", depth: "Deep", undertone: "Neutral" },
        { name: "8N", code: "8N", depth: "Deep", undertone: "Neutral" }
      ]
    }
  ],
 concealer: [
  {
    product: "Dior Forever Skin Correct",
    shades: [
      { name: "0N", code: "0N", depth: "Very Fair", undertone: "Neutral" },
      { name: "1N", code: "1N", depth: "Fair", undertone: "Neutral" },
      { name: "1W", code: "1W", depth: "Fair", undertone: "Warm" },
      { name: "1.5N", code: "1.5N", depth: "Fair", undertone: "Neutral" },
      { name: "2N", code: "2N", depth: "Light", undertone: "Neutral" },
      { name: "2W", code: "2W", depth: "Light", undertone: "Warm" },
      { name: "2WO", code: "2WO", depth: "Light", undertone: "Warm Olive" },
      { name: "2WP", code: "2WP", depth: "Light", undertone: "Warm Peach" },
      { name: "2.5N", code: "2.5N", depth: "Light", undertone: "Neutral" },
      { name: "3N", code: "3N", depth: "Medium", undertone: "Neutral" },
      { name: "3W", code: "3W", depth: "Medium", undertone: "Warm" },
      { name: "3WO", code: "3WO", depth: "Medium", undertone: "Warm Olive" },
      { name: "3.5N", code: "3.5N", depth: "Medium", undertone: "Neutral" },
      { name: "4N", code: "4N", depth: "Medium Deep", undertone: "Neutral" },
      { name: "4W", code: "4W", depth: "Medium Deep", undertone: "Warm" },
      { name: "4WO", code: "4WO", depth: "Medium Deep", undertone: "Warm Olive" }
    ]
  }
]
    {
  id: "fenty",
  name: "Fenty Beauty",

  foundation: [
    {
      product: "Pro Filt'r Soft Matte Longwear Foundation",
      collection: "Original shade range",
      shades: [
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
      ].map(code => ({
        name: `Shade ${code}`,
        code,
        depth: null,
        undertone: null,
        verification: "official-shade-code"
      }))
    }
  ],

  concealer: [
    {
      product: "Pro Filt'r Instant Retouch Concealer",
      shades: [
        "100", "105", "110", "120", "130",
        "140", "145", "150", "160", "170",
        "180", "185", "190", "200", "210",
        "220", "230", "235", "240", "250",
        "255", "260", "270", "280", "290",
        "300", "310", "320", "330", "340",
        "345", "350", "360", "370", "380",
        "385", "390", "400", "410", "420",
        "430", "440", "445", "450", "460",
        "470", "480", "490", "495", "498"
      ].map(code => ({
        name: `Shade ${code}`,
        code,
        depth: null,
        undertone: null,
        verification: "official-shade-code"
      }))
    }
  ]
},
    {
  id: "huda",
  name: "Huda Beauty",

  foundation: [
    {
      product: "Easy Blur Natural Airbrush Foundation",
      shades: [
        ["Milkshake", "100B"],
        ["Angel Food", "110N"],
        ["Vanilla", "120B"],
        ["Cashew", "140G"],
        ["Creme Brulee", "150G"],
        ["Shortbread", "200B"],
        ["Chai", "210B"],
        ["Custard", "220N"],
        ["Macaroon", "230N"],
        ["Toasted Coconut", "240N"],
        ["Cheesecake", "250G"],
        ["Apple Pie", "255B"],
        ["Cream Puff", "260W"],
        ["Latte", "300N"],
        ["Iced Frappe", "305C"],
        ["Golden Milk", "307N"],
        ["Amaretti", "310G"],
        ["TresLeches", "320G"],
        ["Butter Pecan", "330N"],
        ["Baklava", "340G"],
        ["Dulce De Leche", "350G"],
        ["Creme Caramel", "355W"],
        ["Macchiato", "400G"],
        ["Toffee", "420G"],
        ["Pistachio Cream", "425N"],
        ["Gingerbread", "430N"],
        ["Cinnamon", "440G"],
        ["Chocolate Mousse", "450G"],
        ["Peanut Butter", "455R"],
        ["Mocha", "500G"],
        ["Cocoa", "510R"],
        ["Hot Fudge", "550R"],
        ["Ganache", "560R"],
        ["Chocolate Swirl", "570W"],
        ["Truffle Cake", "580N"],
        ["True Lava Cake", "590R"],
        ["Molten Cocoa", "595N"],
        ["Espresso", "600N"]
      ].map(([name, code]) => ({
        name,
        code,
        depth: null,
        undertone: null,
        verification: "official"
      }))
    }
  ],

  concealer: [
    {
      product: "FauxFilter Concealer",
      shades: [
        ["Whipped Cream", "0.1"],
        ["Royal Icing", "1.1"],
        ["Marshmallow", "1.3"],
        ["Yogurt Drops", "1.5"],
        ["Honey", "1.7"],
        ["Meringue", "2.1"],
        ["Cotton Candy", "2.3"],
        ["Nougat", "2.5"],
        ["Coconut Flakes", "2.7"],
        ["Vanilla Swirl", "3.1"],
        ["Marmalade", "3.3"],
        ["Sugar Biscuit", "3.5"],
        ["Graham Cracker", "4.1"],
        ["Cookie Dough", "4.3"],
        ["Granola", "4.5"],
        ["Caramel Corn", "5.1"],
        ["Toasted Almond", "5.3"],
        ["Candied Ginger", "6.1"],
        ["Praline", "6.3"],
        ["Brittle", "6.5"],
        ["Peanut Butter", "6.7"],
        ["Crumble", "7.1"],
        ["Salted Caramel", "7.3"],
        ["Butterscotch", "7.5"],
        ["Honeycomb", "7.7"],
        ["Hazelnut", "8.1"],
        ["Maple Syrup", "8.3"],
        ["Brownie", "8.5"],
        ["Chocolate Chip", "8.7"]
      ].map(([name, code]) => ({
        name,
        code,
        depth: null,
        undertone: null,
        verification: "official"
      }))
    }
  ]
},
    {
  id: "mac",
  name: "MAC",

  foundation: [
    {
      product: "Studio Fix Fluid SPF 15 Foundation",
      shades: [
        "NC5", "NC10", "NW5", "NW10", "NC12",
        "N4", "NC13", "NW13", "N4.5", "NC15",
        "N4.75", "NC16", "NC17", "NC18", "NW15",
        "NC20", "NW18", "C4", "C40", "NC25",
        "NW20", "NW22", "NC27", "NC30", "N5",
        "N6", "C3.5", "NW25", "N6.5", "NC35",
        "NC37", "NC38", "NC40", "NC42", "C4.5",
        "C5", "C45", "NW30", "NW33", "NW35",
        "C8", "NC44", "NC45.5", "NW40", "NW43",
        "NW44", "NW45", "C55", "NC45", "NC46",
        "NC47", "NC50", "NW46", "NW47", "NW48",
        "NW50", "NW53", "NC55", "NC58", "NC60",
        "NC63", "NC65", "NW55", "NW57", "NW58",
        "NW60", "NW65"
      ].map(code => ({
        name: code,
        code,
        depth: null,
        undertone: null,
        verification: "official-shade-code"
      }))
    }
  ],

  concealer: [
    {
      product: "Studio Fix 36HR Smooth Angles Concealer",
      shades: [
        "NC5", "NW5", "NC10", "NC11", "NW10",
        "NW11", "NC11.5", "NW13", "NC14.5", "NW15",
        "N12", "NC17", "NC17.5", "NC20", "NW18",
        "NC25", "N18", "NC27", "NW35", "NC37",
        "NC40", "NC44", "NW40", "NW43", "NW45",
        "NC47", "NW50", "NC50", "NC55", "NC58",
        "NC60", "NC63", "NW58", "NW65", "NC65",
        "NC15", "NW20", "NW25", "NC30", "NW30",
        "NC35", "NC42", "NC45", "NW55"
      ].map(code => ({
        name: code,
        code,
        depth: null,
        undertone: null,
        verification: "official-shade-code"
      }))
    }
  ]
},
    {
  id: "estee-lauder",
  name: "Estée Lauder",

  foundation: [
    {
      product: "Double Wear Stay-in-Place Longwear Matte Foundation",
      shades: [
        ["0N1", "Alabaster"],
        ["0C1", "Cool Sand"],
        ["0W1", "Warm Ivory"],
        ["1C0", "Shell"],
        ["1N0", "Porcelain"],
        ["1N1", "Ivory Nude"],
        ["1N2", "Ecru"],
        ["1W0", "Warm Porcelain"],
        ["1W1", "Bone"],
        ["1W2", "Sand"],
        ["1C1", "Cool Bone"],
        ["1C2", "Petal"],
        ["2C0", "Cool Vanilla"],
        ["2C1", "Pure Beige"],
        ["2C2", "Pale Almond"],
        ["2C3", "Fresco"],
        ["2C4", "Ivory Rose"],
        ["2N1", "Desert Beige"],
        ["2N2", "Buff"],
        ["2N3", "Dolce"],
        ["2W0", "Warm Vanilla"],
        ["2W1", "Dawn"],
        ["2W2", "Rattan"],
        ["3C0", "Cool Creme"],
        ["3C1", "Dusk"],
        ["3C2", "Pebble"],
        ["3C3", "Sandbar"],
        ["3N1", "Ivory Beige"],
        ["3N2", "Wheat"],
        ["3W0", "Warm Creme"],
        ["3W1", "Tawny"],
        ["3W1.5", "Fawn"],
        ["3W2", "Cashew"],
        ["4C1", "Outdoor Beige"],
        ["4C2", "Auburn"],
        ["4C3", "Softan"],
        ["4N1", "Shell Beige"],
        ["4N2", "Spiced Sand"],
        ["4N3", "Maple Sugar"],
        ["4W1", "Honey Bronze"],
        ["4W1.5", "Medium Spice"],
        ["4W2", "Toasty Toffee"],
        ["4W3", "Henna"],
        ["4W4", "Hazel"],
        ["5C1", "Rich Chestnut"],
        ["5C2", "Sepia"],
        ["5N1", "Rich Ginger"],
        ["5N1.5", "Maple"],
        ["5N2", "Amber Honey"],
        ["5N3", "Spiced Amber"],
        ["5W1", "Bronze"],
        ["5W1.5", "Cinnamon"],
        ["5W2", "Rich Caramel"],
        ["6C1", "Rich Cocoa"],
        ["6C2", "Pecan"],
        ["6N1", "Mocha"],
        ["6N2", "Truffle"],
        ["6W1", "Sandalwood"],
        ["6W2", "Nutmeg"],
        ["7C1", "Rich Mahogany"],
        ["7C2", "Sienna"],
        ["7N1", "Deep Amber"],
        ["7W1", "Deep Spice"],
        ["8C1", "Rich Java"],
        ["8N1", "Espresso"],
        ["8W1", "Warm Espresso"],
        ["9C1", "Fudge"],
        ["9N1", "Ebony"]
      ].map(([code, name]) => ({
        code,
        name,
        depth: null,
        undertone: null,
        verification: "official"
      }))
    }
  ],

  concealer: [
    {
      product: "Double Wear Stay-in-Place 24-Hour Concealer",
      shades: [],
      verification: "official-product-shade-list-pending"
    },
    {
      product: "Futurist Soft Touch Brightening Skincealer",
      shades: [],
      verification: "official-product-shade-list-pending"
    }
  ]
},
   {
  id: "rare-beauty",
  name: "Rare Beauty",

  foundation: [
    {
      product: "Liquid Touch Weightless Foundation",
      shades: [
        ["100W", "Light", "Warm Golden"],
        ["110N", "Light", "Neutral"],
        ["120C", "Light", "Cool"],
        ["130N", "Light", "Neutral"],
        ["150C", "Light", "Cool"],
        ["160C", "Light", "Cool"],
        ["190W", "Light Medium", "Warm"],
        ["240W", "Medium", "Warm"],
        ["390C", "Medium Deep", "Cool"],
        ["460W", "Deep", "Warm"],
        ["480W", "Deep", "Warm"],
        ["520W", "Deep", "Warm"],
        ["560W", "Deep", "Warm"]
      ].map(([code, depth, undertone]) => ({
        name: code,
        code,
        depth,
        undertone,
        verification: "official"
      }))
    }
  ],

  concealer: [
    {
      product: "Liquid Touch Brightening Concealer",
      shades: [
        "100W", "110N", "120C", "130N", "140C",
        "150C", "160C", "170W", "180W", "190W",
        "200C", "210N", "220C", "230N", "240W",
        "250W", "260N", "270N", "280N", "290N",
        "300C", "310W", "320W", "330N", "340C",
        "350C", "360W", "370N", "380W", "390C",
        "400W", "410N", "420N", "430W", "440C",
        "450N", "460W", "470C", "480W", "490C",
        "500N", "510W", "520W", "530N", "540C",
        "550C", "560W", "570N"
      ].map(code => ({
        name: code,
        code,
        depth: null,
        undertone: code.endsWith("W") ? "Warm" :
                   code.endsWith("C") ? "Cool" :
                   "Neutral",
        verification: "official-shade-code"
      }))
    }
  ]
},
{
  id: "charlotte-tilbury",
  name: "Charlotte Tilbury",

  foundation: [
    {
      product: "Beautiful Skin Foundation",
      shades: [
        ["1N", "1 Neutral", "Fair", "Neutral"],
        ["2N", "2 Neutral", "Fair", "Neutral"],
        ["2W", "2 Warm", "Fair", "Warm"],
        ["3C", "3 Cool", "Fair", "Cool"],
        ["3N", "3 Neutral", "Fair", "Neutral"],
        ["4N", "4 Neutral", "Fair", "Neutral"],
        ["4W", "4 Warm", "Fair Medium", "Warm"],
        ["5N", "5 Neutral", "Fair Medium", "Neutral Olive"],
        ["6C", "6 Cool", "Fair Medium", "Cool"],
        ["6N", "6 Neutral", "Fair Medium", "Neutral"],
        ["7C", "7 Cool", "Medium", "Cool"],
        ["7N", "7 Neutral", "Medium", "Neutral Olive"],
        ["7W", "7 Warm", "Medium", "Warm"],
        ["8N", "8 Neutral", "Medium Tan", "Neutral Olive"],
        ["8W", "8 Warm", "Medium Tan", "Warm"],
        ["9N", "9 Neutral", "Tan", "Neutral"],
        ["9W", "9 Warm", "Tan", "Warm"],
        ["10N", "10 Neutral", "Tan", "Neutral Olive"],
        ["10W", "10 Warm", "Tan", "Warm"],
        ["11C", "11 Cool", "Tan", "Cool"],
        ["11N", "11 Neutral", "Tan", "Neutral"],
        ["11W", "11 Warm", "Tan Deep", "Warm"],
        ["12N", "12 Neutral", "Tan Deep", "Neutral"],
        ["13W", "13 Warm", "Deep", "Warm"],
        ["14C", "14 Cool", "Deep", "Cool"],
        ["14N", "14 Neutral", "Deep", "Neutral"],
        ["15N", "15 Neutral", "Deep", "Neutral"],
        ["16C", "16 Cool", "Deep", "Cool"],
        ["17C", "17 Cool", "Deepest", "Cool"],
        ["17N", "17 Neutral", "Deepest", "Neutral"]
      ].map(([code, name, depth, undertone]) => ({
        code, name, depth, undertone,
        verification: "official"
      }))
    }
  ],

  concealer: [
    {
      product: "Beautiful Skin Radiant Concealer",
      shades: [
        "1", "2", "2.5", "3", "3.5", "4", "4.5",
        "5", "6", "6.5", "7", "7.5", "8", "8.5",
        "9", "9.5", "10", "11", "11.5", "11.75",
        "12", "13", "14", "15", "15.5", "16",
        "16.5", "17", "17.5", "17.75"
      ].map(code => ({
        name: code,
        code,
        depth: null,
        undertone: null,
        verification: "official-shade-code"
      }))
    }
  ]
},
