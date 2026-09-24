/*
  ========================================
  Section: Definition
  ========================================
*/


    const STA_liquidStatus = require("lovec/temp/sta/STA_liquidStatus");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ sta0liq ------------------------------> */


    const sta0liq_seaWaterCorrosion = extendBase(
        STA_liquidStatus, "sta0liq-sea-water-corrosion",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 70.0,
            burstDamagePerc: 0.007,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("6fb6bf"),
            eff: TP_effect.particleWet({
                color: "6fb6bf",
            }),
            effP: 0.08,
        }),
    );


    const sta0liq_brineCorrosion = extendBase(
        STA_liquidStatus, "sta0liq-brine-corrosion",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 150.0,
            burstDamagePerc: 0.015,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("d8c0d4"),
            eff: TP_effect.particleWet({
                color: "d8c0d4",
            }),
            effP: 0.08,
        }),
    );


    const sta0liq_wasteCorrosion = extendBase(
        STA_liquidStatus, "sta0liq-waste-corrosion",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 95.0,
            burstDamagePerc: 0.015,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("859c77"),
            eff: TP_effect.particleWet({
                color: "859c77",
            }),
            effP: 0.08,
        }),
    );


    const sta0liq_slurrySlowed = extendBase(
        STA_liquidStatus, "sta0liq-slurry-slowed",
        STA_liquidStatus.build({
            eff: TP_effect.particleWet({
                color: "648079",
            }),
            effP: 0.08,
        }),
    );


    const sta0liq_acidicI = extendBase(
        STA_liquidStatus, "sta0liq-acidic-i",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 150.0,
            burstDamagePerc: 0.009,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("80ba78"),
            eff: TP_effect.particleWet({
                color: "80ba78",
            }),
            effP: 0.01,
        }),
    );


    const sta0liq_acidicII = extendBase(
        STA_liquidStatus, "sta0liq-acidic-ii",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 300.0,
            burstDamagePerc: 0.012,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("80ba78"),
            eff: TP_effect.particleWet({
                color: "80ba78",
            }),
            effP: 0.03,
        }),
    );


    const sta0liq_acidicIII = extendBase(
        STA_liquidStatus, "sta0liq-acidic-iii",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 800.0,
            burstDamagePerc: 0.018,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("80ba78"),
            eff: TP_effect.particleWet({
                color: "80ba78",
            }),
            effP: 0.06,
        }),
    );


    const sta0liq_acidicIV = extendBase(
        STA_liquidStatus, "sta0liq-acidic-iv",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 1500.0,
            burstDamagePerc: 0.03,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("80ba78"),
            eff: TP_effect.particleWet({
                color: "80ba78",
            }),
            effP: 0.08,
        }),
    );


    const sta0liq_basicI = extendBase(
        STA_liquidStatus, "sta0liq-basic-i",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 80.0,
            burstDamagePerc: 0.012,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("d0d0c8"),
            eff: TP_effect.particleWet({
                color: "d0d0c8",
            }),
            effP: 0.01,
        }),
    );


    const sta0liq_basicII = extendBase(
        STA_liquidStatus, "sta0liq-basic-ii",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 200.0,
            burstDamagePerc: 0.02,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("d0d0c8"),
            eff: TP_effect.particleWet({
                color: "d0d0c8",
            }),
            effP: 0.03,
        }),
    );


    const sta0liq_basicIII = extendBase(
        STA_liquidStatus, "sta0liq-basic-iii",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 500.0,
            burstDamagePerc: 0.035,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("d0d0c8"),
            eff: TP_effect.particleWet({
                color: "d0d0c8",
            }),
            effP: 0.06,
        }),
    );


    const sta0liq_basicIV = extendBase(
        STA_liquidStatus, "sta0liq-basic-iv",
        STA_liquidStatus.build({
            burstTime: 1800.0,
            burstDamage: 1100.0,
            burstDamagePerc: 0.055,
            burstEff: EFF.pulseCircleDynamic,
            burstEffColor: Color.valueOf("d0d0c8"),
            eff: TP_effect.particleWet({
                color: "d0d0c8",
            }),
            effP: 0.08,
        }),
    );
