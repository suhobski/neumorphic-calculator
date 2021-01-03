export function plusMinus(state) {

  let lastItem = state.currentOperation[state.currentOperation.length - 1] 
  let lastIndex = state.currentOperation.length - 1 

  if (isFinite(lastItem) && !state.currentResult) {
    if (!lastItem.startsWith('-')) {
      state.currentOperation[lastIndex] = '-' + lastItem
    } else {
      state.currentOperation[lastIndex] = lastItem.substr(1)
    }
  }

  return state
}