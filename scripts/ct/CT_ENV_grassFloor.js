/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_grassFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0flr_grass = extend(Floor, "env0flr-grass", TEMPLATE._std(null, null, null));
  exports.env0flr_grass = env0flr_grass;
