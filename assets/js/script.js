const startButton = document.getElementById("start-btn")
const quizContainer = document.getElementById("quiz-container")

startButton.addEventListener('click', startQuiz)

function startQuiz() {
console.log('started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
setNextQuestion();
}

function setNextQuestion() {
}

function selectAnswer() {
}

const questions = [
   {
    lyrics:  "Go easy on me, baby, I was still a  ____",
    answers: [
        {text: 'CHILD',  correct: true}
        {text: 'BABY', correct: false}
    ]
    correctAnswer: "a"
} ,
{
    lyrics: "And you know me, turn the O-2 into ____",
    options: {
        a: "A SQUARE",
        b: "FIRE",
        c: "THE O-3",
    },
    correctAnswer: "c"
},
{
    lyrics: "And mother always told me, be careful of ____",
    options: {
        a: "WHO YOU TRUST",
        b: "WHO YOU LOVE",
        c: "WHO YOU HATE",
    },
    correctAnswer: "b"
},
{
    lyrics: "I took a sip from my ____ cup",
    options: {
        a: "TEA",
        b: "DEVIL'S",
        c: "COFFEE",
    },
    correctAnswer: "b",
    },
    {
        lyrics: "She's got a ____ that it seems to me",
        options: {
            a: "LOOK",
            b: "FACE",
            c: "SMILE",
        },
        correctAnswer: "c",
    },
    {
        lyrics: "It may be quite ___ , but now that it's done",
        options: {
            a: "SIMPLE",
            b: "DIFFICULT",
            c: "STUPID",
        },
        correctAnswer: "a",
    }
] ;
