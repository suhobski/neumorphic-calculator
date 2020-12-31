import { display } from './display.js'

export function plusMinus(operations) {
  const plusMinus = document.querySelector('.keyboard__btn--plus-minus')

  plusMinus.addEventListener('click', () => {
    let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 
    let lastIndex = operations.currentOperation.length - 1 

    if (isFinite(lastItem) && !operations.currentResult) {
      if (!lastItem.startsWith('-')) {
        operations.currentOperation[lastIndex] = '-' + lastItem
      } else {
        operations.currentOperation[lastIndex] = lastItem.substr(1)
      }
    }

    display(operations)
    return operations
  })
}