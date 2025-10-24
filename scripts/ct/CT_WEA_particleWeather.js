/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/wea/WEA_particleWeather");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- wea0deco ----------> */


  const wea0deco_steamFlow = extend(ParticleWeather, "wea0deco-steam-flow", TEMPLATE._std());
  exports.wea0deco_steamFlow = wea0deco_steamFlow;


  const wea0deco_fogBlack = extend(ParticleWeather, "wea0deco-fog-black", TEMPLATE._std());
  exports.wea0deco_fogBlack = wea0deco_fogBlack;
