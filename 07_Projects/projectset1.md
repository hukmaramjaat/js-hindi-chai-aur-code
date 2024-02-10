# Projects related to Dom

## Project link
[Click here]

(https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 1 

```javaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    let color = e.target.id;
    console.log(color);
    switch (color){
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        let c1 = body.style.backgroundColor;
        console.log(c1);
        break;
      
      case 'grey':
          body.style.backgroundColor = e.target.id;
          break;

      case 'blue':
            body.style.backgroundColor = e.target.id;
            break;    
      case 'white':
            body.style.backgroundColor = e.target.id;
            break;    
      case 'red':
            body.style.backgroundColor = e.target.id;
            break;    
    }
  })
})

```


## Project 2 
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(bmi > 24.9 ){
      result.innerHTML = `<h1> ${bmi} </br> You are Overweight</h1>`
    } else if(bmi < 18.6){
      result.innerHTML = `<h1> ${bmi} </br> You are Underweight</h1>`
    } else {
      result.innerHTML = `<h1> ${bmi} </br> You are in Normal Range</h1>`
    }
  }
})
```

## Project 3
```JavaScript
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);
```

## Project 4
```javaScript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```
## Project 5
```javascript
// generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(chageBgColor, 1000);
  }

  function chageBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);


```


## Project 6 
```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`
})

```