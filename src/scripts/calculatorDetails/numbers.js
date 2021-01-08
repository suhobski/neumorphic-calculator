export function calculatorNumbers(state, number) {

  let lastItem = state.currentOperation[state.currentOperation.length - 1] 
  let lastIndex = state.currentOperation.length - 1 

  // Checking for the current result. If so, change the fields
  if (state.currentResult) {
    state.previousResult = state.currentResult
    state.currentResult = ''
    state.previousOperation = state.currentOperation
    state.currentOperation = [number]
    return state
  }

  // don't allow to enter a number if the last number is "0"
  if (lastItem === "0") {
    return
  }
  
  // if the last value is a number or a point, then add another digit to the number
  if (isFinite(lastItem) || lastItem == '.') {
    state.currentOperation[lastIndex] += number
  } else {
    state.currentOperation.push(number) // otherwise we create a new number
  }

  return state
}