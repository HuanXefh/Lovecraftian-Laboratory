/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/wea/WEA_ambientWeather");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- wea0amb ----------> */


  const wea0amb_anthimystNormal = extendBase(
    TEMPLATE, "wea0amb-anthimyst-normal",
  );
  exports.wea0amb_anthimystNormal = wea0amb_anthimystNormal;
