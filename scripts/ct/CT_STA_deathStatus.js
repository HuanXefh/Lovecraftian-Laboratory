/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/sta/STA_deathStatus");
  const VAR = require("lovec/glb/GLB_var");


  const FRAG_attack = require("lovec/frag/FRAG_attack");


  const MDL_cond = require("lovec/mdl/MDL_cond");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta0death ----------> */


  const sta0death_explosionMark = extend(StatusEffect, "sta0death-explosion-mark", TEMPLATE._std(function(unit) {
    FRAG_attack.apply_explosion_global(unit.x, unit.y, unit.maxHealth * 0.5, unit.hitSize * 1.5, Mathf.lerp(1.0, 2.0, unit.hitSize / 10.0), false);
  }));
  exports.sta0death_explosionMark = sta0death_explosionMark;
