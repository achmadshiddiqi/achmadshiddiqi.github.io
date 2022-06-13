// Update calculator screen
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

// -------------------------------------------------------------

// Ngirim nilai angka pas diklik
const numbers = document.querySelectorAll(".number");

numbers.forEach((angka) => {
    angka.addEventListener('click', (nilaiAngka) => {
        inputNumber(nilaiAngka.target.value);
        updateScreen(currentNumber);
    })
})

// Ngirim operator pas diklik
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener('click', (nilaiOperator) => {
        inputOperator(nilaiOperator.target.value);
    })
})

// Inisiasi Kalkulasi saat klik =
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

// Tombol All Clear
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

// Tombol desimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (nilaiDesimal) => {
    inputDecimal(nilaiDesimal.target.value);
    updateScreen(currentNumber);
})

// -------------------------------------------------------------

// Setting Kalkulasi
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = prevNumber - currentNumber;
            break;
        case '*':
            result = prevNumber * currentNumber;
            break;
        case '/':
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

const clearAll = () => {
    currentNumber = '0';
    calculationOperator = '';
    prevNumber = '';
}

const inputDecimal = (nilaiDesimal) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += nilaiDesimal;
}