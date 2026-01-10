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


  const env0grass_aerthCattail = extendBase(
    TEMPLATE, "env0grass-aerth-cattail",
    TEMPLATE.build({
      layGrass: 57.86,
    }),
  );
