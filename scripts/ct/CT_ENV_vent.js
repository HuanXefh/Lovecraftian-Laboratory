/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_vent");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0vent (steam) ----------> */


  /* sand */


  const env0vent_steamSand = extendBase(
    TEMPLATE, "env0vent-steam-sand",
    TEMPLATE.build({
      ventSize: 2,
      ventRs: "loveclab-gas0misc-steam",
    }),
  );
  exports.env0vent_steamSand = env0vent_steamSand;


  const env0vent_steamSandDark = extendBase(
    TEMPLATE, "env0vent-steam-sand-dark",
    TEMPLATE.build({
      ventSize: 2,
      ventRs: "loveclab-gas0misc-steam",
    }),
  );
  exports.env0vent_steamSandDark = env0vent_steamSandDark;


  /* rock */


  const env0vent_steamRockLavaRed = extendBase(
    TEMPLATE, "env0vent-steam-rock-lava-red",
    TEMPLATE.build({
      ventSize: 2,
      ventRs: "loveclab-gas0misc-steam",
    }),
  );
  exports.env0vent_steamRockLavaRed = env0vent_steamRockLavaRed;


  const env0vent_steamRockMetamorphicGray = extendBase(
    TEMPLATE, "env0vent-steam-rock-metamorphic-gray",
    TEMPLATE.build({
      ventSize: 3,
      ventRs: "loveclab-gas0misc-steam",
    }),
  );
  exports.env0vent_steamRockMetamorphicGray = env0vent_steamRockMetamorphicGray;


  const env0vent_steamRockPlutonicGray = extendBase(
    TEMPLATE, "env0vent-steam-rock-plutonic-gray",
    TEMPLATE.build({
      ventSize: 3,
      ventRs: "loveclab-gas0misc-steam",
    }),
  );
  exports.env0vent_steamRockPlutonicGray = env0vent_steamRockPlutonicGray;


  const env0vent_steamRockBiologicalSedimentaryGray = extendBase(
    TEMPLATE, "env0vent-steam-rock-biological-sedimentary-gray",
    TEMPLATE.build({
      ventSize: 2,
      ventRs: "loveclab-gas0misc-steam",
    }),
  );
  exports.env0vent_steamRockBiologicalSedimentaryGray = env0vent_steamRockBiologicalSedimentaryGray;


  /* <---------- env0vent (fire) ----------> */


  const env0vent_fireRockLavaRed = extendBase(
    TEMPLATE, "env0vent-fire-rock-lava-red",
    TEMPLATE.build({
      ventSize: 2,
      ventRs: "fire",
    }),
  );
  exports.env0vent_fireRockLavaRed = env0vent_fireRockLavaRed;


  const env0vent_fireRockMetamorphicGray = extendBase(
    TEMPLATE, "env0vent-fire-rock-metamorphic-gray",
    TEMPLATE.build({
      ventSize: 3,
      ventRs: "fire",
    }),
  );
  exports.env0vent_fireRockMetamorphicGray = env0vent_fireRockMetamorphicGray;


  const env0vent_fireRockPlutonicGray = extendBase(
    TEMPLATE, "env0vent-fire-rock-plutonic-gray",
    TEMPLATE.build({
      ventSize: 3,
      ventRs: "fire",
    }),
  );
  exports.env0vent_fireRockPlutonicGray = env0vent_fireRockPlutonicGray;


  const env0vent_fireRockBiologicalSedimentaryGray = extendBase(
    TEMPLATE, "env0vent-fire-rock-biological-sedimentary-gray",
    TEMPLATE.build({
      ventSize: 2,
      ventRs: "fire",
    }),
  );
  exports.env0vent_fireRockBiologicalSedimentaryGray = env0vent_fireRockBiologicalSedimentaryGray;
