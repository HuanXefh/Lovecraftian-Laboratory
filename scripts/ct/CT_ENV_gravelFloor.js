/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_gravelFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0flr_rockLavaRedCracked = extend(Floor, "env0flr-rock-lava-red-cracked", TEMPLATE._std(null, null, null));
  exports.env0flr_rockLavaRedCracked = env0flr_rockLavaRedCracked;


  const env0flr_rockMetamorphicGrayCracked = extend(Floor, "env0flr-rock-metamorphic-gray-cracked", TEMPLATE._std(null, null, null));
  exports.env0flr_rockMetamorphicGrayCracked = env0flr_rockMetamorphicGrayCracked;


  const env0flr_rockPlutonicGrayCracked = extend(Floor, "env0flr-rock-plutonic-gray-cracked", TEMPLATE._std(null, null, null));
  exports.env0flr_rockPlutonicGrayCracked = env0flr_rockPlutonicGrayCracked;


  const env0flr_rockBiologicalSedimentaryGrayCracked = extend(Floor, "env0flr-rock-biological-sedimentary-gray-cracked", TEMPLATE._std(null, null, null));
  exports.env0flr_rockBiologicalSedimentaryGrayCracked = env0flr_rockBiologicalSedimentaryGrayCracked;


  const env0flr_placer = extend(Floor, "env0flr-placer", TEMPLATE._std(null, null, null));
  exports.env0flr_placer = env0flr_placer;


  const env0flr_placerDark = extend(Floor, "env0flr-placer-dark", TEMPLATE._std(null, null, null));
  exports.env0flr_placerDark = env0flr_placerDark;
