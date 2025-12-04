/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/STA_baseStatus");
  const EFF = require("lovec/glb/GLB_eff");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta ----------> */


  const sta_damaged = extendBase(
    TEMPLATE, "sta-damaged",
    TEMPLATE.build({
      eff: EFF.unitDamagedSmog,
      effP: 0.08,
    }),
  );
  exports.sta_damaged = sta_damaged;


  const sta_severelyDamaged = extendBase(
    TEMPLATE, "sta-severely-damaged",
    TEMPLATE.build({
      eff: EFF.unitDamagedSmog,
      effP: 0.3,
    }),
  );
  exports.sta_severelyDamaged = sta_severelyDamaged;


  const sta_slightlyInjured = extendBase(
    TEMPLATE, "sta-slightly-injured",
  );
  exports.sta_slightlyInjured = sta_slightlyInjured;


  const sta_injured = extendBase(
    TEMPLATE, "sta-injured",
  );
  exports.sta_injured = sta_injured;


  const sta_heavilyInjured = extendBase(
    TEMPLATE, "sta-heavily-injured",
  );
  exports.sta_heavilyInjured = sta_heavilyInjured;


  const sta_haste = extendBase(
    TEMPLATE, "sta-haste",
    TEMPLATE.build({
      eff: TP_effect._shrinkParticle({
        spr: "lovec-efr-triangle",
        size: 2.0,
        spin: 1.0,
        color: Pal.accent,
        shouldFade: true,
        hasBloom: true,
      }),
      effP: 0.1,
    }),
  );
  exports.sta_haste = sta_haste;


  const sta_hiddenWell = extendBase(
    TEMPLATE, "sta-hidden-well",
  );
  exports.sta_hiddenWell = sta_hiddenWell;
