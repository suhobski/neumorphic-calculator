export function printFields(state) {
  let previousOperationField = document.querySelector('.display__previous-operation')
  let previousResultField = document.querySelector('.display__previous-result')
  let currentOperationField = document.querySelector('.display__current-operation')
  let currentResultField = document.querySelector('.display__current-result')

  // убираем ноль из начального экрана
  if (state.currentOperation.length === 0) {
    currentOperationField.innerText = '0'
  } else {
    currentOperationField.innerText = ''
    state.currentOperation.forEach(item => currentOperationField.innerText += item)
  }
  
  previousOperationField.innerText = ''
  if (state.previousOperation) {
    state.previousOperation.forEach(item => previousOperationField.innerText += item)
  }

  previousResultField.innerText = state.previousResult
  currentResultField.innerText = state.currentResult
}