var startTime = new Date();

// Function to calculate the time difference in minutes
function getTimeDifference() {
  var currentTime = new Date();
  var timeDiff = Math.round((currentTime - startTime) / 1000 / 60); // Convert to minutes
  return timeDiff;
}

const text = [
    "> What did the server say to the website?",
    "> Like what you see? 👀",
    "> Let's call it a day now...",
    "> How do you comfort a JavaScript bug?",
    "> FYI: You've been here for " + getTimeDifference() + "min.",
    "> FYI time is " + new Date().toLocaleTimeString()
    // "> ",
];
const outputElement = document.getElementById('output');
const cursorElement = document.getElementById('cursor');
let index = 0;
const randomIndex = Math.floor(Math.random() * text.length);

function typeText() {
  if (index < text[randomIndex].length) {
    outputElement.textContent += text[randomIndex].charAt(index);
    index++;
    setTimeout(typeText, 200); // Adjust the typing speed here
  } else {
    // cursorElement.style.display = 'none';
    
    outputElement.textContent = text[randomIndex];
    setTimeout(resetText, 3500); // Adjust the delay before resetting here
  }
}

function resetText() {
  outputElement.textContent = '';
  cursorElement.style.display = '';
  index = 0;
  setTimeout(typeText, 500); // Adjust the delay before typing here
}
window.onload = function() {
    cursorElement.style.display = 'none';
    setTimeout(function() {
        cursorElement.style.display = 'inline';
        typeText();
    }, 60000); // 60000 milliseconds = 60 seconds
  };