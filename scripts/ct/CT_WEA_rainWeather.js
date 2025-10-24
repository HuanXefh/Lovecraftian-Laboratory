/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/wea/WEA_rainWeather");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- wea0deco ----------> */


  const wea0deco_heavyRain = extend(RainWeather, "wea0deco-heavy-rain", TEMPLATE._std());
  exports.wea0deco_heavyRain = wea0deco_heavyRain;
