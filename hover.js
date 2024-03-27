let img = document.getElementById("img");
let chapters = document.getElementsByClassName("chapters")[0].children;

for (let chapter of chapters) {
  let src;
  switch (chapter.id) {
    case "0":
      src = "prologuecover.png";
      break;
    case "1":
      src = "ch1cover.png";
      break;
    case "2":
      src = "ch2cover.png";
      break;
    case "3":
      src = "ch3cover.png";
      break;
    case "4":
      src = "ch4cover.png";
      break;
    // case "5":
    //   src = "placeholder1.png";
    // break;
    // case "6":
    //   src = "placeholder1.png";
    // break;
    default:
      src = "prologuecover.png";
  }
  chapter.addEventListener("mouseover", (event) => { img.src = src; });
}