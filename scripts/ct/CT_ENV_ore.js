/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_ore");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0ore ----------> */


  /* carbon */


  const env0ore_lignite = extend(OreBlock, "env0ore-lignite", TEMPLATE._std());
  exports.env0ore_lignite = env0ore_lignite;


  const env0ore_crudeGraphite = extend(OreBlock, "env0ore-crude-graphite", TEMPLATE._std());
  exports.env0ore_crudeGraphite = env0ore_crudeGraphite;


  /* copper */


  const env0ore_chalcopyrite = extend(OreBlock, "env0ore-chalcopyrite", TEMPLATE._std());
  exports.env0ore_chalcopyrite = env0ore_chalcopyrite;


  const env0ore_malachite = extend(OreBlock, "env0ore-malachite", TEMPLATE._std());
  exports.env0ore_malachite = env0ore_malachite;


  const env0ore_nativeCopper = extend(OreBlock, "env0ore-native-copper", TEMPLATE._std());
  exports.env0ore_nativeCopper = env0ore_nativeCopper;


  /* iron */


  const env0ore_hematite = extend(OreBlock, "env0ore-hematite", TEMPLATE._std());
  exports.env0ore_hematite = env0ore_hematite;


  const env0ore_magnetite = extend(OreBlock, "env0ore-magnetite", TEMPLATE._std());
  exports.env0ore_magnetite = env0ore_magnetite;


  /* lead */


  const env0ore_galena = extend(OreBlock, "env0ore-galena", TEMPLATE._std());
  exports.env0ore_galena = env0ore_galena;


  /* tin */


  const env0ore_cassiterite = extend(OreBlock, "env0ore-cassiterite", TEMPLATE._std());
  exports.env0ore_cassiterite = env0ore_cassiterite;


  /* zinc */


  const env0ore_sphalerite = extend(OreBlock, "env0ore-sphalerite", TEMPLATE._std());
  exports.env0ore_sphalerite = env0ore_sphalerite;
