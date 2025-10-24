/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/sta/STA_fadeStatus");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta ----------> */


  const sta_stunned = extend(StatusEffect, "sta-stunned", TEMPLATE._std("lovec-reg0sta-sta-stunned"));
  exports.sta_stunned = sta_stunned;
