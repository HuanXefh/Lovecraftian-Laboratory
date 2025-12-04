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
  exports.item0int0conc_bauxite = item0int0conc_bauxite;


  /* copper */


  const item0int0conc_chalcopyrite = extendBase(
    TEMPLATE, "item0int0conc-chalcopyrite",
    TEMPLATE.build({
    intmdParent: "loveclab-item0ore-chalcopyrite",
  }));
  exports.item0int0conc_chalcopyrite = item0int0conc_chalcopyrite;


  const item0int0conc_malachite = extendBase(
    TEMPLATE, "item0int0conc-malachite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-malachite",
    }),
  );
  exports.item0int0conc_malachite = item0int0conc_malachite;


  const item0int0conc_nativeCopper = extendBase(
    TEMPLATE, "item0int0conc-native-copper",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-native-copper",
    }),
  );
  exports.item0int0conc_nativeCopper = item0int0conc_nativeCopper;


  /* iron */


  const item0int0conc_hematite = extendBase(
    TEMPLATE, "item0int0conc-hematite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-hematite",
    }),
  );
  exports.item0int0conc_hematite = item0int0conc_hematite;


  const item0int0conc_limonite = extendBase(
    TEMPLATE, "item0int0conc-limonite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-limonite",
    }),
  );
  exports.item0int0conc_limonite = item0int0conc_limonite;


  const item0int0conc_magnetite = extendBase(
    TEMPLATE, "item0int0conc-magnetite",
    TEMPLATE.build({
      intmdParent: "loveclab-item0ore-magnetite",
    }),
  );
  exports.item0int0conc_magnetite = item0int0conc_magnetite;
