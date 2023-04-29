const script = [
  { //dialogue 1
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "man im dead"
  },
  { //dialogue 2
    "bg": "deathOffice",
    "char1": {
      "emotion": "PAPERS",
      "animation": "appear",
      "name": "Death"
    },
    "char2": {
      "animation": "appear",
      "emotion": "GRUMPY",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "test num 2"
  },
  { //dialogue 3
    "bg": "bg",
    "char1": {
      "emotion": "ANGRY",
      "animation": "shake",
      "name": "Brodie",
    },
    "char2": {
      "emotion": "SCARED",
      "name": "Brodie",
    },
    "talker": "char1",
    "say": "test num 3"
  },
  { //dialogue 4
    "bg": "bg",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Brodie",
    },
    "char2": {
      "emotion": "GRUMPY",
      "name": "Brodie",
    },
    "talker": "char1",
    "say": "test num 4"
  },
  { //dialogue 5
    "bg": "deathOffice",
    "char1": {
      "emotion": "LAUGH",
      "name": "Brodie",
    },
    "char2": {
      "emotion": "ANGRY",
      "name": "Brodie",
      "animation": "shakeChar2",
    },
    "talker": "char2",
    "say": "test num 5"
  },
  { //dialogue 6
    "bg": "deathOffice",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Hilde",
      "animation": "shake"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Elise",
      "animation": "shakeChar2"
    },
    "talker": "char1",
    "say": "test num 6"
  },
  { //dialogue 7
    "bg": "deathOffice",
    "char1": {
      "emotion": "IDLE",
      "name": "Artemiy",
      "animation": "disappear"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise",
      "animation": "disappear"
    },
    "talker": "char2",
    "say": "test num 7"
  },
];
const exit = "../index.html";