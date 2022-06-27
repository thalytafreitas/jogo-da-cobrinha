// Obtendo referência do elemento #pardal
const PARDAL = document.querySelector("#pardal");

//Definindo valores da posição inicial do #pardal
PARDAL.style.top = "50px";
PARDAL.style.left = "50px";

function mover(direcao){

    //Valores da posição atual do #pardal em forma de números inteiros para realizar operações
    let top = parseInt(PARDAL.style.top);
    let left = parseInt(PARDAL.style.left);

    //Realizando operações para movimentação do #pardal
    switch(direcao){

        case "^":
        case  38:  //Valor da tecla pra baixo
            top -= 10;
            break;

        //&lt substitui o símbolo <
        case "&lt;":
        case  37: //Valor da tecla pra esquerda
            left -= 10;
            break;

        //&gt substitui o símbolo >
        case "&gt;": 
        case  39: //Valor da tecla pra direita
            left += 10;
            break;

        case "v":
        case  40: //Valor da tecla pra baixo
            top += 10;
            break;

        default:
            //É utilizado para descobrir qual é o valor das teclas de seta no teclado, inicialmente
            console.log(direcao);
    }

    //Atualizando os valores da posição do #pardal
    PARDAL.style.top = top + "px";
    PARDAL.style.left = left + "px";
}

//Caso alguma tecla seja pressionada na página...
document.body.onkeydown = function(tecla){
    //.keyCode pega o valor da tecla pressionada
    mover(tecla.keyCode)
}