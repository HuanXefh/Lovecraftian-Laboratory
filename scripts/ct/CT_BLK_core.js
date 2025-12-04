/*
  ========================================
  Section: Definition
  ========================================
*/


  /* ----------------------------------------
   * NOTE:
   *
   * Cores here are roots of planet tech trees.
   * For upgraded cores, see ProjReind.
   * ---------------------------------------- */


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/blk/BLK_core");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0core ----------> */


  const eff0Core_ash = extendBlock(
    TEMPLATE, "eff0core-ash",
    TEMPLATE[0].build({
      powProd: 600.0 / 60.0,
    }),
  );
  exports.eff0Core_ash = eff0Core_ash;
