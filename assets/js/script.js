//* lyric questions and answers
let lyrics = {
  question: 'Go easy on me, baby, I was still a ....',
  alternatives: ['child', 'girl', 'man', 'woman'],
  correctAnswer: 0
};

function showLyrics(l) {
   //* selecting DOM element
   let questionDiv = document.getElementById("question");
   //* display the lyric question
   questionDiv.textContent = l.question;
  //*selecting alternatives by a query
  let alts = document.querySelectorAll('.alternative');

  alts.forEach(function(element, index) {
  element.textContent = l.alternatives[index];
});
}

showLyrics(lyrics)


