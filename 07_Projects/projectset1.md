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