const quiz = [
    {
        question: "what is 1",
        options : ["1", "2", "3", "4"],
        answer: "2"
        //this is merely an example and more can be added
    },
];
const questionget = document.getElementById("question");
const optionsget = document.getElementById("options");
const nextget = document.getElementById("next");

let queston = 0;
let score = 0;

function questioning(){
    const question = quiz[queston];
    questionget.innerText = question.question;
    optionsget.innerHTML = "";
    


}