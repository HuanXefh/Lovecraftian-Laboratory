/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_depthLiquid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0ore ----------> */


  const env0ore0dpliq_water = extend(OverlayFloor, "env0ore0dpliq-water", TEMPLATE._std());
  exports.env0ore0dpliq_water = env0ore0dpliq_water;


  const env0ore0dpliq_brine = extend(OverlayFloor, "env0ore0dpliq-brine", TEMPLATE._std());
  exports.env0ore0dpliq_brine = env0ore0dpliq_brine;
