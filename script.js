// JavaScript code
const textElement = document.getElementById('text');
const texts = ["reseller", "reseller"];
let index = 0;
let textIndex = 0;
let currentText = '';
let letterSpeed = 200; // Speed of typing effect (in milliseconds)

function type() {
  if (textIndex < texts[index].length) {
    currentText += texts[index].charAt(textIndex);
    textElement.textContent = currentText;
    textIndex++;
    setTimeout(type, letterSpeed);
  } else {
    // Change text and reset variables for next text
    setTimeout(erase, 1500); // Wait 1.5 seconds before erasing
  }
}

function erase() {
  if (currentText.length > 0) {
    currentText = currentText.slice(0, -1);
    textElement.textContent = currentText;
    setTimeout(erase, letterSpeed / 2);
  } else {
    // Change to the next text
    index = (index + 1) % texts.length;
    textIndex = 0;
    setTimeout(type, 500); // Wait 0.5 seconds before typing the next text
  }
}

// Start typing effect
setTimeout(type, 500); // Wait 0.5 seconds before starting the typing effect

