/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_abstractFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- aux0aux ----------> */


  /* primary */


  const aux0aux_pressure = extend(Liquid, "aux0aux-pressure", TEMPLATE._std());
  exports.aux0aux_pressure = aux0aux_pressure;


  const aux0aux_vacuum = extend(Liquid, "aux0aux-vacuum", TEMPLATE._std());
  exports.aux0aux_vacuum = aux0aux_vacuum;


  const aux0aux_heat = extend(Liquid, "aux0aux-heat", TEMPLATE._std());
  exports.aux0aux_heat = aux0aux_heat;


  const aux0aux_torque = extend(Liquid, "aux0aux-torque", TEMPLATE._std());
  exports.aux0aux_torque = aux0aux_torque;


  const aux0aux_rpm = extend(Liquid, "aux0aux-rpm", TEMPLATE._std());
  exports.aux0aux_rpm = aux0aux_rpm;


  /* misc */


  const aux0aux_dustRecycling = extend(Liquid, "aux0aux-dust-recycling", TEMPLATE._std());
  exports.aux0aux_dustRecycling = aux0aux_dustRecycling;


  const aux0aux_heatExchange = extend(Liquid, "aux0aux-heat-exchange", TEMPLATE._std());
  exports.aux0aux_heatExchange = aux0aux_heatExchange;


  const aux0aux_pump = extend(Liquid, "aux0aux-pump", TEMPLATE._std());
  exports.aux0aux_pump = aux0aux_pump;


  const aux0aux_vibrationScreen = extend(Liquid, "aux0aux-vibration-screen", TEMPLATE._std());
  exports.aux0aux_vibrationScreen = aux0aux_vibrationScreen;
