const quiz = [
    {
        q: "what is a seed",
        o: ["peanut butter", "chicken", "spread of pathogen", "pork"],
        a: "spread of pathogen"
        //this is merely an example and more can be added
    },
    {
        q: "what is 1",
        o: ["1", "2", "3", "4"],
        a: "2"
    },
    {
        q: "who is the sigma",
        o: ["little john", "kai cenat", "turkish quandale dingle", "blue tie kid"],
        a: "little john"
    },
    false
];
const q = document.getElementById("question");

let currQn = 0;
// this is the quesiton number they are on in index form
let score = 0;

let selectedOption = "";
const optionSelectHandler = event => {
    selectedOption = event.target.value;
}

let setQn = () => {
    q.innerHTML = quiz[currQn].q;
    for (let i = 0, options = quiz[currQn].o; i < 4; i++) {
        document.querySelector(`#o${i + 1}Label`).innerHTML = options[i];
        document.querySelector(`#o${i + 1}`).value = options[i];
        document.querySelector(`#o${i + 1}`).checked = false;
    }
    selectedOption = "";
}
setQn();

const nextBtnClickHandler = event => {
    event.preventDefault();

    if (selectedOption == "") {
        alert("Please select an option!");
        return;
    } else {        
        currQn++;
    }

    if (!quiz[currQn]) {
        // popup with their score
        return;
    }

    setQn();
}

function questioning() {
    // to display the quesitons as they come and go
    const question = quiz[queston];
    // new variable question will be whatever quiz is on in list
    questionget.innerText = question.question;
    // the text of the question div is the text of the question's question section
    optionsget.innerHTML = "";
    // i'm a bit stuck
}