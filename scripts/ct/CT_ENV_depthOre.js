/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_depthOre = require("lovec/temp/env/ENV_depthOre");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0ore0dpore (level 0) ------------------------------> */


    /* copper */


    const env0ore0dpore_chalcopyrite = extendBase(
        ENV_depthOre, "env0ore0dpore-chalcopyrite",
    );


    const env0ore0dpore_nativeCopper = extendBase(
        ENV_depthOre, "env0ore0dpore-native-copper",
    );


    /* lead */


    const env0ore0dpore_galena = extendBase(
        ENV_depthOre, "env0ore0dpore-galena",
    );


    /* zinc */


    const env0ore0dpore_sphalerite = extendBase(
        ENV_depthOre, "env0ore0dpore-sphalerite",
    );


    /* zirconium */


    const env0ore0dpore_zircon = extendBase(
        ENV_depthOre, "env0ore0dpore-zircon",
    );


    /* misc */


    const env0ore0dpore_clay = extendBase(
        ENV_depthOre, "env0ore0dpore-clay",
    );


    /* <------------------------------ env0ore0dpore (level1) ------------------------------> */


    /* carbon */


    const env0ore0dpore0lvl1_rawCoal = extendBase(
        ENV_depthOre, "env0ore0dpore0lvl1-raw-coal",
        ENV_depthOre.build({
            depthLvl: 1,
        }),
    );


    /* iron */


    const env0ore0dpore0lvl1_hematite = extendBase(
        ENV_depthOre, "env0ore0dpore0lvl1-hematite",
        ENV_depthOre.build({
            depthLvl: 1,
        }),
    );


    const env0ore0dpore0lvl1_magnetite = extendBase(
        ENV_depthOre, "env0ore0dpore0lvl1-magnetite",
        ENV_depthOre.build({
            depthLvl: 1,
        }),
    );
