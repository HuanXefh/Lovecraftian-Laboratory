/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_wasteItem = require("lovec/temp/rs/RS_wasteItem");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ item0was ------------------------------> */


    const item0was_dust = extendBase(
        RS_wasteItem, "item0was-dust",
    );


    const item0was_dregs = extendBase(
        RS_wasteItem, "item0was-dregs",
    );


    const item0was_gangue = extendBase(
        RS_wasteItem, "item0was-gangue",
    );


    const item0was_slag = extendBase(
        RS_wasteItem, "item0was-slag",
    );


    /* not really waste */


    const item0was_scrapSteel = extendBase(
        RS_wasteItem, "item0was-scrap-steel",
    );


    /* process waste */


    const item0was_pyriteCinder = extendBase(
        RS_wasteItem, "item0was-pyrite-cinder",
    );
