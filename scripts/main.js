/*
  ========================================
  Section: Definition
  ========================================
*/


  if(!checkVersion("loveclab", [
    "lovec", "100.26013001",
  ])) return;


  /* <---------- import ----------> */


  const VARGEN = require("lovec/glb/GLB_varGen");


  const MDL_cond = require("lovec/mdl/MDL_cond");
  const MDL_content = require("lovec/mdl/MDL_content");
  const MDL_event = require("lovec/mdl/MDL_event");
  const MDL_util = require("lovec/mdl/MDL_util");


  /* <---------- load ----------> */


  const CT_RS_baseItem = require("loveclab/ct/CT_RS_baseItem");
  const CT_RS_oreItem = require("loveclab/ct/CT_RS_oreItem");
  const CT_RS_wasteItem = require("loveclab/ct/CT_RS_wasteItem");
  const CT_RS_intermediateItem = require("loveclab/ct/CT_RS_intermediateItem");
  const CT_RS_chunksItem = require("loveclab/ct/CT_RS_chunksItem");
  const CT_RS_dustItem = require("loveclab/ct/CT_RS_dustItem");
  const CT_RS_p1DustItem = require("loveclab/ct/CT_RS_p1DustItem");
  const CT_RS_blendItem = require("loveclab/ct/CT_RS_blendItem");
  const CT_RS_clinkerItem = require("loveclab/ct/CT_RS_clinkerItem");
  const CT_RS_concentrateItem = require("loveclab/ct/CT_RS_concentrateItem");


  const CT_RS_baseFluid = require("loveclab/ct/CT_RS_baseFluid");
  const CT_RS_wasteFluid = require("loveclab/ct/CT_RS_wasteFluid");
  const CT_RS_intermediateFluid = require("loveclab/ct/CT_RS_intermediateFluid");
  const CT_RS_solutionLiquid = require("loveclab/ct/CT_RS_solutionLiquid");
  const CT_RS_abstractFluid = require("loveclab/ct/CT_RS_abstractFluid");


  const CT_ENV_materialFloor = require("loveclab/ct/CT_ENV_materialFloor");
  const CT_ENV_liquidMaterialFloor = require("loveclab/ct/CT_ENV_liquidMaterialFloor");
  const CT_ENV_vent = require("loveclab/ct/CT_ENV_vent");
  const CT_ENV_wall = require("loveclab/ct/CT_ENV_wall");
  const CT_ENV_heap = require("loveclab/ct/CT_ENV_heap");
  const CT_ENV_deposit = require("loveclab/ct/CT_ENV_deposit");
  const CT_ENV_ore = require("loveclab/ct/CT_ENV_ore");
  const CT_ENV_wallOre = require("loveclab/ct/CT_ENV_wallOre");
  const CT_ENV_depthOre = require("loveclab/ct/CT_ENV_depthOre");
  const CT_ENV_depthLiquid = require("loveclab/ct/CT_ENV_depthLiquid");
  const CT_ENV_grass = require("loveclab/ct/CT_ENV_grass");
  const CT_ENV_bush = require("loveclab/ct/CT_ENV_bush");
  const CT_ENV_tree = require("loveclab/ct/CT_ENV_tree");
  const CT_ENV_fungi = require("loveclab/ct/CT_ENV_fungi");


  const CT_BLK_core = require("loveclab/ct/CT_BLK_core");


  const CT_MAP_dialFlowTrigger = require("loveclab/ct/CT_MAP_dialFlowTrigger");


  const CT_UNIT_lootUnit = require("loveclab/ct/CT_UNIT_lootUnit");
  const CT_UNIT_mech = require("loveclab/ct/CT_UNIT_mech");


  const CT_STA_baseStatus = require("loveclab/ct/CT_STA_baseStatus");
  const CT_STA_fadeStatus = require("loveclab/ct/CT_STA_fadeStatus");
  const CT_STA_liquidStatus = require("loveclab/ct/CT_STA_liquidStatus");
  const CT_STA_burstStatus = require("loveclab/ct/CT_STA_burstStatus");
  const CT_STA_deathStatus = require("loveclab/ct/CT_STA_deathStatus");


  const CT_WEA_ambientWeather = require("loveclab/ct/CT_WEA_ambientWeather");
  const CT_WEA_rainWeather = require("loveclab/ct/CT_WEA_rainWeather");
  const CT_WEA_particleWeather = require("loveclab/ct/CT_WEA_particleWeather");


  const CT_PLA_sun = require("loveclab/ct/CT_PLA_sun");
  const CT_PLA_solidPlanet = require("loveclab/ct/CT_PLA_solidPlanet");
  const CT_PLA_asteroid = require("loveclab/ct/CT_PLA_asteroid");


/*
  ========================================
  Section: Application
  ========================================
*/




  MDL_util.localizeModMeta("loveclab");




  MDL_event._c_onLoad(() => {


    // Set up shown contents on Lovec planets, no need for blocks and unit types I guess
    Vars.content.items().each(itm => MDL_content._mod(itm) === "loveclab", itm => {
      itm.shownPlanets.addAll(VARGEN.lovecPlas);
      itm.databaseTabs.addAll(VARGEN.lovecPlas);
    });
    Vars.content.liquids().each(liq => MDL_content._mod(liq) === "loveclab", liq => {
      liq.shownPlanets.addAll(VARGEN.lovecPlas);
      liq.databaseTabs.addAll(VARGEN.lovecPlas);
    });


  }, 41987772);
