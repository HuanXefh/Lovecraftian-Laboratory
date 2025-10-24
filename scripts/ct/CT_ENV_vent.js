/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_vent");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0vent (steam) ----------> */


  /* sand */


  const env0vent_steamSand = extend(SteamVent, "env0vent-steam-sand", TEMPLATE._std(2, "loveclab-gas0misc-steam"));
  exports.env0vent_steamSand = env0vent_steamSand;


  const env0vent_steamSandDark = extend(SteamVent, "env0vent-steam-sand-dark", TEMPLATE._std(2, "loveclab-gas0misc-steam"));
  exports.env0vent_steamSandDark = env0vent_steamSandDark;


  /* rock */


  const env0vent_steamRockLavaRed = extend(SteamVent, "env0vent-steam-rock-lava-red", TEMPLATE._std(2, "loveclab-gas0misc-steam"));
  exports.env0vent_steamRockLavaRed = env0vent_steamRockLavaRed;


  const env0vent_steamRockMetamorphicGray = extend(SteamVent, "env0vent-steam-rock-metamorphic-gray", TEMPLATE._std(3, "loveclab-gas0misc-steam"));
  exports.env0vent_steamRockMetamorphicGray = env0vent_steamRockMetamorphicGray;


  const env0vent_steamRockPlutonicGray = extend(SteamVent, "env0vent-steam-rock-plutonic-gray", TEMPLATE._std(3, "loveclab-gas0misc-steam"));
  exports.env0vent_steamRockPlutonicGray = env0vent_steamRockPlutonicGray;


  const env0vent_steamRockBiologicalSedimentaryGray = extend(SteamVent, "env0vent-steam-rock-biological-sedimentary-gray", TEMPLATE._std(2, "loveclab-gas0misc-steam"));
  exports.env0vent_steamRockBiologicalSedimentaryGray = env0vent_steamRockBiologicalSedimentaryGray;


  /* <---------- env0vent (fire) ----------> */


  const env0vent_fireRockLavaRed = extend(SteamVent, "env0vent-fire-rock-lava-red", TEMPLATE._std(2, "fire"));
  exports.env0vent_fireRockLavaRed = env0vent_fireRockLavaRed;


  const env0vent_fireRockMetamorphicGray = extend(SteamVent, "env0vent-fire-rock-metamorphic-gray", TEMPLATE._std(3, "fire"));
  exports.env0vent_fireRockMetamorphicGray = env0vent_fireRockMetamorphicGray;


  const env0vent_fireRockPlutonicGray = extend(SteamVent, "env0vent-fire-rock-plutonic-gray", TEMPLATE._std(3, "fire"));
  exports.env0vent_fireRockPlutonicGray = env0vent_fireRockPlutonicGray;


  const env0vent_fireRockBiologicalSedimentaryGray = extend(SteamVent, "env0vent-fire-rock-biological-sedimentary-gray", TEMPLATE._std(2, "fire"));
  exports.env0vent_fireRockBiologicalSedimentaryGray = env0vent_fireRockBiologicalSedimentaryGray;
