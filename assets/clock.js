// Cache the accessed DOM elements
const cachedBackgroundElement = document.getElementById('colored-background');
const cachedTextElement = document.getElementById('hextext');

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

  // Set the hex number color based on inverted background-color
  cachedTextElement.style.color = 'rgb('
    + (0xFF - parseInt(hexColor.substring(1, 3), 16)) + ', ' // Red
    + (0xFF - parseInt(hexColor.substring(3, 5), 16)) + ', ' // Green
    + (0xFF - parseInt(hexColor.substring(5, 7), 16)) + ')'; // Blue

  setTimeout(setColor, 1000);
})();