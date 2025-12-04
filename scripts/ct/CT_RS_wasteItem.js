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
  exports.item0was_scrapSteel = item0was_scrapSteel;


  const item0was_dust = extendBase(
    TEMPLATE, "item0was-dust",
  );
  exports.item0was_dust = item0was_dust;


  const item0was_gangue = extendBase(
    TEMPLATE, "item0was-gangue",
  );
  exports.item0was_gangue = item0was_gangue;


  const item0was_slag = extendBase(
    TEMPLATE, "item0was-slag",
  );
  exports.item0was_slag = item0was_slag;
