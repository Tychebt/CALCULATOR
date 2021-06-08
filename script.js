const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");


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

  getDisplayNumber(number){
    const floatNumber = parseFloat(number)
    if(isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString("en")
  }

  updateDisplay(){
      this.currentOperandTextElement.innerText = this.currentOperand
      if(this.operation!= null){
        this.previousOperandTextElement.innerText = 
         `${this.previousOperand} ${this.operation}`
      }
  }
}


const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateScreen()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.choseOperation(button.innerText)
    calculator.updateScreen()
  })
})

singleOperationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.singleOperation(button.innerText)
    calculator.updateScreen()
  })
})

equalButton.addEventListener('click', button => {
  calculator.computeElements()
  calculator.updateScreen()
  calculator.resetCalc = true
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateScreen()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateScreen()
})

changeButton.addEventListener('click', button => {
  calculator.changeSign()
  calculator.updateScreen()
})

percentButton.addEventListener('click', button => {
  calculator.calculatePercentage()
  calculator.updateScreen()
})