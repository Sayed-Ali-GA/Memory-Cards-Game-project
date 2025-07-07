/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let cardOne =null
let cardTwo = null
let disableDeck = false;
let sec = 20;
let score = 0;
/*----- Cached Element References  -----*/
const cards = document.querySelectorAll('.card')
const resetBtn = document.getElementById('reset')
const scoreDisplay = document.querySelector('.score')
const timerDisplay = document.querySelector('.timer')
const messageEl = document.querySelector('.message')
const msgaLo = document.querySelector('.msgLos')

/*--------------- Functions -------------*/

function startTimer() {
  timer = setInterval(() => {
    if (sec > 0 ) {
      sec--;
      timerDisplay.textContent = `Timer:00:${sec < 10 ? '0' + sec: sec}`;
} else {
      clearInterval(timer);
      disableDeck = true;
      msgaLo.textContent = `You lose! Time's up`;
    }
  }, 1000);
}

 function render(){
    scoreDisplay.textContent = `Score: ${score}`
    timerDisplay.textContent = `Timer:00:${sec}`
 } 

 function flipCard(card){
    if(card === cardOne || disableDeck) return
    card.classList.add('flipped')
    if(!cardOne){
        cardOne = card
        return
  }
    cardTwo = card
    disableDeck = true
    checkMatch();
 }

   function checkMatch() {
     const id1 = cardOne.querySelector('.card-back').id
     const id2 = cardTwo.querySelector('.card-back').id
       if (id1 === id2) {
            score++;
            cardOne = null;
            cardTwo = null;
            disableDeck = false;

       if(score === 6){
         clearInterval(timer);
         disableDeck = true
         messageEl.textContent = `You win in ${sec}s `
 } 
} else {
     setTimeout(() => {
       cardOne.classList.remove('flipped');
       cardTwo.classList.remove('flipped');
        cardOne = null;
        cardTwo = null;
        disableDeck = false;
    }, 1000);
  }
   render();
 }


   resetBtn.addEventListener('click', () => {
     cards.forEach(card => {
       card.classList.remove('flipped');
       sec = 20 // for timer begain 20s
       score = 0 
     scoreDisplay.textContent = null
        scoreDisplay.textContent = `Score: 0`
        timerDisplay.textContent = null
        timerDisplay.textContent = `Timer:00:00 `
        disableDeck = false; 
        messageEl.textContent = ''
        msgaLo.textContent = ''       
    })   
    startTimer() 
 });          

  startTimer() 

cards.forEach(card => {
  card.addEventListener('click', () => flipCard(card));
});

/*----------- Event Listeners ----------*/
