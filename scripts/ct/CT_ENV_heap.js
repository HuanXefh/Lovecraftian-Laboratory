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
  exports.env0heap_dirt = env0heap_dirt;


  /* grass */


  /* sand */


  const env0heap_sand = extendBase(
    TEMPLATE, "env0heap-sand",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-sand",
    }),
  );
  exports.env0heap_sand = env0heap_sand;


  const env0heap_sandDark = extendBase(
    TEMPLATE, "env0heap-sand-dark",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-sand-dark",
    }),
  );
  exports.env0heap_sandDark = env0heap_sandDark;


  /* rock */


  const env0heap_rockLavaRed = extendBase(
    TEMPLATE, "env0heap-rock-lava-red",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-lava-red",
    }),
  );
  exports.env0heap_rockLavaRed = env0heap_rockLavaRed;


  const env0heap_rockMetamorphicGray = extendBase(
    TEMPLATE, "env0heap-rock-metamorphic-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-metamorphic-gray",
    }),
  );
  exports.env0heap_rockMetamorphicGray = env0heap_rockMetamorphicGray;


  const env0heap_rockPlutonicGray = extendBase(
    TEMPLATE, "env0heap-rock-plutonic-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-plutonic-gray",
    }),
  );
  exports.env0heap_rockPlutonicGray = env0heap_rockPlutonicGray;


  const env0heap_rockBiologicalSedimentaryGray = extendBase(
    TEMPLATE, "env0heap-rock-biological-sedimentary-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-biological-sedimentary-gray",
    }),
  );
  exports.env0heap_rockBiologicalSedimentaryGray = env0heap_rockBiologicalSedimentaryGray;
