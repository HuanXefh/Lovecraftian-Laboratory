/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/pla/PLA_solidPlanet");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pla0ter ----------> */


  const pla0ter_anthimyst = extend(Planet, "pla0ter-anthimyst", null, 1.0, 3, TEMPLATE._std());
  TEMPLATE.init(pla0ter_anthimyst);
  exports.pla0ter_anthimyst = pla0ter_anthimyst;


  const pla0ter_kanbos = extend(Planet, "pla0ter-kanbos", null, 1.0, 2, TEMPLATE._std());
  TEMPLATE.init(pla0ter_kanbos);
  exports.pla0ter_kanbos = pla0ter_kanbos;
