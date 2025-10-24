/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_lavaFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0liq_lava = extend(Floor, "env0liq-lava", TEMPLATE._std(null, null));
  exports.env0liq_lava = env0liq_lava;
