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
  );


  const liq0was_wasteSlurry = extendBase(
    TEMPLATE, "liq0was-waste-slurry",
  );


  const liq0was_bittern = extendBase(
    TEMPLATE, "liq0was-bittern",
  );


  /* <---------- gas0was ----------> */


  const gas0was_cokeOvenGas = extendBase(
    TEMPLATE, "gas0was-coke-oven-gas",
  );
