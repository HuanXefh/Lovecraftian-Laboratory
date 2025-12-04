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
  exports.pla0ter_anthimyst = pla0ter_anthimyst;


  const pla0ter_kanbos = extendPlanet(
    TEMPLATE, "pla0ter-kanbos", 2,
    TEMPLATE.build({
      tidalLock: true,
    }),
  );
  exports.pla0ter_kanbos = pla0ter_kanbos;
