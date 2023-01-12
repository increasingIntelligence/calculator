// Get the calculator display and buttons
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// Initialize the calculator's state
let firstValue = null;
let operator = null;
let secondValue = false;

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the button's value
    const value = e.target.value;

    // Handle clear and backspace
    if (value === 'clear') {
      firstValue = null;
      operator = null;
      secondValue = false;
      display.textContent = '0';
    } else if (value === 'backspace') {
      display.textContent = display.textContent.slice(0, -1);
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Handle operators
      operator = value;
      firstValue = parseFloat(display.textContent);
      secondValue = true;
    } else if (value === '.') {
      // Handle decimal point
      if (!display.textContent.includes('.')) {
        display.textContent += '.';
      }
    } else if (value === '=') {
      // Handle equals
      secondValue = false;
      const currentValue = parseFloat(display.textContent);
      if (operator === '+') {
        display.textContent = firstValue + currentValue;
      } else if (operator === '-') {
        display.textContent = firstValue - currentValue;
      } else if (operator === '*') {
        display.textContent = firstValue * currentValue;
      } else if (operator === '/') {
        display.textContent = firstValue / currentValue;
      }
    } else {
      // Handle numbers
      if (secondValue) {
        display.textContent = '';
        secondValue = false;
      }
      if (display.textContent === '0') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});
