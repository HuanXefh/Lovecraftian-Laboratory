/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_blendItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0int ----------> */


  const item0int0blend_brickMagnesia = extendBase(
    TEMPLATE, "item0int0blend-brick-magnesia",
    TEMPLATE.build({
      intmdParent: "loveclab-item0buil-brick-magnesia",
    }),
  );
  exports.item0int0blend_brickMagnesia = item0int0blend_brickMagnesia;


  const item0int0blend_cement = extendBase(
    TEMPLATE, "item0int0blend-cement",
    TEMPLATE.build({
      intmdParent: "loveclab-item0buil-cement",
    }),
  );
  exports.item0int0blend_cement = item0int0blend_cement;


  const item0int0blend_refractoryCement = extendBase(
    TEMPLATE, "item0int0blend-refractory-cement",
    TEMPLATE.build({
      intmdParent: "loveclab-item0buil-refractory-cement",
    }),
  );
  exports.item0int0blend_refractoryCement = item0int0blend_refractoryCement;
