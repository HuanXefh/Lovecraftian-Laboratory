/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_heap");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0heap ----------> */


  /* dirt */


  const env0heap_dirt = extendBase(
    TEMPLATE, "env0heap-dirt",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-dirt",
    }),
  );


  /* grass */


  /* sand */


  const env0heap_sand = extendBase(
    TEMPLATE, "env0heap-sand",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-sand",
    }),
  );


  const env0heap_sandDark = extendBase(
    TEMPLATE, "env0heap-sand-dark",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-sand-dark",
    }),
  );


  const env0heap_sandRed = extendBase(
    TEMPLATE, "env0heap-sand-red",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-sand-red",
    }),
  );


  /* rock */


  const env0heap_rockLavaGray = extendBase(
    TEMPLATE, "env0heap-rock-lava-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-lava-gray",
    }),
  );


  const env0heap_rockLavaRed = extendBase(
    TEMPLATE, "env0heap-rock-lava-red",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-lava-red",
    }),
  );


  const env0heap_rockMetamorphicGray = extendBase(
    TEMPLATE, "env0heap-rock-metamorphic-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-metamorphic-gray",
    }),
  );


  const env0heap_rockPlutonicGray = extendBase(
    TEMPLATE, "env0heap-rock-plutonic-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-plutonic-gray",
    }),
  );


  const env0heap_rockBiologicalSedimentaryGray = extendBase(
    TEMPLATE, "env0heap-rock-biological-sedimentary-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-biological-sedimentary-gray",
    }),
  );
