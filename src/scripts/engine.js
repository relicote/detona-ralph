// setando o estado inicial do sistema recebendo as variaveis e constantes do projeto por classe e ID.

const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {},
};

// Recebendo a ação de click e armazenando para ser reutilizada
function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        // verificando qual ID está sendo escolhida
       
    });
}

// criando função de start

function initialize(){}

// iniciando o callback da função
initialize();
