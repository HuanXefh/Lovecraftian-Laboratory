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
  exports.env0flr_clay = env0flr_clay;


  const env0flr_dirt = extendBase(
    TEMPLATE, "env0flr-dirt",
    TEMPLATE.build({
      matGrp: "dirt",
      randRegs: ["rock"],
    }),
  );
  exports.env0flr_dirt = env0flr_dirt;


  const env0flr_mud = extendBase(
    TEMPLATE, "env0flr-mud",
    TEMPLATE.build({
      matGrp: "dirt",
      randRegs: ["rock"],
    }),
  );
  exports.env0flr_mud = env0flr_mud;


  /* grass */


  const env0flr_grass = extendBase(
    TEMPLATE, "env0flr-grass",
    TEMPLATE.build({
      matGrp: "grass",
    }),
  );
  exports.env0flr_grass = env0flr_grass;


  /* gravel */


  const env0flr_rockLavaRedCracked = extendBase(
    TEMPLATE, "env0flr-rock-lava-red-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );
  exports.env0flr_rockLavaRedCracked = env0flr_rockLavaRedCracked;


  const env0flr_rockMetamorphicGrayCracked = extendBase(
    TEMPLATE, "env0flr-rock-metamorphic-gray-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );
  exports.env0flr_rockMetamorphicGrayCracked = env0flr_rockMetamorphicGrayCracked;


  const env0flr_rockPlutonicGrayCracked = extendBase(
    TEMPLATE, "env0flr-rock-plutonic-gray-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );
  exports.env0flr_rockPlutonicGrayCracked = env0flr_rockPlutonicGrayCracked;


  const env0flr_rockBiologicalSedimentaryGrayCracked = extendBase(
    TEMPLATE, "env0flr-rock-biological-sedimentary-gray-cracked",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );
  exports.env0flr_rockBiologicalSedimentaryGrayCracked = env0flr_rockBiologicalSedimentaryGrayCracked;


  const env0flr_placer = extendBase(
    TEMPLATE, "env0flr-placer",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );
  exports.env0flr_placer = env0flr_placer;


  const env0flr_placerDark = extendBase(
    TEMPLATE, "env0flr-placer-dark",
    TEMPLATE.build({
      matGrp: "gravel",
    }),
  );
  exports.env0flr_placerDark = env0flr_placerDark;


  /* rock */


  const env0flr_rockLavaRed = extendBase(
    TEMPLATE, "env0flr-rock-lava-red",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );
  exports.env0flr_rockLavaRed = env0flr_rockLavaRed;


  const env0flr_rockMetamorphicGray = extendBase(
    TEMPLATE, "env0flr-rock-metamorphic-gray",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );
  exports.env0flr_rockMetamorphicGray = env0flr_rockMetamorphicGray;


  const env0flr_rockPlutonicGray = extendBase(
    TEMPLATE, "env0flr-rock-plutonic-gray",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );
  exports.env0flr_rockPlutonicGray = env0flr_rockPlutonicGray;


  const env0flr_rockBiologicalSedimentaryGray = extendBase(
    TEMPLATE, "env0flr-rock-biological-sedimentary-gray",
    TEMPLATE.build({
      matGrp: "rock",
      randRegs: ["rock"],
    }),
  );
  exports.env0flr_rockBiologicalSedimentaryGray = env0flr_rockBiologicalSedimentaryGray;


  /* sand */


  const env0flr_sand = extendBase(
    TEMPLATE, "env0flr-sand",
    TEMPLATE.build({
      matGrp: "sand",
      randRegs: ["rock-sand"],
      randRegOffs: [20, 0],
    }),
  );
  exports.env0flr_sand = env0flr_sand;


  const env0flr_sandDark = extendBase(
    TEMPLATE, "env0flr-sand-dark",
    TEMPLATE.build({
      matGrp: "sand",
      randRegs: ["rock-sand-dark"],
      randRegOffs: [20, 0],
    }),
  );
  exports.env0flr_sandDark = env0flr_sandDark;
