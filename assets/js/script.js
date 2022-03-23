var startTime = 40
var timerEl = document.getElementById("timer")
var finalScoreEl = document.querySelector(".final-score")
var quizQuestionsEl = document.querySelector(".quiz-questions")
var startBtnEl = document.getElementById("start-btn")
var instructionsEl = document.querySelector(".instructions")
var questionEl = document.querySelector(".question")
var answer1El = document.getElementById("answer1")
var answer2El = document.getElementById("answer2")
var answer3El = document.getElementById("answer3")
var answer4El = document.getElementById("answer4")
answer1El.addEventListener("click", validateAnswer)
answer2El.addEventListener("click", validateAnswer)
answer3El.addEventListener("click", validateAnswer)
answer4El.addEventListener("click", validateAnswer)
var choiceEl = document.getElementById("choice")

finalScoreEl.style.display = "none"
quizQuestionsEl.style.display = "none"
var questionNum = 0
var score = 0
var timerObject 
var questionsList = [
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2: "1",
        choice3: "99",
        choice4: "1000",
        answer: "0"
    },
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2: "1",
        choice3: "99",
        choice4: "1000",
        answer: "0"
    },
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2: "1",
        choice3: "99",
        choice4: "1000",
        answer: "0"
    },
    {
        question: "Arrays starting index is_____ ?",
        choice1: "0",
        choice2: "1",
        choice3: "99",
        choice4: "1000",
        answer: "0"
    },
    {
        question: "Arrays starting index is_____ (last)?",
        choice1: "0",
        choice2: "1",
        choice3: "99",
        choice4: "1000",
        answer: "0"
    },
]

startBtnEl.addEventListener("click", function () {
    quizQuestionsEl.style.display = "block"
    instructionsEl.style.display = "none"
    showQuestion()
    timerObject = setInterval(function(){
        timerEl.textContent = startTime
        if (startTime >= 1) {
            startTime--;
        } else {
            clearInterval(timerObject)
            timerEl.textContent = "Time is up!"
        }
    },1000)
})

function showQuestion() {
    questionEl.textContent = questionsList[questionNum].question
    answer1El.textContent = questionsList[questionNum].choice1
    answer2El.textContent = questionsList[questionNum].choice2
    answer3El.textContent = questionsList[questionNum].choice3
    answer4El.textContent = questionsList[questionNum].choice4
}

function validateAnswer() {
    var userChoice = this.textContent
    console.log(userChoice)
    if (userChoice === questionsList[questionNum].answer) {
        score += 5
        choiceEl.textContent = "Correct!"
    } else {
        startTime -= 5
        choiceEl.textContent = "Incorrect!"
    }
    if (questionNum < questionsList.length - 1) {
        questionNum++
        showQuestion()
    } else {
        finalScoreEl.style.display = "block"
        quizQuestionsEl.style.display = "none"
        console.log(score)
        clearInterval(timerObject)
        timerEl.textContent = `The quiz is over. The remaining time ${startTime}will be added to your score.`
    }
}

//click start button
    //timer starts
    //user presented with question
    //when question is answered
        //user is presented with next question
    //if question is answered incorrectly, time subtracted from clock
//quiz over when time = 0 || all quesitons answered
    //user able to save initials and score
