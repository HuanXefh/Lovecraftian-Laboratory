/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_clinkerItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0int ----------> */


  const item0int0clinker_cement = extendBase(
    TEMPLATE, "item0int0clinker-cement",
    TEMPLATE.build({
      intmdParent: "loveclab-item0buil-cement",
    }),
  );


  const item0int0clinker_refractoryCement = extendBase(
    TEMPLATE, "item0int0clinker-refractory-cement",
    TEMPLATE.build({
      intmdParent: "loveclab-item0buil-refractory-cement",
    }),
  );
