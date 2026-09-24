/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_clinkerItem = require("lovec/temp/rs/RS_clinkerItem");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ item0int ------------------------------> */


    const item0int0clinker_cement = extendBase(
        RS_clinkerItem, "item0int0clinker-cement",
        RS_clinkerItem.build({
            intmdParent: "loveclab-item0buil-cement",
        }),
    );


    const item0int0clinker_refractoryCement = extendBase(
        RS_clinkerItem, "item0int0clinker-refractory-cement",
        RS_clinkerItem.build({
            intmdParent: "loveclab-item0buil-refractory-cement",
        }),
    );
