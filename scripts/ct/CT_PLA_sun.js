/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/pla/PLA_sun");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pla0sun ----------> */


  const pla0sun_veibrus = extend(Planet, "pla0sun-veibrus", null, 1.0, 0, TEMPLATE._std());
  TEMPLATE.init(pla0sun_veibrus);
  exports.pla0sun_veibrus = pla0sun_veibrus;
