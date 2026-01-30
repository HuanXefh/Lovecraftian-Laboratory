/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_intermediateItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0int ----------> */


  const item0int_sawdustDried = extendBase(
    TEMPLATE, "item0int-sawdust-dried",
    TEMPLATE.build({
      intmdParent: "loveclab-item0bio-sawdust",
      tempTags: ["rs-intmd", "rs-dry"],
    })
  );


  const item0int_rawRubber = extendBase(
    TEMPLATE, "item0int-raw-rubber",
  );
