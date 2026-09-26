/*
  ========================================
  Section: Definition
  ========================================
*/


    const PLA_sun = require("lovec/temp/pla/PLA_sun");
    const PLA_planet = require("lovec/temp/pla/PLA_planet");
    const PLA_asteroid = require("lovec/temp/pla/PLA_asteroid");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ pla0sun ------------------------------> */


    const pla0sun_veibrus = extendPlanet(
        PLA_sun, "pla0sun-veibrus", 0,
    );


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


    /* <------------------------------ pla0ast ------------------------------> */


    const pla0ast_calstos = extendPlanet(
        PLA_asteroid, "pla0ast-calstos", 0,
        PLA_asteroid.build({
            blkBase: fetchContent("loveclab-env0wall-rock-plutonic-gray"),
            blkTint: fetchContent("loveclab-env0wall-rock-lava-red"),
            astSeed: -1,
            tintThr: 0.4,
            astAmt: 108,
            astScl: 6.8,
        }),
    );
