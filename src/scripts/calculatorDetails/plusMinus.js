import { printFields } from './display.js'

export function plusMinus(state) {
  const plusMinus = document.querySelector('.keyboard__btn--plus-minus')

  plusMinus.addEventListener('click', () => {
    let lastItem = state.currentOperation[state.currentOperation.length - 1] 
    let lastIndex = state.currentOperation.length - 1 

    if (isFinite(lastItem) && !state.currentResult) {
      if (!lastItem.startsWith('-')) {
        state.currentOperation[lastIndex] = '-' + lastItem
      } else {
        state.currentOperation[lastIndex] = lastItem.substr(1)
      }
    }

    printFields(state)
    return state
  })
}