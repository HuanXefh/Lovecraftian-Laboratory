/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_deposit = require("lovec/temp/env/ENV_deposit");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0depo ------------------------------> */


    /* aluminum */


    const env0depo_bauxite = extendBase(
        ENV_deposit, "env0depo-bauxite",
    );


    /* barium */


    const env0depo_barite = extendBase(
        ENV_deposit, "env0depo-barite",
    );


    /* carbon */


    const env0depo_rawCoal = extendBase(
        ENV_deposit, "env0depo-raw-coal",
    );


    const env0depo_anthracite = extendBase(
        ENV_deposit, "env0depo-anthracite",
    );


    /* copper */


    const env0depo_malachite = extendBase(
        ENV_deposit, "env0depo-malachite",
        ENV_deposit.build({
            dropHardness: 6,
        }),
    );


    /* fluorine */


    const env0depo_fluorite = extendBase(
        ENV_deposit, "env0depo-fluorite",
    );


    /* iron */


    const env0depo_limonite = extendBase(
        ENV_deposit, "env0depo-limonite",
        ENV_deposit.build({
            dropHardness: 6,
        }),
    );


    /* mercury */


    const env0depo_cinnabar = extendBase(
        ENV_deposit, "env0depo-cinnabar",
        ENV_deposit.build({
            dropHardness: 6,
        }),
    );


    /* phosphorus */


    const env0depo_fluorapatite = extendBase(
        ENV_deposit, "env0depo-fluorapatite",
    );


    /* silicon */


    const env0depo_silicaStone = extendBase(
        ENV_deposit, "env0depo-silica-stone",
    );


    /* sulfur */


    const env0depo_crudeSulfur = extendBase(
        ENV_deposit, "env0depo-crude-sulfur",
    );


    /* rock */


    const env0depo_dolomite = extendBase(
        ENV_deposit, "env0depo-dolomite",
    );


    const env0depo_gypsum = extendBase(
        ENV_deposit, "env0depo-gypsum",
    );


    const env0depo_limestone = extendBase(
        ENV_deposit, "env0depo-limestone",
    );


    const env0depo_pumice = extendBase(
        ENV_deposit, "env0depo-pumice",
    );


    const env0depo_talc = extendBase(
        ENV_deposit, "env0depo-talc",
    );


    /* misc */


    const env0depo_scrapSteel = extendBase(
        ENV_deposit, "env0depo-scrap-steel",
    );
