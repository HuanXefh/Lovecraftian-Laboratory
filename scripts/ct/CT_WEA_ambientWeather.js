/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/wea/WEA_ambientWeather");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- wea0amb ----------> */


  const wea0amb_anthimystNormal = extend(Weather, "wea0amb-anthimyst-normal", TEMPLATE._std());
  exports.wea0amb_anthimystNormal = wea0amb_anthimystNormal;
