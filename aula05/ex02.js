var x = document.getElementById("num1");
var y = document.getElementById("num2");
var op = document.getElementById("operacao");
var resultado = document.getElementById("resultado");

//Verifica se o utilizador inseriu algum valor nos inputs
function verifica() {
    if ((x.value !== "" && y.value !== "" && op.value!=="fac") || (x.value !== "" && op.value === "fac")){
        calcular();
    } 
}


function calcular() {
    switch (op.value) {
        case "soma":
            resultado.value = parseFloat(x.value) + parseFloat(y.value);
            break;
        case "sub":
            resultado.value = parseFloat(x.value) - parseFloat(y.value);
            break;
        case "mult":
            resultado.value = parseFloat(x.value) * parseFloat(y.value);
            break;
        case "div":
            resultado.value = parseFloat(x.value) / parseFloat(y.value);
            break;
        case "res":
            resultado.value = parseFloat(x.value) % parseFloat(y.value);
            break;
        case "fac":
            resultado.value = fact(parseFloat(x.value));
            break;
        default:
            resultado.value = ""
            break;
    }
}


function fact(num) {
    var res = 1;
    for (var i = 1; i <= num; i++) {
        res *= i;         
    }
    return res;
}