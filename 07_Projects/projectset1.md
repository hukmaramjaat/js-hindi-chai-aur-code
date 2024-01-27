# Projects related to Dom

## Project link
[Click here]
(https://stackblitz.com/edit/dom-project-chaiaurcode-zhd1fz?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css)

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