/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_intermediateFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- gas0int ----------> */


  const gas0int_airClean = extend(Liquid, "gas0int-air-clean", TEMPLATE._std("loveclab-gas0misc-air", false, "rs-clean"));
  exports.gas0int_airClean = gas0int_airClean;
