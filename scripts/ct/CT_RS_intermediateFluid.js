/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_intermediateFluid = require("lovec/temp/rs/RS_intermediateFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ llq0int ------------------------------> */


    const liq0int_purifiedBrine = extendBase(
        RS_intermediateFluid, "liq0int-purified-brine",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-liq0ore-brine",
            tempTags: ["ct-intmd", "rs-pure"],
        }),
    );


    const liq0int_desaltedCrudeOil = extendBase(
        RS_intermediateFluid, "liq0int-desalted-crude-oil",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-liq0ore-crude-oil",
            useParentReg: false,
        }),
    );


    const liq0int_evaporatedCrudeOil = extendBase(
        RS_intermediateFluid, "liq0int-evaporated-crude-oil",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-liq0ore-crude-oil",
            tempTags: ["ct-intmd", "rs-dry"],
        }),
    );


    const liq0int_desaltedEvaporatedCrudeOil = extendBase(
        RS_intermediateFluid, "liq0int-desalted-evaporated-crude-oil",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-liq0int-desalted-crude-oil",
            tempTags: ["ct-intmd", "rs-dry"],
        }),
    );


    /* <------------------------------ gas0int ------------------------------> */


    const gas0int_airClean = extendBase(
        RS_intermediateFluid, "gas0int-air-clean",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-gas0misc-air",
            tempTags: ["ct-intmd", "rs-clean"],
        }),
    );


    const gas0int_airDry = extendBase(
        RS_intermediateFluid, "gas0int-air-dry",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-gas0misc-air",
            tempTags: ["ct-intmd", "rs-dry"],
        }),
    );


    const gas0int_airSuperClean = extendBase(
        RS_intermediateFluid, "gas0int-air-super-clean",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-gas0misc-air",
            tempTags: ["ct-intmd", "rs-pure"],
        }),
    );


    const gas0int_superheatedSteam = extendBase(
        RS_intermediateFluid, "gas0int-superheated-steam",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-gas0misc-steam",
            tempTags: ["ct-intmd", "rs-hot"],
        }),
    );


    const gas0int_steamHp = extendBase(
        RS_intermediateFluid, "gas0int-steam-hp",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-gas0misc-steam",
            tempTags: ["ct-intmd", "rs-high0pres"],
        }),
    );


    const gas0int_steamMp = extendBase(
        RS_intermediateFluid, "gas0int-steam-mp",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-gas0misc-steam",
            tempTags: ["ct-intmd", "rs-med0pres"],
        }),
    );


    const gas0int_steamLp = extendBase(
        RS_intermediateFluid, "gas0int-steam-lp",
        RS_intermediateFluid.build({
            intmdParent: "loveclab-gas0misc-steam",
            tempTags: ["ct-intmd", "rs-low0pres"],
        }),
    );
