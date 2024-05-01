const script = [
  { //dialogue 1
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "October 29th, 17:25"
  },
  { //dialogue 2
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "animation": "appear",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Do you have..."
  },
  { //dialogue 3
    "bg": "house",
    "char1": {
      "emotion": "HAPPY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "A queen?"
  },
  { //dialogue 4
    "bg": "house",
    "char1": {
      "emotion": "HAPPY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "I do yeah."
  },
  { //dialogue 5
    "bg": "house",
    "char1": {
      "emotion": "LAUGH",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Does that mean I win??"
  },
  { //dialogue 6
    "bg": "house",
    "char1": {
      "emotion": "LAUGH",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Honestly, I don't know, I never played this game."
  },
  { //dialogue 7
    "bg": "house",
    "char1": {
      "emotion": "LAUGH",
      "name": "Eve"
    },
    "char2": {
      "emotion": "SWAG",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Hey hey uhhh ... alien dudes?"
  },
  { //dialogue 8
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "I thought you stopped with the whole alien thing?"
  },
  { //dialogue 9
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Force of habit."
  },
  { //dialogue 10
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Anyway, have you guys seen Artemiy anywhere?"
  },
  { //dialogue 11
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "I don't think I've seen him for like two days."
  },
  { //dialogue 12
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Me neither, I've been looking everywhere for him yesterday."
  },
  { //dialogue 13
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Well me and him we're hanging out at the beach yesterday, but after that he left somewhere and I can't find him anywhere."
  },
  { //dialogue 14
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "But it's whatever, probably, I'll just go look for him a little more."
  },
  { //dialogue 15
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAGCONFUSED",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "And uhh, dude, I'm gonna be honest here."
  },
  { //dialogue 16
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAGCONFUSED",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Lose the glasses, they really don't fit you."
  },
  { //dialogue 17
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAGANGRY",
      "animation": "shakeChar2",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "They LOOK GOOD ON ME!"
  },
  { //dialogue 18
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAGANGRY",
      "animation": "shakeChar2",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "And I look FABULOUS!"
  },
  { //dialogue 19
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "SWAGANGRY",
      "animation": "disappear",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "So GOODBYE, I'm GOING OUT!"
  },
  { //dialogue 20
    "bg": "town",
    "char1": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Samael"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "I don't think thats a good idea Grace."
  },
  { //dialogue 21
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Oh don't worry I used to play baseball all the time."
  },
  { //dialogue 22
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "**CRASH**"
  },
  { //dialogue 23
    "bg": "town",
    "char1": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "...That wasn't me."
  },
  { //dialogue 24
    "bg": "town",
    "char1": {
      "emotion": "SWAGCONFUSED",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "GEAREDUP",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "What's going on in here?"
  },
  { //dialogue 25
    "bg": "town",
    "char1": {
      "emotion": "SWAGCONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "GEARDUP",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Oh nothing, just playing a little bit of baseball...."
  },
  { //dialogue 26
    "bg": "town",
    "char1": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "char2": {
      "emotion": "GEARDUP",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "I can't see a thing in this cap."
  },
  { //dialogue 27
    "bg": "town",
    "char1": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Is this some kind of fashion day or am I missing out on something?"
  },
  { //dialogue 28
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "No, I don't think you are, Erik probably just thinks these glasses make him look better."
  },
  { //dialogue 29
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "They, in fact, don't."
  },
  { //dialogue 30
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "SWAGANGRY",
      "animation": "shakeChar2",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "THEY LOOK GOOD ON ME!!!"
  },
  { //dialogue 31
    "bg": "town",
    "char1": {
      "emotion": "HAPPY2",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "SWAGANGRY",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Sure, sure, whatever you say."
  },
  { //dialogue 32
    "bg": "town",
    "char1": {
      "emotion": "HAPPY2",
      "name": "Elise"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Anyway, have you guys seen Artemiy anywhere?"
  },
  { //dialogue 33
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Didn't see him anywhere today, or yesterday to think of it."
  },
  { //dialogue 34
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "char2": {
      "emotion": "SWAGSAD",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Yesterday he told me a thing."
  },
  { //dialogue 35
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "char2": {
      "emotion": "SWAGSAD",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Like a real damn important thing."
  },
  { //dialogue 36
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "SWAGSAD",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `What was that "thing"?`
  },
  { //dialogue 37
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `I don't know if I can tell you man but it was like`
  },
  { //dialogue 38
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Real important, I feel like I need to talk to him about it you know? But I cant find him.`
  },
  { //dialogue 39
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `Well, maybe if we search for him too he'll tell us about "the thing" too.`
  },
  { //dialogue 40
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Don't know about that but it wouldn't hurt to try I guess.`
  },
  { //dialogue 41
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `Guess we're playing hide and seek now.`
  },
  { //dialogue 42
    "bg": "town",
    "char1": {
      "emotion": "SWAG",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `And, Erik, please, no offence but take of these glasses`
  },
  { //dialogue 43
    "bg": "town",
    "char1": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `They're .... Disctracting..`
  },
  { //dialogue 44
    "bg": "town",
    "char1": {
      "emotion": "SWAGANGRY",
      "animation": "shake",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `OF COURSE THEY ARE BECAUSE THEY'RE BEAUTIFUL!!!`
  },
  { //dialogue 45
    "bg": "town",
    "char1": {
      "emotion": "SWAGANGRY",
      "name": "Erik"
    },
    "char2": {
      "emotion": "LAUGH",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `Maybe we could poke him with a stick until he takes them off.`
  },
  { //dialogue 46
    "bg": "town",
    "char1": {
      "emotion": "SWAGANGRY",
      "animation": "shake",
      "name": "Erik"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `I SWEAR YOU GET SOME SICK PLEASURE FROM TORMENTING ME!!!`
  },
  { //dialogue 47
    "bg": "town",
    "char1": {
      "emotion": "SWAGANGRY",
      "name": "Erik"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `No I just find you infuriated kind of cute.`
  },
  { //dialogue 48
    "bg": "town",
    "char1": {
      "emotion": "SWAGWHAT",
      "animation": "shake",
      "name": "Erik"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `HUH???`
  },
  { //dialogue 49
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Let's just start searching for Artemiy.`
  },
  { //dialogue 50
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Uhhh..... YES, yes, let's look for him, NO DISTRACTIONS!`
  },
  { //dialogue 51
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `So, where did you already looked for him?`
  },
  { //dialogue 52
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `I search the entire house for him but he's not there`
  },
  { //dialogue 53
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `We were in the shed today so he's not there either.`
  },
  { //dialogue 54
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `I doubt he will be in the tree house.`
  },
  { //dialogue 55
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `So that leaves us with the forest and the beach.`
  },
  { //dialogue 56
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "ANGRY",
      "animation": "shakeChar2",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Let's get searching then!`
  },
  { //dialogue 57
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": `Around 2 hours later`
  },
  { //dialogue 58
    "bg": "townEvening",
    "char1": {
      "emotion": "GRUMPY",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `GOD DAMNIT WHERE IS HE??`
  },
  { //dialogue 59
    "bg": "townEvening",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `I'll give it to him, he's really good at hide and seek.`
  },
  { //dialogue 60
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `....`
  },
  { //dialogue 61
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `.... Where are you looking at?`
  },
  { //dialogue 62
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `....`
  },
  { //dialogue 63
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `.... Erik did you really search ALL of the house?`
  },
  { //dialogue 64
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Yea, why?`
  },
  { //dialogue 65
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `.... I think.`
  },
  { //dialogue 66
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `I think he's on the roof.`
  },
  { //dialogue 67
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `The roof? How could he get up there?`
  },
  { //dialogue 68
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Just look there, you can see his head a little.`
  },
  { //dialogue 69
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `How did he even get up there?`
  },
  { //dialogue 70
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `You sure it's not a tree or something?`
  },
  { //dialogue 71
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `One way to find out.`
  },
  { //dialogue 72
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "animation": 'appear',
      "name": "Erik"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `But how do we like, get there?`
  },
  { //dialogue 73
    "bg": "townEvening",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `Consdering there is an attic window, there must be an attic.`
  },
  { //dialogue 74
    "bg": "townEvening",
    "char1": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Huh..... I mean yes but.`
  },
  { //dialogue 75
    "bg": "townEvening",
    "char1": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `We were in that house for like, forever, how did we not notice there is an attic?`
  },
  { //dialogue 76
    "bg": "townEvening",
    "char1": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "char2": {
      "emotion": "ANGRY",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `Let's just go, this already takes longer than it should have.`
  },
  { //dialogue 77
    "bg": "townEvening",
    "char1": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "ANGRY",
      "animation": "disappear",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Fair enough.`
  },
  { //dialogue 78
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `... This place is darker than expected`
  },
  { //dialogue 79
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `And dustier.`
  },
  { //dialogue 80
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `I don't think we can get to the roof through here.`
  },
  { //dialogue 81
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `No, no, wait, I think I can feel a ladder... Erik stop holding my hand.`
  },
  { //dialogue 82
    "bg": "sun",
    "char1": {
      "emotion": "HATOFFSWAGLESS",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `That's... Me.`
  },
  { //dialogue 83
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `Okay here we go, finally.`
  },
  { //dialogue 84
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Finally the light!`
  },
  { //dialogue 85
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "GRUMPY",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `We were in that attic for one minute and I hate it already.`
  },
  { //dialogue 86
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `....`
  },
  { //dialogue 87
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `....`
  },
  { //dialogue 89
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Sup.`
  },
  { //dialogue 90
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Something is not right here but I can't say what exactly.`
  },
  { //dialogue 91
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `Erik, buddy, where are your glasses? You looked good in them.`
  },
  { //dialogue 92
    "bg": "sun",
    "char1": {
      "emotion": "GRUMPY",
      "animation": "shake",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `SEE I TOLD YOU!!!!`
  },
  { //dialogue 93
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `Yeah yeah whatever, anyway, Artemiy, why are you here?`
  },
  { //dialogue 94
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `You know, just chilling and stuff, it's pretty cool up here.`
  },
  { //dialogue 95
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Wanted to take a little break, some alone time.`
  },
  { //dialogue 96
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `And where is your hat? I don't think I ever seen you without it.`
  },
  { //dialogue 97
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Took it off, got a little too hot in here.`
  },
  { //dialogue 98
    "bg": "sun",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `Well, Erik, weren't you gonna talk to him about "the thing"?`
  },
  { //dialogue 99
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `What thing?`
  },
  { //dialogue 100
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `You know, the thing you told me yesterday on the beach.`
  },
  { //dialogue 101
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `That thing.`
  },
  { //dialogue 102
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `You mean like how I died thing?`
  },
  { //dialogue 103
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `Yeah..`
  },
  { //dialogue 104
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `Quite curious about that too.`
  },
  { //dialogue 105
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Well, you guys will probably find out about it eventually.`
  },
  { //dialogue 106
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SHOCK",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `I hung myself.`
  },
  { //dialogue 107
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SHOCK",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `You killed yourself? You of all people?`
  },
  { //dialogue 108
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SHOCK",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Yeah, got tired of living, so I kinda stopped doing that and stuff.`
  },
  { //dialogue 109
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SAD",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `That can't be the only reason, right?`
  },
  { //dialogue 110
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SAD",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `You guys talk like you didn't have it worse.`
  },
  { //dialogue 111
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SAD2",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `That's debatable, but still we didn't die because it was our own choice.`
  },
  { //dialogue 112
    "bg": "sun",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SAD2",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `And it's still hard to believe that you just getting tired of living is the only reason.`
  },
  { //dialogue 113
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "animation": "disappear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "SAD2",
      "animation": "disappear",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `....`
  },
  { //dialogue 114
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `I wish I had a better reason.`
  },
  { //dialogue 115
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `As cheesy or lame as it sounds, I really did just get, tired of it.`
  },
  { //dialogue 116
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `I dont think I lived a bad life.`
  },
  { //dialogue 117
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `But the further it went, the harder it got.`
  },
  { //dialogue 118
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `And that's tiring.`
  },
  { //dialogue 119
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `How did you live your life?`
  },
  { //dialogue 120
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Good enough`
  },
  { //dialogue 121
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `I had good grades at school and a group of friends who I cared for.`
  },
  { //dialogue 122
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Parents had high hopes for me so I tried not to disappoint.`
  },
  { //dialogue 123
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Guess everything went downhill in college.`
  },
  { //dialogue 124
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Friends I thought I had and cared for never really cared for me.`
  },
  { //dialogue 125
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Grades only went down but the expectations only went higher.`
  },
  { //dialogue 126
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `At that time I wasn't good mentally.`
  },
  { //dialogue 127
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `But when I tried to talk about it to parents or friends I heard the same thing over and over.`
  },
  { //dialogue 128
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `"You have it easy, some people have it worse than you."`
  },
  { //dialogue 129
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `I guess that was supposed to make me push further, keep on going.`
  },
  { //dialogue 130
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `But I never did, instead I went into depression and just stayed at home all the time.`
  },
  { //dialogue 131
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `I kept hearing my parents complaining.`
  },
  { //dialogue 132
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `And my friends telling me about their problems, never even botherting to ask how my day went.`
  },
  { //dialogue 133
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Then college ended, I found a job, moved out to a cheap appartment and then, nothing.`
  },
  { //dialogue 134
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `It was almost like, everyone who I knew in my life have, disappeared.`
  },
  { //dialogue 135
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `...Wasn't there anyone at all who was by your side?`
  },
  { //dialogue 136
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `There was, my older brother Michail.`
  },
  { //dialogue 137
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `He never had a good relationship with my parents.`
  },
  { //dialogue 138
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `He wanted to be in a band, but my parents always thought it was a waste of time.`
  },
  { //dialogue 139
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `He also was the only one who cared.`
  },
  { //dialogue 140
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `I could tell him anything that bothered me.`
  },
  { //dialogue 141
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `I always looked up to him, he never cared what others would tell him.`
  },
  { //dialogue 142
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `And he would always do anything to pursue what he loved.`
  },
  { //dialogue 143
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `But later I decided to stop telling him of my bothers, because`
  },
  { //dialogue 144
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `"some people have it worse than you"`
  },
  { //dialogue 145
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `And Michail was one of those people.`
  },
  { //dialogue 146
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `For some time I lived a life that was the same day after day.`
  },
  { //dialogue 147
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Same job, same appartment, same people who I never knew.`
  },
  { //dialogue 148
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `It went on for a year or so, each day more tiring than the other.`
  },
  { //dialogue 149
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `And then I got`
  },
  { //dialogue 150
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Tired.`
  },
  { //dialogue 151
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `I tried to change things, live a better life.`
  },
  { //dialogue 152
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `But then eventually I took the "easy way out".`
  },
  { //dialogue 153
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `...`
  },
  { //dialogue 154
    "bg": "artemiy",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `...Do you regret it?`
  },
  { //dialogue 155
    "bg": "artemiy2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `That's what I'm trying to figure out.`
  },
  { //dialogue 156
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `...`
  },
  { //dialogue 157
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `Do you blame yourself?`
  },
  { //dialogue 158
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Yes.`
  },
  { //dialogue 159
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `What I did was weak.`
  },
  { //dialogue 160
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `A fitting way to go out for me.`
  },
  { //dialogue 161
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `... It's ok to be weak sometimes.`
  },
  { //dialogue 162
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `You don't have to deal with your problems on your own all the time, it's ok to ask for help.`
  },
  { //dialogue 163
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `There are people who have it worse, but it doesn't mean you should forget about yourself.`
  },
  { //dialogue 164
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `Perhaps it's too late now to change things, but maybe the regret alone is enough.`
  },
  { //dialogue 165
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `Maybe... Maybe.`
  },
  { //dialogue 166
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `... Maybe I should've keep on going.`
  },
  { //dialogue 167
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `That what Michail would've wanted.`
  },
  { //dialogue 168
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `I hope he's alright.`
  },
  { //dialogue 169
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": `... Guess I'll never know now.`
  },
  { //dialogue 170
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": `I'm sure he is man.`
  },
  { //dialogue 171
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": `... Thanks guys, guess I needed to talk about it.`
  },
  { //dialogue 172
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `Keeping all that bottled up is not healthy.`
  },
  { //dialogue 173
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": `Yeah, it'll always feel better when you let it all out.`
  },
  { //dialogue 174
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Well, now what?`
  },
  { //dialogue 175
    "bg": "sun2",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": `Now we rest.`
  },
  { //dialogue 176
    "bg": "sun3",
    "char1": {
      "emotion": "HATOFF",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": `Yes, now we rest.`
  },
  { //dialogue 177
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "End of chapter 5."
  },
  { //dialogue 178
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "Thank you for reading."
  },
];

const exit = "../../index.html";

// for all you people who read through all the chapters and looked for secrets in the code I, QuadBarrel, salute you