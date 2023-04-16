let dialogueNum = 0;
let char1 = document.getElementById("char1");
let char2 = document.getElementById("char2");
let emotion1 = "IDLE";
let emotion2 = "IDLE";

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

const disAppear = [
    { opacity: 1 },
    { opacity: 0 },
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

    char1.setAttribute("src", `char1${emotion1}.png`);
    char2.setAttribute("src", `char2${emotion2}.png`);

    dialogueNum += 1;

    switch (dialogueNum) {
        case 1:
            emotion1 = "HAPPY";
            emotion2 = "IDLE";
            char1.animate(appear, appearTiming);
            dialogue.innerHTML = `CharName:
            <p>This is a test NUMBER 2 bla bla bla bla bla bla bla bla</p>`
            break;
        case 2:
            emotion1 = "ANGRY";
            emotion2 = "HAPPY";
            char2.animate(appearRight, appearTiming);
            dialogue.innerHTML = `CharName:
            <p>This is a test NUMBER 3 bla bla bla bla bla bla bla bla</p>`
            break;
        case 3:
            emotion1 = "IDLE"
            emotion2 = "ANGRY";
            char1.animate(shake, timing);
            dialogue.innerHTML = `CharName:
            <p>This is a test NUMBER 4 bla bla bla bla bla bla bla bla</p>`
            break;
        case 4: 
            emotion1 = "ANGRY";
            emotion2 = "IDLE";
            char2.animate(shake, timing);
            dialogue.innerHTML = `CharName:
            <p>This is a test NUMBER 5 bla bla bla bla bla bla bla bla</p>`
            break;
        case 5: 
            char1.animate(shake, timing);
            char2.animate(shake, timing);
            emotion1 = "HAPPY";
            emotion2 = "HAPPY";
            dialogue.innerHTML = `CharName:
            <p>This is a test NUMBER 6 bla bla bla bla bla bla bla bla</p>`
            break;
        case 6: 
            char1.animate(disAppear, appearTiming);
            char2.animate(disAppear, appearTiming);
            dialogue.innerHTML = `CharName:
            <p>This is a test NUMBER 7 bla bla bla bla bla bla bla bla</p>`
            dialogueNum = 0;
            break;
    };
    
    console.log(dialogueNum);
});