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
    }),
  );
  exports.env0tree_nester = env0tree_nester;


  const env0tree_elderGemTree = extendBase(
    TEMPLATE, "env0tree-elder-gem-tree",
    TEMPLATE.build({
      layTree: 78.41,
      hidable: true,
    }),
  );
  exports.env0tree_elderGemTree = env0tree_elderGemTree;


  /* dirt */


  const env0tree_brownSnake = extendBase(
    TEMPLATE, "env0tree-brown-snake",
    TEMPLATE.build({
      layTree: 76.51,
    }),
  );
  exports.env0tree_brownSnake = env0tree_brownSnake;


  const env0tree_umbrellaTree = extendBase(
    TEMPLATE, "env0tree-umbrella-tree",
    TEMPLATE.build({
      layTree: 78.64,
      hidable: true,
    }),
  );
  exports.env0tree_umbrellaTree = env0tree_umbrellaTree;


  const env0tree_bleederTree = extendBase(
    TEMPLATE, "env0tree-bleeder-tree",
    TEMPLATE.build({
      layTree: 78.52,
      hidable: true,
    }),
  );
  exports.env0tree_bleederTree = env0tree_bleederTree;


  /* sand */


  const env0tree_duneShield = extendBase(
    TEMPLATE, "env0tree-dune-shield",
    TEMPLATE.build({
      layTree: 76.44,
    }),
  );
  exports.env0tree_duneShield = env0tree_duneShield;
