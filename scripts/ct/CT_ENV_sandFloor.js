/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_sandFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0flr_sand = extend(Floor, "env0flr-sand", TEMPLATE._std(["rock-sand"], 80, [20, 0]));
  exports.env0flr_sand = env0flr_sand;


  const env0flr_sandDark = extend(Floor, "env0flr-sand-dark", TEMPLATE._std(["rock-sand-dark"], 80, [20, 0]));
  exports.env0flr_sandDark = env0flr_sandDark;
