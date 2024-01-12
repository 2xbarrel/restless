const script = [
    { //dialogue 1
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
        "say": "October 26th, 10:49"
    },
    { //dialogue 2
        "bg": "house",
        "char1": {
            "emotion": "SLEEP",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Z Z Z"
    },
    { //dialogue 3
        "bg": "house",
        "char1": {
            "emotion": "SCARED",
            "animation": "shake",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "LAUGH",
            "animation": "shakeChar2",
            "name": "Eve"
        },
        "talker": "char2",
        "say": "Wakey Wakeyy!!!"
    },
    { //dialogue 4
        "bg": "house",
        "char1": {
            "emotion": "SCARED",
            "animation": "shake",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "LAUGH",
            "name": "Eve"
        },
        "talker": "char1",
        "say": "Don't scare me like that holy shit!!!"
    },
    { //dialogue 5
        "bg": "house",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Eve"
        },
        "talker": "char2",
        "say": "Sorry for that, but we do have great news!!!"
    },
    { //dialogue 6
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Samael"
        },
        "talker": "char2",
        "say": "And by that she means that we're stuck here with you for a couple of days."
    },
    { //dialogue 7
        "bg": "house",
        "char1": {
            "emotion": "GRUMPY",
            "animation": "appear",
            "name": "Eve"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Samael"
        },
        "talker": "char1",
        "say": "Oh come on you spoiled the surprise..."
    },
    { //dialogue 8
        "bg": "house",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Eve"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Samael"
        },
        "talker": "char2",
        "say": "Don't act like you're excited about this."
    },
    { //dialogue 9
        "bg": "house",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Eve"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Samael"
        },
        "talker": "char1",
        "say": "Alright maybe it's not the greatest news.... for us."
    },
    { //dialogue 10
        "bg": "house",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Eve"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Samael"
        },
        "talker": "char1",
        "say": "But it's a great chance to prove ourselves and actually do our job as God's servants!"
    },
    { //dialogue 11
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
        "say": "Why are you two even here?"
    },
    { //dialogue 12
        "bg": "house",
        "char1": {
            "emotion": "LAUGH",
            "animation": "appear",
            "name": "Samael"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "We made Death mad."
    },
    { //dialogue 13
        "bg": "house",
        "char1": {
            "emotion": "CRY",
            "animation": "appear",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "We made Death mad."
    },
    { //dialogue 14
        "bg": "house",
        "char1": {
            "emotion": "CRY",
            "name": "Eve"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Alright, yeah, that makes sense."
    },
    { //dialogue 15
        "bg": "house",
        "char1": {
            "emotion": "CRY",
            "name": "Eve"
        },
        "char2": {
            "emotion": "ANGRY",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Hey, what's with all the noise?!"
    },
    { //dialogue 16
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Oh hey dude."
    },
    { //dialogue 17
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Oh hey, what's up?"
    },
    { //dialogue 18
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Why are the alien dudes here?"
    },
    { //dialogue 19
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "animation": "appear",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Oh uh, Yes! We are here to tell you that-"
    },
    { //dialogue 20
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Samael"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "We're stuck here with you for a while."
    },
    { //dialogue 21
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Samael"
        },
        "char2": {
            "emotion": "ANGRY",
            "animation": "shakeChar2",
            "name": "Eve"
        },
        "talker": "char2",
        "say": "WILL YOU STOP, RUINING THE SURPRISE??!!"
    },
    { //dialogue 22
        "bg": "house",
        "char1": {
            "emotion": "LAUGH",
            "name": "Samael"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Eve"
        },
        "talker": "char1",
        "say": "Hey, I'm not ruining it if it's not a surprise, right?"
    },
    { //dialogue 23
        "bg": "house",
        "char1": {
            "emotion": "LAUGH",
            "name": "Samael"
        },
        "char2": {
            "emotion": "ANGRY",
            "animation": "shakeChar2",
            "name": "Eve"
        },
        "talker": "char2",
        "say": "IT IS A SURPRISE AND WE ARE HERE TO HELP THESE POOR SOULS!!!"
    },
    { //dialogue 24
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Erik"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Is this ... hell?"
    },
    { //dialogue 25
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Erik"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "I don't know, probably?"
    },
    { //dialogue 26
        "bg": "house",
        "char1": {
            "emotion": "GRUMPY",
            "animation": "appear",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "Can't I have just 5 minutes of normal sleep?!"
    },
    { //dialogue 26
        "bg": "house",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "Who's fighting and where can I bet my money?"
    },
    { //dialogue 27
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "animation": "appear",
            "name": "Eve"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "Oh, yes, now that everyone's here-"
    },
    { //dialogue 28
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Eve"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Samael"
        },
        "talker": "char2",
        "say": "Except for one."
    },
    { //dialogue 29
        "bg": "house",
        "char1": {
            "emotion": "GRUMPY",
            "animation": "shake",
            "name": "Eve"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Samael"
        },
        "talker": "char1",
        "say": "SHUTUPSHUTUPSHUTUP!!!"
    },
    { //dialogue 30
        "bg": "house",
        "char1": {
            "emotion": "LAUGH",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Aaaaanyway, we are here to help you-"
    },
    { //dialogue 31
        "bg": "house",
        "char1": {
            "emotion": "LAUGH1",
            "name": "Eve"
        },
        "char2": {
            "emotion": "LAUGH",
            "animation": "appear",
            "name": "Samael"
        },
        "talker": "char2",
        "say": "Yeah so we suck at our job so we're gonna stay here for some time."
    },
    { //dialogue 32
        "bg": "evesnap",
        "char1": {
            "emotion": "SHOCK",
            "animation": "shake",
            "name": "Eve"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "..."
    },
    { //dialogue 33
        "bg": "house",
        "char1": {
            "emotion": "SHOCK",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Samael"
        },
        "talker": "char1",
        "say": "Forgive me father for I am going to commit violence."
    },
    { //dialogue 34
        "bg": "house",
        "char1": {
            "emotion": "SHOCK",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Samael"
        },
        "talker": "char2",
        "say": "What?"
    },
    { //dialogue 35
        "bg": "house",
        "char1": {
            "emotion": "SHOCK",
            "animation": "disappear",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "disappear",
            "name": "Samael"
        },
        "talker": "char2",
        "say": "Whoa whoa whoa whoa what are you doing??"
    },
    { //dialogue 36
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Samael"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Whoa Hey! HEY WAIT A MINUTE!"
    },
    { //dialogue 37
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Samael"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "WHERE DID YOU GET THE ROPE??!! OH GOD!!!"
    },
    { //dialogue 38
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Eve"
        },
        "char2": {
            "emotion": "HAPPY",
            "animation": "appear",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "OH NOW YOU REMEMBER LORDS NAME HUH??"
    },
    { //dialogue 39
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "This feels illegal to watch."
    },
    { //dialogue 40
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Eve"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Yeah .... My money is on the pink one."
    },
    { //dialogue 41
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Eve"
        },
        "char2": {
            "emotion": "LAUGH",
            "animation": "appear",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "Oh you're on!"
    },
    { //dialogue 42
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Samael"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "I think I'm gonna go get some uhh ... fresh air."
    },
    { //dialogue 43
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Samael"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "HELP ME GODDAMNIT DON'T JUST STAND THERE!!!!"
    },
    { //dialogue 44
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Well, at least things aren't boring around here."
    },
    { //dialogue 45
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "They couldn't just send us to hell, so they decided to make their own."
    },
    { //dialogue 46
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Hello to you too I guess."
    },
    { //dialogue 47
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "This place only started to get bearable after you somehow made Erik calmers."
    },
    { //dialogue 48
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "But now we have these two."
    },
    { //dialogue 49
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Can this get any worse?"
    },
    { //dialogue 50
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "..."
    },
    { //dialogue 51
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "...So uhhh, about that hanging out proposition yesterday."
    },
    { //dialogue 52
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Surprise surprise, it gets worse."
    },
    { //dialogue 53
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Come on, why are you so frustrated all the time?"
    },
    { //dialogue 54
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "animation": "shakeChar2",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Do you not see the situation we're in?!"
    },
    { //dialogue 55
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "animation": "shakeChar2",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "We are trapped here, in this neverending life!!!"
    },
    { //dialogue 56
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "animation": "shakeChar2",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "At least hell would give us some closure, but this just feels like a neverending nursing home!!!"
    },
    { //dialogue 57
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Well, yeah, this place is not the greatest."
    },
    { //dialogue 58
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "But at least here you can look back at what great things you achieved in life and stuff."
    },
    { //dialogue 59
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Oh yes, I definetly want to look back at all the things that I failed in the end!"
    },
    { //dialogue 60
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "All the dreams that I thought would make me happy that just made me miserable!"
    },
    { //dialogue 61
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Man, what did you even strife for?"
    },
    { //dialogue 62
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Who even cares at this point?"
    },
    { //dialogue 63
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "I do."
    },
    { //dialogue 64
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "... Why?"
    },
    { //dialogue 65
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Do you see any other things to do here?"
    },
    { //dialogue 66
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "And you know, since we're stuck here together, we might as well get to know each other better."
    },
    { //dialogue 67
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "You are weirdly optimistic considering our situation."
    },
    { //dialogue 68
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Well, getting mad about it wont help it either."
    },
    { //dialogue 69
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "I hate it when people are kind of sort of right."
    },
    { //dialogue 70
        "bg": "town",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "disappear",
            "name": "Elise"
        },
        "talker": "char2",
        "say": `I guess if you do "care", meet me at the beach.`
    },
    { //dialogue 71
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "There is a beach here?"
    },
    { //dialogue 72
        "bg": "town",
        "char1": {
            "emotion": "CONFUSED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Well now I have to check it out."
    },
    { //dialogue 73
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "**Around 3 hours later**"
    },
    { //dialogue 74
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "Took you long enough.."
    },
    { //dialogue 75
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Yeah sorry for the wait, I would come sooner if I knew where the beach was."
    },
    { //dialogue 76
        "bg": "beach",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Oh yeah, I didn't tell you where it was .... My bad."
    },
    { //dialogue 77
        "bg": "beach",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Yeah, it's a miracle I found it."
    },
    { //dialogue 78
        "bg": "beach",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Aaaaanyway."
    },
    { //dialogue 79
        "bg": "beach",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "What's up, how you doing?"
    },
    { //dialogue 80
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "As well as one can be in this hell."
    },
    { //dialogue 81
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Come on this place isn't so bad."
    },
    { //dialogue 82
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Maybe, but only for the first month or two."
    },
    { //dialogue 83
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Wait, how long have you been here?"
    },
    { //dialogue 84
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I don't know anymore, a year maybe?"
    },
    { //dialogue 85
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "A full year??? Damn..."
    },
    { //dialogue 86
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Oh don't worry, you'll experience it yourself too."
    },
    { //dialogue 87
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "I mean, it depends..."
    },
    { //dialogue 88
        "bg": "beach",
        "char1": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "On what? On those two incompetent idiots?"
    },
    { //dialogue 89
        "bg": "beach",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "They have ONE job that they somehow manage to fail times and times again!"
    },
    { //dialogue 90
        "bg": "beach",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "They also always mention some paperwork but never explain it!"
    },
    { //dialogue 91
        "bg": "beach",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I worked with papers my entire life, it can't be that hard!"
    },
    { //dialogue 92
        "bg": "beach",
        "char1": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Working with papers all life? Sounds like torture to me."
    },
    { //dialogue 93
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Surprisingly calming believe it or not."
    },
    { //dialogue 94
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Wouldn't say that works for me."
    },
    { //dialogue 95
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "What did you even do in life to find it calming?"
    },
    { //dialogue 96
        "bg": "beach",
        "char1": {
            "emotion": "HAPPY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Well, I worked with papers, crazy right?"
    },
    { //dialogue 97
        "bg": "beach",
        "char1": {
            "emotion": "HAPPY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "I don't know what else did I expect."
    },
    { //dialogue 98
        "bg": "beach",
        "char1": {
            "emotion": "HAPPY",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "But it can't be the only thing you did, right?"
    },
    { //dialogue 99
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Well it surely felt like it, as far as I can remember."
    },
    { //dialogue 100
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "From school to college, from college to work, from work to death."
    },
    { //dialogue 101
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "All I can remember in those times is working with papers."
    },
    { //dialogue 102
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "But what about like, having fun, hanging out with friends, family?"
    },
    { //dialogue 103
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "You know, doing something outside of work?"
    },
    { //dialogue 104
        "bg": "beach",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Only thing I can remember doing outside of that is going to the beach, like this one, and just looking at it."
    },
    { //dialogue 105
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "animation": "disappear",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I tried to find some deep philosophical meaning in it, but there was none."
    },
    { //dialogue 106
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I just didn't know what else to do."
    },
    { //dialogue 107
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "..."
    },
    { //dialogue 108
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Why did you always work so much?"
    },
    { //dialogue 109
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "..."
    },
    { //dialogue 110
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I was always told to be the number one at everything."
    },
    { //dialogue 111
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I was always tried to be the first in class, college, workplace, everywhere."
    },
    { //dialogue 112
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "If I wasn't, I felt worthless or useless."
    },
    { //dialogue 113
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I pushed away so many people just to work even more."
    },
    { //dialogue 114
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "And even when I became the first in whatever I was doing."
    },
    { //dialogue 115
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I felt nothing."
    },
    { //dialogue 116
        "bg": "elisebeach1",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "..."
    },
    { //dialogue 117
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "..."
    },
    { //dialogue 118
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Did you ever want to do something outside of your usual work?"
    },
    { //dialogue 119
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "You know, just to have fun like everyone else."
    },
    { //dialogue 120
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I guess I did, sometimes."
    },
    { //dialogue 121
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Everytime I heard people around the street, or in the work place."
    },
    { //dialogue 122
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I was thinking, what it would be like to live a life like theirs."
    },
    { //dialogue 123
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "But I guess it was too late for me."
    },
    { //dialogue 124
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "It was the life I've chosen."
    },
    { //dialogue 125
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I have no one else to blame other than myself."
    },
    { //dialogue 126
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "...."
    },
    { //dialogue 127
        "bg": "elisebeach2",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 128
        "bg": "elisebeach3",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "**SPLAT**"
    },
    { //dialogue 129
        "bg": "elisebeach4",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "WHAT THE HELL ARE YOU DOING??!!"
    },
    { //dialogue 130
        "bg": "elisebeach5",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "You lost."
    },
    { //dialogue 131
        "bg": "elisebeach4",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "WHAT??? YOU JUST THREW WET SAND AT ME!!"
    },
    { //dialogue 132
        "bg": "elisebeach5",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Yes, and you lost."
    },
    { //dialogue 133
        "bg": "elisebeach4",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "I AM STANDING OUT HERE, SPILLING MY DAMN LIFE STORY HERE!!"
    },
    { //dialogue 134
        "bg": "elisebeach4",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "AND OUT OF ALL THE THINGS YOU COULD'VE DONE!!"
    },
    { //dialogue 135
        "bg": "elisebeach4",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "YOU THROW SAND AT ME!!??"
    },
    { //dialogue 136
        "bg": "elisebeach6",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Look, you can spend your entire life, and in our case death, working and being all grumpy and stuff."
    },
    { //dialogue 137
        "bg": "elisebeach7",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Or, you can take a chance and just."
    },
    { //dialogue 138
        "bg": "elisebeach7",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Have some dumb fun."
    },
    { //dialogue 139
        "bg": "elisebeach7",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Especially since here you don't really have any exuses not to."
    },
    { //dialogue 140
        "bg": "elisebeach8",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "...."
    },
    { //dialogue 141
        "bg": "elisebeach9",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": ".... Can you stop throwing sand at me at least for a minute??!!"
    },
    { //dialogue 142
        "bg": "elisebeach6",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Make me."
    },
    { //dialogue 143
        "bg": "elisebeach10",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "....Oh you asked for it!"
    },
    { //dialogue 144
        "bg": "elisebeach10",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "GAH!"
    },
    { //dialogue 145
        "bg": "elisebeach10",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "How do YOU like it huh??"
    },
    { //dialogue 146
        "bg": "elisebeach10",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Ah geez it's in my eyes!"
    },
    { //dialogue 147
        "bg": "elisebeach10",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "No exuses, you started it!"
    },
    { //dialogue 148
        "bg": "elisebeach10",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Come on! I just tried to-"
    },
    { //dialogue 149
        "bg": "elisebeach10",
        "char1": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "NO EXUSES! HAHAHA!"
    },
    { //dialogue 150
        "bg": "beach",
        "char1": {
            "emotion": "LAUGH",
            "animation": "appear",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "COME ON MAN TIME OUT TIME OUT!!"
    },
    { //dialogue 151
        "bg": "beach",
        "char1": {
            "emotion": "LAUGH",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Not so brave now huh big boy?"
    },
    { //dialogue 152
        "bg": "beach",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "But hey, thanks."
    },
    { //dialogue 153
        "bg": "beach",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "We should ...."
    },
    { //dialogue 154
        "bg": "beach",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Hang out more often."
    },
    { //dialogue 155
        "bg": "beach",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "No sand throwing though, I can still feel it in my eyes!"
    },
    { //dialogue 155
        "bg": "beach",
        "char1": {
            "emotion": "LAUGH",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Can't guarantee."
    },
    { //dialogue 156
        "bg": "beach",
        "char1": {
            "emotion": "LAUGH",
            "animation": "disappear",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Come on man! Let's just go back home, or anywhere with less sand!"
    },
    { //dialogue 157
        "bg": "beach",
        "char1": {
            "emotion": "LAUGH",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Alright alright, crybaby."
    },
    { //dialogue 158
        "bg": "beach",
        "char1": {
            "emotion": "LAUGH",
            "name": "Elise"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "I'M NOT!"
    },
    { //dialogue 159
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Grace"
        },
        "talker": "char1",
        "say": ".... Do you have ....."
    },
    { //dialogue 160
        "bg": "house",
        "char1": {
            "emotion": "SMUG",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "A queen?"
    },
    { //dialogue 161
        "bg": "house",
        "char1": {
            "emotion": "SMUG",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "Go fish."
    },
    { //dialogue 162
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
        "say": "MOTHERFU-"
    },
    { //dialogue 163
        "bg": "house",
        "char1": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Well hi."
    },
    { //dialogue 164
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Hey man, where have you been."
    },
    { //dialogue 165
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "You know just hanging out."
    },
    { //dialogue 166
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "char2": {
            "emotion": "HAPPY",
            "animation": "appear",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Throwing sand."
    },
    { //dialogue 167
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "That too I guess."
    },
    { //dialogue 168
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "So what happened to the demon dude."
    },
    { //dialogue 169
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Grace"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Oh he's right there."
    },
    { //dialogue 170
        "bg": "house",
        "char1": {
            "emotion": "TIEDUP",
            "animation": "appear",
            "name": "Samael"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "...."
    },
    { //dialogue 171
        "bg": "house",
        "char1": {
            "emotion": "TIEDUP",
            "name": "Samael"
        },
        "char2": {
            "emotion": "LAUGH",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Heh."
    },
    { //dialogue 172
        "bg": "house",
        "char1": {
            "emotion": "TIEDUP",
            "name": "Samael"
        },
        "char2": {
            "emotion": "LAUGH",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "This is humiliating."
    },
    { //dialogue 173
        "bg": "house",
        "char1": {
            "emotion": "TIEDUP",
            "name": "Samael"
        },
        "char2": {
            "emotion": "GRUMPY",
            "animation": "appear",
            "name": "Eve"
        },
        "talker": "char2",
        "say": "This is what you get for ruining my surprise!"
    },
    { //dialogue 174
        "bg": "house",
        "char1": {
            "emotion": "TIEDUP2",
            "name": "Samael"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Eve"
        },
        "talker": "char1",
        "say": "I am going to"
    },
    { //dialogue 175
        "bg": "house",
        "char1": {
            "emotion": "TIEDUP2",
            "name": "Samael"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Eve"
        },
        "talker": "char1",
        "say": "Kill you"
    },
    { //dialogue 176
        "bg": "house",
        "char1": {
            "emotion": "TIEDUP2",
            "name": "Samael"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Eve"
        },
        "talker": "char1",
        "say": "And then kill you again..."
    },
    { //dialogue 177
        "bg": "house",
        "char1": {
            "emotion": "HAPPY2",
            "animation": "appear",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "So what are you playing here."
    },
    { //dialogue 178
        "bg": "house",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "Oh just a little game of go fish."
    },
    { //dialogue 179
        "bg": "house",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "With pleasure."
    },
    { //dialogue 180
        "bg": "blackScreen",
        "char1": {
            "emotion": "HAPPY2",
            "animation": "disappear",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "disappear",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "Alright..... Do you have, a queen?"
    },
    { //dialogue 181
        "bg": "blackScreen",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "Go fish."
    },
    { //dialogue 182
        "bg": "blackScreen",
        "char1": {
            "emotion": "HAPPY2",
            "name": "Elise"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "MOTHERFU-"
    },
    { //dialogue 182
        "bg": "blackScreen",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "End of chapter 2."
    },
    { //dialogue 182
        "bg": "blackScreen",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "Thank you for reading."
    },
];

const exit = "../../index.html";