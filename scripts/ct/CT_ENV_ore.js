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


  const env0ore_rawCoal = extendBase(
    TEMPLATE, "env0ore-raw-coal",
  );


  const env0ore_crudeGraphite = extendBase(
    TEMPLATE, "env0ore-crude-graphite",
  );;


  /* copper */


  const env0ore_chalcopyrite = extendBase(
    TEMPLATE, "env0ore-chalcopyrite",
  );


  const env0ore_malachite = extendBase(
    TEMPLATE, "env0ore-malachite",
  );


  const env0ore_nativeCopper = extendBase(
    TEMPLATE, "env0ore-native-copper",
  );


  /* iron */


  const env0ore_hematite = extendBase(
    TEMPLATE, "env0ore-hematite",
  );


  const env0ore_limonite = extendBase(
    TEMPLATE, "env0ore-limonite",
  );


  const env0ore_magnetite = extendBase(
    TEMPLATE, "env0ore-magnetite",
  );


  const env0ore_meteoricIron = extendBase(
    TEMPLATE, "env0ore-meteoric-iron",
  );


  const env0ore_pyrite = extendBase(
    TEMPLATE, "env0ore-pyrite",
  );


  /* lead */


  const env0ore_galena = extendBase(
    TEMPLATE, "env0ore-galena",
  );


  /* manganese */


  const env0ore_psilomelane = extendBase(
    TEMPLATE, "env0ore-psilomelane",
  );


  const env0ore_pyrolusite = extendBase(
    TEMPLATE, "env0ore-pyrolusite",
  );


  /* tin */


  const env0ore_cassiterite = extendBase(
    TEMPLATE, "env0ore-cassiterite",
  );


  /* zinc */


  const env0ore_sphalerite = extendBase(
    TEMPLATE, "env0ore-sphalerite",
  );
