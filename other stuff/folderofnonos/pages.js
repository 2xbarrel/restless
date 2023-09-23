let button1 = document.getElementById("button1")

let button2 = document.getElementById("button2")

let counter = 1;

let max_img = 5;

let page = document.getElementById("page");

function Button1() {
    counter -= 1;
    if (counter < 1) {
        counter = 1;
    }
    page.setAttribute("src", `kevin${counter}.png`); 
}

function Button2() {
    counter += 1;
    if (counter > max_img) {
        counter = max_img;
    }
    page.setAttribute("src", `kevin${counter}.png`); 
}