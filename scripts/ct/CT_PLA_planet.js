/*
  ========================================
  Section: Definition
  ========================================
*/


    const PLA_planet = require("lovec/temp/pla/PLA_planet");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pla0ter ------------------------------> */


    const pla0ter_anthimyst = extendPlanet(
        PLA_planet, "pla0ter-anthimyst", 3,
    );


    const pla0ter_kanbos = extendPlanet(
        PLA_planet, "pla0ter-kanbos", 2,
        PLA_planet.build({
            tidalLock: true,
        }),
    );
