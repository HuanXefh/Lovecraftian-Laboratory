/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_concentrateItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0int ----------> */


  /* aluminum */


  const item0int0conc_bauxite = extend(Item, "item0int0conc-bauxite", TEMPLATE._std("loveclab-item0ore-bauxite", false));
  exports.item0int0conc_bauxite = item0int0conc_bauxite;


  /* copper */


  const item0int0conc_chalcopyrite = extend(Item, "item0int0conc-chalcopyrite", TEMPLATE._std("loveclab-item0ore-chalcopyrite", false));
  exports.item0int0conc_chalcopyrite = item0int0conc_chalcopyrite;


  const item0int0conc_malachite = extend(Item, "item0int0conc-malachite", TEMPLATE._std("loveclab-item0ore-malachite", false));
  exports.item0int0conc_malachite = item0int0conc_malachite;


  const item0int0conc_nativeCopper = extend(Item, "item0int0conc-native-copper", TEMPLATE._std("loveclab-item0ore-native-copper", false));
  exports.item0int0conc_nativeCopper = item0int0conc_nativeCopper;


  /* iron */


  const item0int0conc_hematite = extend(Item, "item0int0conc-hematite", TEMPLATE._std("loveclab-item0ore-hematite", false));
  exports.item0int0conc_hematite = item0int0conc_hematite;


  const item0int0conc_limonite = extend(Item, "item0int0conc-limonite", TEMPLATE._std("loveclab-item0ore-limonite", false));
  exports.item0int0conc_limonite = item0int0conc_limonite;


  const item0int0conc_magnetite = extend(Item, "item0int0conc-magnetite", TEMPLATE._std("loveclab-item0ore-magnetite", false));
  exports.item0int0conc_magnetite = item0int0conc_magnetite;
