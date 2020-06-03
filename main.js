const start = document.getElementById("start_game");
let answersGrid = document.querySelector(".answers-grid");
let box1 = document.querySelector("#box_1");
let box2 = document.querySelector("#box_2");
let box3 = document.querySelector("#box_3");
let box4 = document.querySelector("#box_4");


start.addEventListener("click", startGame)



function startGame () {
    console.log(questions)

}

function nextQuestion () {

}

function answerChosen () {

}

const questions = [ {
    question: "What is an array?",
    answers:  [
        {text: "a single variable that is used to store different elements.", correct: true},
        {text: "block of code designed to perform a particular task.", correct: false}
    ]
}
]