/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_puddleFloor");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0liq_brine = extend(Floor, "env0liq-brine", TEMPLATE._std(null, null));
  exports.env0liq_brine = env0liq_brine;


  const env0liq_brineShallow = extend(Floor, "env0liq-brine-shallow", TEMPLATE._std(null, null));
  exports.env0liq_brineShallow = env0liq_brineShallow;


  const env0liq_volcanicSpring = extend(Floor, "env0liq-volcanic-spring", TEMPLATE._std(TP_effect._ventSmog(30.0, 30.0, Color.white, 5.0), 0.0008));
  exports.env0liq_volcanicSpring = env0liq_volcanicSpring;


  const env0liq_volcanicSpringShallow = extend(Floor, "env0liq-volcanic-spring-shallow", TEMPLATE._std(TP_effect._ventSmog(30.0, 30.0, Color.white, 5.0), 0.0008));
  exports.env0liq_volcanicSpringShallow = env0liq_volcanicSpringShallow;
