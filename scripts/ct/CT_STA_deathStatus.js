/*
  ========================================
  Section: Definition
  ========================================
*/


    const STA_deathStatus = require("lovec/temp/sta/STA_deathStatus");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ sta0death ------------------------------> */


    const sta0death_explosionMark = extendBase(
        STA_deathStatus, "sta0death-explosion-mark",
        STA_deathStatus.build({
            killedScr: cons(function(unit) {
                FRAG_attack.explosion_global(unit.x, unit.y, unit.maxHealth * 0.5, unit.hitSize * 1.5, Mathf.lerp(1.0, 2.0, unit.hitSize / 10.0), false);
            }),
        }),
    );
