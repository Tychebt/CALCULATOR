// Functions principales

function add (a, b){
    return a + b
}

function substract (a, b){
    return a - b
}

function multiply (a, b){
    return a * b
}

function divide (a, b){
    return a / b
}

function operate (a, b, operator) {
    switch (operator) {
    case '+':
        return add (3,2);
    case '-':
        return substract (a,b);
    case '*':
        return multiply(a,b);
    case '/':
        return divide(a,b);                                                                 
    default:
        console.log(`Sorry, It didn't work with ${operator}.`);
}
}

let clear = document.querySelector('#AC')
clear.addEventListener('click', function(event) {
           console.log(clear)
         });
let plusoumoins = document.querySelector('#btn1')
plusoumoins.addEventListener('click', function(event) {
    console.log(plusoumoins)
  });
let modulo = document.querySelector('#modulo')
modulo.addEventListener('click', function(event) {
    console.log(modulo)
  });
let divise = document.querySelector('#divide')
divise.addEventListener('click', function(event) {
    console.log(divise)
  });
let multiplie = document.querySelector('#multiply')
multiplie.addEventListener('click', function(event) {
    console.log(multiplie)
  });
let soustrait = document.querySelector('#substract')
soustrait.addEventListener('click', function(event) {
    console.log(soustrait)
  });
let ajoute = document.querySelector('#add')
ajoute.addEventListener('click', function(event) {
    console.log(ajoute)
  });
let virgule = document.querySelector('#coma')
virgule.addEventListener('click', function(event) {
    console.log(virgule)
  });
let equal = document.querySelector('#equal')
equal.addEventListener('click', function(event) {
    console.log(equal)
  });
let un = document.querySelector('#one')
un.addEventListener('click', function(event) {
    console.log(un)
  });
  let zero = document.querySelector('#zero')
zero.addEventListener('click', function(event) {
    console.log(zero)
  });
let deux = document.querySelector('#two')
deux.addEventListener('click', function(event) {
    console.log(deux)
  });
let trois = document.querySelector('#three')
trois.addEventListener('click', function(event) {
    console.log(trois)
  });
let quatre = document.querySelector('#four')
quatre.addEventListener('click', function(event) {
    console.log(quatre)
  });
let cinq = document.querySelector('#five')
cinq.addEventListener('click', function(event) {
    console.log(cinq)
  });
let six = document.querySelector('#six')
six.addEventListener('click', function(event) {
    console.log(six)
  });
let sept = document.querySelector('#seven')
sept.addEventListener('click', function(event) {
    console.log(sept)
  });
let huit = document.querySelector('#eight')
huit.addEventListener('click', function(event) {
    console.log(huit)
  });
let neuf = document.querySelector('#nine')
neuf.addEventListener('click', function(event) {
    console.log(neuf)
  });

// let buttons = document.querySelector('.keys')
// console.log(...buttons)

// for (const button of buttons) {
//     button.addEventListener('click', function(event) {
//       console.log(button)
//     });
// }