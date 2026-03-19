/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/temp/env/ENV_tree");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0tree ----------> */


  /* cliff */


  const env0tree_nester = extendBase(
    TEMPLATE, "env0tree-nester",
    TEMPLATE.build({
      layTree: 77.42,
      radTree: 19.5,
    }),
  );


  const env0tree_elderGemTree = extendBase(
    TEMPLATE, "env0tree-elder-gem-tree",
    TEMPLATE.build({
      layTree: 78.41,
      radTree: 34.0,
      hidable: true,
    }),
  );


  /* dirt */


  const env0tree_brownSnake = extendBase(
    TEMPLATE, "env0tree-brown-snake",
    TEMPLATE.build({
      layTree: 76.51,
      radTree: 8.5,
    }),
  );


  const env0tree_umbrellaTree = extendBase(
    TEMPLATE, "env0tree-umbrella-tree",
    TEMPLATE.build({
      layTree: 78.64,
      radTree: 30.0,
      hidable: true,
    }),
  );


  const env0tree_bleederTree = extendBase(
    TEMPLATE, "env0tree-bleeder-tree",
    TEMPLATE.build({
      layTree: 78.52,
      radTree: 28.0,
      hidable: true,
    }),
  );


  /* sand */


  const env0tree_duneShield = extendBase(
    TEMPLATE, "env0tree-dune-shield",
    TEMPLATE.build({
      layTree: 76.44,
      radTree: 12.5,
    }),
  );


  /* sea */


  const env0tree_shellTree = extendBase(
    TEMPLATE, "env0tree-shell-tree",
    TEMPLATE.build({
      layTree: 76.48,
      radTree: 8.5,
    }),
  );
