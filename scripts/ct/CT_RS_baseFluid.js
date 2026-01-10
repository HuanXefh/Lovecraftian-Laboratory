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


  /* <---------- liq0ore ----------> */


  const liq0ore_water = extendBase(
    TEMPLATE, "liq0ore-water",
  );


  const liq0ore_seaWater = extendBase(
    TEMPLATE, "liq0ore-sea-water",
  );


  const liq0ore_brine = extendBase(
    TEMPLATE, "liq0ore-brine",
  );


  const liq0ore_crudeOil = extendBase(
    TEMPLATE, "liq0ore-crude-oil",
  );


  /* <---------- gas0misc ----------> */


  const gas0misc_air = extendBase(
    TEMPLATE, "gas0misc-air",
  );


  const gas0misc_steam = extendBase(
    TEMPLATE, "gas0misc-steam",
  );
