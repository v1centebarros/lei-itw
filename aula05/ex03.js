let status = true;

function turnOn() {
    if (!status) {
        document.getElementById("lampImg").src = "./img/on.jpg";
        status = true;
    }
}

function turnOff() {
    if (status) {
        document.getElementById("lampImg").src = "./img/off.jpg";
        status = false;
    }
}