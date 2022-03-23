var startTime = 40
var finalScoreEl = document.querySelector(".final-score")
var quizQuestionsEl = document.querySelector(".quiz-questions")
var startBtnEl = document.getElementById("start-btn")
var instructionsEl = document.querySelector(".instructions")
var questionEl = document.querySelector(".question")
var answer1El = document.getElementById("answer1")
var answer2El = document.getElementById("answer2")
var answer3El = document.getElementById("answer3")
var answer4El = document.getElementById("answer4")

finalScoreEl.style.display = "none"
quizQuestionsEl.style.display = "none"
var questionNum = 0

var questionsList = [
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2:"1",
        choice3:"99",
        choice4:"1000",
        answer:"0"
    },
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2:"1",
        choice3:"99",
        choice4:"1000",
        answer:"0"
    },
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2:"1",
        choice3:"99",
        choice4:"1000",
        answer:"0"
    },
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2:"1",
        choice3:"99",
        choice4:"1000",
        answer:"0"
    },
    {
        question: "Arrays starting index is_____ (last)?",
        choice1: "0",
        choice2:"1",
        choice3:"99",
        choice4:"1000",
        answer:"0"
    },
]

startBtnEl.addEventListener("click", function() {
    quizQuestionsEl.style.display = "block"  
    instructionsEl.style.display = "none"
    showQuestion()
})

function showQuestion () {
    questionEl.textContent = questionsList[questionNum].question
    answer1El.textContent = questionsList[questionNum].choice1
    answer2El.textContent = questionsList[questionNum].choice2
    answer3El.textContent = questionsList[questionNum].choice3
    answer4El.textContent = questionsList[questionNum].choice4
}
 

//click start button
    //timer starts
    //user presented with question
    //when question is answered
        //user is presented with next question
    //if question is answered incorrectly, time subtracted from clock
//quiz over when time = 0 || all quesitons answered
    //user able to save initials and score
