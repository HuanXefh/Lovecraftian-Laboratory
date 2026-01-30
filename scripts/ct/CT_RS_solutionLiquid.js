/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_solutionLiquid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- liq0int (water) ----------> */


  /* calcium */


  const liq0int0sol_slakedLime = extendBase(
    TEMPLATE, "liq0int0sol-slaked-lime",
    TEMPLATE.build({
      intmdParent: "loveclab-item0chem-slaked-lime",
    }),
  );
