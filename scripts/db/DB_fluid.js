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

    ],


    corrosion: [

      /* <---------- liq0ore ----------> */

      "loveclab-liq0ore-sea-water", 0.7,

    ],


    pol: [

      /* <---------- liq0was ----------> */

      "loveclab-liq0was-waste-water", 5.0,

      /* <---------- gas0was ----------> */

      "loveclab-gas0was-coke-oven-gas", 2.0,

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

        "loveclab-liq0bio-latex",

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

      "loveclab-gas0misc-air",

      "loveclab-gas0int-air-clean",

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
