/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/rs/RS_baseItem");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- item0bio ----------> */


  const item0bio_log = extend(Item, "item0bio-log", TEMPLATE._std());
  exports.item0bio_log = item0bio_log;


  const item0bio_charcoal = extend(Item, "item0bio-charcoal", TEMPLATE._std());
  exports.item0bio_charcoal = item0bio_charcoal;


  const item0bio_timber = extend(Item, "item0bio-timber", TEMPLATE._std());
  exports.item0bio_timber = item0bio_timber;


  const item0bio_sawdust = extend(Item, "item0bio-sawdust", TEMPLATE._std());
  exports.item0bio_sawdust = item0bio_sawdust;


  const item0bio_hyphaRod = extend(Item, "item0bio-hypha-rod", TEMPLATE._std());
  exports.item0bio_hyphaRod = item0bio_hyphaRod;


  /* <---------- item0buil ----------> */


  const item0buil_cement = extend(Item, "item0buil-cement", TEMPLATE._std());
  exports.item0buil_cement = item0buil_cement;


  const item0buil_refractoryCement = extend(Item, "item0buil-refractory-cement", TEMPLATE._std());
  exports.item0buil_refractoryCement = item0buil_refractoryCement;


  const item0buil_coarseAggregate = extend(Item, "item0buil-coarse-aggregate", TEMPLATE._std());
  exports.item0buil_coarseAggregate = item0buil_coarseAggregate;


  const item0buil_fineAggregate = extend(Item, "item0buil-fine-aggregate", TEMPLATE._std());
  exports.item0buil_fineAggregate = item0buil_fineAggregate;


  const item0buil_glass = extend(Item, "item0buil-glass", TEMPLATE._std());
  exports.item0buil_glass = item0buil_glass;


  const item0buil_temperedGlass = extend(Item, "item0buil-tempered-glass", TEMPLATE._std());
  exports.item0buil_temperedGlass = item0buil_temperedGlass;


  /* brick */


  const item0buil_brickClay = extend(Item, "item0buil-brick-clay", TEMPLATE._std());
  exports.item0buil_brickClay = item0buil_brickClay;


  const item0buil_brickMagnesia = extend(Item, "item0buil-brick-magnesia", TEMPLATE._std());
  exports.item0buil_brickMagnesia = item0buil_brickMagnesia;


  /* <---------- item0chem (elementary) ----------> */


  /* carbon */


  const item0chem_coal = extend(Item, "item0chem-coal", TEMPLATE._std());
  exports.item0chem_coal = item0chem_coal;


  const item0chem_coke = extend(Item, "item0chem-coke", TEMPLATE._std());
  exports.item0chem_coke = item0chem_coke;


  const item0chem_semicoke = extend(Item, "item0chem-semicoke", TEMPLATE._std());
  exports.item0chem_semicoke = item0chem_semicoke;


  const item0chem_graphite = extend(Item, "item0chem-graphite", TEMPLATE._std());
  exports.item0chem_graphite = item0chem_graphite;


  /* misc */


  const item0chem_copper = extend(Item, "item0chem-copper", TEMPLATE._std());
  exports.item0chem_copper = item0chem_copper;


  const item0chem_lead = extend(Item, "item0chem-lead", TEMPLATE._std());
  exports.item0chem_lead = item0chem_lead;


  const item0chem_sulfur = extend(Item, "item0chem-sulfur", TEMPLATE._std());
  exports.item0chem_sulfur = item0chem_sulfur;


  const item0chem_tin = extend(Item, "item0chem-tin", TEMPLATE._std());
  exports.item0chem_tin = item0chem_tin;


  const item0chem_zinc = extend(Item, "item0chem-zinc", TEMPLATE._std());
  exports.item0chem_zinc = item0chem_zinc;


  /* <---------- item0chem (alloy) ----------> */


  /* copper */


  const item0chem_brass = extend(Item, "item0chem-brass", TEMPLATE._std());
  exports.item0chem_brass = item0chem_brass;


  const item0chem_cupronickel = extend(Item, "item0chem-cupronickel", TEMPLATE._std());
  exports.item0chem_cupronickel = item0chem_cupronickel;


  const item0chem_tinBronze = extend(Item, "item0chem-tin-bronze", TEMPLATE._std());
  exports.item0chem_tinBronze = item0chem_tinBronze;


  const item0chem_leadedTinBronze = extend(Item, "item0chem-leaded-tin-bronze", TEMPLATE._std());
  exports.item0chem_leadedTinBronze = item0chem_leadedTinBronze;


  /* iron */


  const item0chem_pigIron = extend(Item, "item0chem-pig-iron", TEMPLATE._std());
  exports.item0chem_pigIron = item0chem_pigIron;


  const item0chem_wroughtIron = extend(Item, "item0chem-wrought-iron", TEMPLATE._std());
  exports.item0chem_wroughtIron = item0chem_wroughtIron;


  const item0chem_steel = extend(Item, "item0chem-steel", TEMPLATE._std());
  exports.item0chem_steel = item0chem_steel;


  const item0chem_ferromanganese = extend(Item, "item0chem-ferromanganese", TEMPLATE._std());
  exports.item0chem_ferromanganese = item0chem_ferromanganese;


  const item0chem_mangalloy = extend(Item, "item0chem-mangalloy", TEMPLATE._std());
  exports.item0chem_mangalloy = item0chem_mangalloy;


  const item0chem_galvanizedSteel = extend(Item, "item0chem-galvanized-steel", TEMPLATE._std());
  exports.item0chem_galvanizedSteel = item0chem_galvanizedSteel;


  /* lead */


  const item0chem_solder = extend(Item, "item0chem-solder", TEMPLATE._std());
  exports.item0chem_solder = item0chem_solder;


  /* <---------- item0chem (inorganic) ----------> */


  /* calcium */


  const item0chem_lime = extend(Item, "item0chem-lime", TEMPLATE._std());
  exports.item0chem_lime = item0chem_lime;


  /* magnesium */


  const item0chem_magnesiaSand = extend(Item, "item0chem-magnesia-sand", TEMPLATE._std());
  exports.item0chem_magnesiaSand = item0chem_magnesiaSand;


  /* <---------- item0chem (organic) ----------> */


  /* polymer (rubber) */


  const item0chem_rubber = extend(Item, "item0chem-rubber", TEMPLATE._std());
  exports.item0chem_rubber = item0chem_rubber;
