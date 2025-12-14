/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/unit/UNIT_lootUnit");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- unit0core ----------> */


  const unit0misc_loot = extendUnit(
    TEMPLATE, "unit0misc-loot",
  );
  exports.unit0misc_loot = unit0misc_loot;
