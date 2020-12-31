import { calculatorNumbers } from './calculatorDetails/numbers.js'
import { equal } from './calculatorDetails/equal.js'
import { calculatorPersent } from './calculatorDetails/persent.js'
import { clear } from './calculatorDetails/clear.js'
import { plusMinus } from './calculatorDetails/plusMinus.js'
import { operation } from './calculatorDetails/operations.js'
import { dot } from './calculatorDetails/dot.js'

export class Calculator {
  // State
  operations = {
    'previousOperation': '',
    'previousResult': '',
    'currentOperation': [],
    'currentResult': ''
  }

  compute() {
    // Операции с числами
    calculatorNumbers(this.operations)

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
    
    // ( + - * / )
    operation(this.operations) 
  }
}