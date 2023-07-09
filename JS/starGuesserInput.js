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
  
  function countDown() {
    let count = 3;
  
    function displayCount() {
      if (count !== 0) {
        console.log(count);
        count--;
        setTimeout(displayCount, 1000);
      } else {
        console.log("GO!...");
        num = generateNum();
        // console.log(num);
        // guess(num);
      }
    }
    displayCount();
  }
  
  function startGame() {
    console.log("Welcome To Star Guesser");
    setTimeout(() => {
      console.log("The Game Starts In ");
      countDown();
    }, 5000);
  }
  
  function guessInput() {
    const inputs = document.querySelectorAll('#guess > *[id]');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keydown', function(event) {
        if (event.key === "Backspace") {
          inputs[i].value = '';
          if (i !== 0) {
            inputs[i - 1].focus();
          }
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
          } else if (event.key >= "1" && event.key <= "9") {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) {
              inputs[i + 1].focus();
            }
            event.preventDefault();
          } else {
            inputs[i].value = '';
            event.preventDefault();
          }
        }
      });
    }
  }
  
  function getval() {
    const inputs = document.querySelectorAll('#guess > *[id]');
    let val = '';
  
    for (let i = 0; i < inputs.length; i++) {
      val += inputs[i].value;
    //   inputs[i].disabled = true;
    }
    return val;
  }
  
  function checkVal() {
    for (let i = 0; i < 4; i++) {
      if (num[i] === guessVal[i]) {
        console.log("Correct");
      } else if (num.includes(guessVal[i])) {
        console.log("Its There");
      } else {
        console.log("Wrong");
      }
    }
  }
  
  guessInput();
  
  document.getElementById('getval').addEventListener('click', function(event) {
    event.preventDefault();
    guessVal = getval();
    console.log(guessVal);
    checkVal();
  });
  
  let num;
  let guessVal;
  startGame();  