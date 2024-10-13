let countHome = 0
let countGuest = 0

let home_score = document.getElementById("home-score")
let guest_score = document.getElementById("guest-score")
let gameFinish = document.getElementById("gameSet-element")

// 1 Points
function addOnePointHome() {
    countHome += 1
    home_score.textContent = countHome  
}

function addOnePointGuest() {
    countGuest += 1
    guest_score.textContent = countGuest   
}

// 2 Points
function addTwoPointHome() {
    countHome += 2
    home_score.textContent = countHome  
}

function addTwoPointGuest() {
    countGuest += 2
    guest_score.textContent = countGuest   
}

// 3 Points
function addThreePointHome() {
    countHome += 3
    home_score.textContent = countHome  
}

function addThreePointGuest() {
    countGuest += 3
    guest_score.textContent = countGuest   
}

function resetHomeScore() {
    countHome = 0
    home_score.textContent = 0
}

function resetGuestScore() {
    countGuest = 0
    guest_score.textContent = 0
}

function gameSet() {
    if(countHome == 0 && countGuest == 0)
        gameFinish.textContent = "The Game haven't started yet!"
    else if (countHome == countGuest)
    {
        gameFinish.textContent = "Draw!"
    }
    else if (countHome > countGuest)
    {
        gameFinish.textContent = "Home Won!"
    }
    else 
        gameFinish.textContent = "Guest Won!"
}

function resetBoth() {
    countHome = 0
    home_score.textContent = 0
    countGuest = 0
    guest_score.textContent = 0

    gameFinish.textContent = ""
}
   