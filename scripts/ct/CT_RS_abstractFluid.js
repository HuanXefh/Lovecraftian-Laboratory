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


  const aux0aux_vacuum = extendBase(
    TEMPLATE, "aux0aux-vacuum",
  );


  const aux0aux_heat = extendBase(
    TEMPLATE, "aux0aux-heat",
  );


  const aux0aux_torque = extendBase(
    TEMPLATE, "aux0aux-torque",
  );


  const aux0aux_rpm = extendBase(
    TEMPLATE, "aux0aux-rpm",
  );


  /* misc */


  const aux0aux_dustRecycling = extendBase(
    TEMPLATE, "aux0aux-dust-recycling",
  );


  const aux0aux_heatExchange = extendBase(
    TEMPLATE, "aux0aux-heat-exchange",
  );


  const aux0aux_pump = extendBase(
    TEMPLATE, "aux0aux-pump",
  );


  const aux0aux_vibrationScreen = extendBase(
    TEMPLATE, "aux0aux-vibration-screen",
  );
