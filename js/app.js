/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let matched = 0;
let cardOne =null
let cardTwo = null
let disableDeck = false;
let sec = 30;
let score = 0;
let msg
/*----- Cached Element References  -----*/
const cards = document.querySelectorAll('.card')
const resetBtn = document.getElementById('reset')
const scoreDisplay = document.querySelector('.score')
const timerDisplay = document.querySelector('.timer')

/*--------------- Functions -------------*/
 function render(){
    scoreDisplay.textContent = `Score: ${score}`
    timerDisplay.textContent = `Timer:00:${sec}`
 }

if(score === 6){
  
}

function timeraa(){ 
    if(flipCard){ 
    
        sec--;
        }
          timerDisplay.textContent = `Timer: ${sec}`
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
             matched++;
             score++;
              cardOne = null;
               cardTwo = null;
                disableDeck = false;
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
    score = 0
    scoreDisplay.textContent = null
           scoreDisplay.textContent = `Score: 0`
  })})

cards.forEach(card => {
  card.addEventListener('click', () => flipCard(card));
});
/*------------------------------------------------------*/


/*----------- Event Listeners ----------*/
resetBtn.addEventListener('click',resetBtn)









/*---------------------------------------------------------*/
// cardOne = card.children[0].children[1].id 
//  const id1 = cardOne.querySelector('.card-back')
//   const id2 = cardTwo.querySelector('.card-back')