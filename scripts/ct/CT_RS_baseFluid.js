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


  /* <---------- liq0misc ----------> */


  const liq0misc_drillingMud = extendBase(
    TEMPLATE, "liq0misc-drilling-mud",
  );


  /* <---------- liq0chem (misc) ----------> */


  const liq0chem_coalTar = extendBase(
    TEMPLATE, "liq0chem-coal-tar",
  );


  /* <---------- gas0misc ----------> */


  const gas0misc_air = extendBase(
    TEMPLATE, "gas0misc-air",
  );


  const gas0misc_steam = extendBase(
    TEMPLATE, "gas0misc-steam",
  );


  /* <---------- gas0chem (elementary) ----------> */


  const gas0chem_hydrogen = extendBase(
    TEMPLATE, "gas0chem-hydrogen",
  );


  const gas0chem_nitrogen = extendBase(
    TEMPLATE, "gas0chem-nitrogen",
  );


  const gas0chem_oxygen = extendBase(
    TEMPLATE, "gas0chem-oxygen",
  );


  const gas0chem_ozone = extendBase(
    TEMPLATE, "gas0chem-ozone",
  );


  /* <---------- gas0chem (inorganic) ----------> */


  /* carbon */


  const gas0chem_carbonDioxide = extendBase(
    TEMPLATE, "gas0chem-carbon-dioxide",
  );


  /* sulfur */


  const gas0chem_sulfurDioxide = extendBase(
    TEMPLATE, "gas0chem-sulfur-dioxide",
  );


  const gas0chem_sulfurTrioxide = extendBase(
    TEMPLATE, "gas0chem-sulfur-trioxide",
  );


  /* <---------- gas0chem (organic) ----------> */


  const gas0chem_acetylene = extendBase(
    TEMPLATE, "gas0chem-acetylene",
  );
