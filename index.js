let outputEl = document.getElementById("output-num")
let inputEl = document.getElementById("input-num")

function button (num) {
    inputEl.innerText += num;
}

function startOver () {
    inputEl.innerText = 0;
    outputEl.innerText = 0;
    outputEl.classList.remove('hasBlinker')
}

function sendOver () {
    outputEl.innerText = inputEl.innerText;
    inputEl.innerText = '0';
    outputEl.classList.add('hasBlinker')
}

