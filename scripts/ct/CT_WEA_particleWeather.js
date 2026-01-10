/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/wea/WEA_particleWeather");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- wea0deco ----------> */


  const wea0deco_steamFlow = extendBase(
    TEMPLATE, "wea0deco-steam-flow",
  );


  const wea0deco_fogBlack = extendBase(
    TEMPLATE, "wea0deco-fog-black",
  );
