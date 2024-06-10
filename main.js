let tutorialSlide = 0;
document.querySelector("#tutorialImg").src = "./media/placeholder0.png";

let nextSlide = event => {
    if (tutorialSlide < 4) {
        event.target.src = "./media/placeholder" + String(++tutorialSlide) + ".png";
    }
}