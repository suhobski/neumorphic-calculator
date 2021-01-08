export function operation(state, act) {

  let lastItem = state.currentOperation[state.currentOperation.length - 1] 

  // Checking for the current result. If so, change the fields
  if (state.currentResult) {
    state.previousResult = state.currentResult
    state.previousOperation = state.currentOperation
    state.currentOperation = [state.currentResult.substr(2), act]
    state.currentResult = ''
    return state
  }

  // add a character to the calculation array, if the last element of the array is a number
  if (isFinite(lastItem)) {
    state.currentOperation.push(act)
  }

  return state
}