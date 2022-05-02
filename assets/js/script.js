//* lyric questions and answers
let lyrics = {
  question: 'Go easy on me, baby, I was still a ....',
  alternatives: ['CHILD', 'GIRL', 'MAN', 'WOMAN'],
  correctAnswer: 0,
  question: "And you know me, turn the O-2 into ...",
  alternatives: ['A SQUARE', 'A FIRE', 'THE O-3', 'APARTMENTS'],
  correctAnswer: 2,
  question: "And mother always told me, be careful of who you...",
  alternatives: ['TRUST', 'LOVE', 'HATE', 'BECOME'],
  correctAnswer: 1,
  question: "I took a sip from my ... cup",
  alternatives: ['TEA', 'DEVILS', 'COFFEE', 'SIPPY'],
  correctAnswer: 1,
  question: "She's got a ... that it seems to me",
  alternatives: ['LOOK', 'FACE', 'SMILE', 'STARE'],
  correctAnswer: 2,
};


//*funtion to show the lyric questions, alternatives and correct answer
function showLyrics(l) {
   //* selecting DOM element
   let questionDiv = document.getElementById("question");
   //* modify the lyric question
   questionDiv.textContent = l.question;
  //*selecting alternatives by a query
  let alts = document.querySelectorAll('.alternative');
  //* loop through alternative answers 
  alts.forEach(function(element, index) {
  element.textContent = l.alternatives[index];

  //*listen for alternative that user clicks
  element.addEventListener('click', function(){
    // check correct answer
if(l.correctAnswer == index) {
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
showLyrics(lyrics);

/*listen for user clicks on next button*/
let btn = document.getElementById('btn');
btn.addEventListener('click', showLyrics());

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