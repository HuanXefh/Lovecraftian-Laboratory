/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_grass");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0grass ----------> */


  /* river */


  const env0grass_aerthCommonWeed = extendBase(
    TEMPLATE, "env0grass-aerth-common-weed",
    TEMPLATE.build({
      layGrass: 57.62,
    }),
  );
  exports.env0grass_aerthCommonWeed = env0grass_aerthCommonWeed;


  const env0grass_aerthCattail = extendBase(
    TEMPLATE, "env0grass-aerth-cattail",
    TEMPLATE.build({
      layGrass: 57.86,
    }),
  );
  exports.env0grass_aerthCattail = env0grass_aerthCattail;
