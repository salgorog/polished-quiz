var startQuizBtn = document.querySelector("#start-quiz");
var promptQuestion = document.querySelector("#prompt-question");
var promptAnswers = document.querySelector("#prompt-answers");

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

startQuizBtn.addEventListener('click', showQuizQuestion);


