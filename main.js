// Start and Next Buttons
const start = document.getElementById("start_game");
const next = document.querySelector("next")

//Answer Buttons
let answersGrid = document.querySelector(".answers-grid");

let box1 = document.querySelector("#box_1");
let box2 = document.querySelector("#box_2");
let box3 = document.querySelector("#box_3");
let box4 = document.querySelector("#box_4");

//timer
let counterTime = document.querySelector("#timer")

//question input
let questionContainer = document.querySelector(".question-container")
let questionInsert = document.querySelector("#question")



start.addEventListener("click", startGame)


function startGame () {
    startTimer()
    showQuestions()
    



    currentQuestionIndex = 0
    start.classList.add('hide')
    questionContainer.classList.remove("hide");
    answersGrid.classList.remove("hide");
    counterTime.classList.remove("hide");

}


function nextQuestion () {

}

function showQuestions (question){
    questionInsert.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn btn-outline-dark")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
    })


   
}


// Timer Function

function startTimer() {

    var seconds =600;

    timer = setInterval(function() {
    seconds --;
    document.getElementById("seconds").innerText = seconds % 60;
        document.getElementById("minutes").innerText = parseInt(seconds / 60);
    }, 1000);

}


// Questions Part
const questions = [
    {
      question: 'What is a Variable?',
      answers: [
        { text: 'a cascading style sheet', correct: false },
        { text: 'a “named storage” for data.', correct: true},
        { text: 'a number assigned to an equation', correct: false },
        { text: 'a way to repeat the same code multiple times', correct: false }
        ]
    },
    {
      question: 'In JavaScript what are Strings used for?',
      answers: [
        { text: 'to perform different actions based on different conditions', correct: false },
        { text: 'to explain JavaScript code, and to make it more readable', correct: false },
        { text: 'storing and manipulating text', correct: true },
        { text: 'code designed to perform a particular task', correct: false }
      ]
    },
    {
      question: 'JavaScript programs can be inserted into any part of an HTML document with the help of which tag?',
      answers: [
        { text: '<script>', correct: true },
        { text: '<java>', correct: false },
        { text: '<href>', correct: false },
        { text: '<input>', correct: false }
      ]
    },
    {
      question: 'The "if" statement evaluates a condition in parentheses and, if the result is ______, executes a block of code.',
      answers: [
        { text: 'False', correct: false },
        { text: 'True', correct: true }
      ]
    }
  ]
