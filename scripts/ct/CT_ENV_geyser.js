/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_geyser");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0flr0geyser ----------> */


  /* lava */


  const env0liq0geyser_lava = extendBase(
    TEMPLATE, "env0liq0geyser-lava",
    TEMPLATE.build({
      parent: "loveclab-env0liq-lava",
      matGrp: "lava",
    }),
  );


  /* puddle */


  const env0liq0geyser_brine = extendBase(
    TEMPLATE, "env0liq0geyser-brine",
    TEMPLATE.build({
      parent: "loveclab-env0liq-brine",
      matGrp: "puddle",
    }),
  );


  const env0liq0geyser_volcanicSpring = extendBase(
    TEMPLATE, "env0liq0geyser-volcanic-spring",
    TEMPLATE.build({
      parent: "loveclab-env0liq-volcanic-spring",
      matGrp: "puddle",
    }),
  );


  /* river */


  const env0liq0geyser_water = extendBase(
    TEMPLATE, "env0liq0geyser-water",
    TEMPLATE.build({
      parent: "loveclab-env0liq-water",
      matGrp: "river",
    }),
  );


  const env0liq0geyser_sawmpWater = extendBase(
    TEMPLATE, "env0liq0geyser-swamp-water",
    TEMPLATE.build({
      parent: "loveclab-env0liq-swamp-water",
      matGrp: "river",
    }),
  );
