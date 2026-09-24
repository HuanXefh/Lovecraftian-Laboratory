/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_abstractFluid = require("lovec/temp/rs/RS_abstractFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ aux0aux ------------------------------> */


    /* primary */


    const aux0aux_pressure = extendBase(
        RS_abstractFluid, "aux0aux-pressure",
        RS_abstractFluid.build({
            tempTags: ["rs-aux", "rs-aux-nocap"],
        }),
    );


    const aux0aux_vacuum = extendBase(
        RS_abstractFluid, "aux0aux-vacuum",
        RS_abstractFluid.build({
            tempTags: ["rs-aux", "rs-aux-nocap"],
        }),
    );


    const aux0aux_heat = extendBase(
        RS_abstractFluid, "aux0aux-heat",
        RS_abstractFluid.build({
            tempTags: ["rs-aux", "rs-aux-nocap"],
        }),
    );


    const aux0aux_torque = extendBase(
        RS_abstractFluid, "aux0aux-torque",
        RS_abstractFluid.build({
            tempTags: ["rs-aux", "rs-aux-nocap"],
        }),
    );


    const aux0aux_rpm = extendBase(
        RS_abstractFluid, "aux0aux-rpm",
        RS_abstractFluid.build({
            tempTags: ["rs-aux", "rs-aux-nocap"],
        }),
    );


    /* misc */


    const aux0aux_dustRecycling = extendBase(
        RS_abstractFluid, "aux0aux-dust-recycling",
    );


    const aux0aux_heatExchange = extendBase(
        RS_abstractFluid, "aux0aux-heat-exchange",
    );


    const aux0aux_liquidMixing = extendBase(
        RS_abstractFluid, "aux0aux-liquid-mixing",
    );


    const aux0aux_materialLifting = extendBase(
        RS_abstractFluid, "aux0aux-material-lifting",
    );


    const aux0aux_meltCooling = extendBase(
        RS_abstractFluid, "aux0aux-melt-cooling",
    );


    const aux0aux_pollutionDetection = extendBase(
        RS_abstractFluid, "aux0aux-pollution-detection",
    );


    const aux0aux_tubeFurnace = extendBase(
        RS_abstractFluid, "aux0aux-tube-furnace",
    );


    const aux0aux_vibrationScreen = extendBase(
        RS_abstractFluid, "aux0aux-vibration-screen",
    );
