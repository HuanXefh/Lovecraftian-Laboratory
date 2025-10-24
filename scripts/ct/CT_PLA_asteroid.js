/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/pla/PLA_asteroid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- pla0ast ----------> */


  const pla0ast_calstos = extend(Planet, "pla0ast-calstos", null, 1.0, 0, TEMPLATE._std(global.lovecUtil.db.wall.env0wall_rockPlutonicGray, global.lovecUtil.db.wall.env0wall_rockLavaRed, -1, 0.4, 108, 6.8));
  TEMPLATE.init(pla0ast_calstos);
  exports.pla0ast_calstos = pla0ast_calstos;
