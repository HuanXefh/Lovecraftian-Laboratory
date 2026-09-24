/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_liquidMaterialFloor = require("lovec/temp/env/ENV_liquidMaterialFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0flr ------------------------------> */


    /* lava */


    const env0liq_lava = extendBase(
        ENV_liquidMaterialFloor, "env0liq-lava",
        ENV_liquidMaterialFloor.build({
            matGrp: "lava",
        }),
    );


    /* puddle */


    const env0liq_brine = extendBase(
        ENV_liquidMaterialFloor, "env0liq-brine",
        ENV_liquidMaterialFloor.build({
            matGrp: "puddle",
        }),
    );


    const env0liq_brineShallow = extendBase(
        ENV_liquidMaterialFloor, "env0liq-brine-shallow",
        ENV_liquidMaterialFloor.build({
            matGrp: "puddle",
            shallow: true,
        }),
    );


    const env0liq_volcanicSpring = extendBase(
        ENV_liquidMaterialFloor, "env0liq-volcanic-spring",
        ENV_liquidMaterialFloor.build({
            matGrp: "puddle",
            updateEff: TP_effect.smogVent({
                size: 30.0,
                rad: 30.0,
                color: Color.white,
                scl: 2.0,
            }),
            updateEffP: 0.002,
        }),
    );


    const env0liq_volcanicSpringShallow = extendBase(
        ENV_liquidMaterialFloor, "env0liq-volcanic-spring-shallow",
        ENV_liquidMaterialFloor.build({
            matGrp: "puddle",
            updateEff: TP_effect.smogVent({
                size: 30.0,
                rad: 30.0,
                color: Color.white,
                scl: 2.0,
            }),
            updateEffP: 0.002,
            shallow: true,
        }),
    );


    /* river */


    const env0liq_water = extendBase(
        ENV_liquidMaterialFloor, "env0liq-water",
        ENV_liquidMaterialFloor.build({
            matGrp: "river",
        }),
    );


    const env0liq_waterShallow = extendBase(
        ENV_liquidMaterialFloor, "env0liq-water-shallow",
        ENV_liquidMaterialFloor.build({
            matGrp: "river",
            shallow: true,
        }),
    );


    const env0liq_swampWater = extendBase(
        ENV_liquidMaterialFloor, "env0liq-swamp-water",
        ENV_liquidMaterialFloor.build({
            matGrp: "river",
        }),
    );


    const env0liq_swampWaterShallow = extendBase(
        ENV_liquidMaterialFloor, "env0liq-swamp-water-shallow",
        ENV_liquidMaterialFloor.build({
            matGrp: "river",
            shallow: true,
        }),
    );


    /* sea */


    const env0liq_seaWater = extendBase(
        ENV_liquidMaterialFloor, "env0liq-sea-water",
        ENV_liquidMaterialFloor.build({
            matGrp: "sea",
        }),
    );


    const env0liq_seaWaterShallow = extendBase(
        ENV_liquidMaterialFloor, "env0liq-sea-water-shallow",
        ENV_liquidMaterialFloor.build({
            matGrp: "sea",
            shallow: true,
        }),
    );
