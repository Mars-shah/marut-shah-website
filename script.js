const typedText = document.getElementById("typed-text");

const words = ["Developer", "Designer", "Passionate", "Problem-Solver","Open-minded"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 120;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    // remove one character
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    delay = 50; // faster delete
  } else {
    // add one character
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    delay = 120; // typing speed
  }

  // when full word typed
  if (!isDeleting && charIndex === currentWord.length) {
    delay = 1500; // pause before deleting
    isDeleting = true;
  }
  // when word fully deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 300;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);
