/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_blendItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0int ----------> */


  const item0int0blend_brickMagnesia = extend(Item, "item0int0blend-brick-magnesia", TEMPLATE._std("loveclab-item0buil-brick-magnesia", false));
  exports.item0int0blend_brickMagnesia = item0int0blend_brickMagnesia;


  const item0int0blend_cement = extend(Item, "item0int0blend-cement", TEMPLATE._std("loveclab-item0buil-cement", false));
  exports.item0int0blend_cement = item0int0blend_cement;


  const item0int0blend_refractoryCement = extend(Item, "item0int0blend-refractory-cement", TEMPLATE._std("loveclab-item0buil-refractory-cement", false));
  exports.item0int0blend_refractoryCement = item0int0blend_refractoryCement;
