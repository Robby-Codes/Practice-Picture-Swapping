const pics = [
    "imgs/profile.jpg",
    "imgs/fullview.jpg",
    "imgs/fullskeleton.jpeg",
    "imgs/side.jpg",
    "imgs/back1.jpg",
    "imgs/back2.jpg",
    "imgs/back3.jpg",
]
var btn = document.querySelector("button");
var img = document.querySelector("img");
let index = 0;

btn.addEventListener("click", function () {
    if (index !== pics.length - 1) {
        img.src = pics[index += 1];
    } else {
        index = 0;
        img.src = pics[index];
    }
});
