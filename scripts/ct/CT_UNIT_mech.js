/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/unit/UNIT_mech");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- unit0core ----------> */


  const unit0core_outpostI = extendUnit(
    TEMPLATE, "unit0core-outpost-i",
  );
  setAbility(unit0core_outpostI, abis => [
    abis,
    fetchAbility("shield-core", {
      maxShield: 200.0,
      regenAmt: 20.0,
      regenIntv: 120.0,
    }),
    fetchAbility("laser-defense", {
      dmg: 90.0,
      chargeCap: 1200.0,
      chargeMtp: 2.0,
      rad: 160.0,
    }),
    fetchAbility("building-repairer-module", {
      healAmt: 20.0,
      healPerc: 0.03,
      intv: 30.0,
      rad: 80.0,
    }),
  ]);
  exports.unit0core_outpostI = unit0core_outpostI;
