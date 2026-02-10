/*
  ========================================
  Section: Definition
  ========================================
*/


  if(!checkVersion("loveclab", [
    "lovec", "100.26021001",
  ])) return;


  /* <---------- import ----------> */


  const VARGEN = require("lovec/glb/GLB_varGen");


  const MDL_cond = require("lovec/mdl/MDL_cond");
  const MDL_content = require("lovec/mdl/MDL_content");
  const MDL_event = require("lovec/mdl/MDL_event");
  const MDL_util = require("lovec/mdl/MDL_util");


  /* <---------- load ----------> */


  require("loveclab/ct/CT_RS_baseItem");
  require("loveclab/ct/CT_RS_oreItem");
  require("loveclab/ct/CT_RS_wasteItem");
  require("loveclab/ct/CT_RS_intermediateItem");
  require("loveclab/ct/CT_RS_chunksItem");
  require("loveclab/ct/CT_RS_dustItem");
  require("loveclab/ct/CT_RS_p1DustItem");
  require("loveclab/ct/CT_RS_blendItem");
  require("loveclab/ct/CT_RS_clinkerItem");
  require("loveclab/ct/CT_RS_concentrateItem");


  require("loveclab/ct/CT_RS_baseFluid");
  require("loveclab/ct/CT_RS_wasteFluid");
  require("loveclab/ct/CT_RS_intermediateFluid");
  require("loveclab/ct/CT_RS_solutionLiquid");
  require("loveclab/ct/CT_RS_abstractFluid");


  require("loveclab/ct/CT_ENV_materialFloor");
  require("loveclab/ct/CT_ENV_liquidMaterialFloor");
  require("loveclab/ct/CT_ENV_vent");
  require("loveclab/ct/CT_ENV_wall");
  require("loveclab/ct/CT_ENV_heap");
  require("loveclab/ct/CT_ENV_deposit");
  require("loveclab/ct/CT_ENV_ore");
  require("loveclab/ct/CT_ENV_wallOre");
  require("loveclab/ct/CT_ENV_depthOre");
  require("loveclab/ct/CT_ENV_depthLiquid");
  require("loveclab/ct/CT_ENV_grass");
  require("loveclab/ct/CT_ENV_bush");
  require("loveclab/ct/CT_ENV_tree");
  require("loveclab/ct/CT_ENV_fungi");


  require("loveclab/ct/CT_BLK_core");


  require("loveclab/ct/CT_MAP_dialFlowTrigger");


  require("loveclab/ct/CT_UNIT_lootUnit");
  require("loveclab/ct/CT_UNIT_mech");


  require("loveclab/ct/CT_STA_baseStatus");
  require("loveclab/ct/CT_STA_fadeStatus");
  require("loveclab/ct/CT_STA_liquidStatus");
  require("loveclab/ct/CT_STA_burstStatus");
  require("loveclab/ct/CT_STA_deathStatus");


  require("loveclab/ct/CT_WEA_ambientWeather");
  require("loveclab/ct/CT_WEA_rainWeather");
  require("loveclab/ct/CT_WEA_particleWeather");


  require("loveclab/ct/CT_PLA_sun");
  require("loveclab/ct/CT_PLA_solidPlanet");
  require("loveclab/ct/CT_PLA_asteroid");


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
