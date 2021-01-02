import { printFields } from './display.js'
import { compute } from './compute.js'

export function equal(operations) {
  const equal = document.querySelector('.keyboard__btn--equal')

  equal.addEventListener('click', () => {
    let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 

    if (isFinite(lastItem)) {
      let resultArray = Array.from(operations.currentOperation)
      operations.currentResult = '= ' + compute(resultArray)        
      printFields(operations)
      return operations
    }
  })
}