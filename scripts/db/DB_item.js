const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  param: {


    fuel: {


      item: [

        /* <---------- item0bio ----------> */

        "loveclab-item0bio-log", [6.0, 3.25],
        "loveclab-item0bio-timber", [16.0, 5.0],
        "loveclab-item0bio-sawdust", [4.0, 8.0],
        "loveclab-item0bio-biomass-powder", [4.0, 8.0],
        "loveclab-item0bio-charcoal", [10.0, 10.0],
        "loveclab-item0bio-hypha-rod", [5.0, 7.5],

        /* <---------- item0cons ----------> */

        "loveclab-item0cons-briquette", [8.0, 13.25],

        /* <---------- item0chem (elementary) ----------> */

        /* carbon */

        "loveclab-item0chem-peat", [5.0, 6.5],
        "loveclab-item0chem-lignite", [6.0, 6.5],
        "loveclab-item0chem-coal", [8.0, 8.0],
        "loveclab-item0chem-anthracite", [10.0, 11.5],
        "loveclab-item0chem-semicoke", [12.0, 9.0],
        "loveclab-item0chem-coke", [12.0, 12.5],

        /* misc */

        "loveclab-item0chem-sulfur", [4.0, 14.0],

        /* <---------- item0ore ----------> */

        "loveclab-item0ore-raw-coal", [5.0, 8.0],

      ],


      fluid: [

        /* <---------- gas0was ----------> */

        "loveclab-gas0was-coke-oven-gas", [0.1, 23.0],

      ],


    },


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  map: {


    attr: {


      dpliq: [

        "lovec-attr0dpliq-water", "loveclab-liq0ore-water",
        "lovec-attr0dpliq-brine", "loveclab-liq0ore-brine",
        "lovec-attr0dpliq-oil", "loveclab-liq0ore-crude-oil",

      ],


      rock: [

        "lovec-attr0rock-clastic", "loveclab-item0ore-rock-clastic",
        "lovec-attr0rock-evaporite", "loveclab-item0ore-rock,evaporite",
        "lovec-attr0rock-hypabyssal", "loveclab-item0ore-rock-hypabyssal",
        "lovec-attr0rock-lava", "loveclab-item0ore-rock-lava",
        "lovec-attr0rock-metamorphic", "loveclab-item0ore-metamorphic",
        "lovec-attr0rock-plutonic", "loveclab-item0ore-rock-plutonic",
        "lovec-attr0rock-biological-sedimentary", "loveclab-item0ore-rock-biological-sedimentary",
        "lovec-attr0rock-clastic-sedimentary", "loveclab-item0ore-rock-clastic-sedimentary",

      ],


      tree: [

        "lovec-attr0tree-latex", "loveclab-liq0bio-latex",

      ],


      vent: [

        "lovec-attr0vent-ammonia", "loveclab-gas0int0crdg-ammonia",
        "lovec-attr0vent-sour-gas", "loveclab-gas0ore-sour-gas",
        "lovec-attr0vent-steam", "loveclab-gas0misc-steam",
        "lovec-attr0vent-sulfur-dioxide", "loveclab-gas0chem-sulfur-dioxide",

        "lovec-attr0vent0und-hydrogen-sulfide", "loveclab-gas0int0crdg-hydrogen-sulfide",

      ],


    },


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  group: {


    fuel: {


      biotic: [

        "loveclab-item0bio-log",
        "loveclab-item0bio-timber",
        "loveclab-item0bio-sawdust",
        "loveclab-item0bio-biomass-powder",
        "loveclab-item0bio-hypha-rod",

      ],


    },


    sand: [

      "loveclab-item0ore-sand",
      "loveclab-item0ore-sand-river",
      "loveclab-item0ore-sand-sea",

    ],


    aggregate: [

      "loveclab-item0ore-pumice", 0.5,
      "loveclab-item0ore-rock-clastic", 1.0,
      "loveclab-item0ore-rock-hypabyssal", 1.0,
      "loveclab-item0ore-rock-lava", 1.0,
      "loveclab-item0ore-rock-plutonic", 1.0,
      "loveclab-item0ore-rock-clastic-sedimentary", 1.0,

      "loveclab-item0was-gangue", 1.0,
      "loveclab-item0was-slag", 2.0,

    ],


    biomass: [

      "spore-pod", 0.75,

      "loveclab-item0bio-log", 1.0,
      "loveclab-item0bio-hypha-rod", 1.0,
      "loveclab-item0bio-algae", 0.5,

    ],


    acidic: [],


    basic: [

      "loveclab-item0chem-slaked-lime",

    ],


    sodium: [],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
