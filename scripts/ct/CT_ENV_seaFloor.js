/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_seaFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0liq_seaWater = extend(Floor, "env0liq-sea-water", TEMPLATE._std(null, null));
  exports.env0liq_seaWater = env0liq_seaWater;


  const env0liq_seaWaterShallow = extend(Floor, "env0liq-sea-water-shallow", TEMPLATE._std(null, null));
  exports.env0liq_seaWaterShallow = env0liq_seaWaterShallow;
