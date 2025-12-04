/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_depthLiquid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0ore ----------> */


  const env0ore0dpliq_water = extendBase(
    TEMPLATE, "env0ore0dpliq-water",
  );
  exports.env0ore0dpliq_water = env0ore0dpliq_water;


  const env0ore0dpliq_brine = extendBase(
    TEMPLATE, "env0ore0dpliq-brine",
  );
  exports.env0ore0dpliq_brine = env0ore0dpliq_brine;
