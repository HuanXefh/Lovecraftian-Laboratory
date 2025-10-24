/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_grass");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0grass (river) ----------> */


  const env0grass_aerthCommonWeed = extend(SeaBush, "env0grass-aerth-common-weed", TEMPLATE._std(57.62));
  exports.env0grass_aerthCommonWeed = env0grass_aerthCommonWeed;


  const env0grass_aerthCattail = extend(SeaBush, "env0grass-aerth-cattail", TEMPLATE._std(57.86));
  exports.env0grass_aerthCattail = env0grass_aerthCattail;
