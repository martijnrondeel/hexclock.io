// Cache the accessed DOM elements
const cachedBackgroundElement = document.getElementById('colored-background'),
  cachedTextElement = document.getElementById('colored-text');

// Pad the number with 0's if needed
function zeroPadNumber(number) {
  return ('0' + number).slice(-2);
}

// Invert and rgb-ify substring of a hexadecimal number
function hexToInvertedRgb(hexColor, start, end) {
  return 0xFF - parseInt(hexColor.substring(start, end), 16);
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

  // Set the hex number color based on inverted background-color
  cachedTextElement.style.color = 'rgb('
    + (hexToInvertedRgb(hexColor, 1, 3)) + ', ' // Red
    + (hexToInvertedRgb(hexColor, 3, 5)) + ', ' // Green
    + (hexToInvertedRgb(hexColor, 5, 7)) + ')'; // Blue

  setTimeout(setColor, 1000);
})();