/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/STA_burstStatus");
  const EFF = require("lovec/glb/GLB_eff");


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
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("ffc455"),
      burstScrTup: [unit => unit.apply(StatusEffects.melting, 480.0)],
      timeGetterTup: [(unit, time) => 300.0],
      eff: Fx.burning,
      effP: 0.01,
    }),
  );
  exports.sta0bur_overheated = sta0bur_overheated;
