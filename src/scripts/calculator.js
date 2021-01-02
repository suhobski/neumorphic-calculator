import { calculatorNumbers } from './calculatorDetails/numbers.js'
import { equal } from './calculatorDetails/equal.js'
import { calculatorPersent } from './calculatorDetails/persent.js'
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
    //  через мышь
    keyboard.addEventListener('click', event => {
      if (event.target.hasAttribute('data-number')) {
        const number = event.target.innerText
        calculatorNumbers(this.state, number)
        this.display()
      }
    })

    // через клавиатуру
    document.addEventListener('keydown', event => {
      if (event.key.match(/\d/)) {
        const number = event.key
        calculatorNumbers(this.state, number)
        this.display()    
      }  
    });

    // ! ( + - * / )
    operation(this.state)

    // ( = )
    equal(this.state)

    // ( % )
    calculatorPersent(this.state)

    // ( C )
    clear(this.state)

    // ( +/- )
    plusMinus(this.state)
    
    // ( . )
    dot(this.state)
  } 
}