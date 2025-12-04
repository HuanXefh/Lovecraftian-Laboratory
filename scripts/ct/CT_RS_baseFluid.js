/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_baseFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- liq0bio ----------> */


  const liq0bio_latex = extendBase(
    TEMPLATE, "liq0bio-latex",
  );
  exports.liq0bio_latex = liq0bio_latex;


  /* <---------- liq0ore ----------> */


  const liq0ore_water = extendBase(
    TEMPLATE, "liq0ore-water",
  );
  exports.liq0ore_water = liq0ore_water;


  const liq0ore_seaWater = extendBase(
    TEMPLATE, "liq0ore-sea-water",
  );
  exports.liq0ore_seaWater = liq0ore_seaWater;


  const liq0ore_brine = extendBase(
    TEMPLATE, "liq0ore-brine",
  );
  exports.liq0ore_brine = liq0ore_brine;


  /* <---------- gas0misc ----------> */


  const gas0misc_air = extendBase(
    TEMPLATE, "gas0misc-air",
  );
  exports.gas0misc_air = gas0misc_air;


  const gas0misc_steam = extendBase(
    TEMPLATE, "gas0misc-steam",
  );
  exports.gas0misc_steam = gas0misc_steam;
