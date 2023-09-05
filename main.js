var timer;
var score;
var Hitnum;
const newGame = document.getElementById('#New-Game');


function StartGame() {
    timer = 10;
    score = 0;
    getNewHit();
    runtimer();
    makeBubble();
    CheckHit();

}
function CheckHit() {
    document.querySelector('#pbtm').addEventListener('click', function (dets) {
        
        var clickedNumber = (Number(dets.target.textContent))
        console.log(clickedNumber)
        if (clickedNumber === Hitnum) {
            
            console.log("if loop passed")
            increaseScore();
            getNewHit();
            makeBubble();

        }
        else {
            console.log('else loop passed')
            getNewHit();
            makeBubble();
        }
    })
}
function scoreReset() {
    score = 0;
    document.querySelector('#Score').textContent = score;
}
function increaseScore() {
    score += 10;
    document.querySelector('#Score').textContent = score;
}
function getNewHit() {
    Hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#Hit").textContent = Hitnum;

}
function makeBubble() {
    var clutter = ''
    for (let i = 0; i <= 101; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class = "bubble">${rn}</div>`
    }

    document.querySelector('#pbtm').innerHTML = clutter;

}

function runtimer() {


    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else {
            clearInterval(timerint)
            document.querySelector('#pbtm').innerHTML = `
    <h1>Game Over</h1>
    <button id = 'newgame'>Start new Game</button>`
            document.querySelector('#Hit').textContent = 0
            document.querySelector('#newgame').addEventListener('click', function () {
                event.stopPropagation();
                PlayAgain();
                console.log('button clicked')





            })


        }
    }
        , 1000)

}

function PlayAgain() {
    timer = 10;
    score = 0;
    scoreReset();
    StartGame();


}
StartGame();


