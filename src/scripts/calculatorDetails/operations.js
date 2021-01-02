import { printFields } from './display.js'

export function operation(state) {
  const operationButtons = document.querySelectorAll('[data-operation]')

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      let lastItem = state.currentOperation[state.currentOperation.length - 1] 

      // Проверяем на наличие текущего результата. Если есть, меняем поля
      if (state.currentResult) {
        state.previousResult = state.currentResult
        state.previousOperation = state.currentOperation
        state.currentOperation = [state.currentResult.substr(2), button.innerText]
        state.currentResult = ''
        printFields(state)
        return
      }

      // добавляем символ к массиву вычисления, если последний элемет массива число
      if (isFinite(lastItem)) {
        state.currentOperation.push(button.innerText)
      }

      printFields(state)
      return state
    })
  })
}