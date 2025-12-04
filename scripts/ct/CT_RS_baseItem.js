/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/rs/RS_baseItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0bio ----------> */


  const item0bio_log = extendBase(
    TEMPLATE, "item0bio-log",
  );
  exports.item0bio_log = item0bio_log;


  const item0bio_charcoal = extendBase(
    TEMPLATE, "item0bio-charcoal",
  );
  exports.item0bio_charcoal = item0bio_charcoal;


  const item0bio_timber = extendBase(
    TEMPLATE, "item0bio-timber",
  );
  exports.item0bio_timber = item0bio_timber;


  const item0bio_sawdust = extendBase(
    TEMPLATE, "item0bio-sawdust",
  );
  exports.item0bio_sawdust = item0bio_sawdust;


  const item0bio_hyphaRod = extendBase(
    TEMPLATE, "item0bio-hypha-rod",
  );
  exports.item0bio_hyphaRod = item0bio_hyphaRod;


  /* <---------- item0buil ----------> */


  const item0buil_cement = extendBase(
    TEMPLATE, "item0buil-cement",
  );
  exports.item0buil_cement = item0buil_cement;


  const item0buil_refractoryCement = extendBase(
    TEMPLATE, "item0buil-refractory-cement",
  );
  exports.item0buil_refractoryCement = item0buil_refractoryCement;


  const item0buil_coarseAggregate = extendBase(
    TEMPLATE, "item0buil-coarse-aggregate",
  );
  exports.item0buil_coarseAggregate = item0buil_coarseAggregate;


  const item0buil_fineAggregate = extendBase(
    TEMPLATE, "item0buil-fine-aggregate",
  );
  exports.item0buil_fineAggregate = item0buil_fineAggregate;


  const item0buil_glass = extendBase(
    TEMPLATE, "item0buil-glass",
  );
  exports.item0buil_glass = item0buil_glass;


  const item0buil_temperedGlass = extendBase(
    TEMPLATE, "item0buil-tempered-glass",
  );
  exports.item0buil_temperedGlass = item0buil_temperedGlass;


  /* brick */


  const item0buil_brickClay = extendBase(
    TEMPLATE, "item0buil-brick-clay",
  );
  exports.item0buil_brickClay = item0buil_brickClay;


  const item0buil_brickMagnesia = extendBase(
    TEMPLATE, "item0buil-brick-magnesia",
  );
  exports.item0buil_brickMagnesia = item0buil_brickMagnesia;


  /* <---------- item0chem (elementary) ----------> */


  /* carbon */


  const item0chem_coal = extendBase(
    TEMPLATE, "item0chem-coal",
  );
  exports.item0chem_coal = item0chem_coal;


  const item0chem_coke = extendBase(
    TEMPLATE, "item0chem-coke",
  );
  exports.item0chem_coke = item0chem_coke;


  const item0chem_semicoke = extendBase(
    TEMPLATE, "item0chem-semicoke",
  );
  exports.item0chem_semicoke = item0chem_semicoke;


  const item0chem_graphite = extendBase(
    TEMPLATE, "item0chem-graphite",
  );
  exports.item0chem_graphite = item0chem_graphite;


  /* misc */


  const item0chem_copper = extendBase(
    TEMPLATE, "item0chem-copper",
  );
  exports.item0chem_copper = item0chem_copper;


  const item0chem_lead = extendBase(
    TEMPLATE, "item0chem-lead",
  );
  exports.item0chem_lead = item0chem_lead;


  const item0chem_sulfur = extendBase(
    TEMPLATE, "item0chem-sulfur",
  );
  exports.item0chem_sulfur = item0chem_sulfur;


  const item0chem_tin = extendBase(
    TEMPLATE, "item0chem-tin",
  );
  exports.item0chem_tin = item0chem_tin;


  const item0chem_zinc = extendBase(
    TEMPLATE, "item0chem-zinc",
  );
  exports.item0chem_zinc = item0chem_zinc;


  /* <---------- item0chem (alloy) ----------> */


  /* copper */


  const item0chem_brass = extendBase(
    TEMPLATE, "item0chem-brass",
  );
  exports.item0chem_brass = item0chem_brass;


  const item0chem_cupronickel = extendBase(
    TEMPLATE, "item0chem-cupronickel",
  );
  exports.item0chem_cupronickel = item0chem_cupronickel;


  const item0chem_tinBronze = extendBase(
    TEMPLATE, "item0chem-tin-bronze",
  );
  exports.item0chem_tinBronze = item0chem_tinBronze;


  const item0chem_leadedTinBronze = extendBase(
    TEMPLATE, "item0chem-leaded-tin-bronze",
  );
  exports.item0chem_leadedTinBronze = item0chem_leadedTinBronze;


  /* iron */


  const item0chem_pigIron = extendBase(
    TEMPLATE, "item0chem-pig-iron",
  );
  exports.item0chem_pigIron = item0chem_pigIron;


  const item0chem_wroughtIron = extendBase(
    TEMPLATE, "item0chem-wrought-iron",
  );
  exports.item0chem_wroughtIron = item0chem_wroughtIron;


  const item0chem_steel = extendBase(
    TEMPLATE, "item0chem-steel",
  );
  exports.item0chem_steel = item0chem_steel;


  const item0chem_ferromanganese = extendBase(
    TEMPLATE, "item0chem-ferromanganese",
  );
  exports.item0chem_ferromanganese = item0chem_ferromanganese;


  const item0chem_mangalloy = extendBase(
    TEMPLATE, "item0chem-mangalloy",
  );
  exports.item0chem_mangalloy = item0chem_mangalloy;


  const item0chem_galvanizedSteel = extendBase(
    TEMPLATE, "item0chem-galvanized-steel",
  );
  exports.item0chem_galvanizedSteel = item0chem_galvanizedSteel;


  /* lead */


  const item0chem_solder = extendBase(
    TEMPLATE, "item0chem-solder",
  );
  exports.item0chem_solder = item0chem_solder;


  /* <---------- item0chem (inorganic) ----------> */


  /* calcium */


  const item0chem_lime = extendBase(
    TEMPLATE, "item0chem-lime",
  );
  exports.item0chem_lime = item0chem_lime;


  /* magnesium */


  const item0chem_magnesiaSand = extendBase(
    TEMPLATE, "item0chem-magnesia-sand",
  );
  exports.item0chem_magnesiaSand = item0chem_magnesiaSand;


  /* <---------- item0chem (organic) ----------> */


  /* polymer (rubber) */


  const item0chem_rubber = extendBase(
    TEMPLATE, "item0chem-rubber",
  );
  exports.item0chem_rubber = item0chem_rubber;
