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

// Adicionar som de game over
// Reduzir as vidas ao errar o click
// Resetar o tempo e pontuação quando acabar o timer

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.1;
    audio.play();
}

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if(state.values.curretTime <= 0){
        clearInterval(state.values.countDownTimerID);
        clearInterval(state.values.timerId);
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

function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown", ()=>{
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        })
       
    });
}



function initialize(){
    addListenerHitBox();    
}

// iniciando o callback da função
initialize();
