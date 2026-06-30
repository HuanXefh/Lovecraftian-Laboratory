/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_bush");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- rock ----------> */


  const env0tree0bush_ashFern = extendBase(
    TEMPLATE, "env0tree0bush-ash-fern",
    TEMPLATE.build({
      treeLay: 76.68,
      radTree: 13.0,
    }),
  );


  const env0tree0bush_rockyFern = extendBase(
    TEMPLATE, "env0tree0bush-rocky-fern",
    TEMPLATE.build({
      treeLay: 76.71,
      radTree: 14.0,
    }),
  );
