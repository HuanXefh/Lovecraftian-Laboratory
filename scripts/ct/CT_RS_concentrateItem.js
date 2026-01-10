/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_concentrateItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0int ----------> */


  /* aluminum */


  const item0int0conc_bauxite = extendBase(
    TEMPLATE, "item0int0conc-bauxite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-bauxite",
    }),
  );


  /* copper */


  const item0int0conc_chalcopyrite = extendBase(
    TEMPLATE, "item0int0conc-chalcopyrite",
    TEMPLATE.build({
    intmdParent: "loveclab-item0ore-chalcopyrite",
  }));


  const item0int0conc_malachite = extendBase(
    TEMPLATE, "item0int0conc-malachite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-malachite",
    }),
  );


  const item0int0conc_nativeCopper = extendBase(
    TEMPLATE, "item0int0conc-native-copper",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-native-copper",
    }),
  );


  /* iron */


  const item0int0conc_hematite = extendBase(
    TEMPLATE, "item0int0conc-hematite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-hematite",
    }),
  );


  const item0int0conc_limonite = extendBase(
    TEMPLATE, "item0int0conc-limonite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-limonite",
    }),
  );


  const item0int0conc_magnetite = extendBase(
    TEMPLATE, "item0int0conc-magnetite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-magnetite",
    }),
  );
