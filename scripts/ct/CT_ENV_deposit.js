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
  exports.env0depo_rawCoal = env0depo_rawCoal;


  const env0depo_anthracite = extendBase(
    TEMPLATE, "env0depo-anthracite",
  );
  exports.env0depo_anthracite = env0depo_anthracite;


  /* aluminum */


  const env0depo_bauxite = extendBase(
    TEMPLATE, "env0depo-bauxite",
  );
  exports.env0depo_bauxite = env0depo_bauxite;


  /* barium */


  const env0depo_barite = extendBase(
    TEMPLATE, "env0depo-barite",
  );
  exports.env0depo_barite = env0depo_barite;


  /* silicon */


  const env0depo_silicaStone = extendBase(
    TEMPLATE, "env0depo-silica-stone",
  );
  exports.env0depo_silicaStone = env0depo_silicaStone;


  /* sulfur */


  const env0depo_crudeSulfur = extendBase(
    TEMPLATE, "env0depo-crude-sulfur",
  );
  exports.env0depo_crudeSulfur = env0depo_crudeSulfur;


  /* rock */


  const env0depo_dolomite = extendBase(
    TEMPLATE, "env0depo-dolomite",
  );
  exports.env0depo_dolomite = env0depo_dolomite;


  const env0depo_gypsum = extendBase(
    TEMPLATE, "env0depo-gypsum",
  );
  exports.env0depo_gypsum = env0depo_gypsum;


  const env0depo_limestone = extendBase(
    TEMPLATE, "env0depo-limestone",
  );
  exports.env0depo_limestone = env0depo_limestone;


  const env0depo_pumice = extendBase(
    TEMPLATE, "env0depo-pumice",
  );
  exports.env0depo_pumice = env0depo_pumice;
