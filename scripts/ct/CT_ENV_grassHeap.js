/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_grassHeap");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0heap ----------> */


  const env0heap_tallGrass = extendBase(
    TEMPLATE, "env0heap-tall-grass",
    TEMPLATE.build({
      layGrass: 76.41,
      hidable: true,
      flrParent: "loveclab-env0flr-grass",
    }),
  );
