/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_materialFloor = require("lovec/temp/env/ENV_materialFloor");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0flr ------------------------------> */


    /* dirt */


    const env0flr_clay = extendBase(
        ENV_materialFloor, "env0flr-clay",
        ENV_materialFloor.build({
            matGrp: "dirt",
            randRegs: ["clay-clump"],
            randRegDenoms: [4],
        }),
    );


    const env0flr_dirt = extendBase(
        ENV_materialFloor, "env0flr-dirt",
        ENV_materialFloor.build({
            matGrp: "dirt",
            randRegs: ["rock", "dirt-clump", "grass"],
            randRegDenoms: [80, 20, 30],
        }),
    );


    const env0flr_mud = extendBase(
        ENV_materialFloor, "env0flr-mud",
        ENV_materialFloor.build({
            matGrp: "dirt",
            randRegs: ["rock", "mud-clump"],
            randRegDenoms: [80, 20],
        }),
    );


    /* grass */


    const env0flr_grass = extendBase(
        ENV_materialFloor, "env0flr-grass",
        ENV_materialFloor.build({
            matGrp: "grass",
            randRegs: ["rock", "flower", "stick"],
            randRegDenoms: [90, 70, 20],
        }),
    );


    /* gravel */


    const env0flr_rockLavaGrayCracked = extendBase(
        ENV_materialFloor, "env0flr-rock-lava-gray-cracked",
        ENV_materialFloor.build({
            matGrp: "gravel",
        }),
    );


    const env0flr_rockLavaRedCracked = extendBase(
        ENV_materialFloor, "env0flr-rock-lava-red-cracked",
        ENV_materialFloor.build({
            matGrp: "gravel",
        }),
    );


    const env0flr_rockMetamorphicGrayCracked = extendBase(
        ENV_materialFloor, "env0flr-rock-metamorphic-gray-cracked",
        ENV_materialFloor.build({
            matGrp: "gravel",
        }),
    );


    const env0flr_rockPlutonicGrayCracked = extendBase(
        ENV_materialFloor, "env0flr-rock-plutonic-gray-cracked",
        ENV_materialFloor.build({
            matGrp: "gravel",
        }),
    );


    const env0flr_rockBiologicalSedimentaryGrayCracked = extendBase(
        ENV_materialFloor, "env0flr-rock-biological-sedimentary-gray-cracked",
        ENV_materialFloor.build({
            matGrp: "gravel",
        }),
    );


    const env0flr_placer = extendBase(
        ENV_materialFloor, "env0flr-placer",
        ENV_materialFloor.build({
            matGrp: "gravel",
        }),
    );


    const env0flr_placerDark = extendBase(
        ENV_materialFloor, "env0flr-placer-dark",
        ENV_materialFloor.build({
            matGrp: "gravel",
        }),
    );


    const env0flr_placerRed = extendBase(
        ENV_materialFloor, "env0flr-placer-red",
        ENV_materialFloor.build({
            matGrp: "gravel",
            dropHardness: 1,
        }),
    );


    /* rock */


    const env0flr_rockLavaGray = extendBase(
        ENV_materialFloor, "env0flr-rock-lava-gray",
        ENV_materialFloor.build({
            matGrp: "rock",
            randRegs: ["rock"],
        }),
    );


    const env0flr_rockLavaRed = extendBase(
        ENV_materialFloor, "env0flr-rock-lava-red",
        ENV_materialFloor.build({
            matGrp: "rock",
            randRegs: ["rock"],
        }),
    );


    const env0flr_obsidian = extendBase(
        ENV_materialFloor, "env0flr-obsidian",
        ENV_materialFloor.build({
            matGrp: "rock",
            dropHardness: 8,
        }),
    );


    const env0flr_rockMetamorphicGray = extendBase(
        ENV_materialFloor, "env0flr-rock-metamorphic-gray",
        ENV_materialFloor.build({
            matGrp: "rock",
            randRegs: ["rock"],
        }),
    );


    const env0flr_rockPlutonicGray = extendBase(
        ENV_materialFloor, "env0flr-rock-plutonic-gray",
        ENV_materialFloor.build({
            matGrp: "rock",
            randRegs: ["rock"],
        }),
    );


    const env0flr_rockBiologicalSedimentaryGray = extendBase(
        ENV_materialFloor, "env0flr-rock-biological-sedimentary-gray",
        ENV_materialFloor.build({
            matGrp: "rock",
            randRegs: ["rock"],
        }),
    );


    /* sand */


    const env0flr_sand = extendBase(
        ENV_materialFloor, "env0flr-sand",
        ENV_materialFloor.build({
            matGrp: "sand",
            randRegs: ["rock-sand"],
            randRegOffs: [20, 0],
        }),
    );


    const env0flr_sandDark = extendBase(
        ENV_materialFloor, "env0flr-sand-dark",
        ENV_materialFloor.build({
            matGrp: "sand",
            randRegs: ["rock-sand-dark"],
            randRegOffs: [20, 0],
        }),
    );


    const env0flr_sandRed = extendBase(
        ENV_materialFloor, "env0flr-sand-red",
        ENV_materialFloor.build({
            matGrp: "sand",
            randRegs: ["rock-sand-red"],
            randRegOffs: [20, 0],
            dropHardness: 1,
        }),
    );
