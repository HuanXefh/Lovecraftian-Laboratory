const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  param: {


    dens: [

      /* <---------- liq0bio ----------> */

      "loveclab-liq0bio-latex", 1.26,

    ],


    boil: [],


    fHeat: [

      /* <---------- gas0misc ----------> */

      "loveclab-gas0misc-steam", 100.0,

    ],


    visc: [

      /* <---------- liq0bio ----------> */

      "loveclab-liq0bio-latex", 4.66,

      /* <---------- liq0ore ----------> */

      "loveclab-liq0ore-crude-oil", 9.0,

    ],


    corrosion: [

      /* <---------- liq0ore ----------> */

      "loveclab-liq0ore-sea-water", 0.7,

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  group: {


    elementary: {


      brine: [

        /* <---------- liq0ore ----------> */

        "loveclab-liq0ore-sea-water",
        "loveclab-liq0ore-brine",

      ],


      acidAq: [],


      baseAq: [],


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
