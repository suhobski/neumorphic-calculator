import { printFields } from './display.js'

export function dot(operations) {
  const dot = document.querySelector('.keyboard__btn--dot')
  const clear = document.querySelector('.keyboard__btn--clear')

  dot.addEventListener('click', () => {
    let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 
    let lastIndex = operations.currentOperation.length - 1 
    
    // если уже есть результат, тогда ничего не делаем
    if (operations.currentResult) {
      operations.previousResult = operations.currentResult
      operations.previousOperation = operations.currentOperation
      operations.currentOperation = ['0.']
      operations.currentResult = ''
      printFields(operations)
      return
    }

    // если последнее значение не число
    if (!isFinite(lastItem)) {
      operations.currentOperation.push('0.')
      // !Меняем значение кнопки Clear
      if (clear.innerText === 'AC') clear.innerText = 'C'

    } else if (!lastItem.includes('.')) { // если в последнем значении нет точки
      operations.currentOperation[lastIndex] += '.'
    }

    printFields(operations)
    return operations
  })
}