// setando o estado inicial do sistema recebendo as variaveis e constantes do projeto por classe e ID.

const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerID: setInterval(countDown, 1000),
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
};

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if(state.values.curretTime <= 0){
        alert('GAME OVER! O seu resultado foi: ' + state.values.result);
    }
}

function randomSquare(){

    state.view.squares.forEach((square)=>{
        square.classList.remove('enemy');
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy")

    state.values.hitPosition = randomSquare.id;

}

// function moveEnemy(){
//     state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
// }


function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown", ()=>{
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            }
        })
       
    });
}


// criando função de start
function initialize(){
    // moveEnemy();
    addListenerHitBox();
    // countDown();
}

// iniciando o callback da função
initialize();
