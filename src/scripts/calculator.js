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
  operations = {
    'previousOperation': '',
    'previousResult': '',
    'currentOperation': [],
    'currentResult': ''
  }

  // вывод на экран всех полей
  display() {
    printFields(this.operations)
  }

  // 
  keyboard() {
    const keyboard = document.querySelector('.keyboard')

    // ввод чисел ===========================================================================================
    //  через мышь
    keyboard.addEventListener('click', event => {
      if (event.target.hasAttribute('data-number')) {
        const number = event.target.innerText
        calculatorNumbers(this.operations, number)
        this.display()
      }
    })

    // через клавиатуру
    document.addEventListener('keydown', event => {
      if (event.key.match(/\d/)) {
        const number = event.key
        calculatorNumbers(this.operations, number)
        this.display()    
      }  
    });

    // ! ( + - * / )
    operation(this.operations)

    // ( = )
    equal(this.operations)

    // ( % )
    calculatorPersent(this.operations)

    // ( C )
    clear(this.operations)

    // ( +/- )
    plusMinus(this.operations)
    
    // ( . )
    dot(this.operations)
  } 
}