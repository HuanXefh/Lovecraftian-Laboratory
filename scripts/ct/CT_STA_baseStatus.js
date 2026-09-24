/*
  ========================================
  Section: Definition
  ========================================
*/


    const STA_baseStatus = require("lovec/temp/sta/STA_baseStatus");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ sta ------------------------------> */


    const sta_noConstruction = extendBase(
        STA_baseStatus, "sta-no-construction",
    );


    const sta_damaged = extendBase(
        STA_baseStatus, "sta-damaged",
        STA_baseStatus.build({
            eff: EFF.smogUnitDamaged,
            effP: 0.08,
        }),
    );


    const sta_severelyDamaged = extendBase(
        STA_baseStatus, "sta-severely-damaged",
        STA_baseStatus.build({
            eff: EFF.smogUnitDamaged,
            effP: 0.3,
        }),
    );


    const sta_slightlyInjured = extendBase(
        STA_baseStatus, "sta-slightly-injured",
    );


    const sta_injured = extendBase(
        STA_baseStatus, "sta-injured",
    );


    const sta_heavilyInjured = extendBase(
        STA_baseStatus, "sta-heavily-injured",
    );


    const sta_haste = extendBase(
        STA_baseStatus, "sta-haste",
        STA_baseStatus.build({
            eff: TP_effect.particleShrink({
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


    const sta_hiddenWell = extendBase(
        STA_baseStatus, "sta-hidden-well",
    );
