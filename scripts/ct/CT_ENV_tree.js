/*
  ========================================
  Section: Definition
  ========================================
*/


    const ENV_tree = require("lovec/temp/env/ENV_tree");


/*
  ========================================
  Section: Application
  ========================================
*/


    /* <------------------------------ env0tree (cliff) ------------------------------> */


    const env0tree_nester = extendBase(
        ENV_tree, "env0tree-nester",
        ENV_tree.build({
            layTree: 77.42,
            treeRad: 19.5,
        }),
    );


    const env0tree_elderGemTree = extendBase(
        ENV_tree, "env0tree-elder-gem-tree",
        ENV_tree.build({
            hidable: true,
            layTree: 78.41,
            treeRad: 34.0,
        }),
    );


    /* <------------------------------ env0tree (dirt) ------------------------------> */


    const env0tree_brownSnake = extendBase(
        ENV_tree, "env0tree-brown-snake",
        ENV_tree.build({
            layTree: 76.51,
            treeRad: 8.5,
        }),
    );


    const env0tree_greenCloud = extendBase(
        ENV_tree, "env0tree-green-cloud",
        ENV_tree.build({
            hidable: true,
            layTree: 78.24,
            treeRad: 19.5,
        }),
    );


    const env0tree_bleederTree = extendBase(
        ENV_tree, "env0tree-bleeder-tree",
        ENV_tree.build({
            hidable: true,
            layTree: 78.52,
            treeRad: 28.0,
        }),
    );


    const env0tree_umbrellaTree = extendBase(
        ENV_tree, "env0tree-umbrella-tree",
        ENV_tree.build({
            hidable: true,
            layTree: 78.64,
            treeRad: 30.0,
        }),
    );


    /* <------------------------------ env0tree (swamp) ------------------------------> */


    const env0tree_saladTree = extendBase(
        ENV_tree, "env0tree-salad-tree",
        ENV_tree.build({
            hidable: true,
            layTree: 78.68,
            treeRad: 41.5,
        }),
    );


    // Waterborne
    const env0tree_greenScale = extendBase(
        ENV_tree, "env0tree-green-scale",
        ENV_tree.build({
            hidable: true,
            layTree: 76.78,
            treeRad: 18.0,
        }),
    );


    /* <------------------------------ env0tree (sand) ------------------------------> */


    const env0tree_duneShield = extendBase(
        ENV_tree, "env0tree-dune-shield",
        ENV_tree.build({
            layTree: 76.44,
            treeRad: 12.5,
        }),
    );


    /* <------------------------------ env0tree (sea) ------------------------------> */


    const env0tree_shellTree = extendBase(
        ENV_tree, "env0tree-shell-tree",
        ENV_tree.build({
            layTree: 76.48,
            treeRad: 8.5,
        }),
    );
