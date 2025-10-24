/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_clinkerItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0int ----------> */


  const item0int0clinker_cement = extend(Item, "item0int0clinker-cement", TEMPLATE._std("loveclab-item0buil-cement", false));
  exports.item0int0clinker_cement = item0int0clinker_cement;


  const item0int0clinker_refractoryCement = extend(Item, "item0int0clinker-refractory-cement", TEMPLATE._std("loveclab-item0buil-refractory-cement", false));
  exports.item0int0clinker_refractoryCement = item0int0clinker_refractoryCement;
