let tutorialSlide = 0;
let tutorialImg = document.querySelector("#tutorialImg");
tutorialImg.src = "./media/placeholder0.png";

let nextSlide = () => {
    if (tutorialSlide < 4) {
        tutorialImg.src = "./media/placeholder" + String(++tutorialSlide) + ".png";
    }
    else{
        window.location.href = "quiz.html";
    }
}