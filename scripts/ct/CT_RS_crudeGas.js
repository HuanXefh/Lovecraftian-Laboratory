/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_crudeGas");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- gas0int (inorganic) ----------> */


  /* alkyne */


  const gas0int0crdg_acetyleneCalciumCarbide = extendBase(
    TEMPLATE, "gas0int0crdg-acetylene-calcium-carbide",
    TEMPLATE.build({
      intmdParent: "loveclab-gas0chem-acetylene",
      extraIntmdParents: [
        "loveclab-item0chem-calcium-carbide",
      ],
    }),
  );
