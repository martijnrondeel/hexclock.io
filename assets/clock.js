// Cache the accessed DOM elements
const cachedBackgroundElement = document.getElementById('colored-background'),
  cachedTextElement = document.getElementById('colored-text');

// Pad the number with 0's if needed
function zeroPadNumber(number) {
  return ('0' + number).slice(-2);
}

// Set color according to time
(function setColor() {

  // Set the background color
  const date = new Date();
  const hexColor = cachedBackgroundElement.style.backgroundColor = '#'
    + zeroPadNumber(date.getHours())
    + zeroPadNumber(date.getMinutes())
    + zeroPadNumber(date.getSeconds());

  // Set the hex number text
  cachedTextElement.textContent = hexColor;

  setTimeout(setColor, 1000);
})();
