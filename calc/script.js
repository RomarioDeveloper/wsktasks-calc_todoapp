let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}
