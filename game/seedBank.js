const fs = require("fs");

const plantCap = 100;
const specialPlants = [72, 3, 29, 87, 90, 33, 57, 62, 78, 81];
const dropRates = {
    "newPlant": 0.7,
    "specialPlant": 0.1
}

const setUpProfile = profile => {

    fs.readFile("./../media/plants.json", "utf8", function (error, data) {

        if (error) {
            // logging the error
            console.error(error);
    
            throw error;
        }

        profile.plants = JSON.parse(data);
        console.log(playerShit)    ;
        
        // setUpGame();
    });
}

const setUpGame = () => {
    for (let i = 1; i < plantCap; i++) {
        let anchor = document.querySelector("#seedBank");
        let newType = document.querySelector("#locker0").cloneNode(true);
        newType.innerHTML = `locker ${i + 1}: locked`;
        newType.class = "locker";
        newType.id = "locker" + String(i);
        anchor.appendChild(newType);
    }
    
}

let playerShit;

if (false && localStorage.getItem("hasVisited")) {
    playerShit = JSON.parse(localStorage.getItem("hasVisited"));
    setUpGame();
} else {
    playerShit = {
        "cash": 0,
        "upgrades": {
            "rnd": 0,
            "capacity": 0,
            "revenue": 0
        },
        "plants": []
    }
    setUpProfile(playerShit);
}



const fieldWork = () => {
    if (Math.random() < dropRates.newPlant) {
        if (Math.random() < dropRates.specialPlant) {
            
        }
    }
}