/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_fungi");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0tree0fungi (dirt) ----------> */


  const env0tree0fungi_giantAerthShiitake = extendBase(
    TEMPLATE, "env0tree0fungi-giant-aerth-shiitake", TEMPLATE.build({
      layTree: 76.44,
    }),
  );


  const env0tree0fungi_dottedRedCap = extendBase(
    TEMPLATE, "env0tree0fungi-dotted-red-cap",
    TEMPLATE.build({
      layTree: 77.12,
      hidable: true,
    }),
  );


  const env0tree0fungi_wormshroom = extendBase(
    TEMPLATE, "env0tree0fungi-wormshroom",
    TEMPLATE.build({
      layTree: 77.64,
      hidable: true,
    }),
  );


  /* <---------- env0tree0fungi (rock) ----------> */


  const env0tree0fungi_blueSpark = extendBase(
    TEMPLATE, "env0tree0fungi-blue-spark",
    TEMPLATE.build({
      layTree: 77.26,
      hidable: true,
    }),
  );


  const env0tree0fungi_ghostEye = extendBase(
    TEMPLATE, "env0tree0fungi-ghost-eye",
    TEMPLATE.build({
      layTree: 77.62,
      hidable: true,
    }),
  );
