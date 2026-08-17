/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/STA_burstStatus");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta0bur ----------> */


  const sta0bur_overheated = extendBase(
    TEMPLATE, "sta0bur-overheated",
    TEMPLATE.build({
      burstTime: 6000.0,
      burstDamage: 2000.0,
      burstDamagePerc: 0.05,
      burstDamageIgnoreShield: false,
      burstEff: EFF.pulseCircleDynamic,
      burstEffColor: Color.valueOf("ffc455"),
      burstScr: cons(function(unit) {unit.apply(StatusEffects.melting, 480.0)}),
      timeF: floatf2(function(unit, time) {return 300.0}),
      eff: Fx.burning,
      effP: 0.01,
    }),
  );
