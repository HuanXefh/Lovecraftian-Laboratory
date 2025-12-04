/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_abstractFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- aux0aux ----------> */


  /* primary */


  const aux0aux_pressure = extendBase(
    TEMPLATE, "aux0aux-pressure",
  );
  exports.aux0aux_pressure = aux0aux_pressure;


  const aux0aux_vacuum = extendBase(
    TEMPLATE, "aux0aux-vacuum",
  );
  exports.aux0aux_vacuum = aux0aux_vacuum;


  const aux0aux_heat = extendBase(
    TEMPLATE, "aux0aux-heat",
  );
  exports.aux0aux_heat = aux0aux_heat;


  const aux0aux_torque = extendBase(
    TEMPLATE, "aux0aux-torque",
  );
  exports.aux0aux_torque = aux0aux_torque;


  const aux0aux_rpm = extendBase(
    TEMPLATE, "aux0aux-rpm",
  );
  exports.aux0aux_rpm = aux0aux_rpm;


  /* misc */


  const aux0aux_dustRecycling = extendBase(
    TEMPLATE, "aux0aux-dust-recycling",
  );
  exports.aux0aux_dustRecycling = aux0aux_dustRecycling;


  const aux0aux_heatExchange = extendBase(
    TEMPLATE, "aux0aux-heat-exchange",
  );
  exports.aux0aux_heatExchange = aux0aux_heatExchange;


  const aux0aux_pump = extendBase(
    TEMPLATE, "aux0aux-pump",
  );
  exports.aux0aux_pump = aux0aux_pump;


  const aux0aux_vibrationScreen = extendBase(
    TEMPLATE, "aux0aux-vibration-screen",
  );
  exports.aux0aux_vibrationScreen = aux0aux_vibrationScreen;
