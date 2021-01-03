export function operation(state, act) {

  let lastItem = state.currentOperation[state.currentOperation.length - 1] 

  // Проверяем на наличие текущего результата. Если есть, меняем поля
  if (state.currentResult) {
    state.previousResult = state.currentResult
    state.previousOperation = state.currentOperation
    state.currentOperation = [state.currentResult.substr(2), act]
    state.currentResult = ''
    return state
  }

  // добавляем символ к массиву вычисления, если последний элемет массива число
  if (isFinite(lastItem)) {
    state.currentOperation.push(act)
  }

  return state
}