const db = {


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  gen: {


    group: [

      /* <---------- item ----------> */

      /* consumable */

      "graphite electrode", ["loveclab-item0cons-graphite-electrode", {}],
      "graphite electrode", ["loveclab-item0cons-natural-graphite-electrode", {}],

      "graphite electrode (electrolysis)", ["loveclab-item0cons-graphite-electrode", {}],
      "graphite electrode (electrolysis)", ["loveclab-item0cons-natural-graphite-electrode", {pScl: 5.0}],

      /* chemical */

      "carbon", ["loveclab-item0chem-coke", {pScl: 0.5}],
      "carbon", ["loveclab-item0bio-charcoal", {amtScl: 3.0, pScl: 0.5}],
      "carbon", ["loveclab-item0chem-anthracite", {}],

      "copper", ["loveclab-item0chem-copper", {}],
      "copper", ["loveclab-item0ore-native-copper", {amtScl: 1.5}],

      "mineral wool", ["loveclab-item0chem-asbestos-wool", {amtScl: 2.0}],
      "mineral wool", ["loveclab-item0chem-stone-wool", {}],
      "mineral wool", ["loveclab-item0chem-slag-wool", {}],
      "mineral wool", ["loveclab-item0chem-glass-wool", {amtScl: 0.5}],

      "pig iron", ["loveclab-item0chem-pig-iron", {}],
      "pig iron", ["loveclab-item0ore-meteoric-iron", {amtScl: 1.5}],

      "silica", ["loveclab-item0chem-silica-sand", {}],
      "silica", ["loveclab-item0chem-quartz-sand", {pScl: 0.5}],

      "sodium carbonate", ["loveclab-item0chem-sodium-carbonate", {}],
      "sodium carbonate", ["loveclab-item0chem-sodium-bicarbonate", {}],
      "sodium carbonate", ["loveclab-item0ore-trona", {amtScl: 1.5}],

      /* ore material I */

      "apatite", ["loveclab-item0ore-fluorapatite", {}],
      "apatite", ["loveclab-item0ore-hydroxyapatite", {}],
      "apatite (chunks)", ["loveclab-item0int0chunks-fluorapatite", {}],
      "apatite (chunks)", ["loveclab-item0int0chunks-hydroxyapatite", {}],

      "salt", ["loveclab-item0ore-salt", {}],
      "salt", ["loveclab-item0ore-sea-salt", {}],

      "sand", ["loveclab-item0ore-sand-river", {}],
      "sand", ["loveclab-item0buil-fine-aggregate", {}],
      "sand", ["loveclab-item0ore-sand", {amtScl: 4.5}],

      /* ore material II */

      "ferrous", ["loveclab-item0chem-pig-iron", {pScl: 0.75}],
      "ferrous", ["loveclab-item0ore-hematite", {}],
      "ferrous", ["loveclab-item0ore-magnetite", {}],

      "manganiferous", ["loveclab-item0ore-psilomelane", {}],
      "manganiferous", ["loveclab-item0ore-pyrolusite", {}],

      "sulfurous", ["loveclab-item0chem-sulfur", {pScl: 0.25}],
      "sulfurous", ["loveclab-item0ore-crude-sulfur", {}],

      /* <---------- liquid ----------> */

      /* <---------- gas ----------> */

      /* misc */

      "steam", ["loveclab-gas0misc-steam", {}],
      "steam", ["loveclab-gas0int-steam-lp", {}],
      "steam", ["loveclab-gas0int-steam-mp", {}],
      "steam", ["loveclab-gas0int-steam-hp", {}],

      "hot steam", ["loveclab-gas0int-superheated-steam", {}],
      "hot steam", ["loveclab-gas0misc-steam", {amtScl: 4.0}],
      "hot steam", ["loveclab-gas0int-steam-lp", {amtScl: 4.0}],
      "hot steam", ["loveclab-gas0int-steam-mp", {amtScl: 4.0}],
      "hot steam", ["loveclab-gas0int-steam-hp", {amtScl: 4.0}],

      /* chemical */

      "inert gas", ["loveclab-gas0chem-argon", {amtScl: 0.25}],
      "inert gas", ["loveclab-gas0chem-nitrogen", {}],

      "oxygen", ["loveclab-gas0chem-oxygen", {}],
      "oxygen", ["loveclab-gas0misc-air", {amtScl: 6.0}],

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


  genData: {


    assembly: {


      ammunition: [],


      electrode: [

        "loveclab-item0cons-copper-electrode", {
          bi: [
            "loveclab-item0chem-copper", 10.0, 1.0,
          ],
          itmO: "loveclab-item0cons-copper-electrode",
        },

        "loveclab-item0cons-lead-electrode", {
          bi: [
            "loveclab-item0chem-lead", 10.0, 1.0,
          ],
          itmO: "loveclab-item0cons-lead-electrode",
        },

        "loveclab-item0cons-iron-electrode", {
          bi: [
            "loveclab-item0chem-wrought-iron", 10.0, 1.0,
          ],
          itmO: "loveclab-item0cons-iron-electrode",
        },

      ],


      membrane: [

        "loveclab-item0cons-asbestos-diaphragm", {
          bi: [
            "loveclab-item0chem-asbestos-wool", 20.0, 1.0,
            "loveclab-item0chem-steel", 5, 1.0,
          ],
          itmO: "loveclab-item0cons-asbestos-diaphragm",
        },

      ],


      brickBlock: [

        "loveclab-pay0mat-brick-clay", {
          bi: [
            "loveclab-item0buil-brick-clay", 10.0, 1.0,
          ],
          payo: [
            "loveclab-pay0mat-brick-clay", 1.0,
          ],
        },

        "loveclab-pay0mat-brick-magnesia", {
          bi: [
            "loveclab-item0buil-brick-magnesia", 10.0, 1.0,
          ],
          payo: [
            "loveclab-pay0mat-brick-magnesia", 1.0,
          ],
        },

        "loveclab-pay0mat-brick-high-alumina", {
          bi: [
            "loveclab-item0buil-brick-high-alumina", 10.0, 1.0,
          ],
          payo: [
            "loveclab-pay0mat-brick-high-alumina", 1.0,
          ],
        },

        "loveclab-pay0mat-brick-mullite", {
          bi: [
            "loveclab-item0buil-brick-mullite", 10.0, 1.0,
          ],
          payo: [
            "loveclab-pay0mat-brick-mullite", 1.0,
          ],
        },

        "loveclab-pay0mat-brick-silica", {
          bi: [
            "loveclab-item0buil-brick-silica", 10.0, 1.0,
          ],
          payo: [
            "loveclab-pay0mat-brick-silica", 1.0,
          ],
        },

        "loveclab-pay0mat-brick-carbon", {
          bi: [
            "loveclab-item0buil-brick-carbon", 10.0, 1.0,
          ],
          payo: [
            "loveclab-pay0mat-brick-carbon", 1.0,
          ],
        },

      ],


    },


    alloying: [

      "loveclab-item0chem-brass", {
        tempReq: 1050.0,
        bi: [
          "GROUP: copper", 1.0, 1.0,
          "loveclab-item0chem-zinc", 0.5, 1.0,
        ],
        itmO: "loveclab-item0chem-brass",
      },

      "loveclab-item0chem-tin-bronze", {
        tempReq: 1050.0,
        bi: [
          "GROUP: copper", 1.0, 1.0,
          "loveclab-item0chem-tin", 0.5, 1.0,
        ],
        itmO: "loveclab-item0chem-tin-bronze",
      },

      "loveclab-item0chem-leaded-tin-bronze", {
        tempReq: 1050.0,
        bi: [
          "GROUP: copper", 1.0, 1.0,
          "loveclab-item0chem-tin", 0.33333333, 1.0,
          "loveclab-item0chem-lead", 0.5, 1.0,
        ],
        itmO: "loveclab-item0chem-leaded-tin-bronze",
      },

      "loveclab-item0chem-cupronickel", {
        tempReq: 1200.0,
        bi: [
          "GROUP: copper", 1.0, 1.0,
          "loveclab-item0chem-nickel", 0.33333333, 1.0,
        ],
        itmO: "loveclab-item0chem-cupronickel",
      },

      "loveclab-item0chem-solder", {
        tempReq: 320.0,
        bi: [
          "loveclab-item0chem-lead", 1.0, 1.0,
          "loveclab-item0chem-tin", 0.5, 1.0,
        ],
        itmO: "loveclab-item0chem-solder",
      },

    ],


    brickBaking: [

      "loveclab-item0ore-clay", {
        tempReq: 400.0,
        itmI: "loveclab-item0ore-clay",
        itmO: "loveclab-item0buil-brick-clay",
      },

      "loveclab-item0int0blend-brick-magnesia", {
        tempReq: 800.0,
        itmI: "loveclab-item0int0blend-brick-magnesia",
        itmO: "loveclab-item0buil-brick-magnesia",
      },

      "loveclab-item0int0blend-brick-high-alumina", {
        tempReq: 1500.0,
        itmI: "loveclab-item0int0blend-brick-high-alumina",
        itmO: "loveclab-item0buil-brick-high-alumina",
      },

      "loveclab-item0int0blend-brick-mullite", {
        tempReq: 1100.0,
        itmI: "loveclab-item0int0blend-brick-mullite",
        itmO: "loveclab-item0buil-brick-mullite",
      },

      "loveclab-item0int0blend-brick-silica", {
        tempReq: 1300.0,
        itmI: "loveclab-item0int0blend-brick-silica",
        itmO: "loveclab-item0buil-brick-silica",
      },

    ],


    carbonization: [

      "loveclab-item0bio-log", {
        tempReq: 300.0,
        tempAllowed: 750.0,
        itmI: "loveclab-item0bio-log",
        bo: [
          "loveclab-item0bio-charcoal", 0.5, 0.5,
        ],
      },

      "loveclab-item0bio-hypha-rod", {
        tempReq: 500.0,
        tempAllowed: 900.0,
        itmI: "loveclab-item0bio-hypha-rod",
        bo: [
          "loveclab-item0bio-charcoal", 0.5, 0.5,
        ],
      },

      "loveclab-item0int0crd-activated-carbon", {
        tempReq: 600.0,
        tempAllowed: 1000.0,
        ci: [
          "GROUP: inert gas", 0.5,
        ],
        bi: [
          [
            "loveclab-item0bio-sawdust", 1.0, 1.0,
            "loveclab-item0bio-biomass-powder", 1.0, 1.0,
          ], -1.0, -1.0,
        ],
        bo: [
          "loveclab-item0int0crd-activated-carbon", 0.5, 0.5,
        ],
      },

      "loveclab-item0int-activated-carbon-inactivated", {
        tempReq: 600.0,
        tempAllowed: 1000.0,
        ci: [
          "GROUP: inert gas", 0.5,
        ],
        itmI: "loveclab-item0int0crd-activated-carbon",
        itmO: "loveclab-item0int-activated-carbon-inactivated",
      },

      "loveclab-item0chem-activated-carbon", {
        tempReq: 800.0,
        tempAllowed: 1200.0,
        ci: [
          "GROUP: hot steam", 2.0,
        ],
        itmI: "loveclab-item0int-activated-carbon-inactivated",
        itmO: "loveclab-item0chem-activated-carbon",
      },

    ],


    casting: [

      "loveclab-item0chem-cast-iron", {
        tempReq: 1600.0,
        bi: [
          "GROUP: pig iron", 1.0, 0.5,
        ],
        itmO: "loveclab-item0chem-cast-iron",
      },

      "loveclab-pay0mat-cast-iron-block", {
        timeScl: 0.5,
        tempReq: 1600.0,
        payBi: [
          "loveclab-item0chem-cast-iron", 10, 1.0,
        ],
        payO: "loveclab-pay0mat-cast-iron-block",
      },

      "projreind-pow0tor-brass-cogwheel", {
        timeScl: 0.5,
        lockedBy: [
          "projreind-pow0tor-brass-cogwheel",
        ],
        tempReq: 900.0,
        payBi: [
          "loveclab-item0chem-brass", 15.0, 1.0,
          "loveclab-item0chem-steel", 5.0, 1.0,
        ],
        payO: "projreind-pow0tor-brass-cogwheel",
      },

      "projreind-pow0tor-large-brass-cogwheel", {
        timeScl: 2.0,
        lockedBy: [
          "projreind-pow0tor-large-brass-cogwheel",
        ],
        tempReq: 1600.0,
        payBi: [
          "loveclab-item0chem-brass", 30.0, 1.0,
          "loveclab-item0chem-steel", 10.0, 1.0,
        ],
        payO: "projreind-pow0tor-large-brass-cogwheel",
      },

      "loveclab-pay0mat-cast-iron-rod", {
        tempReq: 1600.0,
        payBi: [
          "loveclab-item0chem-cast-iron", 20.0, 1.0,
        ],
        payO: "loveclab-pay0mat-cast-iron-rod",
      },

      "loveclab-pay0mat-mangalloy-rod", {
        tempReq: 1600.0,
        payBi: [
          "loveclab-item0chem-mangalloy", 20.0, 1.0,
        ],
        payO: "loveclab-pay0mat-mangalloy-rod",
      },

    ],


    condensation: [],


    dryingItem: [

      "loveclab-item0bio-sawdust", {
        itmI: "loveclab-item0bio-sawdust",
        itmO: "loveclab-item0int-sawdust-dried",
      },

      "loveclab-item0bio-biomass-powder", {
        itmI: "loveclab-item0bio-biomass-powder",
        itmO: "loveclab-item0int-biomass-powder-dried",
      },

    ],


    dryingLiquid: [],


    dryingLiquidAcidic: [],


    dryingLiquidBasic: [],


    dryingGas: [],


    dryingGasAcidic: [],


    dryingGasBasic: [],


    dryingFreeze: [

      "loveclab-gas0int-air-clean", {
        liqI: "loveclab-gas0int-air-clean",
        liqO: "loveclab-gas0int-air-dry",
      },

    ],


    filtration: [],


    filtrationLiquid: [],


    forging: [

      "loveclab-pay0mat-copper-block", {
        timeScl: 0.5,
        tempReq: 900.0,
        payBi: [
          "loveclab-item0chem-copper", 10.0, 1.0,
        ],
        payO: "loveclab-pay0mat-copper-block",
      },

      "loveclab-pay0mat-lead-block", {
        timeScl: 0.5,
        tempReq: 200.0,
        payBi: [
          "loveclab-item0chem-lead", 10.0, 1.0,
        ],
        payO: "loveclab-pay0mat-lead-block",
      },

      "loveclab-pay0mat-scrap-steel-block", {
        timeScl: 0.5,
        tempReq: 1200.0,
        payBi: [
          "loveclab-item0was-scrap-steel", 10.0, 1.0,
        ],
        payO: "loveclab-pay0mat-scrap-steel-block",
      },

      "loveclab-pay0mat-steel-block", {
        timeScl: 0.5,
        tempReq: 1200.0,
        payBi: [
          "loveclab-item0chem-steel", 10.0, 1.0,
        ],
        payO: "loveclab-pay0mat-steel-block",
      },

      "loveclab-item0cons-cast-iron-ball", {
        tempReq: 1000.0,
        payI: "loveclab-pay0mat-cast-iron-rod",
        payBo: [
          "loveclab-item0cons-cast-iron-ball", 1, 1.0,
        ],
      },

      "loveclab-item0cons-mangalloy-ball", {
        tempReq: 1000.0,
        payI: "loveclab-pay0mat-mangalloy-rod",
        payBo: [
          "loveclab-item0cons-mangalloy-ball", 1, 1.0,
        ],
      },

    ],


    heatingExchange: [

      "loveclab-gas0int-superheated-steam", {
        liqI: "loveclab-gas0int-superheated-steam",
        liqO: "loveclab-gas0misc-steam",
        heatO: 300.0,
      },

    ],


    heatingGas: [

      "loveclab-gas0int-superheated-steam", {
        tempReq: 500.0,
        liqI: "loveclab-gas0misc-steam",
        liqO: "loveclab-gas0int-superheated-steam",
      },

    ],


    mixing: [

      "loveclab-item0int0blend-brick-magnesia", {
        bi: [
          "loveclab-item0chem-magnesia-sand", 1.0, 0.5,
          "loveclab-item0ore-clay", 1.5, 0.5,
        ],
        itmO: "loveclab-item0int0blend-brick-magnesia",
      },

      "loveclab-item0int0blend-brick-high-alumina", {
        bi: [
          "loveclab-item0int0dust0p1-bauxite", 2.0, 0.5,
          "loveclab-item0ore-clay", 2.0, 0.5,
        ],
        itmO: "loveclab-item0int0blend-brick-high-alumina",
      },

      "loveclab-item0int0blend-cement", {
        bi: [
          "loveclab-item0int0chunks-limestone", 1.0, 0.5,
          "loveclab-item0ore-clay", 1.0, 0.5,
          [
            "GROUP: sand", 1.0, 0.5,
            "loveclab-item0was-slag", 2.0, 0.5,
            "loveclab-item0was-pyrite-cinder", 1.5, 0.5,
          ], -1.0, -1.0,
        ],
        itmO: "loveclab-item0int0blend-cement",
      },

      "loveclab-item0buil-cement", {
        bi: [
          "loveclab-item0int0clinker-cement", 1.0, 0.5,
          "loveclab-item0int0chunks-gypsum", 1.0, 0.5,
        ],
        itmO: "loveclab-item0buil-cement",
      },

    ],


    ballMillMixing: [

      "loveclab-item0int0blend-brick-mullite", {
        bi: [
          "loveclab-item0int0dust0p1-bauxite", 1.0, 0.5,
          "loveclab-item0ore-clay", 2.0, 0.5,
          [
            "loveclab-item0bio-sawdust", 1.0, 0.5,
            "loveclab-item0bio-biomass-powder", 1.0, 0.5,
          ], -1.0, -1.0,
        ],
        itmO: "loveclab-item0int0blend-brick-mullite",
      },

      "loveclab-item0int0blend-brick-silica", {
        bi: [
          [
            "loveclab-item0int0chunks-silica-stone", 2.0, 0.5,
            "GROUP: silica", 1.0, 0.5,
          ], -1.0, -1.0,
          "loveclab-item0int0chunks-limestone", 0.5, 0.5,
          "loveclab-item0int0chunks-gypsum", 0.5, 0.5,
          "GROUP: carbon", 0.5, 0.5,
        ],
        itmO: "loveclab-item0int0blend-brick-silica",
      },

      "loveclab-item0int0blend-refractory-cement", {
        bi: [
          "loveclab-item0int0dust0p1-bauxite", 2.0, 0.5,
          "loveclab-item0int0chunks-dolomite", 2.0, 0.5,
          "loveclab-item0chem-asbestos-wool", 1.0, 0.5,
          "GROUP: apatite (chunks)", 0.5, 0.5,
        ],
        itmO: "loveclab-item0int0blend-refractory-cement",
      },

    ],


    mixingLiquid: [

      "loveclab-liq0ore-brine", {
        ci: [
          "loveclab-liq0ore-water", 1.0,
        ],
        bi: [
          "loveclab-item0ore-salt", 1.0, 1.0,
        ],
        liqO: "loveclab-liq0ore-brine",
      },

      "loveclab-liq0int-purified-brine", {
        ci: [
          "loveclab-liq0ore-water", 1.0,
        ],
        bi: [
          [
            "loveclab-item0int0dust-salt", 1.0, 1.0,
            "loveclab-item0ore-sea-salt", 1.0, 1.0,
          ], -1.0, -1.0,
        ],
        liqO: "loveclab-liq0int-purified-brine",
      },

      "loveclab-item0chem-lime", {
        ci: [
          "loveclab-liq0ore-water", 1.0,
        ],
        bi: [
          "loveclab-item0chem-lime", 1.0, 1.0,
        ],
        liqO: "loveclab-liq0int0sol-slaked-lime",
      },

    ],


    pulverization: [

      "loveclab-item0int0dust-sand", {
        hardness: 0,
        keyCt: [
          "loveclab-item0ore-sand",
          "loveclab-item0ore-sand-river",
          "loveclab-item0ore-sand-sea",
        ],
        bi: [
          [
            "loveclab-item0ore-sand", 1.0, 1.0,
            "loveclab-item0ore-sand-river", 1.0, 1.0,
            "loveclab-item0ore-sand-sea", 1.0, 1.0,
          ], -1.0, -1.0,
        ],
        itmO: "loveclab-item0int0dust-sand",
      },

      /* zirconium */

      "loveclab-item0int0dust-zircon", {
        hardness: DB_HANDLER.read("itm-hardness", "loveclab-item0ore-zircon"),
        keyCt: "loveclab-item0int0chunks-zircon",
        bi: [
          "loveclab-item0int0chunks-zircon", 1.0, 1.0,
        ],
        itmO: "loveclab-item0int0dust-zircon",
      },

      /* rock */

      "loveclab-item0chem-talcum-powder", {
        hardness: DB_HANDLER.read("itm-hardness", "loveclab-item0ore-talc"),
        keyCt: "loveclab-item0int0dust-talc",
        bi: [
          "loveclab-item0int0dust-talc", 1.0, 1.0,
        ],
        itmO: "loveclab-item0chem-talcum-powder",
      },

    ],


    purificationI: [

      /* aluminum */

      "loveclab-item0int0dust-bauxite", {
        itmI: "loveclab-item0int0dust-bauxite",
        bo: [
          "loveclab-item0int0dust0p1-bauxite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-clay", 0.5, 0.5,
          "loveclab-item0ore-limonite", 0.25, 0.25,
        ],
      },

      /* carbon */

      "loveclab-item0int0dust-raw-coal", {
        itmI: "loveclab-item0int0dust-raw-coal",
        bo: [
          "loveclab-item0chem-coal", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0chem-lignite", 0.5, 0.75,
          "loveclab-item0ore-crude-graphite", 0.25, 0.25,
          "loveclab-item0ore-pyrite", 0.25, 0.25,
          "loveclab-item0ore-crude-sulfur", 0.125, 0.25,
        ],
      },

      /* copper */

      "loveclab-item0int0dust-chalcopyrite", {
        itmI: "loveclab-item0int0dust-chalcopyrite",
        bo: [
          "loveclab-item0int0dust0p1-chalcopyrite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-pyrite", 0.25, 0.25,
          "loveclab-item0ore-linnaeite", 0.125, 0.25,
          "loveclab-item0ore-stannite", 0.125, 0.25,
        ],
      },

      "loveclab-item0int0dust-malachite", {
        itmI: "loveclab-item0int0dust-malachite",
        bo: [
          "loveclab-item0int0dust0p1-malachite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-azurite", 0.25, 0.25,
          "loveclab-item0ore-limonite", 0.25, 0.25,
        ],
      },

      /* iron */

      "loveclab-item0int0dust-hematite", {
        itmI: "loveclab-item0int0dust-hematite",
        bo: [
          "loveclab-item0int0dust0p1-hematite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-magnetite", 0.25, 0.25,
          "loveclab-item0ore-raw-coal", 0.125, 0.25,
        ],
      },

      "loveclab-item0int0dust-limonite", {
        itmI: "loveclab-item0int0dust-limonite",
        bo: [
          "loveclab-item0int0dust0p1-limonite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-hematite", 0.25, 0.25,
          "loveclab-item0ore-pyrite", 0.25, 0.25,
          "loveclab-item0ore-cassiterite", 0.125, 0.25,
          "loveclab-item0ore-silica-stone", 0.125, 0.25,
        ],
      },

      "loveclab-item0int0dust-magnetite", {
        itmI: "loveclab-item0int0dust-magnetite",
        bo: [
          "loveclab-item0int0dust0p1-magnetite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-hematite", 0.25, 0.25,
          "loveclab-item0ore-raw-coal", 0.125, 0.25,
        ],
      },

      "loveclab-item0int0dust-pyrite", {
        itmI: "loveclab-item0int0dust-pyrite",
        bo: [
          "loveclab-item0int0dust0p1-pyrite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-chalcopyrite", 0.25, 0.25,
          "loveclab-item0ore-galena", 0.125, 0.25,
          "loveclab-item0ore-fluorite", 0.125, 0.25,
          "loveclab-item0ore-limonite", 0.125, 0.25,
          "loveclab-item0ore-arsenopyrite", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0dust-pyrrhotite", {
        itmI: "loveclab-item0int0dust-pyrrhotite",
        bo: [
          "loveclab-item0int0dust0p1-pyrrhotite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-chalcopyrite", 0.125, 0.25,
          "loveclab-item0ore-pentlandite", 0.125, 0.25,
          "loveclab-item0ore-arsenopyrite", 0.0675, 0.125,
        ],
      },

      /* lead */

      "loveclab-item0int0dust-galena", {
        itmI: "loveclab-item0int0dust-galena",
        bo: [
          "loveclab-item0int0dust0p1-galena", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-sphalerite", 0.25, 0.25,
          "loveclab-item0ore-barite", 0.125, 0.25,
          "loveclab-item0ore-chalcopyrite", 0.125, 0.25,
          "loveclab-item0ore-pyrite", 0.0675, 0.125,
          "loveclab-item0ore-anglesite", 0.0675, 0.125,
        ],
      },

      /* manganese */

      "loveclab-item0int0dust-psilomelane", {
        itmI: "loveclab-item0int0dust-psilomelane",
        bo: [
          "loveclab-item0int0dust0p1-psilomelane", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-limonite", 0.5, 0.5,
          "loveclab-item0ore-pyrite", 0.25, 0.25,
        ],
      },

      "loveclab-item0int0dust-pyrolusite", {
        itmI: "loveclab-item0int0dust-pyrolusite",
        bo: [
          "loveclab-item0int0dust0p1-pyrolusite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-hematite", 0.25, 0.25,
          "loveclab-item0ore-chromite", 0.25, 0.25,
        ],
      },

      /* nickel */

      "loveclab-item0int0dust-pentlandite", {
        itmI: "loveclab-item0int0dust-pentlandite",
        bo: [
          "loveclab-item0int0dust0p1-pentlandite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-chalcopyrite", 0.25, 0.25,
          "loveclab-item0ore-sperrylite", 0.0675, 0.125,
        ],
      },

      /* sulfur */

      "loveclab-item0int0chunks-crude-sulfur", {
        itmI: "loveclab-item0int0chunks-crude-sulfur",
        bo: [
          "loveclab-item0chem-sulfur", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-pyrite", 0.25, 0.25,
          "loveclab-item0ore-cinnabar", 0.125, 0.25,
        ],
      },

      /* tin */

      "loveclab-item0int0dust-cassiterite", {
        itmI: "loveclab-item0int0dust-cassiterite",
        bo: [
          "loveclab-item0int0dust0p1-cassiterite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-fluorite", 0.25, 0.25,
          "loveclab-item0ore-lepidolite", 0.125, 0.25,
          "loveclab-item0ore-spodumene", 0.125, 0.25,
          "loveclab-item0ore-wolframite", 0.125, 0.25,
        ],
      },

      /* titanium */

      "loveclab-item0int0dust-ilmenite", {
        itmI: "loveclab-item0int0dust-ilmenite",
        bo: [
          "loveclab-item0int0dust0p1-ilmenite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-rutile", 0.25, 0.25,
          "loveclab-item0ore-hematite", 0.125, 0.25,
          "loveclab-item0ore-pyrolusite", 0.0675, 0.125,
          "loveclab-item0ore-fluorapatite", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0dust-rutile", {
        itmI: "loveclab-item0int0dust-rutile",
        bo: [
          "loveclab-item0int0dust0p1-rutile", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-hematite", 0.25, 0.25,
          "loveclab-item0ore-zircon", 0.125, 0.25,
        ],
      },

      /* tungsten */

      "loveclab-item0int0dust-scheelite", {
        itmI: "loveclab-item0int0dust-scheelite",
        bo: [
          "loveclab-item0int0dust0p1-scheelite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-silica-stone", 0.25, 0.25,
          "loveclab-item0ore-cassiterite", 0.125, 0.25,
          "loveclab-item0ore-fluorite", 0.125, 0.25,
          "loveclab-item0ore-bismuthinite", 0.125, 0.125,
          "loveclab-item0ore-molybdenite", 0.0675, 0.125,
          "loveclab-item0ore-native-gold", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0dust-wolframite", {
        itmI: "loveclab-item0int0dust-wolframite",
        bo: [
          "loveclab-item0int0dust0p1-wolframite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-silica-stone", 0.25, 0.25,
          "loveclab-item0ore-cassiterite", 0.125, 0.25,
          "loveclab-item0ore-pyrite", 0.125, 0.25,
          "loveclab-item0ore-arsenopyrite", 0.0675, 0.125,
          "loveclab-item0ore-bismuthinite", 0.0675, 0.125,
        ],
      },

      /* zinc */

      "loveclab-item0int0dust-sphalerite", {
        itmI: "loveclab-item0int0dust-sphalerite",
        bo: [
          "loveclab-item0int0dust0p1-sphalerite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-galena", 0.25, 0.25,
          "loveclab-item0ore-fluorite", 0.125, 0.25,
          "loveclab-item0ore-limonite", 0.125, 0.25,
          "loveclab-item0ore-smithsonite", 0.0675, 0.125,
        ],
      },

      /* rock */

      "loveclab-item0int0chunks-salt", {
        itmI: "loveclab-item0int0chunks-salt",
        bo: [
          "loveclab-item0int0dust-salt", 1.0, 1.0,
          "loveclab-item0was-dust", 0.25, 0.25,
          "loveclab-item0ore-gypsum", 0.125, 0.25,
          "loveclab-item0ore-mirabilite", 0.125, 0.25,
          "loveclab-item0ore-sylvinite", 0.125, 0.25,
          "loveclab-item0ore-trona", 0.125, 0.25,
          "loveclab-item0ore-crude-borax", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0chunks-talc", {
        itmI: "loveclab-item0int0chunks-talc",
        bo: [
          "loveclab-item0int0dust-talc", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.25,
          "loveclab-item0ore-dolomite", 0.25, 0.25,
          "loveclab-item0ore-asbestos", 0.125, 0.25,
          "loveclab-item0ore-pyrite", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0dust-rock-clastic", {
        itmI: "loveclab-item0int0dust-rock-clastic",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-silica-stone", 0.25, 0.25,
        ],
      },

      "loveclab-item0int0dust-rock-evaporite", {
        itmI: "loveclab-item0int0dust-rock-evaporite",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-gypsum", 0.125, 0.25,
          "loveclab-item0ore-salt", 0.125, 0.25,
          "loveclab-item0ore-crude-borax", 0.0675, 0.125,
          "loveclab-item0ore-mirabilite", 0.0675, 0.125,
          "loveclab-item0ore-niter", 0.0675, 0.125,
          "loveclab-item0ore-trona", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0dust-rock-hypabyssal", {
        itmI: "loveclab-item0int0dust-rock-hypabyssal",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-silica-stone", 0.25, 0.25,
          "loveclab-item0ore-diamond", 0.03375, 0.0675,
        ],
      },

      "loveclab-item0int0dust-rock-lava", {
        itmI: "loveclab-item0int0dust-rock-lava",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-silica-stone", 0.25, 0.25,
        ],
      },

      "loveclab-item0int0dust-rock-metamorphic", {
        itmI: "loveclab-item0int0dust-rock-metamorphic",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-dolomite", 0.125, 0.25,
          "loveclab-item0ore-limestone", 0.125, 0.25,
          "loveclab-item0ore-silica-stone", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0dust-rock-plutonic", {
        itmI: "loveclab-item0int0dust-rock-plutonic",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-silica-stone", 0.25, 0.25,
          "loveclab-item0ore-vanadium-titanomagnetite", 0.0675, 0.125,
          "loveclab-item0ore-zircon", 0.03375, 0.0675,
        ],
      },

      "loveclab-item0int0dust-rock-biological-sedimentary", {
        itmI: "loveclab-item0int0dust-rock-biological-sedimentary",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-dolomite", 0.25, 0.25,
          "loveclab-item0ore-limestone", 0.25, 0.25,
          "loveclab-item0ore-clay", 0.125, 0.25,
          "loveclab-item0ore-talc", 0.0675, 0.125,
        ],
      },

      "loveclab-item0int0dust-rock-clastic-sedimentary", {
        itmI: "loveclab-item0int0dust-rock-clastic-sedimentary",
        bo: [
          "loveclab-item0was-gangue", 1.0, 0.5,
          "loveclab-item0ore-bauxite", 0.25, 0.25,
          "loveclab-item0ore-dolomite", 0.25, 0.25,
          "loveclab-item0ore-limestone", 0.25, 0.25,
          "loveclab-item0ore-silica-stone", 0.125, 0.25,
          "loveclab-item0ore-pyrite", 0.0675, 0.125,
        ],
      },

    ],


    purificationII: [],


    purificationMagnetic: [

      "loveclab-item0int0dust-asbestos", {
        itmI: "loveclab-item0int0dust-asbestos",
        bo: [
          "loveclab-item0int0dust0p1-asbestos", 1.0, 1.0,
          "loveclab-item0was-dust", 0.25, 0.5,
        ],
      },

      "loveclab-item0int0dust-sand", {
        itmI: "loveclab-item0int0dust-sand",
        bo: [
          "loveclab-item0int0dust0p1-sand", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
        ],
      },

      /* aluminum */

      "loveclab-item0int0dust-bauxite", {
        itmI: "loveclab-item0int0dust-bauxite",
        bo: [
          "loveclab-item0int0dust0p1-bauxite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
        ],
      },

      /* carbon */

      "loveclab-item0int0dust-raw-coal", {
        itmI: "loveclab-item0int0dust-raw-coal",
        bo: [
          "loveclab-item0chem-coal", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
        ],
      },

      /* copper */

      "loveclab-item0int0dust-chalcopyrite", {
        itmI: "loveclab-item0int0dust-chalcopyrite",
        bo: [
          "loveclab-item0int0dust0p1-chalcopyrite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-pyrite", 0.25, 0.25,
        ],
      },

      "loveclab-item0int0dust-malachite", {
        itmI: "loveclab-item0int0dust-malachite",
        bo: [
          "loveclab-item0int0dust0p1-malachite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-limonite", 0.25, 0.25,
        ],
      },

      /* iron */

      "loveclab-item0int0dust-limonite", {
        itmI: "loveclab-item0int0dust-limonite",
        bo: [
          "loveclab-item0int0dust0p1-limonite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-hematite", 0.25, 0.25,
        ],
      },

      "loveclab-item0int0dust-hematite", {
        itmI: "loveclab-item0int0dust-hematite",
        bo: [
          "loveclab-item0int0dust0p1-hematite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-magnetite", 0.25, 0.25,
        ],
      },

      "loveclab-item0int0dust-magnetite", {
        itmI: "loveclab-item0int0dust-magnetite",
        bo: [
          "loveclab-item0int0dust0p1-magnetite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-raw-coal", 0.125, 0.25,
        ],
      },

      "loveclab-item0int0dust-pyrrhotite", {
        itmI: "loveclab-item0int0dust-pyrrhotite",
        bo: [
          "loveclab-item0int0dust0p1-pyrrhotite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-chalcopyrite", 0.125, 0.25,
          "loveclab-item0ore-pentlandite", 0.125, 0.25,
        ],
      },

      /* manganese */

      "loveclab-item0int0dust-psilomelane", {
        itmI: "loveclab-item0int0dust-psilomelane",
        bo: [
          "loveclab-item0int0dust0p1-pyrolusite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-limonite", 0.25, 0.25,
          "loveclab-item0ore-hematite", 0.125, 0.25,
        ],
      },

      "loveclab-item0int0dust-pyrolusite", {
        itmI: "loveclab-item0int0dust-pyrolusite",
        bo: [
          "loveclab-item0int0dust0p1-pyrolusite", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
          "loveclab-item0ore-hematite", 0.125, 0.25,
        ],
      },

      /* sulfur */

      "loveclab-item0int0chunks-crude-sulfur", {
        itmI: "loveclab-item0int0chunks-crude-sulfur",
        bo: [
          "loveclab-item0chem-sulfur", 1.0, 1.0,
          "loveclab-item0was-gangue", 0.25, 0.5,
        ],
      },

    ],


    reactionGas: [],


    reactionLiquid: [],


    reactionMelt: [

      /* steelmaking */

      "loveclab-item0chem-cast-iron", {
        categ: "steelmaking",
        tempReq: 1600.0,
        bi: [
          "GROUP: pig iron", 1.0, 1.0,
        ],
        bo: [
          "loveclab-item0chem-cast-iron", 0.66666667, 0.66666667,
        ],
      },

      "loveclab-item0chem-steel", {
        categ: "steelmaking",
        tempReq: 1600.0,
        bi: [
          "GROUP: pig iron", 1.0, 1.0,
          "GROUP: carbon", 0.75, 1.0,
          [
            "loveclab-item0ore-limestone", 1.5, 0.5,
            "loveclab-item0chem-lime", 0.75, 0.5,
          ], -1.0, -1.0,
        ],
        bo: [
          "loveclab-item0chem-steel", 0.5, 0.5,
          "loveclab-item0was-slag", 0.5, 0.5,
        ],
      },

      "loveclab-item0chem-steel", {
        categ: "steelmaking",
        tag: "scrap steel",
        tempReq: 1400.0,
        bi: [
          "loveclab-item0was-scrap-steel", 1.5, 1.0,
          [
            "loveclab-item0ore-limestone", 1.5, 0.5,
            "loveclab-item0chem-lime", 0.75, 0.5,
          ], -1.0, -1.0,
        ],
        bo: [
          "loveclab-item0chem-steel", 0.5, 0.5,
          "loveclab-item0was-slag", 0.75, 0.75,
        ],
      },

      "loveclab-item0chem-ferromanganese", {
        categ: "steelmaking",
        tempReq: 1600.0,
        bi: [
          "GROUP: manganiferous", 1.0, 1.0,
          "GROUP:ferrous", 1.0, 1.0,
          [
            "loveclab-item0chem-graphite", 0.25, 0.5,
            "GROUP: carbon", 0.5, 1.0,
          ], -1.0, -1.0,
        ],
        bo: [
          "loveclab-item0chem-ferromanganese", 0.5, 0.5,
          "loveclab-item0was-slag", 0.75, 0.5,
        ],
      },

      "loveclab-item0chem-mangalloy", {
        categ: "steelmaking",
        tempReq: 1600.0,
        bi: [
          "loveclab-item0chem-ferromanganese", 0.5, 1.0,
          [
            "loveclab-item0ore-limestone", 1.5, 0.5,
            "loveclab-item0chem-lime", 0.75, 0.5,
          ], -1.0, -1.0,
        ],
        bo: [
          "loveclab-item0chem-mangalloy", 0.5, 0.5,
          "loveclab-item0was-slag", 0.5, 0.75,
        ]
      },

      "loveclab-item0chem-ferrochrome", {
        categ: "steelmaking",
        tempReq: 1600.0,
        bi: [
          "loveclab-item0ore-chromite", 1.0, 1.0,
          [
            "loveclab-item0ore-limestone", 1.5, 0.5,
            "loveclab-item0chem-lime", 0.75, 0.5,
          ], -1.0, -1.0,
          [
            "loveclab-item0chem-graphite", 0.25, 0.5,
            "GROUP: carbon", 0.5, 1.0,
          ], -1.0, -1.0,
        ],
        bo: [
          "loveclab-item0chem-ferrochrome", 0.5, 0.5,
          "loveclab-item0was-slag", 0.75, 0.5,
        ],
      },

      "loveclab-item0chem-stainless-steel", {
        categ: "steelmaking",
        tempReq: 1600.0,
        bi: [
          "loveclab-item0chem-ferrochrome", 0.5, 1.0,
          "loveclab-item0chem-wrought-iron", 1.0, 1.0,
        ],
        bo: [
          "loveclab-item0chem-stainless-steel", 0.25, 0.25,
          "loveclab-item0was-scrap-steel", 1.25, 0.5,
        ],
      },

    ],


    reactionBurnGas: [],


    reactionBurnLiquid: [],


    reactionBurnSolid: [

      "loveclab-item0chem-sulfur", {
        itmI: "loveclab-item0chem-sulfur",
        co: [
          "loveclab-gas0chem-sulfur-dioxide", 0.5,
        ],
        heatO: 1400.0,
      },

    ],


    roasting: [

      "loveclab-item0int0blend-cement", {
        tempReq: 1500.0,
        itmI: "loveclab-item0int0blend-cement",
        itmO: "loveclab-item0int0clinker-cement",
      },

      "loveclab-item0int0blend-refractory-cement", {
        tempReq: 2000.0,
        itmI: "loveclab-item0int0blend-refractory-cement",
        itmO: "loveclab-item0int0clinker-refractory-cement",
      },

      "loveclab-item0int0chunks-dolomite", {
        tempReq: 1700.0,
        itmI: "loveclab-item0int0chunks-dolomite",
        itmO: "loveclab-item0chem-magnesia-sand",
      },

      "loveclab-item0int0chunks-limestone", {
        tempReq: 850.0,
        itmI: "loveclab-item0int0chunks-limestone",
        liqO: "loveclab-gas0chem-carbon-dioxide",
        itmO: "loveclab-item0chem-lime",
      },

      "loveclab-item0ore-pyrite", {
        tag: "sulfur dioxide",
        keyCt: [
          "loveclab-item0ore-pyrite",
          "loveclab-item0int0conc-pyrite",
          "loveclab-item0ore-pyrrhotite",
          "loveclab-item0int0conc-pyrrhotite",
        ],
        tempReq: 1000.0,
        ci: [
          "GROUP: oxygen", 1.5,
        ],
        bi: [
          [
            "loveclab-item0ore-pyrite", 2.0, 0.5,
            "loveclab-item0int0conc-pyrite", 1.0, 1.0,
            "loveclab-item0ore-pyrrhotite", 1.5, 0.5,
            "loveclab-item0int0conc-pyrrhotite", 0.75, 1.0,
          ], -1.0, -1.0,
        ],
        aux: [
          "loveclab-aux0aux-dust-recycling", 1.0,
        ],
        liqO: "loveclab-gas0chem-sulfur-dioxide",
        bo: [
          "loveclab-item0was-pyrite-cinder", 1.5, 1.0,
          "loveclab-item0was-dust", 0.5, 0.5,
        ],
      },

    ],


    rockCrushing: [],


    smelting: [

      /* carbon */

      "loveclab-item0ore-crude-graphite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0chem-graphite"),
        itmI: "loveclab-item0ore-crude-graphite",
        bo: [
          "loveclab-item0chem-graphite", 0.5, 0.5,
        ],
      },

      /* copper */

      "loveclab-item0ore-azurite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-azurite"),
        itmI: "loveclab-item0ore-azurite",
        bo: [
          "loveclab-item0chem-copper", 0.75, 0.5,
        ],
      },

      "loveclab-item0ore-chalcopyrite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-chalcopyrite"),
        itmI: "loveclab-item0ore-chalcopyrite",
        bo: [
          "loveclab-item0chem-copper", 0.5, 0.5,
        ],
      },

      "loveclab-item0ore-malachite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-malachite"),
        itmI: "loveclab-item0ore-malachite",
        bo: [
          "loveclab-item0chem-copper", 0.75, 0.5,
        ],
      },

      "loveclab-item0ore-native-copper", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-native-copper"),
        itmI: "loveclab-item0ore-native-copper",
        bo: [
          "loveclab-item0chem-copper", 1.0, 0.5,
        ],
      },

      /* lead */

      "loveclab-item0ore-anglesite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-anglesite"),
        itmI: "loveclab-item0ore-anglesite",
        bo: [
          "loveclab-item0chem-lead", 0.75, 0.5,
        ],
      },

      "loveclab-item0ore-galena", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-galena"),
        itmI: "loveclab-item0ore-galena",
        bo: [
          "loveclab-item0chem-lead", 0.75, 0.5,
        ],
      },

      /* tin */

      "loveclab-item0ore-cassiterite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-cassiterite"),
        itmI: "loveclab-item0ore-cassiterite",
        bo: [
          "loveclab-item0chem-tin", 0.75, 0.5,
        ],
      },

      /* zinc */

      "loveclab-item0ore-sphalerite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-sphalerite"),
        itmI: "loveclab-item0ore-sphalerite",
        bo: [
          "loveclab-item0chem-zinc", 0.75, 0.5,
        ],
      },

      "loveclab-item0ore-smithsonite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-smithsonite"),
        itmI: "loveclab-item0ore-smithsonite",
        bo: [
          "loveclab-item0chem-zinc", 0.75, 0.5,
        ],
      },

    ],


    concentrateSmelting: [

      /* specific */

      "loveclab-item0was-pyrite-cinder", {
        tempReq: 1600.0,
        bi: [
          "loveclab-item0was-pyrite-cinder", 2.0, 1.0,
        ],
        bo: [
          "loveclab-item0chem-pig-iron", 2.0, 0.5,
          "loveclab-item0was-slag", 0.75, 0.5,
        ],
      },

      /* carbon */

      "loveclab-item0int0conc-chalcopyrite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-chalcopyrite"),
        itmI: "loveclab-item0int0conc-chalcopyrite",
        bo: [
          "loveclab-item0chem-copper", 1.0, 0.5,
          "loveclab-item0was-slag", 0.25, 0.5,
        ],
      },

      "loveclab-item0int0conc-native-copper", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-native-copper"),
        itmI: "loveclab-item0int0conc-native-copper",
        bo: [
          "loveclab-item0chem-copper", 2.0, 0.5,
          "loveclab-item0was-slag", 0.125, 0.5,
        ],
      },

      /* iron */

      "loveclab-item0int0conc-hematite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-hematite"),
        itmI: "loveclab-item0int0conc-hematite",
        bo: [
          "loveclab-item0chem-pig-iron", 2.0, 0.5,
          "loveclab-item0was-slag", 0.5, 0.5,
        ],
      },

      "loveclab-item0int0conc-limonite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-limonite"),
        bi: [
          "loveclab-item0int0conc-limonite", 2.0, 1.0,
        ],
        bo: [
          "loveclab-item0chem-pig-iron", 2.0, 0.5,
          "loveclab-item0was-slag", 0.75, 0.5,
        ],
      },

      "loveclab-item0int0conc-magnetite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-magnetite"),
        itmI: "loveclab-item0int0conc-magnetite",
        bo: [
          "loveclab-item0chem-pig-iron", 2.0, 0.5,
          "loveclab-item0was-slag", 0.5, 0.5,
        ],
      },

      "loveclab-item0int0conc-pyrite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-pyrite"),
        bi: [
          "loveclab-item0int0conc-pyrite", 1.5, 1.0,
        ],
        bo: [
          "loveclab-item0chem-pig-iron", 2.0, 0.5,
          "loveclab-item0was-slag", 0.75, 0.5,
        ],
      },

      "loveclab-item0int0conc-pyrrhotite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-pyrrhotite"),
        bi: [
          "loveclab-item0int0conc-pyrrhotite", 1.5, 1.0,
        ],
        bo: [
          "loveclab-item0chem-pig-iron", 2.0, 0.5,
          "loveclab-item0was-slag", 0.75, 0.5,
        ],
      },

      /* lead */

      "loveclab-item0int0conc-galena", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-galena"),
        itmI: "loveclab-item0int0conc-galena",
        bo: [
          "loveclab-item0chem-lead", 1.5, 0.5,
          "loveclab-item0was-slag", 0.25, 0.5,
        ],
      },

      /* nickel */

      "loveclab-item0int0conc-pentlandite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-pentlandite"),
        itmI: "loveclab-item0int0conc-pentlandite",
        bo: [
          "loveclab-item0chem-nickel", 0.75, 0.5,
          "loveclab-item0chem-pig-iron", 0.75, 0.5,
          "loveclab-item0was-slag", 0.25, 0.5,
        ],
      },

      /* tin */

      "loveclab-item0int0conc-cassiterite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-cassiterite"),
        itmI: "loveclab-item0int0conc-cassiterite",
        bo: [
          "loveclab-item0chem-tin", 1.5, 0.5,
          "loveclab-item0was-slag", 0.25, 0.5,
        ],
      },

      /* zinc */

      "loveclab-item0int0conc-sphalerite", {
        tempReq: DB_HANDLER.read("itm-sint-temp", "loveclab-item0ore-sphalerite"),
        itmI: "loveclab-item0int0conc-sphalerite",
        bo: [
          "loveclab-item0chem-zinc", 1.5, 0.5,
          "loveclab-item0was-slag", 0.25, 0.5,
        ],
      },

    ],


  },


  /* <------------------------------ CHUNK SPLITTER ------------------------------ */


};
exports.db = db;
