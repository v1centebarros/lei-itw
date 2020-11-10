var x = document.getElementById("num1");
var y = document.getElementById("num2");
var op = document.getElementById("operacao");
var resultado = document.getElementById("resultado");

//Verifica se o utilizador inseriu algum valor nos inputs
function verifica() {
    if ((x.value !== "" && y.value !== "" && op.value !== "fac") || (x.value !== "" && op.value === "fac")) {
        calcular();
    }
}


function calcular() {
    let x_val = parseFloat(x.value)
    let y_val = parseFloat(y.value)

    switch (op.value) {
        case "soma":
            resultado.value = x_val + y_val;
            break;
        case "sub":
            resultado.value = x_val - y_val;
            break;
        case "mult":
            resultado.value = x_val * y_val;
            break;
        case "div":
            resultado.value = x_val / y_val;
            break;
        case "res":
            resultado.value = x_val % y_val;
            break;
        case "fac":
            resultado.value = fact(x_val);
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