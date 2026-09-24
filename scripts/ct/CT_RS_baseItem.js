/*
  ========================================
  Section: Definition
  ========================================
*/


    const RS_baseItem = require("lovec/temp/rs/RS_baseItem");


/*
  ========================================
  Section: Application
  ========================================
*/


    processModCur();


    const item_locked = extendBase(
        RS_baseItem, "item-locked",
    );


    processModCur();


    /* <------------------------------ item0bio ------------------------------> */


    const item0bio_log = extendBase(
        RS_baseItem, "item0bio-log",
    );


    const item0bio_charcoal = extendBase(
        RS_baseItem, "item0bio-charcoal",
    );


    const item0bio_timber = extendBase(
        RS_baseItem, "item0bio-timber",
    );


    const item0bio_sawdust = extendBase(
        RS_baseItem, "item0bio-sawdust",
    );


    const item0bio_biomassPowder = extendBase(
        RS_baseItem, "item0bio-biomass-powder",
    );


    const item0bio_hyphaRod = extendBase(
        RS_baseItem, "item0bio-hypha-rod",
    );


    const item0bio_moss = extendBase(
        RS_baseItem, "item0bio-moss",
    );


    const item0bio_aerthSisal = extendBase(
        RS_baseItem, "item0bio-aerth-sisal",
    );


    const item0bio_algae = extendBase(
        RS_baseItem, "item0bio-algae",
    );


    /* <------------------------------ item0buil ------------------------------> */


    const item0buil_cement = extendBase(
        RS_baseItem, "item0buil-cement",
    );


    const item0buil_refractoryCement = extendBase(
        RS_baseItem, "item0buil-refractory-cement",
    );


    const item0buil_coarseAggregate = extendBase(
        RS_baseItem, "item0buil-coarse-aggregate",
    );


    const item0buil_fineAggregate = extendBase(
        RS_baseItem, "item0buil-fine-aggregate",
    );


    const item0buil_glass = extendBase(
        RS_baseItem, "item0buil-glass",
    );


    const item0buil_temperedGlass = extendBase(
        RS_baseItem, "item0buil-tempered-glass",
    );


    /* brick */


    const item0buil_brickClay = extendBase(
        RS_baseItem, "item0buil-brick-clay",
    );


    const item0buil_brickMagnesia = extendBase(
        RS_baseItem, "item0buil-brick-magnesia",
    );


    const item0buil_brickHighAlumina = extendBase(
        RS_baseItem, "item0buil-brick-high-alumina",
    );


    const item0buil_brickMullite = extendBase(
        RS_baseItem, "item0buil-brick-mullite",
    );


    const item0buil_brickSilica = extendBase(
        RS_baseItem, "item0buil-brick-silica",
    );


    const item0buil_brickCarbon = extendBase(
        RS_baseItem, "item0buil-brick-carbon",
    );


    /* <------------------------------ item0cons ------------------------------> */


    /* fuel */


    const item0cons_briquette = extendBase(
        RS_baseItem, "item0cons-briquette",
    );


    const item0cons_cokeBriquette = extendBase(
        RS_baseItem, "item0cons-coke-briquette",
    );


    /* ball */


    const item0cons_castIronBall = extendBase(
        RS_baseItem, "item0cons-cast-iron-ball",
    );


    const item0cons_mangalloyBall = extendBase(
      RS_baseItem, "item0cons-mangalloy-ball",
    );


    /* electrode */


    const item0cons_copperElectrode = extendBase(
        RS_baseItem, "item0cons-copper-electrode",
    );


    const item0cons_leadElectrode = extendBase(
        RS_baseItem, "item0cons-lead-electrode",
    );


    const item0cons_ironElectrode = extendBase(
        RS_baseItem, "item0cons-iron-electrode",
    );


    const item0cons_naturalGraphiteElectrode = extendBase(
        RS_baseItem, "item0cons-natural-graphite-electrode",
    );


    const item0cons_graphiteElectrode = extendBase(
        RS_baseItem, "item0cons-graphite-electrode",
    );


    /* misc */


    const item0cons_asbestosDiaphragm = extendBase(
        RS_baseItem, "item0cons-asbestos-diaphragm",
    );


    /* <------------------------------ item0misc ------------------------------> */


    const item0misc_blackPowder = extendBase(
        RS_baseItem, "item0misc-black-powder",
    );


    /* tech point */


    const item0misc_genericTechPointT1 = extendBase(
        RS_baseItem, "item0misc-generic-tech-point-t1",
    );


    const item0misc_genericTechPointT2 = extendBase(
        RS_baseItem, "item0misc-generic-tech-point-t2",
    );


    const item0misc_engineeringTechPointT1 = extendBase(
        RS_baseItem, "item0misc-engineering-tech-point-t1",
    );


    const item0misc_engineeringTechPointT2 = extendBase(
        RS_baseItem, "item0misc-engineering-tech-point-t2",
    );


    const item0misc_chemistryTechPointT1 = extendBase(
        RS_baseItem, "item0misc-chemistry-tech-point-t1",
    );


    const item0misc_chemistryTechPointT2 = extendBase(
        RS_baseItem, "item0misc-chemistry-tech-point-t2",
    );


    const item0misc_agricultureTechPointT2 = extendBase(
        RS_baseItem, "item0misc-agriculture-tech-point-t2",
    );


    /* <------------------------------ item0chem (elementary) ------------------------------> */


    /* carbon */


    const item0chem_coal = extendBase(
        RS_baseItem, "item0chem-coal",
    );


    const item0chem_coke = extendBase(
        RS_baseItem, "item0chem-coke",
    );


    const item0chem_semicoke = extendBase(
        RS_baseItem, "item0chem-semicoke",
    );


    const item0chem_graphite = extendBase(
        RS_baseItem, "item0chem-graphite",
    );


    /* misc */


    const item0chem_copper = extendBase(
        RS_baseItem, "item0chem-copper",
    );


    const item0chem_lead = extendBase(
        RS_baseItem, "item0chem-lead",
    );


    const item0chem_nickel = extendBase(
        RS_baseItem, "item0chem-nickel",
    );


    const item0chem_sulfur = extendBase(
        RS_baseItem, "item0chem-sulfur",
    );


    const item0chem_tin = extendBase(
        RS_baseItem, "item0chem-tin",
    );


    const item0chem_zinc = extendBase(
        RS_baseItem, "item0chem-zinc",
    );


    /* <------------------------------ item0chem (alloy) ------------------------------> */


    /* copper */


    const item0chem_brass = extendBase(
        RS_baseItem, "item0chem-brass",
    );


    const item0chem_cupronickel = extendBase(
        RS_baseItem, "item0chem-cupronickel",
    );


    const item0chem_tinBronze = extendBase(
        RS_baseItem, "item0chem-tin-bronze",
    );


    const item0chem_leadedTinBronze = extendBase(
        RS_baseItem, "item0chem-leaded-tin-bronze",
    );


    /* iron */


    const item0chem_pigIron = extendBase(
        RS_baseItem, "item0chem-pig-iron",
    );


    const item0chem_wroughtIron = extendBase(
        RS_baseItem, "item0chem-wrought-iron",
    );


    const item0chem_castIron = extendBase(
        RS_baseItem, "item0chem-cast-iron",
    );


    const item0chem_steel = extendBase(
        RS_baseItem, "item0chem-steel",
    );


    const item0chem_ferromanganese = extendBase(
        RS_baseItem, "item0chem-ferromanganese",
    );


    const item0chem_mangalloy = extendBase(
        RS_baseItem, "item0chem-mangalloy",
    );


    const item0chem_ferrochrome = extendBase(
        RS_baseItem, "item0chem-ferrochrome",
    );


    const item0chem_stainlessSteel = extendBase(
        RS_baseItem, "item0chem-stainless-steel",
    );


    const item0chem_ferronickel = extendBase(
        RS_baseItem, "item0chem-ferronickel",
    );


    const item0chem_galvanizedSteel = extendBase(
        RS_baseItem, "item0chem-galvanized-steel",
    );


    const item0chem_hardFerrite = extendBase(
        RS_baseItem, "item0chem-hard-ferrite",
    );


    const item0chem_softFerrite = extendBase(
        RS_baseItem, "item0chem-soft-ferrite",
    );


    /* lead */


    const item0chem_solder = extendBase(
        RS_baseItem, "item0chem-solder",
    );


    /* <------------------------------ item0chem (misc) ------------------------------> */


    const item0chem_activatedCarbon = extendBase(
        RS_baseItem, "item0chem-activated-carbon",
    );


    const item0chem_talcumPowder = extendBase(
        RS_baseItem, "item0chem-talcum-powder",
    );


    /* mineral wool */


    const item0chem_asbestosWool = extendBase(
        RS_baseItem, "item0chem-asbestos-wool",
    );


    const item0chem_stoneWool = extendBase(
        RS_baseItem, "item0chem-stone-wool",
    );


    const item0chem_slagWool = extendBase(
        RS_baseItem, "item0chem-slag-wool",
    );


    const item0chem_glassWool = extendBase(
        RS_baseItem, "item0chem-glass-wool",
    );


    /* fiber */


    const item0bio_sisalFiber = extendBase(
        RS_baseItem, "item0bio-sisal-fiber",
    );


    /* <------------------------------ item0chem (inorganic) ------------------------------> */


    /* calcium */


    const item0chem_lime = extendBase(
        RS_baseItem, "item0chem-lime",
    );


    const item0chem_slakedLime = extendBase(
        RS_baseItem, "item0chem-slaked-lime",
    );


    const item0chem_calciumCarbide = extendBase(
        RS_baseItem, "item0chem-calcium-carbide",
    );


    /* magnesium */


    const item0chem_magnesiaSand = extendBase(
        RS_baseItem, "item0chem-magnesia-sand",
    );


    /* potassium */


    const item0chem_potassiumChloride = extendBase(
        RS_baseItem, "item0chem-potassium-chloride",
    );


    const item0chem_potassiumNitrate = extendBase(
        RS_baseItem, "item0chem-potassium-nitrate",
    );


    const item0chem_potassiumNitrite = extendBase(
        RS_baseItem, "item0chem-potassium-nitrite",
    );


    /* silicon */


    const item0chem_silicaSand = extendBase(
        RS_baseItem, "item0chem-silica-sand",
    );


    const item0chem_quartzSand = extendBase(
        RS_baseItem, "item0chem-quartz-sand",
    );


    /* sodium */


    const item0chem_sodiumChloride = extendBase(
        RS_baseItem, "item0chem-sodium-chloride",
    );


    const item0chem_sodiumNitrate = extendBase(
        RS_baseItem, "item0chem-sodium-nitrate",
    );


    const item0chem_sodiumNitrite = extendBase(
        RS_baseItem, "item0chem-sodium-nitrite",
    );


    /* <------------------------------ item0chem (organic) ------------------------------> */


    /* polymer (rubber) */


    const item0chem_rubber = extendBase(
        RS_baseItem, "item0chem-rubber",
    );
