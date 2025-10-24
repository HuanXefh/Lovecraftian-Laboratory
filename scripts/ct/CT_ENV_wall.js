/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_wall");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0wall ----------> */


  /* dirt */


  const env0wall_dirt = extend(StaticWall, "env0wall-dirt", TEMPLATE._std("loveclab-env0flr-dirt"));
  exports.env0wall_dirt = env0wall_dirt;


  /* grass */


  /* sand */


  const env0wall_sand = extend(StaticWall, "env0wall-sand", TEMPLATE._std("loveclab-env0flr-sand"));
  exports.env0wall_sand = env0wall_sand;


  const env0wall_sandDark = extend(StaticWall, "env0wall-sand-dark", TEMPLATE._std("loveclab-env0flr-sand-dark"));
  exports.env0wall_sandDark = env0wall_sandDark;


  /* rock */


  const env0wall_rockLavaRed = extend(StaticWall, "env0wall-rock-lava-red", TEMPLATE._std("loveclab-env0flr-rock-lava-red"));
  exports.env0wall_rockLavaRed = env0wall_rockLavaRed;


  const env0wall_rockMetamorphicGray = extend(StaticWall, "env0wall-rock-metamorphic-gray", TEMPLATE._std("loveclab-env0flr-rock-metamorphic-gray"));
  exports.env0wall_rockMetamorphicGray = env0wall_rockMetamorphicGray;


  const env0wall_rockPlutonicGray = extend(StaticWall, "env0wall-rock-plutonic-gray", TEMPLATE._std("loveclab-env0flr-rock-plutonic-gray"));
  exports.env0wall_rockPlutonicGray = env0wall_rockPlutonicGray;


  const env0wall_rockBiologicalSedimentaryGray = extend(StaticWall, "env0wall-rock-biological-sedimentary-gray", TEMPLATE._std("loveclab-env0flr-rock-biological-sedimentary-gray"));
  exports.env0wall_rockBiologicalSedimentaryGray = env0wall_rockBiologicalSedimentaryGray;




  global.lovecUtil.db.wall = module.exports;
