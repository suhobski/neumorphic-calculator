import { printFields } from './display.js'

export function clear(operations) {
  const clear = document.querySelector('.keyboard__btn--clear')
  
  clear.addEventListener('click', () => {
    operations.currentOperation = []
    operations.currentResult = ''

    if (clear.innerText === 'AC' && operations.previousResult) {
      operations.previousResult = ''
      operations.previousOperation = ''
      clear.innerText = 'C'
    }

    if (operations.previousResult) {
      clear.innerText = 'AC'
    }

    printFields(operations)
    return operations
  })
}