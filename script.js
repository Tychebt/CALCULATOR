class Calculator{
  constructor(currentOperandTextElement, previousOperandTextElement){
  this.currentOperandTextElement = currentOperandTextElement;
  this.previousOperandTextElement = previousOperandTextElement;
  this.clear()
  }


  clear(){
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
  }

  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
  }

  appendnumber(number){
    if(number == '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  choseOperation(operation){
    if(this.currentOperand === '') return
    if (this.previousOperand !== ''){
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current)) return
    switch(this.operation){
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '/':
        computation = prev / current
        break
      case '*':
        computation = prev * current
        break  
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ""
  }

  updateDisplay(){
      this.currentOperandTextElement.innerText = this.currentOperand
      this.previousOperandTextElement.innerText = this.previousOperand
  }
}

const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelectorAll('[data-equal]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')

const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement)

numberButton.forEach(button =>{
  button.addEvenListener('click',() =>{
    calculator.appendnumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButton.forEach(button =>{
  button.addEvenListener('click',() =>{
    calculator.choseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalButton.addEvenListener('click', button =>{
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEvenListener('click', button =>{
  calculator.clear()
  calculator.updateDisplay()
})