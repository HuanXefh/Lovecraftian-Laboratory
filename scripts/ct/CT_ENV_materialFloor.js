/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_materialFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  /* dirt */


  const env0flr_clay = extendBase(
    TEMPLATE, "env0flr-clay",
    TEMPLATE.build({
      matGrp: "dirt",
    }),
  );


  const env0flr_dirt = extendBase(
    TEMPLATE, "env0flr-dirt",
    TEMPLATE.build({
      matGrp: "dirt",
      randRegs: ["rock"],
    }),
  );


  const env0flr_mud = extendBase(
    TEMPLATE, "env0flr-mud",
    TEMPLATE.build({
      matGrp: "dirt",
      randRegs: ["rock"],
    }),
  );


  /* grass */


  const env0flr_grass = extendBase(
    TEMPLATE, "env0flr-grass",
    TEMPLATE.build({
      matGrp: "grass",
    }),
  );


  /* gravel */


  const env0flr_rockLavaGrayCracked = extendBase(
    TEMPLATE, "env0flr-rock-lava-gray-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  const env0flr_rockLavaRedCracked = extendBase(
    TEMPLATE, "env0flr-rock-lava-red-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  const env0flr_rockMetamorphicGrayCracked = extendBase(
    TEMPLATE, "env0flr-rock-metamorphic-gray-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  const env0flr_rockPlutonicGrayCracked = extendBase(
    TEMPLATE, "env0flr-rock-plutonic-gray-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  const env0flr_rockBiologicalSedimentaryGrayCracked = extendBase(
    TEMPLATE, "env0flr-rock-biological-sedimentary-gray-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  const env0flr_placer = extendBase(
    TEMPLATE, "env0flr-placer",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  const env0flr_placerDark = extendBase(
    TEMPLATE, "env0flr-placer-dark",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  const env0flr_placerRed = extendBase(
    TEMPLATE, "env0flr-placer-red",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );


  /* rock */


  const env0flr_rockLavaGray = extendBase(
    TEMPLATE, "env0flr-rock-lava-gray",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );


  const env0flr_rockLavaRed = extendBase(
    TEMPLATE, "env0flr-rock-lava-red",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );


  const env0flr_rockMetamorphicGray = extendBase(
    TEMPLATE, "env0flr-rock-metamorphic-gray",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );


  const env0flr_rockPlutonicGray = extendBase(
    TEMPLATE, "env0flr-rock-plutonic-gray",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );


  const env0flr_rockBiologicalSedimentaryGray = extendBase(
    TEMPLATE, "env0flr-rock-biological-sedimentary-gray",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );


  /* sand */


  const env0flr_sand = extendBase(
    TEMPLATE, "env0flr-sand",
    TEMPLATE.build({
      matGrp: "sand",
      randRegs: ["rock-sand"],
      randRegOffs: [20, 0],
    }),
  );


  const env0flr_sandDark = extendBase(
    TEMPLATE, "env0flr-sand-dark",
    TEMPLATE.build({
      matGrp: "sand",
      randRegs: ["rock-sand-dark"],
      randRegOffs: [20, 0],
    }),
  );


  const env0flr_sandRed = extendBase(
    TEMPLATE, "env0flr-sand-red",
    TEMPLATE.build({
      matGrp: "sand",
      randRegs: ["rock-sand-red"],
      randRegOffs: [20, 0],
      dropHardness: 1,
    }),
  );
