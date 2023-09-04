var timer = 5;
var score = 0;
var Hitnum;
const newGame = document.getElementById('#New-Game');


function StartGame(){
    document.querySelector('#pbtm').addEventListener('click',function(dets){
        var clickedNumber = (Number(dets.target.textContent))
        if(clickedNumber === Hitnum){
            increaseScore();
            getNewHit();
            makeBubble();
        }
        else{
            console.log('button in pbtm clicked')
            alert('wrong hit')
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })

}
function increaseScore(){
    score += 10;
    document.querySelector('#Score').textContent = score;
}
function getNewHit(){
    Hitnum = Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent = Hitnum;

}
function makeBubble(){
    var clutter = ''
for(let i = 0; i<=101; i++){
    let rn = Math.floor(Math.random()*10)
    clutter +=`<div class = "bubble">${rn}</div>`
}

document.querySelector('#pbtm').innerHTML = clutter;
    
}

function runtimer(){
    
    
   var timerint = setInterval(function(){
   if(timer>0){
     timer--;
     document.querySelector('#timerval').textContent = timer;
   }
   else{
    clearInterval(timerint)
    document.querySelector('#pbtm').innerHTML = `
    <h1>Game Over</h1>
    <button id = 'newgame'>Start new Game</button>`
    document.querySelector('#Hit').textContent = 0
    document.querySelector('#newgame').addEventListener('click',function(dets){
        console.log('button clicked')
        console.log(dets.target.textContent)
        if(dets.target.textContent === "Start new Game"){
    
        StartGame();
        getNewHit();
        runtimer();
        makeBubble();
        }

    })
   
    
   }
}
   ,1000)

}
StartGame();
getNewHit();
runtimer();
makeBubble();