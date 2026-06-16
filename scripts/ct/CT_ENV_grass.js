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


  /* <---------- dirt ----------> */


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


  /* <---------- rock ----------> */


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


  /* <---------- river ----------> */


  const env0weed_lilypad = extendBase(
    TEMPLATE_A, "env0weed-lilypad",
    TEMPLATE_A.build({
      layGrass: 2.05,
    }),
  );


  const env0grass_aerthLotusSmall = extendBase(
    TEMPLATE, "env0grass-aerth-lotus-small",
    TEMPLATE.build({
      layGrass: 56.55,
    }),
  );


  const env0grass_aerthLotus = extendBase(
    TEMPLATE, "env0grass-aerth-lotus",
    TEMPLATE.build({
      layGrass: 57.89,
    }),
  );


  /* <---------- swamp ----------> */


  const env0weed_duckweed = extendBase(
    TEMPLATE_A, "env0weed-duckweed",
    TEMPLATE_A.build({
      layGrass: 2.02,
    }),
  );


  /* <---------- sea ----------> */


  const env0weed_aerthWhiteAlgae = extendBase(
    TEMPLATE_A, "env0weed-aerth-white-algae",
    TEMPLATE_A.build({
      layGrass: 57.54,
    }),
  );
