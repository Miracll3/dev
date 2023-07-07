var startTime = new Date();

// Function to calculate the time difference in minutes
function getTimeDifference() {
  var currentTime = new Date();
  var timeDiff = Math.round((currentTime - startTime) / 1000 / 60); // Convert to minutes
  return timeDiff;
}
const inspirationalQuotes = [
  "> Believe you can and you're halfway there. 💪",
  "> The only limit to our realization of tomorrow will be our doubts of today. 🌟",
  "> Success is not final, failure is not fatal: It is the courage to continue that counts. 🚀",
  "> The future belongs to those who believe in the beauty of their dreams. 🌈",
  "> Don't watch the clock; do what it does. Keep going. ⏰",
  "> The harder you work for something, the greater you'll feel when you achieve it. 🎉",
  "> You are never too old to set another goal or to dream a new dream. ✨",
  "> The secret of getting ahead is getting started. 🚀",
  "> The best revenge is massive success. 💯",
  "> Your time is limited, so don't waste it living someone else's life. ⏳",
  "> You don't have to be great to start, but you have to start to be great. 🌟",
  "> The only way to do great work is to love what you do. ❤️",
  "> Believe in your infinite potential. Your only limitations are those you set upon yourself. 🌟",
  "> Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. 💭",
  "> The future depends on what you do today. 🔮",
  "> You miss 100% of the shots you don't take. 🏀",
  "> The biggest adventure you can take is to live the life of your dreams. ✨",
  "> The only person you should try to be better than is the person you were yesterday. 🌟",
  "> Don't be afraid to give up the good to go for the great. 👏",
  "> Success usually comes to those who are too busy to be looking for it. 💼",
  "> The best way to predict the future is to create it. 🌟",
  "> Your time is now. Start where you are. Use what you have. Do what you can. ⏳",
  "> The best way to get started is to quit talking and begin doing. 🚀",
  "> The past cannot be changed. The future is yet in your power. 🔮",
  "> Do what you love, and the success will follow. ❤️",
  "> Life is 10% what happens to us and 90% how we react to it. 🌟",
  "> Dream big and dare to fail. 💫",
  "> Your time is limited, don't waste it living someone else's life. ⌛",
  "> Be the change that you wish to see in the world. 🌍",
  "> The only person you are destined to become is the person you decide to be. 🌟",
  "> You have within you right now, everything you need to deal with whatever the world can throw at you. 🌟",
  "> Don't wait. The time will never be just right. ⏳",
  "> You are never too old to set another goal or to dream a new dream. 🌟",
  "> You are capable of more than you know. 💪",
  "> Your life does not get better by chance, it gets better by change. 🌟",
  "> The only limit to our realization of tomorrow will be our doubts of today. 🌟",
  "> Every day may not be good, but there is something good in every day. 🌞",
  "> The only way to do great work is to love what you do. ❤️",
  "> The future belongs to those who believe in the beauty of their dreams. 🌈",
  "> Strive not to be a success, but rather to be of value. 💎",
  "> The best preparation for tomorrow is doing your best today. 🌟",
  "> The mind is everything. What you think, you become. 💭",
  "> Your attitude, not your aptitude, will determine your altitude. 🚀",
  "> In the middle of every difficulty lies opportunity. 🌟",
  "> The power of imagination makes us infinite. ✨",
  "> The journey of a thousand miles begins with one step. 🚶‍♀️",
];
const text = [
    "> Like what you see? 👀",
    "> Coffee refill? 👀",
    "> FYI: You've been here for " + getTimeDifference() + "min.",
    "> FYI time is " + new Date().toLocaleTimeString()
    // "> ",
];
const outputElement = document.getElementById('output');
const cursorElement = document.getElementById('cursor');
const consoleText = document.getElementById('consoleText');
let index = 0;
const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);

function typeText() {
  if (index < inspirationalQuotes[randomIndex].length) {
    outputElement.textContent += inspirationalQuotes[randomIndex].charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust the typing speed here
  } else {
    // cursorElement.style.display = 'none';
    
    outputElement.textContent = inspirationalQuotes[randomIndex];
    setTimeout(resetText, 9000); // Adjust the delay before resetting here
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
    consoleText.style.display = 'none';
    setTimeout(function() {
      consoleText.style.display = 'block';
      cursorElement.style.display = 'inline';
        typeText();

    }, 9000); // 60000 milliseconds = 60 seconds
  };