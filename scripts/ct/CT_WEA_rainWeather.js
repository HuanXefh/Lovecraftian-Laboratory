/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/wea/WEA_rainWeather");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- wea0deco ----------> */


  const wea0deco_heavyRain = extendBase(
    TEMPLATE, "wea0deco-heavy-rain",
  );
  exports.wea0deco_heavyRain = wea0deco_heavyRain;
