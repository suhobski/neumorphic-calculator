import { printFields } from './display.js'

export function clear(state) {
  const clear = document.querySelector('.keyboard__btn--clear')
  
  clear.addEventListener('click', () => {
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

    printFields(state)
    return state
  })
}