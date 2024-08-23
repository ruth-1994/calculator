let num1 = null;
let currentOperation = null;
let val = '';

// Function to handle operations
function operate() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'AC') {
                clear();
            } else if (['+', '-', '*', '/', '%'].includes(value)) {
                handleOperation(value);
            } else if (value === '=') {
                calculate();
            } else if (value === '+/-') {
                handleNegative();
            } else {
                updateDisplay(value);
            }
        });
    });
}

// Function to handle the arithmetic operation
function handleOperation(operationSign) {
    num1 = parseFloat(val);

    if (operationSign === '%') {
        num1 = percentage(num1);
        val = num1.toString();
        document.querySelector("input").value = val;
    } else {
        currentOperation = operationSign;
        val = ''; // Clear the display for the next number
        document.querySelector("input").value = val;
    }
}

// Function to calculate based on the operation
function calculate() {
    if (num1 !== null && val !== '' && currentOperation !== null) {
        let num2 = parseFloat(val);
        let result = 0;

        switch (currentOperation) {
            case '+':
                result = addition(num1, num2);
                break;
            case '-':
                result = subtraction(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
        }

        num1 = result; // Store result for further calculations
        val = result.toString();
        document.querySelector("input").value = val;
        currentOperation = null; // Reset operation
    }
}

// Function to handle negating the number
function handleNegative() {
    val = (parseFloat(val) * -1).toString();
    document.querySelector("input").value = val;
}

// Arithmetic operations
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function percentage(num) {
    return num * 0.01;
}

// Function to update the display
function updateDisplay(value) {
    val += value;
    document.querySelector("input").value = val;
}

// Function to clear the display and reset calculations
function clear() {
    num1 = null;
    currentOperation = null;
    val = '';
    document.querySelector("input").value = val;
}

// Initialize event listeners
operate();
