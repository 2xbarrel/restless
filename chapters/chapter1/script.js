const script = [
    { //dialogue 1
        "bg": "blackScreen",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "October 24th, 09:26"
    },
    // { //dialogue 2
    //     "bg": "house",
    //     "char1": {
    //         "emotion": "IDLE",
    //         "name": "STOPLOOKINGHERE"
    //     },
    //     "talker": "char1",
    //     "say": "Location: House."
    // },
    { //dialogue 3
        "bg": "house",
        "char1": {
            "emotion": "OWIE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Sleeping on the couch was less pleasant than expected..."
    },
    { //dialogue 4
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Guess everyone else is still sleeping."
    },
    { //dialogue 5
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Well, I might as well take a look around outside."
    },
    { //dialogue 6
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "This place is nice I guess..."
    },
    { //dialogue 7
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Wait a minute, what's is that?"
    },
    { //dialogue 8
        "bg": "bird1", 
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "..."
    },
    { //dialogue 9
        "bg": "bird2", 
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "....."
    },
    { //dialogue 10
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "... Huh, can't say I expected to see birds in here."
    },
    { //dialogue 11
        "bg": "town",
        "char1": {
            "emotion": "SCARED",
            "animation": "shake",
            "name": "Erik"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "shakeChar2",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "DON'T COME NEAR IT!!!"
    },
    { //dialogue 12
        "bg": "town",
        "char1": {
            "emotion": "SCARED",
            "name": "Erik"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "shakeChar2",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "DUDE WHAT THE HELL??? DON'T SNEAK UP ON ME LIKE THAT!!!"
    },
    { //dialogue 13
        "bg": "town",
        "char1": {
            "emotion": "SCARED",
            "animation": "disappear",
            "name": "Erik"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "QUICK, OVER HERE!!!!"
    },
    { //dialogue 14
        "bg": "behindHouse",
        "char1": {
            "emotion": "ANGRY",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "COME ON MAN STOP DRAGGING ME!"
    },
    { //dialogue 15
        "bg": "behindHouse",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "WE CAN GET TO MY ROOM THROUGH HERE!"
    },
    { //dialogue 16
        "bg": "behindHouse",
        "char1": {
            "emotion": "SCARED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "WOAH DUDE EASY!"
    },
    { //dialogue 17
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "**SLAM**"
    },
    { //dialogue 18
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "ouch..."
    },
    { //dialogue 19
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Sorry, Artemiy, but I had to act fast."
    },
    { //dialogue 20
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "I swear I'm going to punch you."
    },
    { //dialogue 21
        "bg": "EriksRoom",
        "char1": {
            "emotion": "OWIE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Come on at least show some gratitude, I just saved you!"
    },
    { //dialogue 22
        "bg": "EriksRoom",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Yeah sure, fine, whatever, did you really have to throw me in here though?!"
    },
    { //dialogue 23
        "bg": "EriksRoom",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Okay I admit, maybe I overreacted..."
    },
    { //dialogue 24
        "bg": "EriksRoom",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Maybe?"
    },
    { //dialogue 25
        "bg": "EriksRoom",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "What's with all the alien stuff anyway??"
    },
    { //dialogue 26
        "bg": "EriksRoom",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I'm telling you, we are surrounded by aliens! You just saw one in the tree house!"
    },
    { //dialogue 27
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Did I? That just looked like a bird."
    },
    { //dialogue 28
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Yeah, LOOKED like, it's been spying on me from the day I got locked up in here."
    },
    { //dialogue 29
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Aliens in the afterlife? That's new."
    },
    { //dialogue 29
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Only IF this is an afterlife, what if we're all obducted by aliens??!!"
    },
    { //dialogue 30
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I've spent my whole life dealing with aliens and I'm not stopping now!!"
    },
    { //dialogue 31
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Must have been a rough life huh?"
    },
    { //dialogue 32
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Yeah, I was trying to save everyone from the inevitable and they all just call me crazy!"
    },
    { //dialogue 33
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "One day everyone will remember me as the one who saw through aliens bird-like disguise and they'll regret calling me crazy!"
    },
    { //dialogue 34
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Birds are also aliens?"
    },
    { //dialogue 34
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Not all of them, but most, I mean do you yourself believe that there are over 9000 types of birds out there?"
    },
    { //dialogue 35
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Uhh, I think there are that many birds yeah."
    },
    { //dialogue 36
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Oh yeah? Name at least 5!"
    },
    { //dialogue 39
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Sparrow, pigeon, crow, eagle uhhhhhh .... parrot?"
    },
    { //dialogue 40
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "animation": "shakeChar2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Okay well .... uh .... how many did you touch? They're all just holograms!"
    },
    { //dialogue 41
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Okay you got me there, but how can you be sure they're aliens?"
    },
    { //dialogue 42
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Well, because I'm not going to just believe some book that there are thousands of types of birds! They are probably cameras that aliens use to spy on us!"
    },
    { //dialogue 43
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Jeez dude, who hurt you?"
    },
    { //dialogue 43
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "animation": "shakeChar2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "ALIENS!!!"
    },
    { //dialogue 44
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Aliens?"
    },
    { //dialogue 45
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "animation": "shakeChar2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "ALIENS!!!!!!"
    },
    { //dialogue 46
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "How?"
    },
    { //dialogue 47
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "..."
    },
    { //dialogue 48
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "They didn't hurt me, exactly..."
    },
    { //dialogue 49
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Then why are you so obsessed with them?"
    },
    { //dialogue 50
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "My little sister used to be huge bird lover, we went to the woods almost every day to look at these things."
    },
    { //dialogue 51
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Then one day I lost sight of her, after that I never saw her again."
    },
    { //dialogue 52
        "bg": "EriksRoom",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I spent the rest of the month looking for her while those damn birds just watched me."
    },
    { //dialogue 53
        "bg": "EriksRoom",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "It was almost like they were mocking me, that's when I knew that these things took her."
    },
    { //dialogue 54
        "bg": "EriksRoom",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "That day I swore that these goddamn aliens will never take anyone I care ever again!"
    },
    { //dialogue 55
        "bg": "EriksRoom",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Erik, dude, I'm sorry, I didn't know that happened to you."
    },
    { //dialogue 56
        "bg": "EriksRoom",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "It's alright, I'm over this now."
    },
    { //dialogue 57
        "bg": "EriksRoom",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "But I'll never stop fighting these damn aliens!"
    },
    { //dialogue 58
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Must be tough doing that all by yourself."
    },
    { //dialogue 59
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Yeah, nothing I can really do about it, Elise is too busy with ... something, Grace makes fun of me and those angels and demons can't be trusted."
    },
    { //dialogue 60
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Can I help?"
    },
    { //dialogue 61
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Erik"
        },
        "talker": "char2",
        "say": ".... You will?"
    },
    { //dialogue 62
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Of course! I don't have anything better to do here anyway."
    },
    { //dialogue 63
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Really? Man, thank you, things will get much easier with you on board!"
    },
    { //dialogue 64
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I promise you we will escape this place together man!"
    },
    { //dialogue 65
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Yeah man, sure."
    },
    { //dialogue 66
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Meet me here tomorrow I'll show you my plans!"
    },
    { //dialogue 67
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Sure thing man, I'll see you tomorrow."
    },
    { //dialogue 68
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Look out for aliens dude!"
    },
    { //dialogue 69
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Yeah man, I got it."
    },
    { //dialogue 70
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "October 25th, 11:43"
    },
    { //dialogue 71
        "bg": "house",
        "char1": {
            "emotion": "OWIE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "Man, I really should find another place to sleep, this couch is most uncomfortable thing I've ever slept in..."
    },
    { //dialogue 72
        "bg": "house",
        "char1": {
            "emotion": "OWIE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Good morning, if I can even call it good."
    },
    { //dialogue 73
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Oh hey! Good morning, how you doing and .... stuff?"
    },
    { //dialogue 74
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "I think I should be asking you that after hearing you and Erik scream at each other outside."
    },
    { //dialogue 75
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Oh, that, well-"
    },
    { //dialogue 76
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Aliens?"
    },
    { //dialogue 77
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": ".... Aliens."
    },
    { //dialogue 78
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": ".... Aliens."
    },
    { //dialogue 79
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "It's always aliens with that guy, aliens this aliens that."
    },
    { //dialogue 80
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Well yes he can go a little overboard but his heart is in the right place."
    },
    { //dialogue 81
        "bg": "house",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Maybe you're right, but that doesn't make him less annoying."
    },
    { //dialogue 82
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "I should probably go meet up with him, I promised that I would help him fight aliens or whatever."
    },
    { //dialogue 83
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Please don't tell me you're into all this too now."
    },
    { //dialogue 84
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "No no no it's not like that, I just think Erik could use a little company."
    },
    { //dialogue 85
        "bg": "house",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Who doesn't."
    },
    { //dialogue 86
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "I'll take that as an invitation to hang out later."
    },
    { //dialogue 87
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "What? No it's not-"
    },
    { //dialogue 88
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char1",
        "say": "Ok talk to you later byeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!"
    },
    { //dialogue 89
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "..."
    },
    { //dialogue 90
        "bg": "house",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Elise"
        },
        "talker": "char2",
        "say": "Bonehead..."
    },
    { //dialogue 91
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "disappear",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char2",
        "say": "knock knock"
    },
    { //dialogue 92
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "Erik? You there man?"
    },
    { //dialogue 93
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "Erik? You there man?"
    },
    { //dialogue 94
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Oh hey! You actually came!"
    },
    { //dialogue 95
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Of course I did, Lebedev's keep their promises."
    },
    { //dialogue 96
        "bg": "EriksRoom",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "animation": "shakeChar2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Alright, no time to waste, to fight aliens we need to gear up!"
    },
    { //dialogue 97
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Ok? Do we have any gear?"
    },
    { //dialogue 98
        "bg": "EriksRoom",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "No, not really, but I think we can find something in the shed outside."
    },
    { //dialogue 99
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Let's go then!"
    },
    { //dialogue 100
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SMUG",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Let's go!"
    },
    { //dialogue 101
        "bg": "EriksRoom",
        "char1": {
            "emotion": "HAPPY",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SMUG",
            "animation": "disappear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Although I don't think whatever's in the shed is going to help us..."
    },
    { //dialogue 102
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Now whatever you do, look natural! We don't want them to suspect anything!"
    },
    { //dialogue 103
        "bg": "town",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Aye aye captain."
    },
    { //dialogue 104
        "bg": "shed",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "We should be clear here, take whatever you think will be useful."
    },
    { //dialogue 105
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Got it, but what's the plan?"
    },
    { //dialogue 106
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "....The plan?"
    },
    { //dialogue 107
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Uhhhh Yes the plan! We run into the woods and try to capture one of the aliens!"
    },
    { //dialogue 108
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Why?"
    },
    { //dialogue 109
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "To uhhhh ... Keep it as a hostage! We'll return it only if they let us out of this place!"
    },
    { //dialogue 110
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Well, guess that's better than no plan."
    },
    { //dialogue 111
        "bg": "shed",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "Oooh that won't work boys ooooh~"
    },
    { //dialogue 112
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "shakeChar2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Th- They're on to us!!!"
    },
    { //dialogue 113
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Sounds like Grace."
    },
    { //dialogue 114
        "bg": "shed",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "Ohh that behaviour is unacceptable, I think we're gonna need to execute both of you oooooh~"
    },
    { //dialogue 115
        "bg": "shed",
        "char1": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "shakeChar2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "NONONONODONTDOTHATIBEGYOU!!!!"
    },
    { //dialogue 116
        "bg": "shed",
        "char1": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char1",
        "say": "Oooooh the only way to be forgiven is to go back and do all of Grace's dishes ooooh~"
    },
    { //dialogue 117
        "bg": "shed",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "animation": "shakeChar2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "YES YES WILL DO PLEASE FORGIVE US!!!"
    },
    { //dialogue 118
        "bg": "shed",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Wait, Erik, let me handle this."
    },
    { //dialogue 119
        "bg": "shed",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SCARED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "HEY GRACE! GRACE, WE KNOW IT'S YOU STOP THIS!"
    },
    { //dialogue 120
        "bg": "shed",
        "char1": {
            "emotion": "ANGRY",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "Oh come on you're no fun~"
    },
    { //dialogue 121
        "bg": "shed",
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
        "say": "GRACE I SWEAR TO GOD I ALMOST HAD A HEART ATTACK!"
    },
    { //dialogue 122
        "bg": "shed",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "LAUGH",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "So I got you good huh?"
    },
    { //dialogue 123
        "bg": "shed",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "LAUGH",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "DAMNIT GRACE WE ARE ON AN IMPORTANT MISSION HERE!!!"
    },
    { //dialogue 124
        "bg": "shed",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "HAPPY",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "I'm sure you are~"
    },
    { //dialogue 125
        "bg": "shed",
        "char1": {
            "emotion": "GRUMPY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "LAUGH",
            "animation": "disappear",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "Well alright you boys have fun~"
    },
    { //dialogue 126
        "bg": "shed",
        "char1": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "CONFUSED",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Man! What did I ever do to her?!"
    },
    { //dialogue 127
        "bg": "shed",
        "char1": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "CONFUSED",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "From the moment I got here she's been toying with me, doesn't she realize the situation we're in!"
    },
    { //dialogue 128
        "bg": "shed",
        "char1": {
            "emotion": "ANGRY",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Quite the opposite I think..."
    },
    { //dialogue 129
        "bg": "shed",
        "char1": {
            "emotion": "GRUMPY",
            "animation": "shake",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Alright, enough fooling around, let's gear up!"
    },
    { //dialogue 130
        "bg": "shed",
        "char1": {
            "emotion": "GRUMPY",
            "animation": "disappear",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Aye aye..."
    },
    { //dialogue 131
        "bg": "town",
        "char1": {
            "emotion": "GEARDUP",
            "animation": "appear",
            "name": "Erik"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Ok! This is now or never, are you ready?!"
    },
    { //dialogue 132
        "bg": "town",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "char2": {
            "emotion": "GEARDUP",
            "animation": "appear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "I think so?"
    },
    { //dialogue 133
        "bg": "town",
        "char1": {
            "emotion": "GEARDUP",
            "animation": "disappear",
            "name": "Erik"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "talker": "char1",
        "say": "Ok, now .... RUN!!!"
    },
    { //dialogue 134
        "bg": "town",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "char2": {
            "emotion": "GEARDUP",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "talker": "char2",
        "say": "Woah man! Wait for me!"
    },
    { //dialogue 135
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Come on, Erik! Slow down!"
    },
    { //dialogue 136
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Can't we take a little break?"
    },
    { //dialogue 137
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPTIRED",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "We are probably clear here so I suppose we can..."
    },
    { //dialogue 138
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPTIRED",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Man, it's hard to run with pans taped to my shoulders, how are we even supposed to catch a bird like this?"
    },
    { //dialogue 139
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Oh don't worry, I have my methods."
    },
    { //dialogue 140
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "animation": "disappear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Watch and learn!"
    },
    { //dialogue 141
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Are you sure that's a good idea?"
    },
    { //dialogue 142
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Of course! I climbed trees all the time when I were younger!"
    },
    { //dialogue 143
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "STOPLOOKINGHERE"
        },
        "talker": "char2",
        "say": "**CRASH**"
    },
    { //dialogue 144
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPSCARED",
            "animation": "shake",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Erik! Man, are you ok!?"
    },
    { //dialogue 145
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPSCARED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUP",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I'm fine...."
    },
    { //dialogue 146
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPSCARED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "And I got us an alien!"
    },
    { //dialogue 147
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "I thought that would be a little harder."
    },
    { //dialogue 148
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Luckly I'm a professional."
    },
    { //dialogue 149
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "But we shouldn't just stand here! We probably alerted their security systems or whatever!"
    },
    { //dialogue 150
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "But where do we go now?"
    },
    { //dialogue 151
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "animation": "disappear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I know a place, follow me!"
    },
    { //dialogue 152
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Oh come on, running again??"
    },
    { //dialogue 153
        "bg": "woods",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "I'm getting real tired from running..."
    },
    { //dialogue 154
        "bg": "hill",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Don't worry we're almost there."
    },
    { //dialogue 155
        "bg": "hill",
        "char1": {
            "emotion": "GEARDUPTIRED",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Man ... I'm getting out of shape..."
    },
    { //dialogue 156
        "bg": "hill",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Well now all we gotta do is wait until aliens show up for negotiation."
    },
    { //dialogue 157
        "bg": "hill",
        "char1": {
            "emotion": "GEARDUP",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Then I'm gonna lay down for a while..."
    },
    { //dialogue 158
        "bg": "hill",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "animation": "disappear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I guess that won't hurt."
    },
    { //dialogue 159
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "...."
    },
    { //dialogue 160 
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 161
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "So .... How's life?"
    },
    { //dialogue 162
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Well since I'm here, pretty sure it ended."
    },
    { //dialogue 163
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "You still believe that afterlife thing?"
    },
    { //dialogue 164
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Well, yeah, I remember how I died, so I'm probably dead."
    },
    { //dialogue 165
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "You do?"
    },
    { //dialogue 166
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Yeah."
    },
    { //dialogue 167
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "How?"
    },
    { //dialogue 168
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "....."
    },
    { //dialogue 169
        "bg": "hillbuddies2",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "I'd rather not talk about that."
    },
    { //dialogue 170
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Alright, sorry ....."
    },
    { //dialogue 171
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "What about you?"
    },
    { //dialogue 172
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Me?"
    },
    { //dialogue 173
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Yeah, I mean, before the alien stuff."
    },
    { //dialogue 174
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I think it was, pretty boring."
    },
    { //dialogue 175
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Dropped out of college, got a job in some store, lived with my parents."
    },
    { //dialogue 176
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "My parents didn't really like me after I dropped out."
    },
    { //dialogue 177
        "bg": "hillbuddies4",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "But my sister was always there for me."
    },
    { //dialogue 178
        "bg": "hillbuddies4",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "She always waited for me outside the job to take me bird watching."
    },
    { //dialogue 179
        "bg": "hillbuddies4",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Life was simple enough."
    },
    { //dialogue 180
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 181
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "And then she was gone."
    },
    { //dialogue 182
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "........"
    },
    { //dialogue 183
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "When I lost her, I heard a loud sound and a flok of birds flying away."
    },
    { //dialogue 184
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Spent the rest of the month looking for her, but I think I already told you that part."
    },
    { //dialogue 185
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "......"
    },
    { //dialogue 186
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "What did you do after that?"
    },
    { //dialogue 187
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "......"
    },
    { //dialogue 188
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "My parents blamed me for her disappearance and kicked me out of the house."
    },
    { //dialogue 189
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Had to stay at a hotel for a while."
    },
    { //dialogue 190
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Then I started bying alien hunting stuff."
    },
    { //dialogue 191
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "After work I always went to the woods trying to find her."
    },
    { //dialogue 192
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 193
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I think I almost did."
    },
    { //dialogue 194
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Really?"
    },
    { //dialogue 194
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Yes, I heard the same loud sound and the same birds flying away."
    },
    { //dialogue 195
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Moments later, I'm here."
    },
    { //dialogue 196
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I thought this is where they took my sister, but it seems that isn't the case."
    },
    { //dialogue 197
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 198
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "...."
    },
    { //dialogue 199
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Why do you think aliens did it?"
    },
    { //dialogue 200
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 201
        "bg": "hillbuddies3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Who else could've?"
    },
    { //dialogue 202
        "bg": "hillbuddies5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "I don't know, some other dude maybe."
    },
    { //dialogue 203
        "bg": "hillbuddies",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 204
        "bg": "eriksmoment",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "....."
    },
    { //dialogue 205
        "bg": "eriksmoment",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Sometimes I think about it."
    },
    { //dialogue 206
        "bg": "eriksmoment",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "What if it wasn't aliens or some other paranormal thing?"
    },
    { //dialogue 207
        "bg": "eriksmoment",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "What if I just failed as a brother?"
    },
    { //dialogue 208
        "bg": "eriksmoment",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 209
        "bg": "eriksmoment2",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "What if I'm really dead?"
    },
    { //dialogue 210
        "bg": "eriksmoment3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Well, dead or not, you still did your best, right?"
    },
    { //dialogue 211
        "bg": "eriksmoment3",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "We don't always succeed in life, what matters is that you at least tried."
    },
    { //dialogue 212
        "bg": "eriksmoment4",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "You could've easily gave up, but you didn't, you stuck to it until the very end."
    },
    { //dialogue 213
        "bg": "eriksmoment4",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "But also going in cicrles won't get you anywhere, so maybe it's time to let go and rest."
    },
    { //dialogue 214
        "bg": "eriksmoment5",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I just wonder, what really happened there, what killed me and my sister."
    },
    { //dialogue 215
        "bg": "eriksmoment4",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Does it matter now?"
    },
    { //dialogue 216
        "bg": "eriksmoment6",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 217
        "bg": "eriksmoment6",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I guess not..."
    },
    { //dialogue 218
        "bg": "eriksmoment6",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 219
        "bg": "hill",
        "char1": {
            "emotion": "GEARDUP",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "GEARDUPBIRD2",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "You're right, maybe I should let go."
    },
    { //dialogue 220
        "bg": "hill",
        "char1": {
            "emotion": "SAD",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "animation": "appear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "I just need some time alone."
    },
    { //dialogue 221
        "bg": "hill",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "You got it man, you know where to find me if you need me."
    },
    { //dialogue 222
        "bg": "hill",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "animation": "disappear",
            "name": "Erik"
        },
        "talker": "char2",
        "say": "Oh and Artemiy, thank you."
    },
    { //dialogue 223
        "bg": "hill",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "...."
    },
    { //dialogue 224
        "bg": "hill",
        "char1": {
            "emotion": "SAD",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "You got it man."
    },
    { //dialogue 225
        "bg": "house",
        "char1": {
            "emotion": "SAD",
            "animation": "appear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "SAD",
            "name": "Erik"
        },
        "talker": "char1",
        "say": "Man, getting real sad for the guy..."
    },
    { //dialogue 226
        "bg": "house",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "appear",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "So, how did the alien hunt go?"
    },
    { //dialogue 227
        "bg": "house",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "Eh, whateva."
    },
    { //dialogue 228
        "bg": "house",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "And Grace, stop picking on Erik."
    },
    { //dialogue 229
        "bg": "eriksmoment7",
        "char1": {
            "emotion": "SAD",
            "animation": "disappear",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "animation": "disappear",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "He might be loud and obnoxious at times."
    },
    { //dialogue 230
        "bg": "eriksmoment8",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "But he has his reasons."
    },
    { //dialogue 231
        "bg": "blackScreen",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "...."
    },
    { //dialogue 232
        "bg": "blackScreen",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char2",
        "say": "No."
    },
    { //dialogue 233
        "bg": "blackScreen",
        "char1": {
            "emotion": "SAD",
            "name": "Artemiy"
        },
        "char2": {
            "emotion": "IDLE",
            "name": "Grace"
        },
        "talker": "char1",
        "say": "God damnit Grace."
    },
    { //dialogue 234
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
        "say": "End of chapter 1."
    },
    { //dialogue 235
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