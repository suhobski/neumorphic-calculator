import { calculatorNumbers } from './calculatorDetails/numbers.js'
import { equal } from './calculatorDetails/equal.js'
import { persent } from './calculatorDetails/persent.js'
import { clear } from './calculatorDetails/clear.js'
import { plusMinus } from './calculatorDetails/plusMinus.js'
import { operation } from './calculatorDetails/operations.js'
import { dot } from './calculatorDetails/dot.js'
import { printFields } from './calculatorDetails/display.js'

export class Calculator {
  // State
  state = {
    'previousOperation': '',
    'previousResult': '',
    'currentOperation': [],
    'currentResult': ''
  }

  // вывод на экран всех полей
  display() {
    printFields(this.state)
  }

  // 
  keyboard() {
    const keyboard = document.querySelector('.keyboard')

    // ввод чисел ===========================================================================================
    keyboard.addEventListener('click', event => {
      if (event.target.hasAttribute('data-number')) {
        const number = event.target.innerText
        calculatorNumbers(this.state, number)
        this.display()
      }
    })

    // ( + - * / ) ==========================================================================================
    keyboard.addEventListener('click', event => {
      if (event.target.hasAttribute('data-operation')) {
        const act = event.target.innerText
        operation(this.state, act)
        this.display()    
      }
    })

    // ( = )
    const equalButton = document.querySelector('.keyboard__btn--equal')

    equalButton.addEventListener('click', () => {
      equal(this.state)
      this.display()    
    })

    // ( % )
    const percentButton = document.querySelector('.keyboard__btn--percent')

    percentButton.addEventListener('click', () => {
      persent(this.state)
      this.display()    
    })

    // ( C )
    const clearButton = document.querySelector('.keyboard__btn--clear')

    clearButton.addEventListener('click', () => {
      clear(this.state)
      this.display()    
    })

    // ( +/- )
    const plusMinusButton = document.querySelector('.keyboard__btn--plus-minus')
    
    plusMinusButton.addEventListener('click', () => {
      plusMinus(this.state)
      this.display()    
    })

    // ( . )
    const dotButton = document.querySelector('.keyboard__btn--dot')

    dotButton.addEventListener('click', () => {
      dot(this.state)
      this.display()    
    })
  } 
}