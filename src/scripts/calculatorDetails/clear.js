export function clear(state) {
  
  state.currentOperation = []
  state.currentResult = ''

  if (clear.innerText === 'AC' && state.previousResult) {
    state.previousResult = ''
    state.previousOperation = ''
    clear.innerText = 'C'
  }

  if (state.previousResult) {
    clear.innerText = 'AC'
  }

  return state
}