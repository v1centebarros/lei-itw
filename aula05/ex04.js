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
    divRand.width = Math.floor(Math.random() * 500) + 'px';
    divRand.height = Math.floor(Math.random() * 250) + 'px';
    divRand.style.top = Math.floor(Math.random() * 450) + 'px';
    divRand.style.left = Math.floor(Math.random() * 500) + 'px';
}