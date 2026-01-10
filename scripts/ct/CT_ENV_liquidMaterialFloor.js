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


  /* puddle */


  const env0liq_brine = extendBase(
    TEMPLATE, "env0liq-brine",
    TEMPLATE.build({
      matGrp: "puddle",
    }),
  );


  const env0liq_brineShallow = extendBase(
    TEMPLATE, "env0liq-brine-shallow",
    TEMPLATE.build({
      matGrp: "puddle",
    }),
  );


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


  /* river */


  const env0liq_water = extendBase(
    TEMPLATE, "env0liq-water",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );


  const env0liq_waterShallow = extendBase(
    TEMPLATE, "env0liq-water-shallow",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );


  const env0liq_swampWater = extendBase(
    TEMPLATE, "env0liq-swamp-water",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );


  const env0liq_swampWaterShallow = extendBase(
    TEMPLATE, "env0liq-swamp-water-shallow",
    TEMPLATE.build({
      matGrp: "river",
    }),
  );


  /* sea */


  const env0liq_seaWater = extendBase(
    TEMPLATE, "env0liq-sea-water",
    TEMPLATE.build({
      matGrp: "sea",
    }),
  );


  const env0liq_seaWaterShallow = extendBase(
    TEMPLATE, "env0liq-sea-water-shallow",
    TEMPLATE.build({
      matGrp: "sea",
    }),
  );
