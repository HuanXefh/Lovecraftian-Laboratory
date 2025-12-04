/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/STA_fadeStatus");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta ----------> */


  const sta_stunned = extendBase(
    TEMPLATE, "sta-stunned",
  );
  exports.sta_stunned = sta_stunned;
