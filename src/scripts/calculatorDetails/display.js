export function printFields(operations) {
  let previousOperationField = document.querySelector('.display__previous-operation')
  let previousResultField = document.querySelector('.display__previous-result')
  let currentOperationField = document.querySelector('.display__current-operation')
  let currentResultField = document.querySelector('.display__current-result')

  // убираем ноль из начального экрана
  if (operations.currentOperation.length === 0) {
    currentOperationField.innerText = '0'
  } else {
    currentOperationField.innerText = ''
    operations.currentOperation.forEach(item => currentOperationField.innerText += item)
  }
  
  previousOperationField.innerText = ''
  if (operations.previousOperation) {
    operations.previousOperation.forEach(item => previousOperationField.innerText += item)
  }

  previousResultField.innerText = operations.previousResult
  currentResultField.innerText = operations.currentResult
}