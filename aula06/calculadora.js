let res = document.getElementById("res")
let error = false

function addNumber() {
    if (error) {
        clearResult()
        error = false
    }
    if (res.innerText == 0) {
        res.innerText = event.target.value
    } else {
        res.innerText += event.target.value
    }
}

function clearResult() {
    res.innerText = 0
}

function addOperation() {
    if (error) {
        clearResult()
        error = false
    }
    res.innerText += event.target.value
}

function calculate() {
    let r = eval(res.innerText)

    if (isNaN(r) || !isFinite(r)) {
        res.innerText = "ERROR"
        error = true
    } else {
        res.innerText = r
    }
}