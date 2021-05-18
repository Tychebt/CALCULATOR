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



