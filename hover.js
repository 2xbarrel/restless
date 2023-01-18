let img = document.getElementById("img");
let chapters = document.getElementsByClassName("chapters")[0].children;

for (let chapter of chapters) {
  let src;
  switch (chapter.id) {
    case "ch1":
      src = "ch1cover.png";
      break;
    case "ch2":
      src = "placeholder1.png";
      break;
    default:
      src = "ch1cover.png";
  }
  chapter.addEventListener("mouseover", (event) => { img.src = src; });
}