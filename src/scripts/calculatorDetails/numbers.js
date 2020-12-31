import { display } from './display.js'

export function calculatorNumbers(operations) {
  // Переменные числовых кнопок
  const keyboard = document.querySelector('.keyboard')

  keyboard.addEventListener('click', event => {
    if (event.target.hasAttribute('data-number')) {
      event.preventDefault()

      let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 
      let lastIndex = operations.currentOperation.length - 1 

      // Проверяем на наличие текущего результата. Если есть, меняем поля
      if (operations.currentResult) {
        operations.previousResult = operations.currentResult
        operations.currentResult = ''
        operations.previousOperation = operations.currentOperation
        operations.currentOperation = [event.target.innerText]
        display(operations)
        return
      }

      // не даем ввести число, если последнее число "0" 
      if (lastItem === "0") {
        return
      }
      
      // если последнее значение число или точка, тогда добавляем к числу еще одну цифру
      if (isFinite(lastItem) || lastItem == '.') {
        operations.currentOperation[lastIndex] += event.target.innerText
      } else {
        operations.currentOperation.push(event.target.innerText) // иначе создаем новое число
      }
      
      display(operations)
      return operations
    }
  })
}