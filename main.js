// Start and Next Buttons
const start = document.getElementById("start_game");
const next = document.querySelector("next");

//Answer Buttons
let answersGrid = document.querySelector(".answers-grid");

let box1 = document.querySelector("#box_1");
let box2 = document.querySelector("#box_2");
let box3 = document.querySelector("#box_3");


//timer
let counterTime = document.querySelector("#timer");

//question input
let questionContainer = document.querySelector(".question-container");
let questionInsert = document.querySelector("#question");

// Score
let score = document.querySelector("#score")
// this variable will input the live score of player
let scoreCounter = document.querySelector("#score-counter")


start.addEventListener("click", startGame);

function startGame() {
  startTimer();
  runningQuestionIndex = 0
  renderQuestion()
  
  start.classList.add("hide");
  questionContainer.classList.remove("hide");
  answersGrid.classList.remove("hide");
  counterTime.classList.remove("hide");
}

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    questionInsert.innerHTML ="<p>" + q.question + "</p>"
    box1.innerHTML = q.text1;
    box2.innerHTML = q.text2;
    box3.innerHTML = q.text3;
    
}





function nextQuestion() {
    runningQuestionIndex++
    renderQuestion()

}

function checkAnswer(answer) {  
    if(questions[runningQuestionIndex].correct == answer){
      scoreCounter ++;
      answerIsCorrect();
    }else {
      answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
      count = 0;
      runningQuestionIndex++;
      renderQuestion();
    }
    else{
      clearInterval(startTimer);
    }

  }
      



// Timer Function

function startTimer() {
  var seconds = 60;

  timer = setInterval(function () {
    seconds--;
    document.getElementById("seconds").innerText = seconds % 60;
    document.getElementById("minutes").innerText = parseInt(seconds / 60);
  }, 1000);
}

// Questions Part
let questions = [
  {
    question: "What is a Variable?",
    text1: "a cascading style sheet",
    text2: "a “named storage” for data.",
    text3: "a number assigned to an equation",
    correct: "2"
    
  },
  {
    question: 'In JavaScript what are Strings used for?',
    text1: 'to perform different actions based on different conditions',
    text2: 'to explain JavaScript code, and to make it more readable',
    text3: 'storing and manipulating text',
    correct: "3"
  },
  {
    question: 'JavaScript programs can be inserted into any part of an HTML document with the help of which tag?',
    text1: '<script>',
    text2: '<java>',
    text3: '<href>',
    correct: "1"
    
  },
  {
    question: 'The "if" statement evaluates a condition in parentheses and, if the result is ______, executes a block of code.',
    text1: 'False',
    text2: 'True', 
    text3: 'Undefined',
    correct: "2"
  },
  {
    question: 'When did JavaScript start?',
    text1: '1986',
    text2: '1993',
    text3: '1995',
    correct: "3"
  }
]
// variables for grabbing objects
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;