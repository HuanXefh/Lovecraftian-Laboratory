/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_wasteFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- liq0was ----------> */


  const liq0was_wasteWater = extendBase(
    TEMPLATE, "liq0was-waste-water",
    TEMPLATE.build({
      useParentRegion: false,
    }),
  );
  exports.liq0was_wasteWater = liq0was_wasteWater;


  /* <---------- gas0was ----------> */


  const gas0was_cokeOvenGas = extendBase(
    TEMPLATE, "gas0was-coke-oven-gas",
    TEMPLATE.build({
      useParentRegion: false,
    }),
  );
  exports.gas0was_cokeOvenGas = gas0was_cokeOvenGas;
