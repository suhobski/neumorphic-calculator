export function calculatorNumbers(operations, number) {

  let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 
  let lastIndex = operations.currentOperation.length - 1 

  // Проверяем на наличие текущего результата. Если есть, меняем поля
  if (operations.currentResult) {
    operations.previousResult = operations.currentResult
    operations.currentResult = ''
    operations.previousOperation = operations.currentOperation
    operations.currentOperation = [number]
    return operations
  }

  // не даем ввести число, если последнее число "0" 
  if (lastItem === "0") {
    return
  }
  
  // если последнее значение число или точка, тогда добавляем к числу еще одну цифру
  if (isFinite(lastItem) || lastItem == '.') {
    operations.currentOperation[lastIndex] += number
  } else {
    operations.currentOperation.push(number) // иначе создаем новое число
  }

  return operations
}