function guessInput() {
    const inputs = document.querySelectorAll('#guess > *[id]');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keydown', function(event) {
        if (event.key === "Backspace") {
          inputs[i].value = '';
          if (i !== 0) {
            inputs[i - 1].focus();
          }
  
        } 
        else {
          if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
          } 
          else if (event.key >= "1" && event.key <= "9") {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) {
              inputs[i + 1].focus();
            }
            event.preventDefault();
          } 
          else {
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
      inputs[i].disabled = true;
    }
    return val;
  }
  
  guessInput();
  
  document.getElementById('getval').addEventListener('click', function(event) {
    event.preventDefault();
    const guessVal = getval();
    console.log(guessVal);
  });