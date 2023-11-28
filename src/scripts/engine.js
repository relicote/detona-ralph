// setando o estado inicial do sistema recebendo as variaveis e constantes do projeto por classe e ID.

const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        gameVelocity: 1000
    },
};

function randomSquare(){

    state.view.squares.forEach((square)=>{
        square.classList.remove('enemy');
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy")

}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}


function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        
       
    });
}

// criando função de start

function initialize(){
    moveEnemy()
}

// iniciando o callback da função
initialize();
