const db = {


    /* <------------------------------ CHUNK SPLITTER ------------------------------> */


    gen: {


        group: [

            /* <------------------------------ item ------------------------------> */

            /* consumable */

            "graphite electrode", ["loveclab-item0cons-graphite-electrode", {}],
            "graphite electrode", ["loveclab-item0cons-natural-graphite-electrode", {}],

            "graphite electrode (electrolysis)", ["loveclab-item0cons-graphite-electrode", {}],
            "graphite electrode (electrolysis)", ["loveclab-item0cons-natural-graphite-electrode", {pScl: 5.0}],

            "generic cathode", ["loveclab-item0cons-graphite-electrode", {}],
            "generic cathode", ["loveclab-item0cons-natural-graphite-electrode", {pScl: 5.0}],
            "generic cathode", ["loveclab-item0cons-brine-proof-steel-electrode", {pScl: 2.0}],
            "generic cathode", ["loveclab-item0cons-platinum-electrode", {pScl: 0.2}],

            "generic anode", ["loveclab-item0cons-graphite-electrode", {}],
            "generic anode", ["loveclab-item0cons-natural-graphite-electrode", {}],
            "generic anode", ["loveclab-item0cons-platinum-electrode", {pScl: 0.2}],
            "generic anode", ["loveclab-item0cons-copper-electrode", {pScl: 1.25}],
            "generic anode", ["loveclab-item0cons-lead-electrode", {pScl: 1.25}],
            "generic anode", ["loveclab-item0cons-iron-electrode", {pScl: 2.5}],

            /* chemical */

            "base", ["loveclab-item0chem-sodium-hydroxide", {}],
            "base", ["loveclab-item0chem-potassium-hydroxide", {}],

            "carbon", ["loveclab-item0chem-coke", {pScl: 0.5}],
            "carbon", ["loveclab-item0bio-charcoal", {amtScl: 3.0, pScl: 0.5}],
            "carbon", ["loveclab-item0chem-anthracite", {}],

            "coke", ["loveclab-item0chem-coke", {}],
            "coke", ["loveclab-item0chem-semicoke", {amtScl: 1.5}],

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
            "sodium carbonate", ["loveclab-item0ore-trona", {amtScl: 2.0}],

            "potassium nitrate", ["loveclab-item0chem-potassium-nitrate", {}],
            "potassium nitrate", ["loveclab-item0ore-niter", {amtScl: 2.0}],

            /* ore material I */

            "apatite", ["loveclab-item0ore-fluorapatite", {}],
            "apatite", ["loveclab-item0ore-hydroxyapatite", {}],
            "apatite (chunks)", ["loveclab-item0int0chunks-fluorapatite", {}],
            "apatite (chunks)", ["loveclab-item0int0chunks-hydroxyapatite", {}],

            "salt", ["loveclab-item0ore-salt", {}],
            "salt", ["loveclab-item0ore-sea-salt", {}],

            "sand", ["loveclab-item0ore-sand-river", {}],
            "sand", ["loveclab-item0buil-fine-aggregate", {}],

            /* ore material II */

            "ferrous", ["loveclab-item0chem-pig-iron", {pScl: 0.75}],
            "ferrous", ["loveclab-item0chem-wrought-iron", {pScl: 0.5}],
            "ferrous", ["loveclab-item0ore-hematite", {}],
            "ferrous", ["loveclab-item0ore-magnetite", {}],

            "manganiferous", ["loveclab-item0ore-psilomelane", {}],
            "manganiferous", ["loveclab-item0ore-pyrolusite", {}],

            "sulfurous", ["loveclab-item0chem-sulfur", {pScl: 0.25}],
            "sulfurous", ["loveclab-item0ore-crude-sulfur", {}],

            /* <------------------------------ liquid ------------------------------> */

            "lye", ["loveclab-liq0int0sol-lye", {}],
            "lye", ["loveclab-liq0int0sol-potassium-hydroxide", {}],

            /* <------------------------------ gas ------------------------------> */

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


    /* <------------------------------ CHUNK SPLITTER ------------------------------> */


    genData: {},


    /* <------------------------------ CHUNK SPLITTER ------------------------------> */


};


new CLS_recipeRawDataProcessor("loveclab", db["genData"]);


exports.db = db;
