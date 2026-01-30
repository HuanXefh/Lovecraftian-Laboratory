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
    TEMPLATE.build({
      tempTags: ["rs-aux", "rs-nocap0aux"],
    }),
  );


  const aux0aux_vacuum = extendBase(
    TEMPLATE, "aux0aux-vacuum",
    TEMPLATE.build({
      tempTags: ["rs-aux", "rs-nocap0aux"],
    }),
  );


  const aux0aux_heat = extendBase(
    TEMPLATE, "aux0aux-heat",
    TEMPLATE.build({
      tempTags: ["rs-aux", "rs-nocap0aux"],
    }),
  );


  const aux0aux_torque = extendBase(
    TEMPLATE, "aux0aux-torque",
    TEMPLATE.build({
      tempTags: ["rs-aux", "rs-nocap0aux"],
    }),
  );


  const aux0aux_rpm = extendBase(
    TEMPLATE, "aux0aux-rpm",
    TEMPLATE.build({
      tempTags: ["rs-aux", "rs-nocap0aux"],
    }),
  );


  /* misc */


  const aux0aux_dustRecycling = extendBase(
    TEMPLATE, "aux0aux-dust-recycling",
  );


  const aux0aux_heatExchange = extendBase(
    TEMPLATE, "aux0aux-heat-exchange",
  );


  const aux0aux_liquidMixing = extendBase(
    TEMPLATE, "aux0aux-liquid-mixing",
  );


  const aux0aux_materialLifting = extendBase(
    TEMPLATE, "aux0aux-material-lifting",
  );


  const aux0aux_vibrationScreen = extendBase(
    TEMPLATE, "aux0aux-vibration-screen",
  );
