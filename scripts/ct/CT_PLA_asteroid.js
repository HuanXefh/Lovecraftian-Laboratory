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
      blkBase: global.lovecUtil.db.wall.env0wall_rockPlutonicGray,
      blkTint: global.lovecUtil.db.wall.env0wall_rockLavaRed,
      astSeed: -1,
      tintThr: 0.4,
      astAmt: 108,
      astScl: 6.8,
    }),
  );
  exports.pla0ast_calstos = pla0ast_calstos;
