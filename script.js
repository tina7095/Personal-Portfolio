
// Text that will appear in the hero section
const words = [
    "Web Development",
    "Software Engineering",
    "Programming",
    "Technology"
];

// Select the typing element
const typingText = document.getElementById("typing-text");

// Track the current word
let wordIndex = 0;

// Track the current character
let charIndex = 0;

// Track typing direction
let isDeleting = false;

// Typing animation function
function typeEffect() {

    const currentWord = words[wordIndex];

    // Add or remove characters
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    // Display current text
    typingText.textContent =
        currentWord.substring(0, charIndex);

    // Set animation speed
    let speed = isDeleting ? 60 : 100;

    // When a word is complete
    if (!isDeleting && charIndex === currentWord.length) {

        isDeleting = true;
        speed = 1200;

    }

    // When deleting is complete
    else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        // Move to the next word
        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;
    }

    // Repeat the animation
    setTimeout(typeEffect, speed);
}

// Start typing animation
if (typingText) {
    typeEffect();
}
