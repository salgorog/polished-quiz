var startQuizBtn = document.querySelector("#start-quiz");
var promptQuestion = document.querySelector("#prompt-question");
var promptAnswers = document.querySelector("#prompt-answers");
var timerEl = document.getElementById('#countdown');
var mainEl = document.getElementById('#main');
var startBtn = document.getElementById("#start-quiz");

var questionIndex = 0;

// Array with all questions
const questions = [
    {   question: 'What is the shape of the planet', 
        answer: [
            {a: 'triangle', correct: false},
            {a: 'cube', correct: false},
            {a: 'sphere', correct: true},
        ] 
    },
    {   question: 'Language used to to style a page',
        answer: [
            {a: 'CSS', correct: true},
            {a: 'Javascript', correct: false},
            {a: 'HTML', correct: false},
        ]
    },
    {   question: 'Who let the dogs out?',
        answer: [
            {a: 'Woof', correct: true},
            {a: 'Bark', correct: false},
            {a: 'Meow', correct: false},
        ]
    },
]
var score = 0;


function showQuizQuestion() {

    
    promptQuestion.textContent = questions[questionIndex].question;
    promptAnswers.innerHTML = "";
  
    for(let i = 0; i < questions[questionIndex].answer.length; i++)
    {
        promptAnswers.innerHTML += 
                            "<button class='button-answer' value='" + questions[questionIndex].answer[i].a + "'>" 
                            + questions[questionIndex].answer[i].a + "</button>";
                            
    }
}

// Timer that counts down from 5
function countdown() {
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 0) {
        timerEl.textContent = timeLeft + ' time remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

  // Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}


startQuizBtn.addEventListener('click', showQuizQuestion);
startQuizBtn.addEventListener('click', countdown);
startBtn.onclick = countdown;


