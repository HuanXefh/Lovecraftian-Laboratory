/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_wasteItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0was ----------> */


  const item0was_dust = extendBase(
    TEMPLATE, "item0was-dust",
  );


  const item0was_dregs = extendBase(
    TEMPLATE, "item0was-dregs",
  );


  const item0was_gangue = extendBase(
    TEMPLATE, "item0was-gangue",
  );


  const item0was_slag = extendBase(
    TEMPLATE, "item0was-slag",
  );


  /* not really waste */


  const item0was_scrapSteel = extendBase(
    TEMPLATE, "item0was-scrap-steel",
  );


  /* process */


  const item0was_pyriteCinder = extendBase(
    TEMPLATE, "item0was-pyrite-cinder",
  );
