const app = document.getElementById("score-app")

const htmlTemplate = `
    <main class="container">

        <section class="wrapper">
            <h1>Home</h1>
            <h2 id="home-score">0</h2>

            <div class="score-btn-wrapper">
                <button class="plus-one" onclick="addOnePointHome()">+1</button>
                <button class="plus-two" onclick="addTwoPointHome()">+2</button>
                <button class="plus-three" onclick="addThreePointHome()">+3</button>
            </div>
            <button class="reset-home" onclick="resetHomeScore()">Reset</button>
        </section>

        <section class="wrapper">
            <button id="middle-btn" onclick="gameSet()">Set</button>
            <button id="middle-btn" onclick="resetBoth()">Reset</button>
            <h1 id="gameSet-element"></h1>
        </section>

        <section class="wrapper">
            <h1>Guest</h1>
            <h2 id="guest-score">0</h2>

            <div class="score-btn-wrapper">
                <button class="plus-one" onclick="addOnePointGuest()">+1</button>
                <button class="plus-two" onclick="addTwoPointGuest()">+2</button>
                <button class="plus-three" onclick="addThreePointGuest()">+3</button>
            </div>
            <button class="reset-guest" onclick="resetGuestScore()">Reset</button>
        </section>
        
    </main>
`
app.innerHTML = htmlTemplate