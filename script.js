
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
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


function displayNumber(e) {
    if(shouldResetDisplay){
        clearDisplay();
    }
    currentDisplay.innerText += e.target.innerText;
}

function displayOperator(e) {
    firstNumber = Number(currentDisplay.innerText);
    operator = e.target.innerText;
    shouldResetDisplay = true;
}

function displayEquals(e) {
    secondNumber = Number(currentDisplay.innerText);
    let result = operate(operator, firstNumber, secondNumber);
    currentDisplay.innerText = result;
    shouldResetDisplay = true;
}

function displayClear() {
    clearDisplay();
    currentDisplay.innerText = '0';
    shouldResetDisplay = true;
}

function clearDisplay() {
    currentDisplay.innerText = '';
    shouldResetDisplay = false;
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


