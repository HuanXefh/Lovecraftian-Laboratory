/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/pla/PLA_solidPlanet");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pla0ter ----------> */


  const pla0ter_anthimyst = extendPlanet(
    TEMPLATE, "pla0ter-anthimyst", 3,
  );


  const pla0ter_kanbos = extendPlanet(
    TEMPLATE, "pla0ter-kanbos", 2,
    TEMPLATE.build({
      tidalLock: true,
    }),
  );
