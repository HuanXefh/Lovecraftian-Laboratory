/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_heap");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0heap ----------> */


  /* dirt */


  const env0heap_dirt = extend(TallBlock, "env0heap-dirt", TEMPLATE._std("loveclab-env0flr-dirt"));
  exports.env0heap_dirt = env0heap_dirt;


  /* grass */


  /* sand */


  const env0heap_sand = extend(TallBlock, "env0heap-sand", TEMPLATE._std("loveclab-env0flr-sand"));
  exports.env0heap_sand = env0heap_sand;


  const env0heap_sandDark = extend(TallBlock, "env0heap-sand-dark", TEMPLATE._std("loveclab-env0flr-sand-dark"));
  exports.env0heap_sandDark = env0heap_sandDark;


  /* rock */


  const env0heap_rockLavaRed = extend(TallBlock, "env0heap-rock-lava-red", TEMPLATE._std("loveclab-env0flr-rock-lava-red"));
  exports.env0heap_rockLavaRed = env0heap_rockLavaRed;


  const env0heap_rockMetamorphicGray = extend(TallBlock, "env0heap-rock-metamorphic-gray", TEMPLATE._std("loveclab-env0flr-rock-metamorphic-gray"));
  exports.env0heap_rockMetamorphicGray = env0heap_rockMetamorphicGray;


  const env0heap_rockPlutonicGray = extend(TallBlock, "env0heap-rock-plutonic-gray", TEMPLATE._std("loveclab-env0flr-rock-plutonic-gray"));
  exports.env0heap_rockPlutonicGray = env0heap_rockPlutonicGray;


  const env0heap_rockBiologicalSedimentaryGray = extend(TallBlock, "env0heap-rock-biological-sedimentary-gray", TEMPLATE._std("loveclab-env0flr-rock-biological-sedimentary-gray"));
  exports.env0heap_rockBiologicalSedimentaryGray = env0heap_rockBiologicalSedimentaryGray;
