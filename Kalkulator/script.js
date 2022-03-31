let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

// Layar
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    })
})

// Angka
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

// Operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

// Kalkulasi
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = prevNumber - currentNumber
            break;
        case '*':
            result = prevNumber * currentNumber
            break;
        case '/':
            result = prevNumber / currentNumber
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

// Clear All
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

// Desimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const inputDecimal = (koma) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += koma;
}

// Persen
const persentase = document.querySelector(".percentage");

persentase.addEventListener("click", () => {
    inputPersen();
    updateScreen;
})

const inputPersen = () => {
    currentNumber /= 100;
}