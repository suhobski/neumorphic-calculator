import { printFields } from './display.js'

export function calculatorPersent(operations) {
  const percent = document.querySelector('.keyboard__btn--percent')
  
  percent.addEventListener('click', () => {
    let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 
    let lastIndex = operations.currentOperation.length - 1 

    if (isFinite(lastIndex) && !operations.currentResult) {
      if(operations.currentOperation.length > 2) {
        operations.currentOperation[lastIndex] = operations.currentOperation[lastIndex-2] / 100 * operations.currentOperation[lastIndex] + ''
      }
      if (lastIndex === 0 && isFinite(lastItem)) {
        operations.currentOperation[0] /= 100 + ''
      }
    }

    printFields(operations)
    return operations
  })
}