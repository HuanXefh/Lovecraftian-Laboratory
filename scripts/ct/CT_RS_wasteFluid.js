/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_wasteFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- liq0was ----------> */


  const liq0was_wasteWater = extend(Liquid, "liq0was-waste-water", TEMPLATE._std(null, true, null));
  exports.liq0was_wasteWater = liq0was_wasteWater;


  /* <---------- gas0was ----------> */


  const gas0was_cokeOvenGas = extend(Liquid, "gas0was-coke-oven-gas", TEMPLATE._std(null, true, null));
  exports.gas0was_cokeOvenGas = gas0was_cokeOvenGas;
