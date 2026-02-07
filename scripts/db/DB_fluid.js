const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  group: {


    elementary: {


      brine: [

        /* <---------- liq0ore ----------> */

        "loveclab-liq0ore-sea-water",
        "loveclab-liq0ore-brine",

      ],


      acidAq: [],


      baseAq: [

        /* <---------- liq0int0sol ----------> */

        /* calcium */

        "loveclab-liq0int0sol-slaked-lime",

      ],


      acidGas: [],


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


      oxidative: [],


      reductive: [],


      dehydrative: [],


      unstable: [],


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

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
