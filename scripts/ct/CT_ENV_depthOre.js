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
