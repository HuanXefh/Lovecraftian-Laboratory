/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_wasteFluid = require("lovec/temp/rs/RS_wasteFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ liq0was ------------------------------> */


    const liq0was_wasteWater = extendBase(
        RS_wasteFluid, "liq0was-waste-water",
    );


    const liq0was_wasteSlurry = extendBase(
        RS_wasteFluid, "liq0was-waste-slurry",
    );


    const liq0was_bittern = extendBase(
        RS_wasteFluid, "liq0was-bittern",
    );


    /* <------------------------------ gas0was ------------------------------> */


    const gas0was_cokeOvenGas = extendBase(
        RS_wasteFluid, "gas0was-coke-oven-gas",
    );
