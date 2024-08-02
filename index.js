// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

//let firstCard = getRandomCard()
//let secondCard = getRandomCard()


let player = {
    name: "Mel",
    chips: 200
}
let cards =[]  //array of our cards
let sum = 0
let hasBlackJack = false //default is you dont have BlackJack
let isAlive=false //is the person out of the game
let message =""  //to keep string variables in a message
let messageEl = document.getElementById("message-el") //display the message
let sumEl= document.getElementById("sum-el") //display the sum 
let cardsEl = document.getElementById("cards-el") //display the cards drawn
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": R" + player.chips




function getRandomCard() {                              //statement to trigger random cards being selected
    let randomNumber= Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    
}


function startGame(){                           //update to call the renderGame since its in another function
    isAlive= true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}




//game!
function renderGame() {
    cardsEl.textContent="Cards: "
    for (let i=0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "

    sumEl.textContent= "Sum: "+ sum     //write out the sum when playing
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        winSound.play();            //alert the player if they have won by playing a sound
    } else {
        message = "You're out of the game!";
        isAlive = false;
        loseSound.play();           //alert the player if they lose by playing a sound
    }
    messageEl.textContent = message
    }
}




function newCard(){
    if (isAlive === true && hasBlackJack === false){            //regulate the new button so player does not get a card when out the game
        let card = getRandomCard()
        sum += card
        cards.push(card)                                        // to add the new card to the cards array
        renderGame()
    }
}

//cash out! keep track of state of game to remember if player won or not
//console.log(hasBlackJack) // did you get blackJack or not
//console.log(isAlive)//are you still continuing with the game
//console.log(message)
//messageEl.textContent = message