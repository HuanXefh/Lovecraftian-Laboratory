/*
  ========================================
  Section: Definition
  ========================================
*/


    const WEA_particleWeather = require("lovec/temp/wea/WEA_particleWeather");
    const WEA_rainWeather = require("lovec/temp/wea/WEA_rainWeather");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ wea0deco ------------------------------> */


    const wea0deco_steamFlow = extendBase(
        WEA_particleWeather, "wea0deco-steam-flow",
    );


    const wea0deco_fogBlack = extendBase(
        WEA_particleWeather, "wea0deco-fog-black",
    );


    const wea0deco_heavyRain = extendBase(
        WEA_rainWeather, "wea0deco-heavy-rain",
    );
