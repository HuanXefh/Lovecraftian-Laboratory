/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_vent = require("lovec/temp/env/ENV_vent");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0vent (steam) ------------------------------> */


    /* sand */


    const env0vent_steamSand = extendBase(
        ENV_vent, "env0vent-steam-sand",
        ENV_vent.build({
            ventSize: 2,
            ventRs: "loveclab-gas0misc-steam",
        }),
    );


    const env0vent_steamSandDark = extendBase(
        ENV_vent, "env0vent-steam-sand-dark",
        ENV_vent.build({
            ventSize: 2,
            ventRs: "loveclab-gas0misc-steam",
        }),
    );


    const env0vent_steamSandRed = extendBase(
        ENV_vent, "env0vent-steam-sand-red",
        ENV_vent.build({
            ventSize: 2,
            ventRs: "loveclab-gas0misc-steam",
            dropHardness: 1,
        }),
    );


    /* rock */


    const env0vent_steamRockLavaGray = extendBase(
        ENV_vent, "env0vent-steam-rock-lava-gray",
        ENV_vent.build({
            ventSize: 3,
            ventRs: "loveclab-gas0misc-steam",
        }),
    );


    const env0vent_steamRockLavaRed = extendBase(
        ENV_vent, "env0vent-steam-rock-lava-red",
        ENV_vent.build({
            ventSize: 2,
            ventRs: "loveclab-gas0misc-steam",
        }),
    );


    const env0vent_steamRockMetamorphicGray = extendBase(
        ENV_vent, "env0vent-steam-rock-metamorphic-gray",
        ENV_vent.build({
            ventSize: 3,
            ventRs: "loveclab-gas0misc-steam",
        }),
    );


    const env0vent_steamRockPlutonicGray = extendBase(
        ENV_vent, "env0vent-steam-rock-plutonic-gray",
        ENV_vent.build({
            ventSize: 3,
            ventRs: "loveclab-gas0misc-steam",
        }),
    );


    const env0vent_steamRockBiologicalSedimentaryGray = extendBase(
        ENV_vent, "env0vent-steam-rock-biological-sedimentary-gray",
        ENV_vent.build({
            ventSize: 2,
            ventRs: "loveclab-gas0misc-steam",
        }),
    );


    /* <------------------------------ env0vent (fire) ------------------------------> */


    const env0vent_fireRockLavaGray = extendBase(
        ENV_vent, "env0vent-fire-rock-lava-gray",
        ENV_vent.build({
            ventSize: 3,
            ventRs: "fire",
        }),
    );


    const env0vent_fireRockLavaRed = extendBase(
        ENV_vent, "env0vent-fire-rock-lava-red",
        ENV_vent.build({
            ventSize: 2,
            ventRs: "fire",
        }),
    );


    const env0vent_fireRockMetamorphicGray = extendBase(
        ENV_vent, "env0vent-fire-rock-metamorphic-gray",
        ENV_vent.build({
            ventSize: 3,
            ventRs: "fire",
        }),
    );


    const env0vent_fireRockPlutonicGray = extendBase(
        ENV_vent, "env0vent-fire-rock-plutonic-gray",
        ENV_vent.build({
            ventSize: 3,
            ventRs: "fire",
        }),
    );


    const env0vent_fireRockBiologicalSedimentaryGray = extendBase(
        ENV_vent, "env0vent-fire-rock-biological-sedimentary-gray",
        ENV_vent.build({
            ventSize: 2,
            ventRs: "fire",
        }),
    );
