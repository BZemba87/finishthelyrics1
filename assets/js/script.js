//variables
const quizContainer = document.getElementById('quiz');
const scoresContainer = document.getElementById('scores');
const submitButton = document.getElementById('submit');

function runQuiz( ) {
    // variable to store HTML output
    const output = [ ] ;
    
    // for loop lyrics
    for (i = 0; i < myLyrics.length; i++) {
        console.log(myLyrics[i]);
      } 

    //variable to store the missing lyrics
            const missingLyrics = [];

     // for each available answer 
            for (letter in currentLyrics.missingLyrics) {

     //add an HTML radio button
                missingLyrics.push(
                    `<label>
                    <input type="radio" name="lyrics${lyricsNumber}" value="${letter}">
                    ${letter} :
                    ${currentLyrics.missingLyrics[letter]}
                    </label>`
                );
            }
    //add this questions and its answers to the output
            output.push(
                `<div class="lyrics"> ${currentQuestion.question} </div>
                <div class="missingLyrics"> ${missingLyrics.join('')} </div>`
            );
        }   
    );
    
    //combines output list into one string of html 
      quizContainer.innerHTML = output.join('');
        }
    
function showScores( ){ }

// run quiz and show lyrics
runQuiz();

// gather missing lyrics from the quiz
const missingLyricsContainers = quizContainer.querySelectorAll('.missingLyrics');

let numCorrect = 0; 

// lyrics and missing lyrics
let myLyrics = [
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
        c: "WHO YOU HATE",
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
submitButton.addEventListener('click', showScores);