const quizContainer = document.getElementById('quiz');
const scoresContainer = docment.getElementById('scores');
const submitButton = document.getElementById('submit');

function runQuiz(){}

function showScores(){}

// run quiz and show lyrics
runQuiz();

submitButton.addEventListener('click', showScores);

// lyrics and missing lyrics
const myLyrics = [
    {
    lyrics:  "Go easy on me, baby, I was still a  ____",
    missingLyrics: {
        a: "CHILD",
        b: "BABY",
        c: "GIRL",
    },
    correctAnswer: "a"
} ,
{
    lyrics: "And you know me, turn the O-2 into ____",
    missingLyrics: {
        a: "A SQUARE",
        b: "FIRE",
        c: "THE O-3",
    },
    correctAnswer: "c"
},
{
    lyrics: "And mother always told me, be careful of ____",
    missingLyrics: {
        a: "WHO YOU TRUST",
        b: "WHO YOU LOVE",
        c: "WHO YOU TRUST",
    },
    correctAnswer: "b"
},
{
    lyrics: "I took a sip from my ____ cup",
    missingLyrics: {
        a: "TEA",
        b: "DEVIL'S",
        c: "COFFEE",
    },
    correctAnswer: "b",
    },
    {
        lyrics: "She's got a ____ that it seems to me",
        missingLyrics: {
            a: "LOOK",
            b: "FACE",
            c: "SMILE",
        },
        correctAnswer: "c",
    },
    {
        lyrics: "It may be quite ___ , but now that it's done",
        missingLyrics: {
            a: "SIMPLE",
            b: "DIFFICULT",
            c: "STUPID",
        },
        correctAnswer: "a",
    }
] ;