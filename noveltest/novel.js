let dialogueNum = 0;
let char1 = document.getElementById("char1");
let char2 = document.getElementById("char2");
let emotion = "IDLE";

const visual = document.getElementById("visual");
const dialogue = document.getElementById("dialogue");
const button = document.getElementById("button");

const shake = [
    { transform: "translateX(0)" },
    { transform: "translateX(15px)" },
    { transform: "translateX(-15px)" },
    { transform: "translateX(15px)" },
    { transform: "translateX(0)" },
];

const tilt = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(15deg)" },
    { transform: "rotate(0deg)" },
    { transform: "rotate(-15deg)" },
    { transform: "rotate(0deg)" },
];

const appear = [
    { opacity: 0 },
    { opacity: 1 },
];

const appearRight = [
    { transform: "translateX(0px)" },
    { transform: "translateX(200px)" },
    { opacity: 0 },
    { opacity: 1 },
];

const timing = {
    duration: 200,
    iterations: 2,
};

const appearTiming = {
    duration: 400,
    iterations: 1,
    fill: "forwards",
};

button.addEventListener("click", async () => {

    char1.setAttribute("src", `char1${emotion}.png`);
    char2.setAttribute("src", `char1${emotion}.png`);

    dialogueNum += 1;

    switch (dialogueNum) {
        case 1:
            emotion = "HAPPY";
            char1.animate(appear, appearTiming);
            dialogue.innerHTML = `Barrel:
            <p>This is a test NUMBER 2 bla bla bla bla bla bla bla bla</p>`
            break;
        case 2:
            emotion = "ANGRY";
            char2.animate(appearRight, appearTiming);
            dialogue.innerHTML = `Barrel:
            <p>This is a test NUMBER 3 bla bla bla bla bla bla bla bla</p>`
            break;
        case 3:
            emotion = "IDLE"
            char1.animate(tilt, timing);
            dialogue.innerHTML = `Barrel:
            <p>This is a test NUMBER 4 bla bla bla bla bla bla bla bla</p>`
            break;
        case 4: 
            window.location.href = "../index.html";
            break;
    };
    
    console.log(dialogueNum);
});