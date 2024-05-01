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
    "say": "October ... Whatever"
  },
  { //dialogue 2
    "bg": "deathOffice",
    "char1": {
      "emotion": "PAPERS",
      "animation": "appear",
      "name": "Death"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 3
    "bg": "deathOffice",
    "char1": {
      "emotion": "PAPERS",
      "name": "Death"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "....Holy crap they did it."
  },
  { //dialogue 4
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Samael"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "I wonder why there are birds here, like, can birds live a 50/50 life?"
  },
  { //dialogue 5
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "I prefer not to think about that."
  },
  { //dialogue 6
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Death"
    },
    "char2": {
      "emotion": "SCARED",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "Hey hey hey."
  },
  { //dialogue 7
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "SCARED",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "B-BOSS??"
  },
  { //dialogue 8
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "What are you doing here?"
  },
  { //dialogue 9
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Im here to tell you"
  },
  { //dialogue 10
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Good job."
  },
  { //dialogue 11
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "SHOCK",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "Huh?"
  },
  { //dialogue 12
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "SHOCK",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "The souls repented, they can now enter heaven."
  },
  { //dialogue 13
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "SHOCK",
      "name": "Eve"
    },
    "talker": "char1",
    "say": "In more formal terms, their sin to good deeds ratio is now 51/49."
  },
  { //dialogue 14
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "They never seemed like bad people, I could've seen all them go to heaven from the start."
  },
  { //dialogue 15
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Well to be fair, the system is too strict even to the smallest sins, but it doesn't matter anymore"
  },
  { //dialogue 16
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "The souls can move on now."
  },
  { //dialogue 17
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CRY",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "IMSOHAPPYFORTHEMFINALLY!!!!"
  },
  { //dialogue 18
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CRY",
      "animation": "shakeChar2",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "I DON'T KNOW WHAT EXACTLY DID WE DO BUT IM SO HAPPY FOR THEM!!!"
  },
  { //dialogue 19
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "GRUMPY",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Can there be at least ONE DAY when there isn't anyone screaming in the living room at the morning!"
  },
  { //dialogue 20
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "GRUMPY",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "Well it certantly keeps things interesting."
  },
  { //dialogue 21
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "I don't know man, it happened so much already im getting used to it."
  },
  { //dialogue 22
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "It's almost like an alarm clock at this point really."
  },
  { //dialogue 23
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Ah, you four, I was here for you."
  },
  { //dialogue 24
    "bg": "gang",
    "char1": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "disappear",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "You four are now ready to go into heaven."
  },
  { //dialogue 25
    "bg": "gang",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "...Huh?"
  },
  { //dialogue 26
    "bg": "gang",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Is it already time to go?"
  },
  { //dialogue 27
    "bg": "gang1",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Man... Time flew by quickly."
  },
  { //dialogue 28
    "bg": "gang2",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Can't say the same, I've been here long enough to forget most of what I did back at home."
  },
  { //dialogue 29
    "bg": "gang3",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Even if there isn't much to remember."
  },
  { //dialogue 30
    "bg": "gang4",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "This place became home for me, as sad as that it."
  },
  { //dialogue 31
    "bg": "gang5",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 32
    "bg": "gang6",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "...I don't know if im ready to go."
  },
  { //dialogue 33
    "bg": "gang7",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "We don't really have a choice now."
  },
  { //dialogue 34
    "bg": "gang8",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Whatever happens there, on the other side, we'll be together, right?"
  },
  { //dialogue 35
    "bg": "gang9",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Yes, yes we will, friends."
  },
  { //dialogue 36
    "bg": "gang9",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "This is it, it's over now."
  },
  { //dialogue 37
    "bg": "gang9",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": ".... Didn't think this would come so soon, but here we are."
  },
  { //dialogue 38
    "bg": "gang9",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Together."
  },
  { //dialogue 39
    "bg": "gang9",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Yes buddy, together..."
  },
  { //dialogue 40
    "bg": "gang9",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 41
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": "... What do you think is there, on the other side?"
  },
  { //dialogue 42
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "You don't know? Didn't they tell you what's there?"
  },
  { //dialogue 43
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": `They don't, it's too "sacred" for lesser angels to know.`
  },
  { //dialogue 44
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": `....`
  },
  { //dialogue 45
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": `I don't want to return back to the offices.`
  },
  { //dialogue 46
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Me neither, so I'm leaving, to earth....`
  },
  { //dialogue 47
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `....You with me?`
  },
  { //dialogue 48
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": `I would, if there was a way to go there.`
  },
  { //dialogue 49
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Death"
    },
    "talker": "char2",
    "say": `Maybe I can help with that.`
  },
  { //dialogue 50
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `....Are you for real?`
  },
  { //dialogue 51
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Death"
    },
    "talker": "char2",
    "say": `I am, not a fan of the offices myself and I see how it can be stressful to do meaningless work.`
  },
  { //dialogue 52
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": `M-meaningless?`
  },
  { //dialogue 53
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Death"
    },
    "talker": "char2",
    "say": `And you two seem like good people.`
  },
  { //dialogue 54
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Death"
    },
    "talker": "char2",
    "say": `So I'll help you, just don't tell anyone that I let you there.`
  },
  { //dialogue 55
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Man, thanks!`
  },
  { //dialogue 56
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": `B-but, wouldn't people get confused or scared that there are angels and demons standing next to them on mortal plain???`
  },
  { //dialogue 57
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Death"
    },
    "talker": "char2",
    "say": `Yeah right, as if anyone would believe you.`
  },
  { //dialogue 58
    "bg": "gang10",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Well, I see no reason to stay here any longer then.`
  },
  { //dialogue 59
    "bg": "gang11",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Are you with me, chicken wings?`
  },
  { //dialogue 60
    "bg": "gang12",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Eve"
    },
    "talker": "char2",
    "say": `Oh stop it with your jokes.`
  },
  { //dialogue 61
    "bg": "gang9",
    "char1": {
      "emotion": "IDLE",
      "name": "Death"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": `Who said I was joking?`
  },
  { //dialogue 62
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
    "say": "THE END"
  },
  { //dialogue 63
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
    "say": "THANK YOU FOR READING RESTLESS!"
  },
];

const exit = "../../index.html";

// the end