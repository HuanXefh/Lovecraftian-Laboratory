/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_grass");
  const TEMPLATE_A = require("lovec/temp/env/ENV_weed");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0grass (dirt) ----------> */


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


  /* <---------- env0grass (rock) ----------> */


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


  const env0grass_flameThorn = extendBase(
    TEMPLATE, "env0grass-flame-thorn",
    TEMPLATE.build({
      layGrass: 57.68,
    }),
  );


  /* <---------- env0weed (swamp) ----------> */


  const env0weed_duckweed = extendBase(
    TEMPLATE_A, "env0weed-duckweed",
    TEMPLATE_A.build({
      layGrass: 56.82,
    }),
  );


  /* <---------- env0weed (sea) ----------> */


  const env0weed_aerthWhiteAlgae = extendBase(
    TEMPLATE_A, "env0weed-aerth-white-algae",
    TEMPLATE_A.build({
      layGrass: 57.54,
    }),
  );
