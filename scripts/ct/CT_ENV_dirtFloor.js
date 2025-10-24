/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_dirtFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0flr_clay = extend(Floor, "env0flr-clay", TEMPLATE._std(null, null, null));
  exports.env0flr_clay = env0flr_clay;


  const env0flr_dirt = extend(Floor, "env0flr-dirt", TEMPLATE._std(["rock"], null, null));
  exports.env0flr_dirt = env0flr_dirt;


  const env0flr_mud = extend(Floor, "env0flr-mud", TEMPLATE._std(["rock"], null, null));
  exports.env0flr_mud = env0flr_mud;
