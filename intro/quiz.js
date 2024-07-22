const quiz = [
    {
        q: "what is a seed",
        o: ["peanut butter", "chicken", "spread of pathogen", "pork"],
        a: "spread of pathogen"
        //this is an example and more can be added
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

// update selectedOption when user selects smth
const optionSelectHandler = event => {
    selectedOption = event.target.value;
}

// set qn and options
const setQn = () => {
    q.innerHTML = quiz[currQn].q;
    for (let i = 0, options = quiz[currQn].o; i < 4; i++) {
        document.querySelector(`#o${i + 1}Label`).innerHTML = options[i];
        document.querySelector(`#o${i + 1}`).value = options[i];
        document.querySelector(`#o${i + 1}`).checked = false; // Uncheck all options
    }
    selectedOption = "";
}
// set first qn
setQn();

const nextBtnClickHandler = event => {
    event.preventDefault();

    if (selectedOption == "") {
        alert("Please select an option!");
        return;
    } else {
        score += (selectedOption == quiz[currQn].a ? 1 : 0);
        currQn++;
    }

    if (!quiz[currQn]) {
        alert("Your score is: " + String(score)); // Make better final score popup (afterwards, redirect to actual game)
        localStorage.setItem("hasVisited", true);
        window.location.href = "./";
    }

    // change html elements to next qn and options
    setQn();
}