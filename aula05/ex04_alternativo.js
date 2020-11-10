/**
 * Método alternativo onde a zona de gerar é absoluta (quadro todo)
 */

const divs = ["azul","vermelho", "verde","amarelo"]; //Array com o nome dos blocos utilizados no programa, escalável

function setCurrentDiv() {
    document.getElementById("currentBlock").innerHTML = event.target.id;
    document.getElementById("currentTop").innerHTML = event.target.style.top;
    document.getElementById("currentLeft").innerHTML = event.target.style.left;
}

function clearSelected() {
    document.getElementById("currentBlock").innerHTML = "";
    document.getElementById("currentTop").innerHTML = "";
    document.getElementById("currentLeft").innerHTML = "";
}

//Ao fazer assim caso queiramos adicionar um novo bloco, basta
//adicionar ao array divs
function scramble() {                  //MESMA COISA QUE
    divs.forEach(element => {          // randomize("azul");
        randomize(element);            // randomize("vermelho");
    });                                // randomize("verde");
}                                      //randomize ("amarelo");

function randomize(selDiv) {
    var divRand = document.getElementById(selDiv);
    divRand.style.top = Math.floor(Math.random() * (window.innerHeight - document.getElementById("header").offsetHeight - 50) + document.getElementById("header").offsetHeight) + 'px';
    divRand.style.left = Math.floor(Math.random() * (window.innerWidth - document.getElementById("info").offsetWidth - 50) + document.getElementById("info").offsetHeight) + 'px';
}