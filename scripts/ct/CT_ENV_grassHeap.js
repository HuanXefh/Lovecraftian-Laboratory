/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_grassHeap = require("lovec/temp/env/ENV_grassHeap");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0heap ------------------------------> */


    const env0heap_tallGrass = extendBase(
        ENV_grassHeap, "env0heap-tall-grass",
        ENV_grassHeap.build({
            hidable: true,
            layGrass: 76.41,
            flrParent: "loveclab-env0flr-grass",
        }),
    );
