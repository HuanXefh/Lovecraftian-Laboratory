/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_grass = require("lovec/temp/env/ENV_grass");
    const ENV_weed = require("lovec/temp/env/ENV_weed");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0grass (dirt) ------------------------------> */


    const env0grass_aerthCommonWeed = extendBase(
        ENV_grass, "env0grass-aerth-common-weed",
        ENV_grass.build({
            layGrass: 57.62,
        }),
    );


    const env0grass_aerthCattail = extendBase(
        ENV_grass, "env0grass-aerth-cattail",
        ENV_grass.build({
            layGrass: 57.86,
        }),
    );


    /* <------------------------------ env0grass (rock) ------------------------------> */


    const env0grass_violetStrand = extendBase(
        ENV_grass, "env0grass-violet-strand",
        ENV_grass.build({
            layGrass: 57.56,
        }),
    );


    const env0grass_violetBulb = extendBase(
        ENV_grass, "env0grass-violet-bulb",
        ENV_grass.build({
            layGrass: 57.74,
        }),
    );


    const env0grass_flameThorn = extendBase(
        ENV_grass, "env0grass-flame-thorn",
        ENV_grass.build({
            layGrass: 57.68,
        }),
    );


    /* <------------------------------ env0grass (river) ------------------------------> */


    const env0weed_lilypad = extendBase(
        ENV_weed, "env0weed-lilypad",
        ENV_weed.build({
            layGrass: 2.05,
        }),
    );


    const env0grass_aerthLotusSmall = extendBase(
        ENV_grass, "env0grass-aerth-lotus-small",
        ENV_grass.build({
            layGrass: 56.55,
        }),
    );


    const env0grass_aerthLotus = extendBase(
        ENV_grass, "env0grass-aerth-lotus",
        ENV_grass.build({
            layGrass: 57.89,
        }),
    );


    /* <------------------------------ env0grass (swamp) ------------------------------> */


    const env0weed_duckweed = extendBase(
        ENV_weed, "env0weed-duckweed",
        ENV_weed.build({
            layGrass: 2.02,
        }),
    );


    /* <------------------------------ env0grass (sea) ------------------------------> */


    const env0weed_aerthWhiteAlgae = extendBase(
        ENV_weed, "env0weed-aerth-white-algae",
        ENV_weed.build({
            layGrass: 57.54,
        }),
    );
