/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/sta/STA_burstStatus");
  const EFF = require("lovec/glb/GLB_eff");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta0bur ----------> */


  const sta0bur_overheated = extend(StatusEffect, "sta0bur-overheated", TEMPLATE._std(Fx.burning, 0.01, 6000.0, function(unit, time) {
    return 300.0;
  }, 2000.0, 0.05, function(unit) {
    unit.apply(StatusEffects.melting, 480.0);
  }, EFF.circlePulseDynamic, Color.valueOf("ffc455")));
  exports.sta0bur_overheated = sta0bur_overheated;
