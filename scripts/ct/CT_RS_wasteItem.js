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


  const item0was_scrapSteel = extendBase(
    TEMPLATE, "item0was-scrap-steel",
  );


  const item0was_dust = extendBase(
    TEMPLATE, "item0was-dust",
  );


  const item0was_gangue = extendBase(
    TEMPLATE, "item0was-gangue",
  );


  const item0was_slag = extendBase(
    TEMPLATE, "item0was-slag",
  );
