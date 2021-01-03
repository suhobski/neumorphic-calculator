export function clear(state) {
  const clear = document.querySelector('.keyboard__btn--clear')
  
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