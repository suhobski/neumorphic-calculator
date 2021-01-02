import { printFields } from './display.js'

export function calculatorPersent(state) {
  const percent = document.querySelector('.keyboard__btn--percent')
  
  percent.addEventListener('click', () => {
    let lastItem = state.currentOperation[state.currentOperation.length - 1] 
    let lastIndex = state.currentOperation.length - 1 

    if (isFinite(lastIndex) && !state.currentResult) {
      if(state.currentOperation.length > 2) {
        state.currentOperation[lastIndex] = state.currentOperation[lastIndex-2] / 100 * state.currentOperation[lastIndex] + ''
      }
      if (lastIndex === 0 && isFinite(lastItem)) {
        state.currentOperation[0] /= 100 + ''
      }
    }

    printFields(state)
    return state
  })
}