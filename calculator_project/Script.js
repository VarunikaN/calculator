let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function removeLastDigit() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = displayValue.replace(/,/g, '.');
        displayValue = eval(displayValue);
        
        document.getElementById('display').value = parseFloat(displayValue.toFixed(10));
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
