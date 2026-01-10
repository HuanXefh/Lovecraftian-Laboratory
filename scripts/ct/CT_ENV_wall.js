/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_wall");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0wall ----------> */


  /* dirt */


  const env0wall_dirt = extendBase(
    TEMPLATE, "env0wall-dirt",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-dirt",
    }),
  );


  /* rock */


  const env0wall_rockLavaRed = extendBase(
    TEMPLATE, "env0wall-rock-lava-red",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-lava-red",
    }),
  );


  const env0wall_rockMetamorphicGray = extendBase(
    TEMPLATE, "env0wall-rock-metamorphic-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-metamorphic-gray",
    }),
  );


  const env0wall_rockPlutonicGray = extendBase(
    TEMPLATE, "env0wall-rock-plutonic-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-plutonic-gray",
    }),
  );


  const env0wall_rockBiologicalSedimentaryGray = extendBase(
    TEMPLATE, "env0wall-rock-biological-sedimentary-gray",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-rock-biological-sedimentary-gray",
    }),
  );


  /* sand */


  const env0wall_sand = extendBase(
    TEMPLATE, "env0wall-sand",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-sand",
    }),
  );


  const env0wall_sandDark = extendBase(
    TEMPLATE, "env0wall-sand-dark",
    TEMPLATE.build({
      flrParent: "loveclab-env0flr-sand-dark",
    }),
  );
