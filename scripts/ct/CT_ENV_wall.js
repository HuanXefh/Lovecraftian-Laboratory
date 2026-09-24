/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_wall = require("lovec/temp/env/ENV_wall");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0wall ------------------------------> */


    /* dirt */


    const env0wall_dirt = extendBase(
        ENV_wall, "env0wall-dirt",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-dirt",
        }),
    );


    /* rock */


    const env0wall_rockLavaGray = extendBase(
        ENV_wall, "env0wall-rock-lava-gray",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-rock-lava-gray",
        }),
    );


    const env0wall_rockLavaRed = extendBase(
        ENV_wall, "env0wall-rock-lava-red",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-rock-lava-red",
        }),
    );


    const env0wall_rockMetamorphicGray = extendBase(
        ENV_wall, "env0wall-rock-metamorphic-gray",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-rock-metamorphic-gray",
        }),
    );


    const env0wall_rockPlutonicGray = extendBase(
        ENV_wall, "env0wall-rock-plutonic-gray",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-rock-plutonic-gray",
        }),
    );


    const env0wall_rockBiologicalSedimentaryGray = extendBase(
        ENV_wall, "env0wall-rock-biological-sedimentary-gray",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-rock-biological-sedimentary-gray",
        }),
    );


    /* sand */


    const env0wall_sand = extendBase(
        ENV_wall, "env0wall-sand",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-sand",
        }),
    );


    const env0wall_sandDark = extendBase(
        ENV_wall, "env0wall-sand-dark",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-sand-dark",
        }),
    );


    const env0wall_sandRed = extendBase(
        ENV_wall, "env0wall-sand-red",
        ENV_wall.build({
            flrParent: "loveclab-env0flr-sand-red",
        }),
    );
