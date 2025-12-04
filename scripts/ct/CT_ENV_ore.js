/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_ore");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0ore ----------> */


  /* carbon */


  const env0ore_lignite = extendBase(
    TEMPLATE, "env0ore-lignite",
  );
  exports.env0ore_lignite = env0ore_lignite;


  const env0ore_crudeGraphite = extendBase(
    TEMPLATE, "env0ore-crude-graphite",
  );
  exports.env0ore_crudeGraphite = env0ore_crudeGraphite;


  /* copper */


  const env0ore_chalcopyrite = extendBase(
    TEMPLATE, "env0ore-chalcopyrite",
  );
  exports.env0ore_chalcopyrite = env0ore_chalcopyrite;


  const env0ore_malachite = extendBase(
    TEMPLATE, "env0ore-malachite",
  );
  exports.env0ore_malachite = env0ore_malachite;


  const env0ore_nativeCopper = extendBase(
    TEMPLATE, "env0ore-native-copper",
  );
  exports.env0ore_nativeCopper = env0ore_nativeCopper;


  /* iron */


  const env0ore_hematite = extendBase(
    TEMPLATE, "env0ore-hematite",
  );
  exports.env0ore_hematite = env0ore_hematite;


  const env0ore_magnetite = extendBase(
    TEMPLATE, "env0ore-magnetite",
  );
  exports.env0ore_magnetite = env0ore_magnetite;


  /* lead */


  const env0ore_galena = extendBase(
    TEMPLATE, "env0ore-galena",
  );
  exports.env0ore_galena = env0ore_galena;


  /* tin */


  const env0ore_cassiterite = extendBase(
    TEMPLATE, "env0ore-cassiterite",
  );
  exports.env0ore_cassiterite = env0ore_cassiterite;


  /* zinc */


  const env0ore_sphalerite = extendBase(
    TEMPLATE, "env0ore-sphalerite",
  );
  exports.env0ore_sphalerite = env0ore_sphalerite;
