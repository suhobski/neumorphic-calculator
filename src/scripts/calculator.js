import { calculatorNumbers } from './calculatorDetails/numbers.js'
import { equal } from './calculatorDetails/equal.js'
import { persent } from './calculatorDetails/persent.js'
import { clear } from './calculatorDetails/clear.js'
import { plusMinus } from './calculatorDetails/plusMinus.js'
import { operation } from './calculatorDetails/operations.js'
import { dot } from './calculatorDetails/dot.js'
import { printFields } from './calculatorDetails/display.js'

export class Calculator {
  // State =================================================================================================
  state = {
    'previousOperation': '',
    'previousResult': '',
    'currentOperation': [],
    'currentResult': ''
  }

  // print all fields ======================================================================================
  display() {
    printFields(this.state)
  }

  // input numbers and operations ==========================================================================
  calculate() {

    //! input from keybord ==================================================================================
    document.addEventListener('keydown', event => { // keyboard listener
      if (event.key == +event.key) { // press digit button on keyboard
        const number = event.key
        calculatorNumbers(this.state, number)
        this.display()
  
      } else if (event.key.match(/[\*\+/-]/)) { // press +-/* button on keyboard
        operation(this.state, event.key)
        this.display()
      
      } else if (event.key == '=' || event.key == 'Enter') { // press = button on keyboard
        equal(this.state)
        this.display() 
      
      } else if (event.key == 'Escape') { // press ESC button on keyboard
        clear(this.state)
        this.display()

      } else if (event.key == '.') { // press ESC button on keyboard
        dot(this.state)
        this.display()  

      } else if (event.key == '%') { // press ESC button on keyboard
        persent(this.state)
        this.display() 
      }
    })

    //! touch input =========================================================================================
    const keyboard = document.querySelector('.keyboard')

    // input numbers 
    keyboard.addEventListener('click', event => {
      if (event.target.hasAttribute('data-number')) {
        const number = event.target.innerText
        calculatorNumbers(this.state, number)
        this.display()
      }
    })

    // ( + - * / )
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