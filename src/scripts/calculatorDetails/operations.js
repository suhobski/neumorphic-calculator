import { display } from './display.js'

export function operation(operations) {
  const operationButtons = document.querySelectorAll('[data-operation]')

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 

      // Проверяем на наличие текущего результата. Если есть, меняем поля
      if (operations.currentResult) {
        operations.previousResult = operations.currentResult
        operations.previousOperation = operations.currentOperation
        operations.currentOperation = [operations.currentResult.substr(2), button.innerText]
        operations.currentResult = ''
        display(operations)
        return
      }

      // добавляем символ к массиву вычисления, если последний элемет массива число
      if (isFinite(lastItem)) {
        operations.currentOperation.push(button.innerText)
      }

      display(operations)
      return operations
    })
  })
}