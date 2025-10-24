/*
  ========================================
  Section: Definition
  ========================================
*/


  /* <---------- import ----------> */


  const TEMPLATE = require("lovec/env/ENV_tree");


/*
  ========================================
  Section: Application
  ========================================
*/


  /* <---------- env0tree (cliff) ----------> */


  const env0tree_nester = extend(TreeBlock, "env0tree-nester", TEMPLATE._std(77.42, false));
  exports.env0tree_nester = env0tree_nester;


  const env0tree_elderGemTree = extend(TreeBlock, "env0tree-elder-gem-tree", TEMPLATE._std(78.41, true));
  exports.env0tree_elderGemTree = env0tree_elderGemTree;


  /* <---------- env0tree (dirt) ----------> */


  const env0tree_brownSnake = extend(TreeBlock, "env0tree-brown-snake", TEMPLATE._std(76.51, false));
  exports.env0tree_brownSnake = env0tree_brownSnake;


  const env0tree_umbrellaTree = extend(TreeBlock, "env0tree-umbrella-tree", TEMPLATE._std(78.64, true));
  exports.env0tree_umbrellaTree = env0tree_umbrellaTree;


  const env0tree_bleederTree = extend(TreeBlock, "env0tree-bleeder-tree", TEMPLATE._std(78.52, true));
  exports.env0tree_bleederTree = env0tree_bleederTree;


  /* <---------- env0tree (sand) ----------> */


  const env0tree_duneShield = extend(TreeBlock, "env0tree-dune-shield", TEMPLATE._std(76.44, false));
  exports.env0tree_duneShield = env0tree_duneShield;
