/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_deposit");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0depo ----------> */


  /* carbon */


  const env0depo_rawCoal = extend(TallBlock, "env0depo-raw-coal", TEMPLATE._std());
  exports.env0depo_rawCoal = env0depo_rawCoal;


  const env0depo_anthracite = extend(TallBlock, "env0depo-anthracite", TEMPLATE._std());
  exports.env0depo_anthracite = env0depo_anthracite;


  /* aluminum */


  const env0depo_bauxite = extend(TallBlock, "env0depo-bauxite", TEMPLATE._std());
  exports.env0depo_bauxite = env0depo_bauxite;


  /* barium */


  const env0depo_barite = extend(TallBlock, "env0depo-barite", TEMPLATE._std());
  exports.env0depo_barite = env0depo_barite;


  /* silicon */


  const env0depo_silicaStone = extend(TallBlock, "env0depo-silica-stone", TEMPLATE._std());
  exports.env0depo_silicaStone = env0depo_silicaStone;


  /* sulfur */


  const env0depo_crudeSulfur = extend(TallBlock, "env0depo-crude-sulfur", TEMPLATE._std());
  exports.env0depo_crudeSulfur = env0depo_crudeSulfur;


  /* rock */


  const env0depo_dolomite = extend(TallBlock, "env0depo-dolomite", TEMPLATE._std());
  exports.env0depo_dolomite = env0depo_dolomite;


  const env0depo_gypsum = extend(TallBlock, "env0depo-gypsum", TEMPLATE._std());
  exports.env0depo_gypsum = env0depo_gypsum;


  const env0depo_limestone = extend(TallBlock, "env0depo-limestone", TEMPLATE._std());
  exports.env0depo_limestone = env0depo_limestone;


  const env0depo_pumice = extend(TallBlock, "env0depo-pumice", TEMPLATE._std());
  exports.env0depo_pumice = env0depo_pumice;
