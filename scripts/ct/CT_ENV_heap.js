/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_heap = require("lovec/temp/env/ENV_heap");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0heap ------------------------------> */


    /* dirt */


    const env0heap_dirt = extendBase(
        ENV_heap, "env0heap-dirt",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-dirt",
        }),
    );


    /* sand */


    const env0heap_sand = extendBase(
        ENV_heap, "env0heap-sand",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-sand",
        }),
    );


    const env0heap_sandDark = extendBase(
        ENV_heap, "env0heap-sand-dark",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-sand-dark",
        }),
    );


    const env0heap_sandRed = extendBase(
        ENV_heap, "env0heap-sand-red",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-sand-red",
        }),
    );


    /* rock */


    const env0heap_rockLavaGray = extendBase(
        ENV_heap, "env0heap-rock-lava-gray",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-rock-lava-gray",
        }),
    );


    const env0heap_rockLavaRed = extendBase(
        ENV_heap, "env0heap-rock-lava-red",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-rock-lava-red",
        }),
    );


    const env0heap_rockMetamorphicGray = extendBase(
        ENV_heap, "env0heap-rock-metamorphic-gray",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-rock-metamorphic-gray",
        }),
    );


    const env0heap_rockPlutonicGray = extendBase(
        ENV_heap, "env0heap-rock-plutonic-gray",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-rock-plutonic-gray",
        }),
    );


    const env0heap_rockBiologicalSedimentaryGray = extendBase(
        ENV_heap, "env0heap-rock-biological-sedimentary-gray",
        ENV_heap.build({
            flrParent: "loveclab-env0flr-rock-biological-sedimentary-gray",
        }),
    );
