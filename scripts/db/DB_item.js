const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  param: {


    fuel: {


      item: [

        /* <---------- item0bio ----------> */

        "loveclab-item0bio-log", [6.0, 3.25],
        "loveclab-item0bio-timber", [16.0, 5.0],
        "loveclab-item0bio-sawdust", [4.0, 8.0],
        "loveclab-item0bio-charcoal", [10.0, 10.0],
        "loveclab-item0bio-hypha-rod", [5.0, 7.5],

        /* <---------- item0chem (elementary) ----------> */

        /* carbon */

        "loveclab-item0chem-peat", [5.0, 6.5],
        "loveclab-item0chem-lignite", [6.0, 6.5],
        "loveclab-item0chem-coal", [8.0, 8.0],
        "loveclab-item0chem-anthracite", [10.0, 11.5],
        "loveclab-item0chem-semicoke", [12.0, 8.5],
        "loveclab-item0chem-coke", [12.0, 12.5],

        /* misc */

        "loveclab-item0chem-sulfur", [6.0, 14.0],

      ],


      fluid: [

        /* <---------- gas0was ----------> */

        "loveclab-gas0was-coke-oven-gas", [0.1, 23.0],

      ],


    },


    hardness: [

      /* carbon */

      "loveclab-item0chem-peat", 1,
      "loveclab-item0chem-lignite", 1,
      "loveclab-item0ore-raw-coal", 2,
      "loveclab-item0chem-anthracite", 2,
      "loveclab-item0ore-crude-graphite", 2,

      /* aluminum */

      "loveclab-item0ore-bauxite", 2,

      /* barium */

      "loveclab-item0ore-barite", 3,

      /* copper */

      "loveclab-item0ore-azurite", 4,
      "loveclab-item0ore-chalcopyrite", 4,
      "loveclab-item0ore-native-copper", 3,
      "loveclab-item0ore-malachite", 4,

      /* iron */

      "loveclab-item0ore-hematite", 6,
      "loveclab-item0ore-limonite", 4,
      "loveclab-item0ore-magnetite", 6,
      "loveclab-item0ore-meteoric-iron", 6,
      "loveclab-item0ore-pyrite", 6,

      /* lead */

      "loveclab-item0ore-galena", 3,

      /* manganese */

      "loveclab-item0ore-psilomelane", 5,
      "loveclab-item0ore-pyrolusite", 1,

      /* silicon */

      "loveclab-item0ore-silica-stone", 4,

      /* sulfur */

      "loveclab-item0ore-crude-sulfur", 2,

      /* tin */

      "loveclab-item0ore-cassiterite", 6,

      /* zinc */

      "loveclab-item0ore-sphalerite", 4,

      /* misc */

      "loveclab-item0ore-clay", 1,

      /* rock */

      "loveclab-item0ore-dolomite", 4,
      "loveclab-item0ore-gypsum", 2,
      "loveclab-item0ore-limestone", 2,
      "loveclab-item0ore-pumice", 2,
      "loveclab-item0ore-rock-clastic", 2,
      "loveclab-item0ore-rock-evaporite", 2,
      "loveclab-item0ore-rock-hypabyssal", 6,
      "loveclab-item0ore-rock-lava", 6,
      "loveclab-item0ore-rock-metamorphic", 4,
      "loveclab-item0ore-rock-plutonic", 6,
      "loveclab-item0ore-rock-biological-sedimentary", 4,
      "loveclab-item0ore-rock-clastic-sedimentary", 1,

    ],


    sintTemp: [

      /* <---------- item0ore ----------> */

      /* copper */

      "loveclab-item0ore-azurite", 160.0,
      "loveclab-item0ore-chalcopyrite", 750.0,
      "loveclab-item0ore-native-copper", 950.0,
      "loveclab-item0ore-malachite", 160.0,

      /* iron */

      "loveclab-item0ore-hematite", 1450.0,
      "loveclab-item0ore-limonite", 1100.0,
      "loveclab-item0ore-magnetite", 1520.0,
      "loveclab-item0ore-meteoric-iron", 1500.0,
      "loveclab-item0ore-pyrite", 1050.0,

      /* lead */

      "loveclab-item0ore-galena", 1050.0,

      /* manganese */

      "loveclab-item0ore-psilomelane", 1600.0,
      "loveclab-item0ore-pyrolusite", 500.0,

      /* tin */

      "loveclab-item0ore-cassiterite", 1550.0,

      /* zinc */

      "loveclab-item0ore-sphalerite", 370.0,

      /* <---------- item0chem ----------> */

      /* elementary */

      "loveclab-item0chem-copper", 1050.0,
      "loveclab-item0chem-lead", 320.0,
      "loveclab-item0chem-nickel", 1450.0,
      "loveclab-item0chem-tin", 230.0,
      "loveclab-item-chem-zinc", 420.0,

    ],


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


    recipe: {


      alloying: [

        "loveclab-item0chem-brass", {
          tempReq: 1050.0,
          bi: [
            [
              "loveclab-item0chem-copper", 1.0, 1.0,
              "loveclab-item0ore-native-copper", 1.5, 1.0,
            ], -1.0, -1.0,
            "loveclab-item0chem-zinc", 0.5, 1.0,
          ],
        },

        "loveclab-item0chem-tin-bronze", {
          tempReq: 1050.0,
          bi: [
            [
              "loveclab-item0chem-copper", 1.0, 1.0,
              "loveclab-item0ore-native-copper", 1.5, 1.0,
            ], -1.0, -1.0,
            "loveclab-item0chem-tin", 0.5, 1.0,
          ],
        },

        "loveclab-item0chem-leaded-tin-bronze", {
          tempReq: 1050.0,
          bi: [
            [
              "loveclab-item0chem-copper", 1.0, 1.0,
              "loveclab-item0ore-native-copper", 1.5, 1.0,
            ], -1.0, -1.0,
            "loveclab-item0chem-tin", 0.33333333, 1.0,
            "loveclab-item0chem-lead", 0.5, 1.0,
          ],
        },

        "loveclab-item0chem-solder", {
          tempReq: 320.0,
          bi: [
            "loveclab-item0chem-lead", 1.0, 1.0,
            "loveclab-item0chem-tin", 0.5, 1.0,
          ],
        },

      ],


      brickBaking: [

        "loveclab-item0ore-clay", {
          tempReq: 400.0,
          itmTg: "loveclab-item0buil-brick-clay",
        },

        "loveclab-item0int0blend-brick-magnesia", {
          tempReq: 800.0,
          itmTg: "loveclab-item0buil-brick-magnesia",
        },

      ],


      casting: [

        "projreind-pow0tor-brass-cogwheel", {
          isPayTg: true,
          timeScl: 0.5,
          lockedBy: [
            "projreind-pow0tor-brass-cogwheel",
          ],
          tempReq: 900.0,
          bi: [
            "loveclab-item0chem-brass", 5.0, 1.0,
          ],
        },

        "projreind-pow0tor-large-brass-cogwheel", {
          isPayTg: true,
          timeScl: 2.0,
          lockedBy: [
            "projreind-pow0tor-large-brass-cogwheel",
          ],
          tempReq: 1200.0,
          bi: [
            "loveclab-item0chem-brass", 40.0, 1.0,
            "loveclab-item0chem-steel", 10.0, 1.0,
          ],
        },

        "projreind-pay0mat-mangalloy-rod", {
          isPayTg: true,
          tempReq: 1600.0,
          bi: [
            "loveclab-item0chem-mangalloy", 20.0, 1.0,
          ],
        },

      ],


      forging: [

        "projreind-pay0mat-copper-block", {
          isPayTg: true,
          timeScl: 0.5,
          tempReq: 900.0,
          bi: [
            "loveclab-item0chem-copper", 5, 1.0,
          ],
        },

        "projreind-pay0mat-lead-block", {
          isPayTg: true,
          timeScl: 0.5,
          tempReq: 200.0,
          bi: [
            "loveclab-item0chem-lead", 5, 1.0,
          ],
        },

        "loveclab-item0cons-mangalloy-ball", {
          tempReq: 1000.0,
          amtO: 1,
          payi: [
            "projreind-pay0mat-mangalloy-rod", 1,
          ],
        },

      ],


      mixing: [

        "loveclab-item0int0blend-brick-magnesia", {
          bi: [
            "loveclab-item0chem-magnesia-sand", 1.0, 0.5,
            "loveclab-item0ore-clay", 1.5, 0.5,
          ],
        },

        "loveclab-item0int0blend-cement", {
          bi: [
            "loveclab-item0int0chunks-limestone", 1.0, 0.5,
            "loveclab-item0ore-clay", 1.0, 0.5,
            [
              "loveclab-item0ore-sand", 4.5, 0.5,
              "loveclab-item0ore-sand-river", 1.0, 0.5,
              "loveclab-item0buil-fine-aggregate", 1.0, 0.5,
              "loveclab-item0was-slag", 2.0, 0.5,
            ], -1.0, -1.0,
          ],
        },

        "loveclab-item0buil-cement", {
          bi: [
            "loveclab-item0int0clinker-cement", 1.0, 0.5,
            "loveclab-item0int0chunks-gypsum", 1.0, 0.5,
          ],
        },

      ],


      ballMillMixing: [

        "loveclab-item0int0blend-brick-high-alumina", {
          bi: [
            "loveclab-item0int0conc-bauxite", 1.0, 0.5,
            "loveclab-item0ore-clay", 1.5, 0.5,
          ],
        },

        "loveclab-item0int0blend-brick-mullite", {
          bi: [
            "loveclab-item0int0conc-bauxite", 0.25, 0.5,
            "loveclab-item0ore-clay", 1.5, 0.5,
            "loveclab-item0bio-sawdust", 1.0, 0.5,
          ],
        },

        "loveclab-item0int0blend-brick-silica", {
          bi: [
            "loveclab-item0int0chunks-silica-stone", 1.5, 0.5,
            "loveclab-item0int0chunks-limestone", 1.0, 0.5,
            "loveclab-item0int0chunks-gypsum", 1.0, 0.5,
            [
              "loveclab-item0chem-coke", 0.25, 0.5,
              "loveclab-item0chem-anthracite", 0.25, 0.5,
            ], -1.0, -1.0,
          ],
        },

        "loveclab-item0int0blend-refractory-cement", {
          bi: [
            "loveclab-item0int0conc-bauxite", 1.0, 0.5,
            "loveclab-item0int0chunks-dolomite", 1.0, 0.5,
            "loveclab-item0buil-asbestos-wool", 0.5, 0.5,
            "loveclab-item0int0chunks-fluorapatite", 0.25, 0.5,
          ],
        },

      ],


      purificationI: [],


      purificationII: [],


      purificationMagnetic: [

        "loveclab-item0int0dust-asbestos", {
          bi: [
            "loveclab-item0int0dust0p1-asbestos", 1.0, 1.0,
            "loveclab-item0was-dust", 0.25, 0.5,
          ],
        },

        "loveclab-item0int0dust-sand", {
          bi: [
            "loveclab-item0int0dust0p1-sand", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
          ],
        },

        /* aluminum */

        "loveclab-item0int0dust-bauxite", {
          bi: [
            "loveclab-item0int0dust0p1-bauxite", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
          ],
        },

        /* carbon */

        "loveclab-item0int0dust-raw-coal", {
          bi: [
            "loveclab-item0chem-coal", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
          ],
        },

        /* copper */

        "loveclab-item0int0dust-chalcopyrite", {
          bi: [
            "loveclab-item0int0dust0p1-chalcopyrite", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
            "loveclab-item0ore-pyrite", 0.25, 0.25,
          ],
        },

        "loveclab-item0int0dust-malachite", {
          bi: [
            "loveclab-item0int0dust0p1-malachite", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
            "loveclab-item0ore-limonite", 0.5, 0.5,
          ],
        },

        /* iron */

        "loveclab-item0int0dust-limonite", {
          bi: [
            "loveclab-item0int0dust0p1-limonite", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
            "loveclab-item0ore-hematite", 0.5, 0.5,
          ],
        },

        "loveclab-item0int0dust-hematite", {
          bi: [
            "loveclab-item0int0dust0p1-hematite", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
            "loveclab-item0ore-magnetite", 0.5, 0.5,
          ],
        },

        "loveclab-item0int0dust-magnetite", {
          bi: [
            "loveclab-item0int0dust0p1-magnetite", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
            "loveclab-item0ore-raw-coal", 0.25, 0.25,
          ],
        },

        /* sulfur */

        "loveclab-item0int0chunks-crude-sulfur", {
          bi: [
            "loveclab-item0chem-sulfur", 1.0, 1.0,
            "loveclab-item0was-gangue", 0.25, 0.5,
          ],
        },

      ],


      roasting: [

        "loveclab-item0int0blend-cement", {
          tempReq: 1500.0,
          itmTg: "loveclab-item0int0clinker-cement",
        },

        "loveclab-item0int0blend-refractory-cement", {
          tempReq: 2000.0,
          itmTg: "loveclab-item0int0clinker-refractory-cement",
        },

        "loveclab-item0int0chunks-dolomite", {
          tempReq: 1700.0,
          itmTg: "loveclab-item0chem-magnesia-sand",
        },

        "loveclab-item0int0chunks-limestone", {
          tempReq: 850.0,
          itmTg: "loveclab-item0chem-lime",
        },

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


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
