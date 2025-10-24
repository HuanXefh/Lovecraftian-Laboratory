/*
  ========================================
  Section: Definition
  ========================================
*/


  /* ----------------------------------------
   * NOTE:
   *
   * Cores here are roots of planet tech trees.
   * For upgraded cores, move to ProjReind.
   * ---------------------------------------- */


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/blk/BLK_core");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- eff0core ----------> */


  const eff0Core_ash = extend(CoreBlock, "eff0core-ash", TEMPLATE._std());
  eff0Core_ash.buildType = () => extend(CoreBlock.CoreBuild, eff0Core_ash, TEMPLATE._std_b());
  exports.eff0Core_ash = eff0Core_ash;
