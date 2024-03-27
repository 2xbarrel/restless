const newLocal = `.`;
const script = [
  { //dialogue 0
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "October 28th, 10:42"
  },
  { //dialogue 1
    "bg": "sleepy1",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 2
    "bg": "sleepy2",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 3
    "bg": "sleepy3",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 4
    "bg": "sleepy4",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 5
    "bg": "sleepy4",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "... What ... Happened?"
  },
  { //dialogue 6
    "bg": "sleepy5",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "You both got drunk,"
  },
  { //dialogue 7
    "bg": "sleepy6",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Made out for quite a while,"
  },
  { //dialogue 8
    "bg": "sleepy7",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "You two were really going at it, it was intense."
  },
  { //dialogue 9
    "bg": "sleepy6",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 10
    "bg": "sleepy6",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 11
    "bg": "sleepy8",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "... This newspaper is in Spanish .... And it's from 1987."
  },
  { //dialogue 12
    "bg": "sleepy5",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "... I- I can't believe this."
  },
  { //dialogue 13
    "bg": "sleepy8",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I know right? Why would there be a spanish newspaper from 1987 here?"
  },
  { //dialogue 14
    "bg": "house",
    "char1": {
      "emotion": "SHOCK2",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "I need to ...... I need to go."
  },
  { //dialogue 15
    "bg": "house",
    "char1": {
      "emotion": "SHOCK2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "You sure? You look pretty hung over."
  },
  { //dialogue 16
    "bg": "house",
    "char1": {
      "emotion": "SHOCK2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "ImImaAmmAMmam fine."
  },
  { //dialogue 17
    "bg": "house",
    "char1": {
      "emotion": "SHOCK2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "I just need some ... Fresh air."
  },
  { //dialogue 18
    "bg": "house",
    "char1": {
      "emotion": "SHOCK2",
      "animation": "disappear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Well alright."
  },
  { //dialogue 19
    "bg": "treehouse",
    "char1": {
      "emotion": "SHOCK2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "NONE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 20
    "bg": "treehouse",
    "char1": {
      "emotion": "SHOCK2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  },
  { //dialogue 21
    "bg": "treehouseinside",
    "char1": {
      "emotion": "SCARED",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "WHY THE FUCK DID I DO THAT"
  },
  { //dialogue 22
    "bg": "treehouseinside",
    "char1": {
      "emotion": "SCARED",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "IF THE HIGHER-UPS OR DEATH FIND OUT IM FINISHED"
  },
  { //dialogue 23
    "bg": "treehouseinside",
    "char1": {
      "emotion": "SCARED",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "If you don't want them to find out then maybe DONT SCREAM ABOUT IT OUTSIDE?!"
  },
  { //dialogue 24
    "bg": "evehide",
    "char1": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "So how about you get out here and we discuss this properly?"
  },
  { //dialogue 25
    "bg": "evehide",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 26
    "bg": "evehide1",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "...You..."
  },
  { //dialogue 27
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER1",
      "animation": "appear",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "It- IT WAS ALL YOUR FAULT!!!"
  },
  { //dialogue 28
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "**Crash**"
  },
  { //dialogue 29
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "You good?"
  },
  { //dialogue 30
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "NO"
  },
  { //dialogue 31
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "NO IM NOT"
  },
  { //dialogue 32
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "HOW CAN I BE GOOD AFTER YOU AND YOUR TREACHEROUS LIQUID"
  },
  { //dialogue 33
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "MAD",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Yeah yeah blame it all just on me."
  },
  { //dialogue 34
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "MAD",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "WHO ELSE??!!"
  },
  { //dialogue 35
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "MAD",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Although I don't know what else I could've expected from a demon!!!"
  },
  { //dialogue 36
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "MAD",
      "animation": "shakeChar2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Don't act like you yourself didn't get all touchy back there!"
  },
  { //dialogue 37
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "MAD",
      "animation": "shakeChar2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Hell, even more than tha-"
  },
  { //dialogue 38
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Death"
    },
    "char2": {
      "emotion": "MAD",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 39
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "... Hey uhhh ... Hey boss."
  },
  { //dialogue 40
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "I'm not interrupting am I?"
  },
  { //dialogue 41
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "No, nah, we're just uhhhh ... talkin' here."
  },
  { //dialogue 42
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Alright, well, I just wanted to see you two in my office real quick."
  },
  { //dialogue 43
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Yeah it's cool we'll be there no problem."
  },
  { //dialogue 44
    "bg": "town",
    "char1": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "Death"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Alright, good, see you there."
  },
  { //dialogue 45
    "bg": "town",
    "char1": {
      "emotion": "HUNGOVER",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "...."
  },
  { //dialogue 46
    "bg": "town",
    "char1": {
      "emotion": "HUNGOVER",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": ".... He knows, he fucking knows ...."
  },
  { //dialogue 47
    "bg": "town",
    "char1": {
      "emotion": "HUNGOVER",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "It's over, it's so over ...."
  },
  { //dialogue 48
    "bg": "town",
    "char1": {
      "emotion": "HUNGOVER",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Since when do you swear so much?"
  },
  { //dialogue 49
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "SINCE YOU-"
  },
  { //dialogue 51
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER3",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Whateva, let's just go there and at least try to look a little bit presentable."
  },
  { //dialogue 52
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "animation": "disappear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "HUNGOVER3",
      "animation": "disappear",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "After Death kills us, I AM GOING TO KILL YOU!!!"
  },
  { //dialogue 53
    "bg": "town",
    "char1": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "char2": {
      "emotion": "PAPERS",
      "animation": "appear",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "... Damn, somethings going down."
  },
  { //dialogue 54
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "Everythings good here? I heard like, screaming and stuff."
  },
  { //dialogue 55
    "bg": "town",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "PAPERS1",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Yeah all good here ... Can't understand a word in this Spanish paper though."
  },
  { //dialogue 56
    "bg": "town",
    "char1": {
      "emotion": "PAPERS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "Let me see, I know a little Spanish from my alien hunting days."
  },
  { //dialogue 57
    "bg": "town",
    "char1": {
      "emotion": "PAPERS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 58
    "bg": "town",
    "char1": {
      "emotion": "PAPERS1",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "... Dios mío, los pobres niños ..."
  },
  { //dialogue 59
    "bg": "town",
    "char1": {
      "emotion": "PAPERS1",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "What?"
  },
  { //dialogue 60
    "bg": "deathOffice",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "talker": "char1",
    "say": "So, what's up boss?"
  },
  { //dialogue 61
    "bg": "deathOffice",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "talker": "char2",
    "say": "Well I just wanted to tell you that-"
  },
  { //dialogue 62
    "bg": "deathOffice",
    "char1": {
      "emotion": "CRY",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "talker": "char1",
    "say": "WERESORRYIPLEASEDONTTELLTHEHIGHERUPSPLEASE"
  },
  { //dialogue 63
    "bg": "deathOffice",
    "char1": {
      "emotion": "CRY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "talker": "char2",
    "say": "You've been doing great, keep it up."
  },
  { //dialogue 63
    "bg": "deathOffice",
    "char1": {
      "emotion": "SHOCK",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "talker": "char1",
    "say": "Huh?"
  },
  { //dialogue 64
    "bg": "deathOffice",
    "char1": {
      "emotion": "SHOCK",
      "name": "Eve"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "talker": "char2",
    "say": "You got almost all of souls to repent or realise their wrong doing,"
  },
  { //dialogue 65
    "bg": "deathOffice",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Samael"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "talker": "char2",
    "say": "So after you're done with the last soul, I'd say youre good to go back to work in the offices."
  },
  { //dialogue 66
    "bg": "deathOffice",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "talker": "char1",
    "say": "Oh, who's the last one?"
  },
  { //dialogue 67
    "bg": "deathOffice",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "talker": "char2",
    "say": "His name is Artemiy Lebedev, I thought you already knew."
  },
  { //dialogue 68
    "bg": "deathOffice",
    "char1": {
      "emotion": "SHOCK",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "talker": "char1",
    "say": "Yeaheyahyeah we know who that is yes thats hhhhhhh"
  },
  { //dialogue 69
    "bg": "deathOffice",
    "char1": {
      "emotion": "SHOCK",
      "name": "Eve"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "talker": "char1",
    "say": "The orange boy the orange boy yes Artemiy the boy yes we'll uhhh go and"
  },
  { //dialogue 70
    "bg": "deathOffice",
    "char1": {
      "emotion": "SHOCK",
      "animation": "disappear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "talker": "char1",
    "say": "Get him right away right now this instant yes thank you boss byeeeeeeee..."
  },
  { //dialogue 71
    "bg": "deathOffice",
    "char1": {
      "emotion": "SHOCK",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 72
    "bg": "deathOffice",
    "char1": {
      "emotion": "SHOCK",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "talker": "char2",
    "say": "I wonder what they serve at the bar today..."
  },
  { //dialogue 73
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Death"
    },
    "talker": "char1",
    "say": "Hey come on chill! I can't run that fast!"
  },
  { //dialogue 73
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "animation": "appear",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "appear",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "No, no I will not!"
  },
  { //dialogue 74
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "I just got a chance to get out of this place right now, and i'm taking it!"
  },
  { //dialogue 75
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "I don't want to be anywhere near you, or whoever you told about what we did!"
  },
  { //dialogue 76
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "animation": "shake",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "As if I'm going to tell it to anyone!"
  },
  { //dialogue 77
    "bg": "town",
    "char1": {
      "emotion": "ANGRY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "AS IF YOU WON'T!!!"
  },
  { //dialogue 78
    "bg": "town",
    "char1": {
      "emotion": "GRUMPY",
      "animation": "shake",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "STOP ASSUMING THAT I'M THIS EVIL MASTERMIND AIMING TO RUIN YOUR LIFE!"
  },
  { //dialogue 79
    "bg": "town",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "YOU'RE A DEMON THAT'S YOUR JOB!!!"
  },
  { //dialogue 80
    "bg": "town",
    "char1": {
      "emotion": "GRUMPY",
      "animation": "shake",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "WHO SAID I WANT TO DO MY JOB??!!"
  },
  { //dialogue 81
    "bg": "town",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "IF YOU DON'T, YOU'LL GET BANISHED, IF I DON'T I'LL GET BANISHED!!!"
  },
  { //dialogue 82
    "bg": "town",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "IT'S AS SIMPLE AS THAT, WHAT IS THERE NOT TO UNDERSTAND??!!"
  },
  { //dialogue 83
    "bg": "town",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Samael"
    },
    "char2": {
      "emotion": "FURIOUS",
      "animation": "disappear",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "NOW LET ME DO MY JOB SO I CAN GET THIS OVER WITH!!!"
  },
  { //dialogue 84
    "bg": "house",
    "char1": {
      "emotion": "CARDS",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 85
    "bg": "house",
    "char1": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "... Do you have, a queen?"
  },
  { //dialogue 86
    "bg": "house",
    "char1": {
      "emotion": "HAPPY",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "Go fish."
  },
  { //dialogue 87
    "bg": "house",
    "char1": {
      "emotion": "HAPPY",
      "name": "Elise"
    },
    "char2": {
      "emotion": "GRUMPY",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Motherfff....."
  },
  { //dialogue 88
    "bg": "house",
    "char1": {
      "emotion": "SCARED",
      "animation": "shake",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH",
      "animation": "appear",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "HIII HELLO HI ARTEMIY WHERE'S THE WONDER BOY HII"
  },
  { //dialogue 89
    "bg": "house",
    "char1": {
      "emotion": "SCARED",
      "animation": "shake",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "Don't scare me like that!"
  },
  { //dialogue 90
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "Artemiy is not here."
  },
  { //dialogue 91
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "And uhhhhh ..... where is he?"
  },
  { //dialogue 92
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "How would we know?"
  },
  { //dialogue 93
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "He was here like..... an hour or less ago."
  },
  { //dialogue 94
    "bg": "house",
    "char1": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "Well he left with erik somewhere, that's all I know."
  },
  { //dialogue 95
    "bg": "house",
    "char1": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "disappear",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Ok I will go and, and look for them now... buh byeeeee..."
  },
  { //dialogue 96
    "bg": "house",
    "char1": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 97
    "bg": "house",
    "char1": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "char2": {
      "emotion": "GRUMPY",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Hey! You had a queen all this time!!!"
  },
  { //dialogue 98
    "bg": "house",
    "char1": {
      "emotion": "LAUGH",
      "name": "Elise"
    },
    "char2": {
      "emotion": "GRUMPY",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "No peeking!"
  },
  { //dialogue 99
    "bg": "town",
    "char1": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH",
      "animation": "appear",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Artemiy!!!"
  },
  { //dialogue 100
    "bg": "shed",
    "char1": {
      "emotion": "NONE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Artemiy!!"
  },
  { //dialogue 101
    "bg": "woods",
    "char1": {
      "emotion": "NONE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH1",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Artemiy!"
  },
  { //dialogue 102
    "bg": "hill",
    "char1": {
      "emotion": "NONE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH1",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Artemiy..."
  },
  { //dialogue 103
    "bg": "table",
    "char1": {
      "emotion": "NONE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH1",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Artemiy......"
  },
  { //dialogue 104
    "bg": "bg",
    "char1": {
      "emotion": "NONE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "LAUGH1",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Artemiy.............."
  },
  { //dialogue 105
    "bg": "blackScreen",
    "char1": {
      "emotion": "NONE",
      "animaton": "disappear",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "Around an hour later."
  },
  { //dialogue 106
    "bg": "evewaah",
    "char1": {
      "emotion": "NONE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Waaaaahhhhhhhhh....."
  },
  { //dialogue 107
    "bg": "evewaah",
    "char1": {
      "emotion": "NONE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Hey."
  },
  { //dialogue 108
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "animation": "appear",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "....What do you want..."
  },
  { //dialogue 109
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Just, you know, wanted to say sorry and stuff."
  },
  { //dialogue 110
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH1",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Sorry for what? Doing your job?"
  },
  { //dialogue 111
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH1",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "No, no, look."
  },
  { //dialogue 112
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH1",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `I never wanted to my "job".`
  },
  { //dialogue 112
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH1",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `I never wanted to be a demon in the first place.`
  },
  { //dialogue 113
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH1",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `But I didn't get much choice as you can see.`
  },
  { //dialogue 114
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `What do you mean you didn't want to be a ... demon?`
  },
  { //dialogue 115
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `I mean, I don't know how it is for you angels`
  },
  { //dialogue 116
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `But we just kinda poof into existence and some people already tell us to go and torture people.`
  },
  { //dialogue 117
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `I don't want to do that, I never wanted to do that and I never did.`
  },
  { //dialogue 118
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `So I got demoted and now I'm here, basically at the bottom.`
  },
  { //dialogue 119
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `I tried to be this big bad guy, but as you saw it didn't work out.`
  },
  { //dialogue 120
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Not intentionally at least.`
  },
  { //dialogue 121
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `...Aren't you scared that you'll get banished?`
  },
  { //dialogue 122
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `I am, but at the same time, who cares?`
  },
  { //dialogue 123
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `My ex wanted to pursue music instead of this, so she left.`
  },
  { //dialogue 124
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `Left?`
  },
  { //dialogue 125
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Yeah, she just left, to the mortals.`
  },
  { //dialogue 126
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `I don't know how is she there, but hey she escaped, so there is hope.`
  },
  { //dialogue 127
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `...`
  },
  { //dialogue 128
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `... I used to have a person close to me.`
  },
  { //dialogue 129
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `But he became a fallen for questioning the system and God himself.`
  },
  { //dialogue 130
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `Just for being close to him I got demoted to the lesser angel.`
  },
  { //dialogue 131
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `And now I'm here, with you, with these souls.`
  },
  { //dialogue 132
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `Trying to hard to get promoted back...`
  },
  { //dialogue 133
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `Maybe it's not worth it.`
  },
  { //dialogue 134
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `...So, peace?`
  },
  { //dialogue 135
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH4",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `...Peace.`
  },
  { //dialogue 136
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH4",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `Just one question.`
  },
  { //dialogue 137
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH4",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Yea?`
  },
  { //dialogue 138
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `Why did you bring wine here?`
  },
  { //dialogue 139
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Just wanted to like, maybe make new friends with those dudes and have a drink and stuff.`
  },
  { //dialogue 140
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Then you came so I kinda tried to be this bad guy I was told to be, didn't work out as planned.`
  },
  { //dialogue 141
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `A follow up question.`
  },
  { //dialogue 142
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH2",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `When you said I had a "cute face", did you mean it?`
  },
  { //dialogue 143
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `Shut up.`
  },
  { //dialogue 144
    "bg": "treehouseinside",
    "char1": {
      "emotion": "WAH",
      "name": "Eve"
    },
    "char2": {
      "emotion": "WAH1",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Well alright.`
  },
  { //dialogue 145
    "bg": "town",
    "char1": {
      "emotion": "NONE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "NONE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": `I spent quite a while looking for that orange boy, where do you think he went?`
  },
  { //dialogue 146
    "bg": "beach",
    "char1": {
      "emotion": "NONE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "NONE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Don't know, but he'll probably be back later, `
  },
  { //dialogue 147
    "bg": "beach",
    "char1": {
      "emotion": "SWAGPAPERS",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "SWAG",
      "animation": "appear",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "...Este periódico es una mierda..."
  },
  { //dialogue 148
    "bg": "beach",
    "char1": {
      "emotion": "SWAGPAPERS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I still don't understand a word you're saying my friend."
  },
  { //dialogue 149
    "bg": "beach",
    "char1": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "Eh it's whatever."
  },
  { //dialogue 150
    "bg": "beach",
    "char1": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "...So, dude, how did you like, die?"
  },
  { //dialogue 151
    "bg": "beach",
    "char1": {
      "emotion": "SWAG",
      "name": "Erik"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I guess I could tell you"
  },
  { //dialogue 152
    "bg": "beach",
    "char1": {
      "emotion": "SWAGWHAT",
      "name": "Erik"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I hanged myself."
  },
  { //dialogue 153
    "bg": "beach",
    "char1": {
      "emotion": "SWAGWHAT",
      "animation": "shake",
      "name": "Erik"
    },
    "char2": {
      "emotion": "SWAG",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "YOU WHAT?"
  },
  { //dialogue 154
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "NONE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "End of chapter 4."
  },
  { //dialogue 155
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "Thank you for reading."
  },
];

const exit = "../../index.html";