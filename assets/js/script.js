//* lyric questions and answers
let lyrics = [
  {
  question: 'Go easy on me, baby, I was still a ....',
  alternative: [ "CHILD", 
                         "MAN", 
                         "WOMAN",
                         "GIRL"
  ],
  correctAnswer: 0,
},
{
  question: "And you know me, turn the O-2 into ...",
  alternative: ["A SQUARE",
                      "FIRE",
                      "THE 0-3",
                      "APARTMENTS",
],
  correctAnswer: 2,
  },
];

//*funtion to show the lyric questions, alternatives and correct answer
function showLyrics() {
   //* selecting DOM element
   let questionDiv = document.getElementById("question");
   //* modify the lyric question
   questionDiv.textContent = lyrics[0].question;
  //*selecting alternatives by a query
  let alts = document.querySelectorAll('.alternative');

  //* loop through alternative answers 
  alts.forEach(function(element, index) {
  element.textContent = lyrics[0].alternative[index];

  //*listen for alternative that user clicks
  element.addEventListener('click', function(){
    // check correct answer
if(lyrics[0].correctAnswer == index) {
    alert('Yas Queen!');
    incrementScore();
}
else {
    alert('Oh No!');
    incrementWrongAnswer();
}
});
 });
}
/*runs showLyrics function*/
showLyrics();

/*listen for user clicks on next button*/
let btn = document.getElementById("btn");
btn.addEventListener("click", showLyrics);

/*gets current score and increments it by 1*/
function incrementScore() {
let oldScore = parseInt(document.getElementById("score").innerText);
document.getElementById("score").innerText = ++oldScore;
}

/*gets wrong answer score and increments it by 1*/
function incrementWrongAnswer(){
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}