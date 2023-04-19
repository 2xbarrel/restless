const visual = document.getElementById("visual");
const dialogue = document.getElementById("dialogue");
const button = document.getElementById("button");

let dialogueBetter = script[0];

const animations = {
    "shake": [
        { transform: "translateX(0)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(-15px)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(0)" },
    ],
    "shakeChar2": [
        { transform: "translateX(0) scaleX(-1)" },
        { transform: "translateX(15px) scaleX(-1)" },
        { transform: "translateX(-15px) scaleX(-1)" },
        { transform: "translateX(15px) scaleX(-1)" },
        { transform: "translateX(0) scaleX(-1)" },
    ],
    "appear": [
        { opacity: 0 },
        { opacity: 1 },
    ],
    "disappear": [
        { opacity: 1 },
        { opacity: 0 },
    ],
    "appearRight": [
        { transform: "translateX(0px)" },
        { transform: "translateX(200px)" },
        { opacity: 0 },
        { opacity: 1 },
    ]
};

const timings = {
    "shake": {
        duration: 200,
        iterations: 2,
    },
    "shakeChar2": {
        duration: 200,
        iterations: 2,
    },
    "appear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    },
    "disappear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    },
    "appearRight": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    }
};

const extensions = {
    "IDLE": ".png",
    "HAPPY": ".png",
    "ANGRY": ".png",
    "CONFUSED": ".png",
    "SCARED": ".gif",
    "LAUGH": ".gif",
    "GRUMPY": ".gif"
};

function setChar(charName, dialogue) {
    if (dialogue[charName]) {
        let char = document.getElementById(charName);
        let imageSrc = `${dialogue[charName]["name"]}${dialogue[charName]["emotion"]}${extensions[dialogue[charName]["emotion"]]}`;
        let animationName = dialogue[charName]["animation"];
        char.setAttribute("src", imageSrc);
        if (animationName) {
            char.animate(animations[animationName], timings[animationName]);
        }
    }
};

dialogue.innerHTML = `${dialogueBetter[dialogueBetter["talker"]]["name"]}:<p>${dialogueBetter["say"]}</p>`;

setChar("char1", dialogueBetter);
setChar("char2", dialogueBetter);

let dialogueNum = 0;

button.addEventListener("click", async () => {
    dialogueNum++;
    
    let dialogueBetter = script[dialogueNum];

    if (dialogueNum == script.length){
        window.location.href = exit;
    };
    
    setChar("char1", dialogueBetter);
    setChar("char2", dialogueBetter);

    dialogue.innerHTML = `${dialogueBetter[dialogueBetter["talker"]]["name"]}:<p>${dialogueBetter["say"]}</p>`;
});