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
// this is the quesiton number they are on in index form
let score = 0;

function questioning(){
    // to display the quesitons as they come and go
    const question = quiz[queston];
    // new variable question will be whatever quiz is on in list
    questionget.innerText = question.question;
    // the text of the question div is the text of the question's question section
    optionsget.innerHTML = "";
    // i'm a bit stuck
    


}