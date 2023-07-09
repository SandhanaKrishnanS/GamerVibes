function countDown() {
    let count = 3;
  
    function displayCount() {
      if (count !== 0) {
        console.log(count);
        count--;
        setTimeout(displayCount, 1000);
      } else {
        console.log("GO!...");
        let num = generateNum();
        // console.log(num);
        guess(num);
      }
    }
    displayCount();
  }
  
  function generateNum() {
      let val = "";
      while (val.length < 4) {
          let temp = Math.floor(Math.random() * 9) + 1;
          if (!val.includes(temp.toString())) {
              val += temp.toString();
          }
      }
    return val;
  }
  
  function getUserInput(guessNo) {
    const userInput = prompt(`Enter Your Guess Number ${guessNo}:`);
    return userInput.toString();
  }
  
  function validate(guess, num) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      if (num[i] === guess[i]) {
        console.log("Right");
        count++;
      } else if (num.includes(guess[i])) {
        console.log("Slightly Wrong");
      } else {
        console.log("Wrong");
      }
    }
    if (count === 4) {
      setTimeout(() => {
        console.log("Congrats, You Won");
        winCount++;
        start();
      }, 2000);
    }
    return count;
  }
  
  function guess(num) {
    let guessNo = 0;
    let flag = 0;
    while (guessNo !== 5) {
      let guess = getUserInput(guessNo + 1);
      guessNo++;
      let end = validate(guess, num);
      if (end === 4) {
          flag = 0;
          break;
      }
      flag++;
    }
    if(flag > 0) {
         setTimeout(() => {
        console.log("Oh, You Lost");
        start();
      }, 2);
    }
    x++;
  }
  
  function start() {
      if ( x === 0) {
      startGame();
      }
      else {
          const userval = prompt("Press Y to play again or any other key to end the game:").toUpperCase();
          if ( userval === "Y") {
              startGame();
          }
          else {
            x = 0;
            console.log("Thank You For Playing.");
          }
      }
  }
  
  function startGame() {
    if (x === 0) {
      console.log("Welcome To Star Guesser");
    } else if (x > 0) {
      console.log("You are About to Embark on Star Guesser Once Again");
      console.log(`Win Count : ${winCount}`);
    }
    setTimeout(() => {
      console.log("The Game Starts In ");
      countDown();
    }, 5000);
  }
  
  let x = 0;
  let winCount = 0;