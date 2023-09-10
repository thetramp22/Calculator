
let firstNumber = '';
let secondNumber = '';
let operator = '';
let shouldResetDisplay = true;

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');
const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subtract');
const btnMultiply = document.getElementById('btn-multipy');
const btnDivide = document.getElementById('btn-divide');
const btnEquals = document.getElementById('btn-equals');
const btnClear = document.getElementById('btn-clear');
const btnPoint = document.getElementById('btn-point');
const btnBackspace = document.getElementById('btn-backspace');

const currentDisplay = document.getElementById('display');

btn1.addEventListener('click', displayNumber);
btn2.addEventListener('click', displayNumber);
btn3.addEventListener('click', displayNumber);
btn4.addEventListener('click', displayNumber);
btn5.addEventListener('click', displayNumber);
btn6.addEventListener('click', displayNumber);
btn7.addEventListener('click', displayNumber);
btn8.addEventListener('click', displayNumber);
btn9.addEventListener('click', displayNumber);
btn0.addEventListener('click', displayNumber);
btnAdd.addEventListener('click', displayOperator);
btnSubtract.addEventListener('click', displayOperator);
btnMultiply.addEventListener('click', displayOperator);
btnDivide.addEventListener('click', displayOperator);
btnEquals.addEventListener('click', displayEquals);
btnClear.addEventListener('click', displayClear);
btnPoint.addEventListener('click', displayPoint);
btnBackspace.addEventListener('click', displayBackspace);

function runOperation() {
    secondNumber = Number(currentDisplay.innerText);
    let result = operate(operator, firstNumber, secondNumber);
    currentDisplay.innerText = result;
}

function displayNumber(e) {
    if(shouldResetDisplay){
        clearDisplay();
    }
    currentDisplay.innerText += e.target.innerText;
}

function displayPoint(e) {
    if(shouldResetDisplay) clearDisplay();
    if(currentDisplay.innerText.includes('.')) return;
    currentDisplay.innerText += '.';
}

function displayOperator(e) {
    if(!operator == ''){
        runOperation();
    }
    firstNumber = Number(currentDisplay.innerText);
    operator = e.target.innerText;
    shouldResetDisplay = true;
}

function displayEquals(e) {
    if(operator == '' || shouldResetDisplay) return;
    if(operator == '/' && currentDisplay.innerText == '0') {
        currentDisplay.innerText = "Nice Try";
        shouldResetDisplay = true;
        return;
    }
    runOperation();
    shouldResetDisplay = true;
    firstNumber = '';
    operator = '';
}

function displayBackspace(e) {
    if(shouldResetDisplay) clearDisplay();
    currentDisplay.innerText = currentDisplay.innerText
    .toString('')
    .slice(0, -1);
    if(currentDisplay.innerText == '') {
        currentDisplay.innerText = '0';
        shouldResetDisplay = true;
    }
}

function displayClear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    currentDisplay.innerText = '0';
    shouldResetDisplay = true;
}

function clearDisplay() {
    currentDisplay.innerText = '';
    shouldResetDisplay = false;
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}

// Operator functions

function add(a, b) {
    return a + b;
}
 
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    let result = 0;

    switch(operator) {
        case "+" :
            result = add(firstNumber, secondNumber);
            break;
        case "-" :
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }

    return result;
}


