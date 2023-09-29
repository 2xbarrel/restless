let img = document.getElementById("img");
let chapters = document.getElementsByClassName("chapters")[0].children;

for (let chapter of chapters) {
  let src;
  switch (chapter.id) {
    case "1":
      src = "prologuecover.png";
      break;
    case "2":
      src = "ch1cover.png";
      break;
    case "3":
      src = "ch2cover.png";
      break;
    default:
      src = "prologuecover.png";
  }
  chapter.addEventListener("mouseover", (event) => { img.src = src; });
}