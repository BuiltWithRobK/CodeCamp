let count = 0;

function cardCounter(card){
  if (card <= 6){
    count = count + 1;
  } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A"){
    count = count - 1;
  }

  if (count > 0 ){
    return count + " Bet"
  } else {
    return count + " Hold"
  }
}

console.log(cardCounter(2))
console.log(cardCounter("J"))
console.log(cardCounter(9))
console.log(cardCounter(2))
console.log(cardCounter(7))