import { printFields } from './display.js'
import { compute } from './compute.js'

export function equal(state) {
  const equal = document.querySelector('.keyboard__btn--equal')

  equal.addEventListener('click', () => {
    let lastItem = state.currentOperation[state.currentOperation.length - 1] 

    if (isFinite(lastItem)) {
      let resultArray = Array.from(state.currentOperation)
      state.currentResult = '= ' + compute(resultArray)        
      printFields(state)
      return state
    }
  })
}