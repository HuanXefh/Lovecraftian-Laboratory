/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_crudeGas = require("lovec/temp/rs/RS_crudeGas");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ gas0int (inorganic) ------------------------------> */


    /* alkyne */


    const gas0int0crdg_acetyleneCalciumCarbide = extendBase(
        RS_crudeGas, "gas0int0crdg-acetylene-calcium-carbide",
        RS_crudeGas.build({
            intmdParent: "loveclab-gas0chem-acetylene",
            extraIntmdParents: [
                "loveclab-item0chem-calcium-carbide",
            ],
        }),
    );
