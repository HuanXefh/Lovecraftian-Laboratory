/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_riverFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0liq_water = extend(Floor, "env0liq-water", TEMPLATE._std(null, null));
  exports.env0liq_water = env0liq_water;


  const env0liq_waterShallow = extend(Floor, "env0liq-water-shallow", TEMPLATE._std(null, null));
  exports.env0liq_waterShallow = env0liq_waterShallow;


  const env0liq_swampWater = extend(Floor, "env0liq-swamp-water", TEMPLATE._std(null, null));
  exports.env0liq_swampWater = env0liq_swampWater;


  const env0liq_swampWaterShallow = extend(Floor, "env0liq-swamp-water-shallow", TEMPLATE._std(null, null));
  exports.env0liq_swampWaterShallow = env0liq_swampWaterShallow;
