/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_rockFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr ----------> */


  const env0flr_rockLavaRed = extend(Floor, "env0flr-rock-lava-red", TEMPLATE._std(["rock"], null, null));
  exports.env0flr_rockLavaRed = env0flr_rockLavaRed;


  const env0flr_rockMetamorphicGray = extend(Floor, "env0flr-rock-metamorphic-gray", TEMPLATE._std(["rock"], null, null));
  exports.env0flr_rockMetamorphicGray = env0flr_rockMetamorphicGray;


  const env0flr_rockPlutonicGray = extend(Floor, "env0flr-rock-plutonic-gray", TEMPLATE._std(["rock"], null, null));
  exports.env0flr_rockPlutonicGray = env0flr_rockPlutonicGray;


  const env0flr_rockBiologicalSedimentaryGray = extend(Floor, "env0flr-rock-biological-sedimentary-gray", TEMPLATE._std(["rock"], null, null));
  exports.env0flr_rockBiologicalSedimentaryGray = env0flr_rockBiologicalSedimentaryGray;
