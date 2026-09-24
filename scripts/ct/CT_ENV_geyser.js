/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_geyser = require("lovec/temp/env/ENV_geyser");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0liq0geyser ------------------------------> */


    /* lava */


    const env0liq0geyser_lava = extendBase(
        ENV_geyser, "env0liq0geyser-lava",
        ENV_geyser.build({
            parent: "loveclab-env0liq-lava",
            matGrp: "lava",
        }),
    );


    /* puddle */


    const env0liq0geyser_brine = extendBase(
        ENV_geyser, "env0liq0geyser-brine",
        ENV_geyser.build({
            parent: "loveclab-env0liq-brine",
            matGrp: "puddle",
        }),
    );


    const env0liq0geyser_volcanicSpring = extendBase(
        ENV_geyser, "env0liq0geyser-volcanic-spring",
        ENV_geyser.build({
            parent: "loveclab-env0liq-volcanic-spring",
            matGrp: "puddle",
        }),
    );


    /* river */


    const env0liq0geyser_water = extendBase(
        ENV_geyser, "env0liq0geyser-water",
        ENV_geyser.build({
            parent: "loveclab-env0liq-water",
            matGrp: "river",
        }),
    );


    const env0liq0geyser_sawmpWater = extendBase(
        ENV_geyser, "env0liq0geyser-swamp-water",
        ENV_geyser.build({
            parent: "loveclab-env0liq-swamp-water",
            matGrp: "river",
        }),
    );
