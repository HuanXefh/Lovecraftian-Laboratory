/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_intermediateFluid");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- liq0int ----------> */


  const liq0int_desaltedCrudeOil = extendBase(
    TEMPLATE, "liq0int-desalted-crude-oil",
    TEMPLATE.build({
      intmdParent: "loveclab-liq0ore-crude-oil",
      useParentReg: false,
    }),
  );


  const liq0int_evaporatedCrudeOil = extendBase(
    TEMPLATE, "liq0int-evaporated-crude-oil",
    TEMPLATE.build({
      intmdParent: "loveclab-liq0ore-crude-oil",
      tempTags: ["rs-intmd", "rs-dry"],
    }),
  );


  const liq0int_desaltedEvaporatedCrudeOil = extendBase(
    TEMPLATE, "liq0int-desalted-evaporated-crude-oil",
    TEMPLATE.build({
      intmdParent: "loveclab-liq0int-desalted-crude-oil",
      tempTags: ["rs-intmd", "rs-dry"],
    }),
  );


  /* <---------- gas0int ----------> */


  const gas0int_airClean = extendBase(
    TEMPLATE, "gas0int-air-clean",
    TEMPLATE.build({
      intmdParent: "loveclab-gas0misc-air",
      tempTags: ["rs-intmd", "rs-clean"],
    }),
  );


  const gas0int_steamHp = extendBase(
    TEMPLATE, "gas0int-steam-hp",
    TEMPLATE.build({
      intmdParent: "loveclab-gas0misc-steam",
      tempTags: ["rs-intmd", "rs-high0pres"],
    }),
  );


  const gas0int_steamMp = extendBase(
    TEMPLATE, "gas0int-steam-mp",
    TEMPLATE.build({
      intmdParent: "loveclab-gas0misc-steam",
      tempTags: ["rs-intmd", "rs-med0pres"],
    }),
  );


  const gas0int_steamLp = extendBase(
    TEMPLATE, "gas0int-steam-lp",
    TEMPLATE.build({
      intmdParent: "loveclab-gas0misc-steam",
      tempTags: ["rs-intmd", "rs-low0pres"],
    }),
  );
