/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_baseFluid = require("lovec/temp/rs/RS_baseFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <<------------------------------ liq0bio <------------------------------> */


    const liq0bio_latex = extendBase(
        RS_baseFluid, "liq0bio-latex",
    );


    /* <<------------------------------ liq0ore <------------------------------> */


    const liq0ore_water = extendBase(
        RS_baseFluid, "liq0ore-water",
    );


    const liq0ore_seaWater = extendBase(
        RS_baseFluid, "liq0ore-sea-water",
    );


    const liq0ore_brine = extendBase(
        RS_baseFluid, "liq0ore-brine",
    );


    const liq0ore_crudeOil = extendBase(
        RS_baseFluid, "liq0ore-crude-oil",
    );


    /* <<------------------------------ liq0misc <------------------------------> */


    const liq0misc_drillingMud = extendBase(
        RS_baseFluid, "liq0misc-drilling-mud",
    );


    /* <<------------------------------ liq0chem (misc) <------------------------------> */


    const liq0chem_coalTar = extendBase(
        RS_baseFluid, "liq0chem-coal-tar",
    );


    /* <<------------------------------ gas0misc <------------------------------> */


    const gas0misc_air = extendBase(
        RS_baseFluid, "gas0misc-air",
    );


    const gas0misc_steam = extendBase(
        RS_baseFluid, "gas0misc-steam",
    );


    /* <<------------------------------ gas0chem (elementary) <------------------------------> */


    const gas0chem_hydrogen = extendBase(
        RS_baseFluid, "gas0chem-hydrogen",
    );


    const gas0chem_nitrogen = extendBase(
        RS_baseFluid, "gas0chem-nitrogen",
    );


    const gas0chem_oxygen = extendBase(
        RS_baseFluid, "gas0chem-oxygen",
    );


    const gas0chem_ozone = extendBase(
        RS_baseFluid, "gas0chem-ozone",
    );


    /* <<------------------------------ gas0chem (inorganic) <------------------------------> */


    /* carbon */


    const gas0chem_carbonDioxide = extendBase(
        RS_baseFluid, "gas0chem-carbon-dioxide",
    );


    /* sulfur */


    const gas0chem_sulfurDioxide = extendBase(
        RS_baseFluid, "gas0chem-sulfur-dioxide",
    );


    const gas0chem_sulfurTrioxide = extendBase(
        RS_baseFluid, "gas0chem-sulfur-trioxide",
    );


    /* <<------------------------------ gas0chem (organic) <------------------------------> */


    const gas0chem_acetylene = extendBase(
        RS_baseFluid, "gas0chem-acetylene",
    );
