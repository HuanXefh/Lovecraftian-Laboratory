/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_intermediateFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- gas0int ----------> */


  const gas0int_airClean = extendBase(
    TEMPLATE, "gas0int-air-clean",
    TEMPLATE.build({
      intmdParent: "loveclab-gas0misc-air",
      tempTags: ["rs-intmd", "rs-clean"],
    }),
  );
  exports.gas0int_airClean = gas0int_airClean;
