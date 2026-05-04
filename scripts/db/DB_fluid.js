const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  group: {


    elementary: {


      brine: [

        /* <---------- liq0ore ----------> */

        "loveclab-liq0ore-sea-water",
        "loveclab-liq0ore-brine",

        /* <---------- liq0int ----------> */

        "loveclab-liq0int-purified-brine",

        /* <---------- liq0int0sol ----------> */

        "loveclab-liq0int0sol-sodium-chloride",

      ],


      acidAq: [],


      baseAq: [

        /* <---------- liq0int0sol ----------> */

        /* calcium */

        "loveclab-liq0int0sol-slaked-lime",

      ],


      acidGas: [

        /* <---------- gas0chem (inorganic) ----------> */

        /* sulfur */

        "loveclab-gas0chem-sulfur-dioxide",

      ],


      baseGas: [],


      acidSub: [],


      baseSub: [],


      alc: [],


      acidAlc: [],


      baseAlc: [],


      oil: [

        /* <---------- liq0bio ----------> */

        "loveclab-liq0bio-latex",

        /* <---------- liq0ore ----------> */

        "loveclab-liq0ore-crude-oil",

        /* <---------- liq0chem (misc) ----------> */

        "loveclab-liq0chem-coal-tar",

        /* <---------- liq0int ----------> */

        "loveclab-liq0int-desalted-crude-oil",
        "loveclab-liq0int-evaporated-crude-oil",
        "loveclab-liq0int-desalted-evaporated-crude-oil",

      ],


      acidOil: [],


      baseOil: [],


      slurry: [],


      acidSlurry: [],


      baseSlurry: [],


      melt: [],


      sMelt: [],


    },


    fTag: {


      chloric: [],


      fluoric: [],


      oxidative: [

        /* <---------- gas0chem (elementary) ----------> */

        "loveclab-gas0chem-oxygen",
        "loveclab-gas0chem-ozone",

      ],


      reductive: [],


      dehydrative: [],


    },


    aqueous: [

      /* <---------- liq0bio ----------> */

      "loveclab-liq0bio-latex",

      /* <---------- liq0ore ----------> */

      "loveclab-liq0ore-water",

      /* <---------- liq0was ----------> */

      "loveclab-liq0was-waste-water",

    ],


    air: [

      /* <---------- gas0misc ----------> */

      "loveclab-gas0misc-air",

      /* <---------- gas0int ----------> */

      "loveclab-gas0int-air-clean",
      "loveclab-gas0int-air-dry",
      "loveclab-gas0int-air-super-clean",

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
