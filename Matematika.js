// Matematika.js
let memory = 0;

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function showCalculator() {
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('arithmetic').style.display = 'none';
}

function showArithmetic() {
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('arithmetic').style.display = 'block';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value += memory;
}

function memoryAdd() {
    const display = document.getElementById('display');
    memory += parseFloat(display.value) || 0;
    clearDisplay();
}

function memorySubtract() {
    const display = document.getElementById('display');
    memory -= parseFloat(display.value) || 0;
    clearDisplay();
}

function calculateArithmetic(event) {
    event.preventDefault();
    const firstTerm = parseFloat(document.getElementById('first-term').value);
    const commonDiff = parseFloat(document.getElementById('common-diff').value);
    const numTerms = parseInt(document.getElementById('num-terms').value);
    let result = '';

    for (let i = 0; i < numTerms; i++) {
        result += (firstTerm + i * commonDiff) + ' ';
    }

    document.getElementById('result-arithmetic').innerText = result.trim();
}

// Menambahkan event listener untuk input keyboard
document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    const key = event.key;

    if (/\d/.test(key)) {
        appendToDisplay(key);
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '(') {
        appendToDisplay('(');
    } else if (key === ')') {
        appendToDisplay(')');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
