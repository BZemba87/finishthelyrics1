//* lyric questions and answers
let lyrics = {
  question: 'Go easy on me, baby, I was still a ....',
  alternatives: ['CHILD', 'GIRL', 'MAN', 'WOMAN'],
  correctAnswer: 0
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
}
else {
    alert('Oh No!');
}
});
 })
}
/*runs showLyrics function*/
showLyrics(lyrics)


let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
})

function incrementScore() {

}

function incrementWrongAnswer() {

}

