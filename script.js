// War Card game

// Variables
var playerHand;
var dealerHand;
var playerHand2;
var dealerHand2;
var pValue;
var playerSuit;
var playerSuit2;
var playerCard;
var playerCard2;
var dValue;
var dealerSuit;
var dealerSuit2;
var dealerCard;
var dealerCard2;
let credits;
let outcome;
var play = false;

let credit = 5;
const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const suit = ["d", "h", "s", "c"];

// PLAY
function playing() {
  play = true;
  if (play === true && credit > 0) {
    credit -= 1;
    playerHand = pCardValue();
    playerSuit = pCardSuit();
    playerCard = pCardValueSuit();
    dealerHand = dCardValue();
    dealerSuit = dCardSuit();
    dealerCard = dCardValueSuit();
    // cardGen();
    winCheck(playerHand, dealerHand);
  } else if (credit === 0) {
    credits = `Not enough credits! ${credit}`;
    document.getElementById("credits").innerHTML = credits;
    gameover = `GAME OVER`;
    document.getElementById("outcome").innerHTML = gameover;
    // alert("Not enough credits. GAME OVER!");
    return;
  }
  credits = `Credits: ${credit}`;
  document.getElementById("credits").innerHTML = credits;
}

///player card value
function pCardValue() {
  pValue = value[Math.floor(Math.random() * value.length)];
  console.log(pValue);
  return pValue;
}

//player card suit
function pCardSuit() {
  pSuit = suit[Math.floor(Math.random() * suit.length)];
  console.log(pSuit);
  return pSuit;
}

// var cardHolder = document.querySelector(".card");

// function cardGen() {
//   // let divEl = document.createElement("div");
//   // divEl.classList.add("card", playerCard);
//   cardHolder.classList.add("card", playerCard);
//   // cardHolder.appendChild(divEl);
// }

//player card
function pCardValueSuit() {
  pCard = pSuit + pValue;
  console.log(pCard);
  document.getElementById("presult").innerHTML = pCard;
  // cardHolder.classList.add("card", playerCard);
  return pCard;
}

///dealer card value
function dCardValue() {
  dValue = value[Math.floor(Math.random() * value.length)];
  console.log(dValue);
  return dValue;
}

//dealer card suit
function dCardSuit() {
  dSuit = suit[Math.floor(Math.random() * suit.length)];
  console.log(dSuit);
  return dSuit;
}
// var cardDHolder = document.querySelector(".card");

//dealer card
function dCardValueSuit() {
  dCard = dSuit + dValue;
  console.log(dCard);
  document.getElementById("dresult").innerHTML = dCard;
  // cardHolder.classList.add("card", dealerCard);
  return dCard;
}

// var win;
// var lose;
// var tie;

// Win Check
function winCheck(pCardValue, dCardValue) {
  console.log(pCardValue, dCardValue);
  if (pCardValue > dCardValue) {
    credit += 2; //increase credit by 1 if player wins
    // return "Player Wins!";
    console.log("Player Wins!");
    win = `Player Wins!`;
    document.getElementById("outcome").innerHTML = win;
  } else if (pCardValue < dCardValue) {
    // credit -= 1; // decrease credit by 1 if player loses
    // return "Dealer Wins!";
    console.log("Dealer Wins!");
    lose = `Dealer Wins!`;
    document.getElementById("outcome").innerHTML = lose;
  } else if (pCardValue === dCardValue) {
    //return "WAR!";
    console.log("WAR!");
    tie = `WAR!`;
    document.getElementById("outcome").innerHTML = tie;
    setTimeout(function () {
      war();
    }, 1500);

    // war();
  }
}

// let outcome = `${winCheck()}`;
// document.getElementById("outcome").innerHTML = outcome;

// war, get new cards
function war() {
  playerSuit2 = pCardSuit();
  playerHand2 = pCardValue();
  playerCard2 = pCardValueSuit();
  dealerSuit2 = dCardSuit();
  dealerHand2 = dCardValue();
  dealerCard2 = dCardValueSuit();
  // document.getElementById("d2result").innerHTML = dCard;
  warCheck(playerHand2, dealerHand2);
}
// let pwcard = `${dealerCard()}`;
// document.getElementById("pwcard").innerHTML = pwcard;
// let dwcard = `${dealerCard()}`;
// document.getElementById("dwcard").innerHTML = dwcard;

//war, check new cards
function warCheck() {
  console.log(playerHand2, dealerHand2);
  if (playerHand2 > dealerHand2) {
    credit += 3; //increase credit by 3 for war win
    // return "Player Wins War!";
    win = `Player Wins WAR!`;
    document.getElementById("outcome").innerHTML = win;
    console.log("Player Wins WAR!");
  } else if (playerHand2 < dealerHand2) {
    credit -= 1; //decrase credit by 2 for loss
    // return "Dealer Wins War!";
    lose = `Dealer Wins WAR!`;
    document.getElementById("outcome").innerHTML = lose;
    console.log("Dealer Wins WAR!");
  } else if (playerHand2 === dealerHand2) {
    // return "WAR!";
    tie = `WAR!`;
    document.getElementById("outcome").innerHTML = tie;
    console.log("WAR!");
    war();
  }
}
