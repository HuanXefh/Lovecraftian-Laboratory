/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_wasteItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0was ----------> */


  const item0was_scrapSteel = extend(Item, "item0was-scrap-steel", TEMPLATE._std());
  exports.item0was_scrapSteel = item0was_scrapSteel;


  const item0was_dust = extend(Item, "item0was-dust", TEMPLATE._std());
  exports.item0was_dust = item0was_dust;


  const item0was_gangue = extend(Item, "item0was-gangue", TEMPLATE._std());
  exports.item0was_gangue = item0was_gangue;


  const item0was_slag = extend(Item, "item0was-slag", TEMPLATE._std());
  exports.item0was_slag = item0was_slag;
