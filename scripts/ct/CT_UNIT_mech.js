/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/unit/UNIT_mech");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- unit0core ----------> */


  const unit0core_outpostI = extend(UnitType, "unit0core-outpost-i", TEMPLATE._std("lovec-mech"));
  TEMPLATE.init(unit0core_outpostI);
  exports.unit0core_outpostI = unit0core_outpostI;
