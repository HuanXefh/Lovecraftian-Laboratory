/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/pla/PLA_asteroid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pla0ast ----------> */


  const pla0ast_calstos = extendPlanet(
    TEMPLATE, "pla0ast-calstos", 0,
    TEMPLATE.build({
      blkBase: fetchContent("loveclab-env0wall-rock-plutonic-gray"),
      blkTint: fetchContent("loveclab-env0wall-rock-lava-red"),
      astSeed: -1,
      tintThr: 0.4,
      astAmt: 108,
      astScl: 6.8,
    }),
  );
