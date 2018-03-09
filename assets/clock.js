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
  const color = cachedBackgroundElement.style.backgroundColor = '#'
    + zeroPadNumber(date.getHours())
    + zeroPadNumber(date.getMinutes())
    + zeroPadNumber(date.getSeconds());

  // Set the hex number
  cachedTextElement.textContent = color;

  setTimeout(setColor, 1000);
})();