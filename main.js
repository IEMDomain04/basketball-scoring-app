const app = document.getElementById("score-app")

const htmlTemplate = `
    <div class="container">

        <div class="wrapper">
            <h1>Home</h1>
            <h2 id="home-score">0</h2>

            <div class="score-btn-wrapper">
                <button class="plus-one" onclick="addOnePointHome()">+1</button>
                <button class="plus-two" onclick="addTwoPointHome()">+2</button>
                <button class="plus-three" onclick="addThreePointHome()">+3</button>
            </div>
            <button class="reset-home" onclick="resetHomeScore()">Reset</button>
        </div>

        <div class="wrapper">
            <button id="middle-btn" onclick="gameSet()">Set</button>
            <button id="middle-btn" onclick="resetBoth()">Reset</button>
            <h1 id="gameSet-element"></h1>
        </div>

        <div class="wrapper">
            <h1>Guest</h1>
            <h2 id="guest-score">0</h2>

            <div class="score-btn-wrapper">
                <button class="plus-one" onclick="addOnePointGuest()">+1</button>
                <button class="plus-two" onclick="addTwoPointGuest()">+2</button>
                <button class="plus-three" onclick="addThreePointGuest()">+3</button>
            </div>
            <button class="reset-guest" onclick="resetGuestScore()">Reset</button>
        </div>
        
    </div>
`
app.innerHTML = htmlTemplate