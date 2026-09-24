/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_crudeItem = require("lovec/temp/rs/RS_crudeItem");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ item0int ------------------------------> */


    const item0int0crd_activatedCarbon = extendBase(
        RS_crudeItem, "item0int0crd-activated-carbon",
        RS_crudeItem.build({
            intmdParent: "loveclab-item0chem-activated-carbon",
        }),
    );
