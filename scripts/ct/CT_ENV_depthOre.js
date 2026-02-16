/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_depthOre");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0ore (level 0) ----------> */


  /* copper */


  const env0ore0dpore_chalcopyrite = extendBase(
    TEMPLATE, "env0ore0dpore-chalcopyrite",
  );


  const env0ore0dpore_nativeCopper = extendBase(
    TEMPLATE, "env0ore0dpore-native-copper",
  );


  /* lead */


  const env0ore0dpore_galena = extendBase(
    TEMPLATE, "env0ore0dpore-galena",
  );


  /* zinc */


  const env0ore0dpore_sphalerite = extendBase(
    TEMPLATE, "env0ore0dpore-sphalerite",
  );


  /* <---------- env0ore (level 1) ----------> */


  /* carbon */


  const env0ore0dpore0lvl1_rawCoal = extendBase(
    TEMPLATE, "env0ore0dpore0lvl1-raw-coal",
    TEMPLATE.build({
      depthLvl: 1,
    }),
  );


  /* iron */


  const env0ore0dpore0lvl1_hematite = extendBase(
    TEMPLATE, "env0ore0dpore0lvl1-hematite",
    TEMPLATE.build({
      depthLvl: 1,
    }),
  );


  const env0ore0dpore0lvl1_magnetite = extendBase(
    TEMPLATE, "env0ore0dpore0lvl1-magnetite",
    TEMPLATE.build({
      depthLvl: 1,
    }),
  );
