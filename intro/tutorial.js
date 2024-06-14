let tutorialSlide = 0; // current slide
const tutorialImg = document.querySelector("#tutorialImg"); // gets the img element
tutorialImg.src = "../media/placeholder0.png"; // set image

// goes to next slide on click
let nextSlide = () => {
    if (tutorialSlide < 4) {
        tutorialImg.src = "../media/placeholder" + String(++tutorialSlide) + ".png"; // changes img src to next slide's img
    }
    else{
        window.location.href = "quiz.html"; // once gone through all the slides, redirect to quiz
    }
}