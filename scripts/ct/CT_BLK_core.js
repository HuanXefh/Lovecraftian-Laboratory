/*
  ========================================
  Section: Definition
  ========================================
*/


    /**
     * Cores here are roots of planet tech trees.
     * For upgraded cores, see ProjReind.
     */


    const BLK_B_core = require("lovec/temp/blk/BLK_core");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ eff0core ------------------------------> */


    const eff0Core_ash = extendBlock(
        BLK_B_core, "eff0core-ash",
        BLK_B_core[0].build({
            powProd: 600.0 / 60.0,
        }),
    );
