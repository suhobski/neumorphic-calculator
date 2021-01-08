import { printFields } from './display.js'

export function dot(state) {
  const clear = document.querySelector('.keyboard__btn--clear')

  let lastItem = state.currentOperation[state.currentOperation.length - 1] 
  let lastIndex = state.currentOperation.length - 1 
  
  // if there is already a result, then we do nothing
  if (state.currentResult) {
    state.previousResult = state.currentResult
    state.previousOperation = state.currentOperation
    state.currentOperation = ['0.']
    state.currentResult = ''
    printFields(state)
    return
  }

  // if the last value is not a number
  if (!isFinite(lastItem)) {
    state.currentOperation.push('0.')
    // Change the value of the Clear button
    if (clear.innerText === 'AC') clear.innerText = 'C'

  } else if (!lastItem.includes('.')) { // if there is no dot in the last value
    state.currentOperation[lastIndex] += '.'
  }

  return state
}