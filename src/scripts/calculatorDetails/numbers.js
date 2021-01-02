export function calculatorNumbers(state, number) {

  let lastItem = state.currentOperation[state.currentOperation.length - 1] 
  let lastIndex = state.currentOperation.length - 1 

  // Проверяем на наличие текущего результата. Если есть, меняем поля
  if (state.currentResult) {
    state.previousResult = state.currentResult
    state.currentResult = ''
    state.previousOperation = state.currentOperation
    state.currentOperation = [number]
    return state
  }

  // не даем ввести число, если последнее число "0" 
  if (lastItem === "0") {
    return
  }
  
  // если последнее значение число или точка, тогда добавляем к числу еще одну цифру
  if (isFinite(lastItem) || lastItem == '.') {
    state.currentOperation[lastIndex] += number
  } else {
    state.currentOperation.push(number) // иначе создаем новое число
  }

  return state
}