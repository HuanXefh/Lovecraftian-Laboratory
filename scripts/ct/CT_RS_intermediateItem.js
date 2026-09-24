/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_intermediateItem = require("lovec/temp/rs/RS_intermediateItem");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ item0int ------------------------------> */


    const item0int_rawRubber = extendBase(
        RS_intermediateItem, "item0int-raw-rubber",
    );


    /* inactivated */


    const item0int_activatedCarbonInactivated = extendBase(
        RS_intermediateItem, "item0int-activated-carbon-inactivated",
        RS_intermediateItem.build({
            intmdParent: "loveclab-item0chem-activated-carbon",
            tempTags: ["ct-intmd", "rs-inact"],
        })
    );


    /* dried */


    const item0int_sawdustDried = extendBase(
        RS_intermediateItem, "item0int-sawdust-dried",
        RS_intermediateItem.build({
            intmdParent: "loveclab-item0bio-sawdust",
            tempTags: ["ct-intmd", "rs-dry"],
        })
    );


    const item0int_biomassPowderDried = extendBase(
        RS_intermediateItem, "item0int-biomass-powder-dried",
        RS_intermediateItem.build({
            intmdParent: "loveclab-item0bio-biomass-powder",
            tempTags: ["ct-intmd", "rs-dry"],
        })
    );


    const item0int_mossDried = extendBase(
        RS_intermediateItem, "item0int-moss-dried",
        RS_intermediateItem.build({
            intmdParent: "loveclab-item0bio-moss",
            tempTags: ["ct-intmd", "rs-dry"],
        })
    );
