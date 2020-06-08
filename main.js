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

let questionContainer = document.querySelector(".question-container")
// questions-grid is a class not Id



start.addEventListener("click", startGame)


function startGame () {
startTimer()



questionContainer.classList.remove("hide");
answersGrid.classList.remove("hide");
counterTime.classList.remove("hide");

}


function nextQuestion () {

}

function showQuestions (){
   var output = []

   
}


// Timer Function
let counter = startTimer

function startTimer() {

    var seconds = 0;

    timer = setInterval(function() {
    seconds ++;
    document.getElementById("seconds").innerText = seconds % 60;
        document.getElementById("minutes").innerText = parseInt(seconds / 60);
    }, 1000);

}


// Questions Part
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    
  ];
