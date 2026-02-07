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


  /* river (cave) */


  const env0grass_violetStrand = extendBase(
    TEMPLATE, "env0grass-violet-strand",
    TEMPLATE.build({
      layGrass: 57.56,
    }),
  );


  const env0grass_violetBulb = extendBase(
    TEMPLATE, "env0grass-violet-bulb",
    TEMPLATE.build({
      layGrass: 57.74,
    }),
  );


  /* lava */


  const env0grass_flameThorn = extendBase(
    TEMPLATE, "env0grass-flame-thorn",
    TEMPLATE.build({
      layGrass: 57.68,
    }),
  );
