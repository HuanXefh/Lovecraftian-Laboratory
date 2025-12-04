/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_liquidMaterialFloor");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  /* lava */


  const env0liq_lava = extendBase(
    TEMPLATE, "env0liq-lava",
    TEMPLATE.build({
      matGrp: "lava",
    }),
  );
  exports.env0liq_lava = env0liq_lava;


  /* puddle */


  const env0liq_brine = extendBase(
    TEMPLATE, "env0liq-brine",
    TEMPLATE.build({
      matGrp: "puddle",
    }),
  );
  exports.env0liq_brine = env0liq_brine;


  const env0liq_brineShallow = extendBase(
    TEMPLATE, "env0liq-brine-shallow",
    TEMPLATE.build({
      matGrp: "puddle",
    }),
  );
  exports.env0liq_brineShallow = env0liq_brineShallow;


  const env0liq_volcanicSpring = extendBase(
    TEMPLATE, "env0liq-volcanic-spring",
    TEMPLATE.build({
      matGrp: "puddle",
      updateEff: TP_effect._ventSmog({
        size: 30.0,
        rad: 30.0,
        color: Color.white,
        scl: 5.0,
      }),
      updateEffP: 0.0008,
    }),
  );
  exports.env0liq_volcanicSpring = env0liq_volcanicSpring;


  const env0liq_volcanicSpringShallow = extendBase(
    TEMPLATE, "env0liq-volcanic-spring-shallow",
    TEMPLATE.build({
      matGrp: "puddle",
      updateEff: TP_effect._ventSmog({
        size: 30.0,
        rad: 30.0,
        color: Color.white,
        scl: 5.0,
      }),
      updateEffP: 0.0008,
    }),
  );
  exports.env0liq_volcanicSpringShallow = env0liq_volcanicSpringShallow;


  /* river */


  const env0liq_water = extendBase(
    TEMPLATE, "env0liq-water",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );
  exports.env0liq_water = env0liq_water;


  const env0liq_waterShallow = extendBase(
    TEMPLATE, "env0liq-water-shallow",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );
  exports.env0liq_waterShallow = env0liq_waterShallow;


  const env0liq_swampWater = extendBase(
    TEMPLATE, "env0liq-swamp-water",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );
  exports.env0liq_swampWater = env0liq_swampWater;


  const env0liq_swampWaterShallow = extendBase(
    TEMPLATE, "env0liq-swamp-water-shallow",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );
  exports.env0liq_swampWaterShallow = env0liq_swampWaterShallow;


  /* sea */


  const env0liq_seaWater = extendBase(
    TEMPLATE, "env0liq-sea-water",
    TEMPLATE.build({
      matGrp: "sea",
    }),
  );
  exports.env0liq_seaWater = env0liq_seaWater;


  const env0liq_seaWaterShallow = extendBase(
    TEMPLATE, "env0liq-sea-water-shallow",
    TEMPLATE.build({
      matGrp: "sea",
    }),
  );
  exports.env0liq_seaWaterShallow = env0liq_seaWaterShallow;
