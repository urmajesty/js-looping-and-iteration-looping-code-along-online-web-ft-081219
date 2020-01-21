

function writeCards(cards, event){
     let finishedCards = []
    for (let i = 0; i < cards.length; i++) {
        finishedCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
   
    }
    return finishedCards
}

function countDown(countingDown){
    while (countingDown >= 0){
    console.log(countingDown)
      countingDown -=1

    }
    // console.log(countingDown)
}
