/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/sta/STA_liquidStatus");
  const EFF = require("lovec/glb/GLB_eff");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta0liq ----------> */


  const sta0liq_seaWaterCorrosion = extendBase(
    TEMPLATE, "sta0liq-sea-water-corrosion",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 70.0,
      burstDamagePerc: 0.007,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("6fb6bf"),
      eff: TP_effect._wetParticle({
        color: "6fb6bf",
      }),
      effP: 0.08,
    }),
  );


  const sta0liq_brineCorrosion = extendBase(
    TEMPLATE, "sta0liq-brine-corrosion",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 150.0,
      burstDamagePerc: 0.015,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("d8c0d4"),
      eff: TP_effect._wetParticle({
        color: "d8c0d4",
      }),
      effP: 0.08,
    }),
  );


  const sta0liq_wasteCorrosion = extendBase(
    TEMPLATE, "sta0liq-waste-corrosion",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 95.0,
      burstDamagePerc: 0.015,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("859c77"),
      eff: TP_effect._wetParticle({
        color: "859c77",
      }),
      effP: 0.08,
    }),
  );


  const sta0liq_acidicI = extendBase(
    TEMPLATE, "sta0liq-acidic-i",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 150.0,
      burstDamagePerc: 0.009,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("80ba78"),
      eff: TP_effect._wetParticle({
        color: "80ba78",
      }),
      effP: 0.01,
    }),
  );


  const sta0liq_acidicII = extendBase(
    TEMPLATE, "sta0liq-acidic-ii",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 300.0,
      burstDamagePerc: 0.012,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("80ba78"),
      eff: TP_effect._wetParticle({
        color: "80ba78",
      }),
      effP: 0.03,
    }),
  );


  const sta0liq_acidicIII = extendBase(
    TEMPLATE, "sta0liq-acidic-iii",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 800.0,
      burstDamagePerc: 0.018,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("80ba78"),
      eff: TP_effect._wetParticle({
        color: "80ba78",
      }),
      effP: 0.06,
    }),
  );


  const sta0liq_acidicIV = extendBase(
    TEMPLATE, "sta0liq-acidic-iv",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 1500.0,
      burstDamagePerc: 0.03,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("80ba78"),
      eff: TP_effect._wetParticle({
        color: "80ba78",
      }),
      effP: 0.08,
    }),
  );


  const sta0liq_basicI = extendBase(
    TEMPLATE, "sta0liq-basic-i",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 80.0,
      burstDamagePerc: 0.012,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("d0d0c8"),
      eff: TP_effect._wetParticle({
        color: "d0d0c8",
      }),
      effP: 0.01,
    }),
  );


  const sta0liq_basicII = extendBase(
    TEMPLATE, "sta0liq-basic-ii",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 200.0,
      burstDamagePerc: 0.02,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("d0d0c8"),
      eff: TP_effect._wetParticle({
        color: "d0d0c8",
      }),
      effP: 0.03,
    }),
  );


  const sta0liq_basicIII = extendBase(
    TEMPLATE, "sta0liq-basic-iii",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 500.0,
      burstDamagePerc: 0.035,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("d0d0c8"),
      eff: TP_effect._wetParticle({
        color: "d0d0c8",
      }),
      effP: 0.06,
    }),
  );


  const sta0liq_basicIV = extendBase(
    TEMPLATE, "sta0liq-basic-iv",
    TEMPLATE.build({
      burstTime: 1800.0,
      burstDamage: 1100.0,
      burstDamagePerc: 0.055,
      burstEff: EFF.circlePulseDynamic,
      burstEffColor: Color.valueOf("d0d0c8"),
      eff: TP_effect._wetParticle({
        color: "d0d0c8",
      }),
      effP: 0.08,
    }),
  );
