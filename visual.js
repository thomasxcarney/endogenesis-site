// const imgArr = ["logo.png", "eg-sticker.png", "tamara-sticker.png"];
const imgArr = [
  "images/visual/logo.png",
  "images/visual/eg-sticker.png",
  "images/visual/tamara-sticker.png",
];

const container = document.getElementById("visual-main-content");
const imgTag = document.getElementById("imgTag");

// imgArr.forEach(
//   (image) =>
//     (container.innerHTML += '<img src="images/visual/' + image + '"/>'),
// );

let index = 0;

function changeImg() {
  index = index + 1;
  if (index == imgArr.length) index = 0;
  //   imgTag.src = "images/visual/" + imgArr[index];
  imgTag.src = imgArr[index];
}

changeImg();
setInterval(function () {
  changeImg();
}, 1000);
