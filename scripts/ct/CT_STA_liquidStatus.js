/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/sta/STA_liquidStatus");
  const EFF = require("lovec/glb/GLB_eff");


  const TP_effect = require("lovec/tp/TP_effect");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- sta0liq ----------> */


  const sta0liq_seaWaterCorrosion = extend(StatusEffect, "sta0liq-sea-water-corrosion", TEMPLATE._std(TP_effect._wetParticle("6fb6bf"), 0.08, 1800.0, 70.0, 0.007, null, EFF.circlePulseDynamic, Color.valueOf("6fb6bf")));
  exports.sta0liq_seaWaterCorrosion = sta0liq_seaWaterCorrosion;


  const sta0liq_brineCorrosion = extend(StatusEffect, "sta0liq-brine-corrosion", TEMPLATE._std(TP_effect._wetParticle("d8c0d4"), 0.08, 1800.0, 150.0, 0.015, null, EFF.circlePulseDynamic, Color.valueOf("d8c0d4")));
  exports.sta0liq_brineCorrosion = sta0liq_brineCorrosion;


  const sta0liq_wasteCorrosion = extend(StatusEffect, "sta0liq-waste-corrosion", TEMPLATE._std(TP_effect._wetParticle("859c77"), 0.08, 1800.0, 95.0, 0.015, null, EFF.circlePulseDynamic, Color.valueOf("859c77")));
  exports.sta0liq_wasteCorrosion = sta0liq_wasteCorrosion;


  const sta0liq_acidicI = extend(StatusEffect, "sta0liq-acidic-i", TEMPLATE._std(TP_effect._wetParticle("80ba78"), 0.01, 1800.0, 150.0, 0.009, null, EFF.circlePulseDynamic, Color.valueOf("80ba78")));
  exports.sta0liq_acidicI = sta0liq_acidicI;


  const sta0liq_acidicII = extend(StatusEffect, "sta0liq-acidic-ii", TEMPLATE._std(TP_effect._wetParticle("80ba78"), 0.03, 1800.0, 300.0, 0.012, null, EFF.circlePulseDynamic, Color.valueOf("80ba78")));
  exports.sta0liq_acidicII = sta0liq_acidicII;


  const sta0liq_acidicIII = extend(StatusEffect, "sta0liq-acidic-iii", TEMPLATE._std(TP_effect._wetParticle("80ba78"), 0.06, 1800.0, 800.0, 0.018, null, EFF.circlePulseDynamic, Color.valueOf("80ba78")));
  exports.sta0liq_acidicIII = sta0liq_acidicIII;


  const sta0liq_acidicIV = extend(StatusEffect, "sta0liq-acidic-iv", TEMPLATE._std(TP_effect._wetParticle("80ba78"), 0.06, 1800.0, 1500.0, 0.03, null, EFF.circlePulseDynamic, Color.valueOf("80ba78")));
  exports.sta0liq_acidicIV = sta0liq_acidicIV;


  const sta0liq_basicI = extend(StatusEffect, "sta0liq-basic-i", TEMPLATE._std(TP_effect._wetParticle("d0d0c8"), 0.01, 1800.0, 80.0, 0.012, null, EFF.circlePulseDynamic, Color.valueOf("d0d0c8")));
  exports.sta0liq_basicI = sta0liq_basicI;


  const sta0liq_basicII = extend(StatusEffect, "sta0liq-basic-ii", TEMPLATE._std(TP_effect._wetParticle("d0d0c8"), 0.01, 1800.0, 200.0, 0.02, null, EFF.circlePulseDynamic, Color.valueOf("d0d0c8")));
  exports.sta0liq_basicII = sta0liq_basicII;


  const sta0liq_basicIII = extend(StatusEffect, "sta0liq-basic-iii", TEMPLATE._std(TP_effect._wetParticle("d0d0c8"), 0.01, 1800.0, 500.0, 0.035, null, EFF.circlePulseDynamic, Color.valueOf("d0d0c8")));
  exports.sta0liq_basicIII = sta0liq_basicIII;


  const sta0liq_basicIV = extend(StatusEffect, "sta0liq-basic-iv", TEMPLATE._std(TP_effect._wetParticle("d0d0c8"), 0.01, 1800.0, 1100.0, 0.055, null, EFF.circlePulseDynamic, Color.valueOf("d0d0c8")));
  exports.sta0liq_basicIV = sta0liq_basicIV;
