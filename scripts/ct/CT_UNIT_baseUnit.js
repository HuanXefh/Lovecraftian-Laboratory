/*
  ================================================================================
  Section: Definition
  ================================================================================
*/


    const UNIT_mech = require("lovec/temp/unit/UNIT_mech");


/*
  ================================================================================
  Section: Application
  ================================================================================
*/


    /* <------------------------------ unit0core ------------------------------> */


    const unit0core_outpostI = extendUnit(
        UNIT_mech, "unit0core-outpost-i",
        UNIT_mech.build({
            jetTrailVelThr: 1.5,
            baseShieldA: 0.3,
            shieldRadScl: 1.1,
        }),
    );
    setWeapon(unit0core_outpostI, weaps => [
        weaps,
        fetchWeapon("RepairBeam", {
            repairRad: 45.0,
            repairColor: GLB_color.techBlue,
            forPlayer: true,
            reload: 20.0,
            shootCone: 15.0,
            metaObj: {
                repairSpeed: 2.25,
                beamWidth: 0.5,
                widthSinMag: 0.11,
                rotate: false,
                targetUnits: false,
                targetBuildings: true,
            },
        }),
    ]);
    setAbility(unit0core_outpostI, abis => [
        abis,
        fetchAbility("shieldCore", {
            maxShield: 200.0,
            regenAmt: 20.0,
            regenIntv: 120.0,
        }),
        fetchAbility("laserDefense", {
            dmg: 90.0,
            chargeCap: 1200.0,
            chargeMtp: 2.0,
            rad: 160.0,
        }),
        fetchAbility("buildingRepairerModule", {
            healAmt: 20.0,
            healPerc: 0.03,
            intv: 30.0,
            rad: 80.0,
            color: GLB_color.techBlue,
        }),
    ]);
