const noiseArgs = {
  "anthimyst": {
    "cloud": [
      "clouds", Color.white, 1750.0, 0.02, 0.5, 1.0, 7.0, -0.2, 0.0,
      "clouds", Color.white, 1250.0, 0.03, 0.5, 1.0, 12.0, -0.8, 0.0,
      "clouds", Color.white, 750.0, 0.04, 0.5, 1.0, 15.5, -1.4, 0.0,
      "distortAlpha", Color.scarlet, 1000.0, 0.03, 0.5, 1.0, 13.5, -0.04, 0.0,
    ],
  },
};


const weas = {
  "anthimyst": {
    "rain": [
      "loveclab-wea0amb-anthimyst-normal",
      "loveclab-wea0deco-heavy-rain",
      "loveclab-wea0deco-fog-black",
    ],
  },
};




const db = {


  "param": {


    "pla": {


      "wind": [

        "loveclab-pla0ter-anthimyst", 1.0,

      ],


    },


    "map": {


      "noise": [

        "camp-atm001-sector-beta", noiseArgs["anthimyst"]["cloud"],
        "projreind-camp-atm001-sector-beta", noiseArgs["anthimyst"]["cloud"],

      ],


      "weaEn": [

        "camp-atm001-sector-beta", weas["anthimyst"]["rain"],
        "projreind-camp-atm001-sector-beta", weas["anthimyst"]["rain"],

      ],


      "wind": [],


      "heat": [],


    },


  },


  "map": {


    "rule": {


      "campaignRule": [

        "loveclab-pla0ter-anthimyst", rules => {
          rules.fog = true;
          rules.randomWaveAI = true;
          rules.rtsAI = true;
        },

      ],


      "planetRule": [

        "loveclab-pla0ter-anthimyst", rules => {
          rules.fog = true;
          rules.randomWaveAI = true;

          rules.derelictRepair = false;
          rules.placeRangeCheck = true;
          rules.coreIncinerates = true;
        },

      ],


    },


  },


  "group": {


    "map": {


      "cave": [

        "camp-atm002-lantern-cave",
        "projreind-camp-atm002-lantern-cave",

      ],


    },


  },


  "nodeRootNameMap": [

    "loveclab-eff0core-ash", "loveclab-pla0ter-anthimyst",

  ],


};
exports.db = db;
