/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_baseFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- liq0bio ----------> */


  const liq0bio_latex = extend(Liquid, "liq0bio-latex", TEMPLATE._std());
  exports.liq0bio_latex = liq0bio_latex;


  /* <---------- liq0ore ----------> */


  const liq0ore_water = extend(Liquid, "liq0ore-water", TEMPLATE._std());
  exports.liq0ore_water = liq0ore_water;


  const liq0ore_seaWater = extend(Liquid, "liq0ore-sea-water", TEMPLATE._std());
  exports.liq0ore_seaWater = liq0ore_seaWater;


  const liq0ore_brine = extend(Liquid, "liq0ore-brine", TEMPLATE._std());
  exports.liq0ore_brine = liq0ore_brine;


  /* <---------- gas0misc ----------> */


  const gas0misc_air = extend(Liquid, "gas0misc-air", TEMPLATE._std());
  exports.gas0misc_air = gas0misc_air;


  const gas0misc_steam = extend(Liquid, "gas0misc-steam", TEMPLATE._std());
  exports.gas0misc_steam = gas0misc_steam;
