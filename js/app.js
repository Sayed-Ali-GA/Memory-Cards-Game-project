/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let matched = 0;
let cardOne =null
let cardTwo = null
let disableDeck = false;
let timer
/*----- Cached Element References  -----*/
const cards = document.querySelectorAll('.card')
const resetBtn = document.getElementById('reset')

/*--------------- Functions -------------*/

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
}


resetBtn.addEventListener('click', () => {
  cards.forEach(card => {
    card.classList.remove('flipped');
  })})

cards.forEach(card => {
  card.addEventListener('click', () => flipCard(card));
});
/*------------------------------------------------------*/


/*----------- Event Listeners ----------*/










/*---------------------------------------------------------*/
// cardOne = card.children[0].children[1].id 
//  const id1 = cardOne.querySelector('.card-back')
//   const id2 = cardTwo.querySelector('.card-back')