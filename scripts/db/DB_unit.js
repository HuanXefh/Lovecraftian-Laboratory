const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  param: {


    polTol: [

      "loveclab-unit0core-outpost-i", 600.0,

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  map: {


    faction: [

      "loveclab-unit0core-outpost-i", "outpost-military",

    ],


    ability: [

      "loveclab-unit0core-outpost-i", "shield-core", {
        maxShield: 200.0,
        regenAmt: 20.0,
        regenIntv: 120.0,
      },
      "loveclab-unit0core-outpost-i", "laser-defense", {
        dmg: 90.0,
        chargeCap: 1200.0,
        chargeMtp: 2.0,
        rad: 160.0,
      },
      "loveclab-unit0core-outpost-i", "building-repairer-module", {
        healAmt: 20.0,
        healPerc: 0.03,
        intv: 30.0,
        rad: 80.0,
      },

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  group: {


    coreUnit: [

      "loveclab-unit0core-outpost-i",

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};


exports.db = db;
