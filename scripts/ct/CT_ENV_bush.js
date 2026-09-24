/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_bush = require("lovec/temp/env/ENV_bush");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0tree0bush (rock) ------------------------------> */


    const env0tree0bush_ashFern = extendBase(
        ENV_bush, "env0tree0bush-ash-fern",
        ENV_bush.build({
            treeLay: 76.68,
            treeRad: 13.0,
        }),
    );


    const env0tree0bush_rockyFern = extendBase(
        ENV_bush, "env0tree0bush-rocky-fern",
        ENV_bush.build({
            treeLay: 76.71,
            treeRad: 14.0,
        }),
    );
