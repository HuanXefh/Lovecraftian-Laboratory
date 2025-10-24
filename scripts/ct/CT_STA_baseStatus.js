/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/sta/STA_baseStatus");
  const EFF = require("lovec/glb/GLB_eff");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta ----------> */


  const sta_damaged = extend(StatusEffect, "sta-damaged", TEMPLATE._std(EFF.unitDamagedSmog, 0.08));
  exports.sta_damaged = sta_damaged;


  const sta_severelyDamaged = extend(StatusEffect, "sta-severely-damaged", TEMPLATE._std(EFF.unitDamagedSmog, 0.3));
  exports.sta_severelyDamaged = sta_severelyDamaged;


  const sta_slightlyInjured = extend(StatusEffect, "sta-slightly-injured", TEMPLATE._std());
  exports.sta_slightlyInjured = sta_slightlyInjured;


  const sta_injured = extend(StatusEffect, "sta-injured", TEMPLATE._std());
  exports.sta_injured = sta_injured;


  const sta_heavilyInjured = extend(StatusEffect, "sta-heavily-injured", TEMPLATE._std());
  exports.sta_heavilyInjured = sta_heavilyInjured;


  const sta_haste = extend(StatusEffect, "sta-haste", TEMPLATE._std(TP_effect._shrinkParticle("lovec-efr-triangle", 2.0, 1.0, Pal.accent, 1.0, true, true, false), 0.1));
  exports.sta_haste = sta_haste;


  const sta_hiddenWell = extend(StatusEffect, "sta-hidden-well", TEMPLATE._std());
  exports.sta_hiddenWell = sta_hiddenWell;
