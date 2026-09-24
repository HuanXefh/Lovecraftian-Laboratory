/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_fungi = require("lovec/temp/env/ENV_fungi");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0tree0fungi (dirt) ------------------------------> */


    const env0tree0fungi_giantAerthShiitake = extendBase(
        ENV_fungi, "env0tree0fungi-giant-aerth-shiitake", ENV_fungi.build({
            layTree: 76.44,
            treeRad: 13.5,
        }),
    );


    const env0tree0fungi_dottedRedCap = extendBase(
        ENV_fungi, "env0tree0fungi-dotted-red-cap",
        ENV_fungi.build({
            hidable: true,
            layTree: 77.12,
            treeRad: 15.0,
        }),
    );


    const env0tree0fungi_wormshroom = extendBase(
        ENV_fungi, "env0tree0fungi-wormshroom",
        ENV_fungi.build({
            hidable: true,
            layTree: 77.64,
            treeRad: 22.5,
        }),
    );


    /* <------------------------------ env0tree0fungi (rock) ------------------------------> */


    const env0tree0fungi_clusteredNebula = extendBase(
        ENV_fungi, "env0tree0fungi-clustered-nebula",
        ENV_fungi.build({
            layTree: 76.32,
            treeRad: 14.0,
        }),
    );


    const env0tree0fungi_blueSpark = extendBase(
        ENV_fungi, "env0tree0fungi-blue-spark",
        ENV_fungi.build({
            hidable: true,
            layTree: 77.26,
            treeRad: 21.5,
        }),
    );


    const env0tree0fungi_greenSpark = extendBase(
        ENV_fungi, "env0tree0fungi-green-spark",
        ENV_fungi.build({
            layTree: 76.58,
            treeRad: 9.0,
        }),
    );


    const env0tree0fungi_ghostEye = extendBase(
        ENV_fungi, "env0tree0fungi-ghost-eye",
        ENV_fungi.build({
            hidable: true,
            layTree: 77.62,
            treeRad: 27.5,
        }),
    );


    /* <------------------------------ env0tree0fungi (sea) ------------------------------> */


    // Waterborne
    const env0tree0fungi_aquaticNightmare = extendBase(
        ENV_fungi, "env0tree0fungi-aquatic-nightmare",
        ENV_fungi.build({
            hidable: true,
            layTree: 78.02,
            treeRad: 28.5,
        }),
    );
