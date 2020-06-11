// Start and Next Buttons
const start = document.getElementById("start_game");
const restart = document.querySelector("#restart");

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
let scoreContainer = document.querySelector("#score");

// this variable will input the live score of player
let scoreKeeper = document.querySelector("#score-counter");

// Variables for User Initials input
let initials = document.querySelector("#initials-label");
let initialsInput = document.querySelector("#initials-input");
let saveBtn = document.querySelector("#saveBtn");
let HighScoreDiv = document.querySelector("#highscore")


start.addEventListener("click", startGame);



// Questions Part
let questions = [
  {
    question: "What is a Variable?",
    box1: "a cascading style sheet",
    box2: "a “named storage” for data.",
    box3: "a number assigned to an equation",
    correct: "2",
  },
  {
    question: "In JavaScript what are Strings used for?",
    box1: "to perform different actions based on different conditions",
    box2: "to explain JavaScript code, and to make it more readable",
    box3: "storing and manipulating text",
    correct: "3",
  },
  {
    question:
      "JavaScript programs can be inserted into any part of an HTML document with the help of which tag?",
    box1: "script",
    box2: "java",
    box3: "href",
    correct: "1",
  },
  {
    question:
      'The "if" statement evaluates a condition in parentheses and, if the result is ______, executes a block of code.',
    box1: "False",
    box2: "True",
    box3: "Undefined",
    correct: "2",
  },
  {
    question: "When did JavaScript start?",
    box1: "1986",
    box2: "1993",
    box3: "1995",
    correct: "3",
  },
];
// variables for grabbing objects
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let count = 0;


function startGame() {
  startTimer();
  renderQuestion();
  
  start.classList.add("hide");
  questionContainer.classList.remove("hide");
  answersGrid.classList.remove("hide");
  counterTime.classList.remove("hide");
  scoreContainer.classList.remove("hide");
}

function renderQuestion() {
  let q = questions[runningQuestionIndex];
  questionInsert.innerHTML = "<p>" + q.question + "</p>";
  box1.innerHTML = q.box1;
  box2.innerHTML = q.box2;
  box3.innerHTML = q.box3;

}


function nextQuestion() {
  if (runningQuestionIndex >= lastQuestionIndex) {
      questionContainer.innerHTML = "You scored " + count + " / " + questions.length;
      initials.classList.remove("hide");
      initialsInput.classList.remove("hide");
      stopTimer();
      scoreContainer.classList.add("hide");
      saveBtn.classList.remove("hide");
      }
      else{
      runningQuestionIndex++;
      renderQuestion();
    }
}

function checkAnswer(answer) {
  
  if (questions[runningQuestionIndex].correct === answer) {
    count++;
    scoreKeeper.innerHTML = count;
    nextQuestion();
    alert("Correct!!");
  } else {

    if (count > 0) {
      count--;
    }

    scoreKeeper.innerHTML = count;
    alert("Wrong answer, Try again");

    seconds -= 20;
    if(seconds <= 0){
      document.querySelector("#seconds").innerHTML = "0";
      stopTimer();
      alert("Your Time is out! Game Over")
      questionContainer.innerHTML = "You scored " + count + " / " + questions.length;
      initials.classList.remove("hide");
      initialsInput.classList.remove("hide");
      scoreContainer.classList.add("hide");
      saveBtn.classList.remove("hide");
    }
    
  }
  
}

// HighScore Keeping -Local Storage-

let scores = [];

const highscoreKeeper = (event)=>{
  event.preventDefault(); // this stops the form submitting

  let input = {
    score: count + "",
    initials: document.querySelector("#initials-input").value
  }

  scores.push(input);
  document.querySelector("form").reset(); // this clears the form for the next entry

 //console.warn('added', {scores} ); //i was using this console log to test the scores array

  //add to local storage
  localStorage.setItem("HighScores", JSON.stringify(scores));
}

 // i learned to always start with DOMContentLoaded, to make sure the page is loaded before we try to run things

  document.addEventListener("DOMContentLoaded", ()=> {
      document.getElementById("saveBtn").addEventListener("click", highscoreKeeper);
  });

  // Save highscore Button function

saveBtn.addEventListener("click", function(){
  HighScoreDiv.classList.remove("hide");
  let local = localStorage.getItem("HighScores");
  HighScoreDiv.innerHTML= local;
  alert("refresh Page to Start Again")

});


// Timer Function

let seconds = 60;


function startTimer() {

  timer = setInterval(function () {
    seconds--;
    document.getElementById("seconds").innerText = seconds % 60;
    document.getElementById("minutes").innerText = parseInt(seconds / 60);
    if(seconds == 0 - 1){
      alert ("Time Ran Out")
      stopTimer()
      counterTime.classList.add("hide")
      questionContainer.innerHTML = "You scored " + count + " / " + questions.length;
      initials.classList.remove("hide");
      initialsInput.classList.remove("hide");
      scoreContainer.classList.add("hide");
      saveBtn.classList.remove("hide");
    }
  
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

