/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_deposit");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0depo ----------> */


  /* carbon */


  const env0depo_rawCoal = extendBase(
    TEMPLATE, "env0depo-raw-coal",
  );


  const env0depo_anthracite = extendBase(
    TEMPLATE, "env0depo-anthracite",
  );


  /* aluminum */


  const env0depo_bauxite = extendBase(
    TEMPLATE, "env0depo-bauxite",
  );


  /* barium */


  const env0depo_barite = extendBase(
    TEMPLATE, "env0depo-barite",
  );


  /* silicon */


  const env0depo_silicaStone = extendBase(
    TEMPLATE, "env0depo-silica-stone",
  );


  /* sulfur */


  const env0depo_crudeSulfur = extendBase(
    TEMPLATE, "env0depo-crude-sulfur",
  );


  /* rock */


  const env0depo_dolomite = extendBase(
    TEMPLATE, "env0depo-dolomite",
  );


  const env0depo_gypsum = extendBase(
    TEMPLATE, "env0depo-gypsum",
  );


  const env0depo_limestone = extendBase(
    TEMPLATE, "env0depo-limestone",
  );


  const env0depo_pumice = extendBase(
    TEMPLATE, "env0depo-pumice",
  );


  /* misc */


  const env0depo_scrapSteel = extendBase(
    TEMPLATE, "env0depo-scrap-steel",
  );
