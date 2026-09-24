/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_solutionLiquid = require("lovec/temp/rs/RS_solutionLiquid");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ liq0int0sol (water) ------------------------------> */


    /* calcium */


    const liq0int0sol_slakedLime = extendBase(
        RS_solutionLiquid, "liq0int0sol-slaked-lime",
        RS_solutionLiquid.build({
            intmdParent: "loveclab-item0chem-slaked-lime",
        }),
    );


    /* potassium */


    const liq0int0sol_potassiumChloride = extendBase(
        RS_solutionLiquid, "liq0int0sol-potassium-chloride",
        RS_solutionLiquid.build({
            intmdParent: "loveclab-item0chem-potassium-chloride",
        }),
    );


    /* sodium */


    const liq0int0sol_sodiumChloride = extendBase(
        RS_solutionLiquid, "liq0int0sol-sodium-chloride",
        RS_solutionLiquid.build({
            intmdParent: "loveclab-item0chem-sodium-chloride",
        }),
    );
