import { compute } from './compute.js'

export function equal(state) {

  let lastItem = state.currentOperation[state.currentOperation.length - 1] 

  if (isFinite(lastItem)) {
    let resultArray = Array.from(state.currentOperation)
    state.currentResult = '= ' + compute(resultArray)        
    return state
  }
}