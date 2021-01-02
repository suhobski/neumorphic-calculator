import { printFields } from './display.js'

export function dot(state) {
  const dot = document.querySelector('.keyboard__btn--dot')
  const clear = document.querySelector('.keyboard__btn--clear')

  dot.addEventListener('click', () => {
    let lastItem = state.currentOperation[state.currentOperation.length - 1] 
    let lastIndex = state.currentOperation.length - 1 
    
    // если уже есть результат, тогда ничего не делаем
    if (state.currentResult) {
      state.previousResult = state.currentResult
      state.previousOperation = state.currentOperation
      state.currentOperation = ['0.']
      state.currentResult = ''
      printFields(state)
      return
    }

    // если последнее значение не число
    if (!isFinite(lastItem)) {
      state.currentOperation.push('0.')
      // !Меняем значение кнопки Clear
      if (clear.innerText === 'AC') clear.innerText = 'C'

    } else if (!lastItem.includes('.')) { // если в последнем значении нет точки
      state.currentOperation[lastIndex] += '.'
    }

    printFields(state)
    return state
  })
}