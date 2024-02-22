const script = [
  { //dialogue 0
    "bg": "blackScreen",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "October 27th, 14:34"
  },
  { //dialogue 1
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "I keep dreaming of aliens man, they don't even do bad things anymore we just hang out."
  },
  { //dialogue 2
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Really? What they look like?"
  },
  { //dialogue 3
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Well, one had yellow eyes and blue skin...."
  },
  { //dialogue 4
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "LAUGH",
      "animation": "shakeChar2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "DROP WHATEVER YOU'RE DOING BECAUSE I HAVE COME TO YOU WITH A GIFT OF A LIFETIME!!!"
  },
  { //dialogue 5
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "I mean .... DEATHTIME!!!"
  },
  { //dialogue 6
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "I mean .... WHATEVER!!!"
  },
  { //dialogue 7
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Oh yeah? What is it?"
  },
  { //dialogue 8
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "BOTTLE",
      "animation": "shakeChar2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Ta-dah!"
  },
  { //dialogue 9
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "BOTTLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "What is that?"
  },
  { //dialogue 10
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "BOTTLE2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Are you stupid on purpose?"
  },
  { //dialogue 11
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "BOTTLE2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "I think that's alcohol."
  },
  { //dialogue 12
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "BOTTLE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Wine, to be exact."
  },
  { //dialogue 13
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "BOTTLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "So like, what about it?"
  },
  { //dialogue 14
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "BOTTLE2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "You guys can't possibly be that boring."
  },
  { //dialogue 15
    "bg": "house",
    "char1": {
      "emotion": "ANGRY",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "SAMAEL! THIS BETTER NOT BE WHAT I THINK IT IS!!!"
  },
  { //dialogue 16
    "bg": "house",
    "char1": {
      "emotion": "ANGRY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "uhhhhhhhhhhhhhhhhhhh..."
  },
  { //dialogue 17
    "bg": "house",
    "char1": {
      "emotion": "ANGRY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "It depends on what you think it is."
  },
  { //dialogue 18
    "bg": "house",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Trying to make these poor souls to drink the sinful beverage."
  },
  { //dialogue 19
    "bg": "house",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "I expected no less from a demon!"
  },
  { //dialogue 20
    "bg": "house",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Uhhh yeah, that is definitely what I was doing."
  },
  { //dialogue 21
    "bg": "house",
    "char1": {
      "emotion": "GRUMPY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I thought wine was like, something not sinful because it's like god's blood or whatever."
  },
  { //dialogue 22
    "bg": "house",
    "char1": {
      "emotion": "ANGRY",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "I-It is??!!?"
  },
  { //dialogue 23
    "bg": "house",
    "char1": {
      "emotion": "ANGRY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE",
      "animation": "shakeChar2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Yes! That's right, it would be a sin not to drink it actually!!!"
  },
  { //dialogue 24
    "bg": "house",
    "char1": {
      "emotion": "ANGRY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Do you want to make sky daddy angry?"
  },
  { //dialogue 25
    "bg": "house",
    "char1": {
      "emotion": "CRY",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "NONONONONONO I DONT WANT THAT!!!!!"
  },
  { //dialogue 26
    "bg": "house",
    "char1": {
      "emotion": "CRY",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "Then drink up!"
  },
  { //dialogue 27
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Another day another fight in the living room."
  },
  { //dialogue 28
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "At least it makes things less boring."
  },
  { //dialogue 29
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "So, what is it this time-"
  },
  { //dialogue 30
    "bg": "evedrink",
    "char1": {
      "emotion": "NONE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "I AM A GOOD AND NOBLE ANGEL!!!"
  },
  { //dialogue 31
    "bg": "evedrink",
    "char1": {
      "emotion": "NONE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "I MUST OBEY THE LORDS WORD!!!"
  },
  { //dialogue 32
    "bg": "evedrink",
    "char1": {
      "emotion": "NONE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "AND IF I MUST DRINK THIS VILE LIQUID TO PROVE MY LOYALTY I WILL!!!"
  },
  { //dialogue 33
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "...."
  },
  { //dialogue 34
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Even in hell, drunk people dont change."
  },
  { //dialogue 35
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "I'll refrain from commenting on this situation."
  },
  { //dialogue 36
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "So what's up with you guys."
  },
  { //dialogue 37
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Oh nothing, just trying to find any sort of entertaiment in this endless void of boredom."
  },
  { //dialogue 38
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Which is kind of your fault since you made Erik not fun anymore."
  },
  { //dialogue 39
    "bg": "house",
    "char1": {
      "emotion": "GRUMPY",
      "animation": "shake",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    'say': 'WHAT DO YOU MEAN "NOT FUN"??!!'
  },
  { //dialogue 40
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "I don't get it either, all you did was trick him into doing your laundry."
  },
  { //dialogue 41
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Elise"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "It was fun to look at him cry about aliens when he did that though."
  },
  { //dialogue 42
    "bg": "house",
    "char1": {
      "emotion": "GRUMPY",
      "animation": "shake",
      "name": "Erik"
    },
    "char2": {
      "emotion": "LAUGH",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "YOU TORMENTED ME FOR A MONTH!!!!"
  },
  { //dialogue 43
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "To be fair, what else can we do here, all we have is a deck of cards."
  },
  { //dialogue 44
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Well there are alot of things you can do with cards."
  },
  { //dialogue 45
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Like uhhhhh.... Play go fish."
  },
  { //dialogue 46
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "What else is there ...... Poker?"
  },
  { //dialogue 47
    "bg": "house",
    "char1": {
      "emotion": "HAPPY2",
      "name": "Elise"
    },
    "char2": {
      "emotion": "CONFUSED",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "Poker sounds good."
  },
  { //dialogue 48
    "bg": "house",
    "char1": {
      "emotion": "HAPPY2",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Well, actually, no, nevermind, we need poker chips for that."
  },
  { //dialogue 49
    "bg": "house",
    "char1": {
      "emotion": "HAPPY2",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I doubt this place has them."
  },
  { //dialogue 50
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "Well, I saw some hex nuts in the basement, we coult use those."
  },
  { //dialogue 51
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Great, we can play then!"
  },
  { //dialogue 52
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Erik, you're in?"
  },
  { //dialogue 53
    "bg": "house",
    "char1": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "Ehhh ... I'll have to pass, I dont know how to play poker..."
  },
  { //dialogue 54
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "I'm ..... Seeing blurryyyyyyyyy......"
  },
  { //dialogue 55
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Am ...."
  },
  { //dialogue 56
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Am I ascendingggg???"
  },
  { //dialogue 57
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "GRUMPY",
      "animation": "shakeChar2",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "HEY DONT DRINK ALL OF IT, LEAVE SOME FOR ME!!!!"
  },
  { //dialogue 58
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "You know, on the second thought, I dont want to be near anywhere near those two..."
  },
  { //dialogue 59
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "So hopefully I'll learn how to play in the process."
  },
  { //dialogue 60
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "HAPPY",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "You'll be fine, poker isn't as complicated as people think."
  },
  { //dialogue 61
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Oh it does get complicated, especially in the pro scene."
  },
  { //dialogue 62
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Anyway, shal we go to the basement now?"
  },
  { //dialogue 63
    "bg": "house",
    "char1": {
      "emotion": "CONFUSED",
      "animation": "disappear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "Sure..."
  },
  { //dialogue 64
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "This basement is smaller than I thought."
  },
  { //dialogue 65
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Big enough to play poker, so it'll do."
  },
  { //dialogue 66
    "bg": "table",
    "char1": {
      "emotion": "HAPPY",
      "animation": "appear",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "Alright then, who will be the dealer?"
  },
  { //dialogue 67
    "bg": "table",
    "char1": {
      "emotion": "HAPPY",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "I don't mind."
  },
  { //dialogue 68
    "bg": "table",
    "char1": {
      "emotion": "HAPPY",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "Great! Then ...."
  },
  { //dialogue 69
    "bg": "ArtemiyDEADASS",
    "char1": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "We play..."
  },
  { //dialogue 70
    "bg": "EliseDEADASS",
    "char1": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "Let the best man win..."
  },
  { //dialogue 71
    "bg": "Erikwhat",
    "char1": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "talker": "char1",
    "say": "What, why are you guys angry, what is going on."
  },
  { //dialogue 72
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "animation": "appear",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CARDS",
      "animation": "appear",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Well you see, my unintelligent friend, this is what is called a poker face."
  },
  { //dialogue 73
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "And although they over exaggerate."
  },
  { //dialogue 74
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "It's better for them not to show their true emotion to not give away the fact that they have good, or bad, cards."
  },
  { //dialogue 75
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "I thought we were gonna like, just have a fun card game."
  },
  { //dialogue 76
    "bg": "table",
    "char1": {
      "emotion": "CARDS",
      "animation": "appear",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "Well, to be fair Erik is right."
  },
  { //dialogue 77
    "bg": "table",
    "char1": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "talker": "char1",
    "say": "We're here to have fun, and it's not like we are playing on money."
  },
  { //dialogue 78
    "bg": "table",
    "char1": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "char2": {
      "emotion": "CARDS",
      "animation": "appear",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Let's just start playing."
  },
  { //dialogue 79
    "bg": "table",
    "char1": {
      "emotion": "CARDS",
      "animation": "appear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "Fair enough."
  },
  { //dialogue 80
    "bg": "pokernight",
    "char1": {
      "emotion": "CARDS",
      "animation": "disappear",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "animation": "disappear",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "..."
  },
  { //dialogue 81
    "bg": "pokernight",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char1",
    "say": "So.... How do I play?"
  },
  { //dialogue 82
    "bg": "pokernight",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Well, we take turns doing certain moves like calling, passing or raising and after everyone is done with their turn a card is shown by the host."
  },
  { //dialogue 83
    "bg": "pokernight",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Yes, and after all 5 cards are shown you gotta see if the cards that you have and the cards on the table make one of many combinations."
  },
  { //dialogue 84
    "bg": "pokernight",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Grace"
    },
    "talker": "char1",
    "say": "..... Well sure, I'll see what I can do."
  },
  { //dialogue 85
    "bg": "pokernight2",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Alright then, call."
  },
  { //dialogue 86
    "bg": "pokernight3",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Call."
  },
  { //dialogue 87
    "bg": "pokernight3",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "...."
  },
  { //dialogue 88
    "bg": "pokernight4",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "talker": "char1",
    "say": "There is no phone here, who are you guys calling?"
  },
  { //dialogue 89
    "bg": "pokernight5",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "No, Erik, we're not actually calling anyone."
  },
  { //dialogue 90
    "bg": "pokernight5",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Not that we can."
  },
  { //dialogue 91
    "bg": "pokernight5",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "It's just a move in the game to place your bet."
  },
  { //dialogue 92
    "bg": "pokernight6",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Ok, then I guess, I call too?"
  },
  { //dialogue 93
    "bg": "pokernight7",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Well, now that we're finally at it, should we start a conversation about something?"
  },
  { //dialogue 94
    "bg": "pokernight8",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Like what?"
  },
  { //dialogue 95
    "bg": "pokernight7",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Well, I don't believe I know how all of you ended up here, how you died I mean."
  },
  { //dialogue 96
    "bg": "pokernight3",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Call."
  },
  { //dialogue 97
    "bg": "pokernight3",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Raise."
  },
  { //dialogue 98 
    "bg": "pokernight4",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "talker": "char2",
    "say": ".... Call?"
  },
  { //dialogue 99
    "bg": "pokernight9",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "I died due to a heart attack, well I believe I did."
  },
  { //dialogue 100
    "bg": "pokernight10",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "CARDS",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I'd rather not talk about how I died, not yet at least."
  },
  { //dialogue 101
    "bg": "pokernight4",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "I dont remember how I died."
  },
  { //dialogue 102
    "bg": "pokernight11",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "I died playing poker, so this really bring me back."
  },
  { //dialogue 103
    "bg": "pokernight12",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Oh man, that is horrible."
  },
  { //dialogue 104
    "bg": "pokernight11",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Oh it's alright."
  },
  { //dialogue 105
    "bg": "pokernight7",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "What's the point of being sad about death when it already happened."
  },
  { //dialogue 106
    "bg": "pokernight7",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Fair enough I guess?"
  },
  { //dialogue 107
    "bg": "pokernight13",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "WHYYYEA DID SHEA LEAAV MEEEEEEEEEEEEEEE!!!????"
  },
  { //dialogue 108
    "bg": "pokernight14",
    "char1": {
      "emotion": "CARDS",
      "name": "Erik"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "What the hell is going on up there."
  },
  { //dialogue 109
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE",
      "animation": "appear",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE3",
      "animation": "appear",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "EVERYTHING WAS SHO GOOOOD!!"
  },
  { //dialogue 110
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE3",
      "animation": "shakeChar2",
      "name": "Samael"
    },
    "talker": "char2",
    "say": "AND SHE LEFT JUST TO LIVE WITH SOME ..... FILTHY MORTALS"
  },
  { //dialogue 111
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE2",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE3",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "shut....Shut your mouf!!!"
  },
  { //dialogue 112
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE2",
      "animation": "shake",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE3",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "Shut your stupid..."
  },
  { //dialogue 112
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE3",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "...cute..."
  },
  { //dialogue 112
    "bg": "house",
    "char1": {
      "emotion": "BOTTLE3",
      "name": "Eve"
    },
    "char2": {
      "emotion": "BOTTLE3",
      "name": "Samael"
    },
    "talker": "char1",
    "say": "mouth..."
  },
  { //dialogue 113
    "bg": "pokernight14",
    "char1": {
      "emotion": "IDLE",
      "animation": "disappear",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "NONE",
      "animation": "disappear",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "... Guess it's none of our business."
  },
  { //dialogue 114
    "bg": "pokernight4",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "So I gotta ask, how did you die from poker? This doesn't seem dangerous."
  },
  { //dialogue 115
    "bg": "pokernight7",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Well, if you would be a little bit smarter, you would realise that it's not poker that killed me and instead the people I played with."
  },
  { //dialogue 116
    "bg": "pokernight15",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Do you get some kind of pleasure from calling me stupid?"
  },
  { //dialogue 117
    "bg": "pokernight16",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "I do, yes!"
  },
  { //dialogue 118
    "bg": "pokernight8",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "So who did you play with so that you, well, died?"
  },
  { //dialogue 119
    "bg": "pokernight2",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Crooks, common criminals, even mafia one time."
  },
  { //dialogue 120
    "bg": "pokernight8",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Why?"
  },
  { //dialogue 121
    "bg": "pokernight3",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "They bet more, more money they lose means more money for me."
  },
  { //dialogue 122
    "bg": "pokernight17",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "So all that just for money?"
  },
  { //dialogue 123
    "bg": "pokernight11",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Basically, it was the only way to put food on the table."
  },
  { //dialogue 124
    "bg": "pokernight8",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "So it was basically like a job to you?"
  },
  { //dialogue 125
    "bg": "pokernight18",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Yes, the lowest way of life there is."
  },
  { //dialogue 126
    "bg": "pokernight19",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "I don't blame you."
  },
  { //dialogue 127
    "bg": "pokernight19",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "When youre good at something, or just know how to do one thing."
  },
  { //dialogue 128
    "bg": "pokernight20",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "You kind of stick to that one thing."
  },
  { //dialogue 129
    "bg": "pokernight20",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "It doesn't mean it's good, but it works."
  },
  { //dialogue 130
    "bg": "pokernight20",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "And before you realise that it has to change, it's too late."
  },
  { //dialogue 131
    "bg": "pokernight21",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 132
    "bg": "pokernight22",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Well, realising that things have to change is a big step already."
  },
  { //dialogue 133
    "bg": "pokernight23",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "I'd say it's never too late, I only realised that yesterday."
  },
  { //dialogue 134
    "bg": "pokernight23",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Instead of sitting in the same place and silently regretting your past choices you can enjoy these last moments."
  },
  { //dialogue 135
    "bg": "pokernight24",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Especially since here you don't really have any exuses not to."
  },
  { //dialogue 136
    "bg": "pokernight25",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "So, what do you think?"
  },
  { //dialogue 136
    "bg": "pokernight25",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "I think....."
  },
  { //dialogue 137
    "bg": "pokernight25",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "I think....."
  },
  { //dialogue 138
    "bg": "pokernight25",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 139
    "bg": "pokernight26",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "... I think I'm sick of this game."
  },
  { //dialogue 140
    "bg": "pokernight26",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Let's do something else, literally anything else."
  },
  { //dialogue 141
    "bg": "pokernight24",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Fine by me."
  },
  { //dialogue 142
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Do you guys think that TV in the living room works?"
  },
  { //dialogue 143
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Only one way to find out."
  },
  { //dialogue 144
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Well since this is the afterlife, can we really call it the LIVING room?"
  },
  { //dialogue 145
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Grace"
    },
    "talker": "char2",
    "say": "Shut up."
  },
  { //dialogue 146
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "Shut up."
  },
  { //dialogue 147
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Shut up."
  },
  { //dialogue 148
    "bg": "table",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Well fine damn!"
  },
  { //dialogue 149
    "bg": "kis",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Man it's so good to finally leave that baseme-"
  },
  { //dialogue 150
    "bg": "kis2",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "..."
  },
  { //dialogue 151
    "bg": "kis2",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Erik"
    },
    "talker": "char2",
    "say": "Dude? You good?"
  },
  { //dialogue 152
    "bg": "kis3",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "Out."
  },
  { //dialogue 153
    "bg": "kis3",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Elise"
    },
    "talker": "char2",
    "say": "What?"
  },
  { //dialogue 154
    "bg": "kis3",
    "char1": {
      "emotion": "IDLE",
      "name": "STOPLOOKINGHERE"
    },
    "char2": {
      "emotion": "IDLE",
      "name": "Artemiy"
    },
    "talker": "char2",
    "say": "I SAID EVERYBODY OUT!"
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
    "say": "End of chapter 3."
  },
  { //dialogue 156
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