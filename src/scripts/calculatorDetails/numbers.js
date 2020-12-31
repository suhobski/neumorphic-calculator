import { display } from './display.js'

export function calculatorNumbers(operations) {
  // Переменные числовых кнопок
  const numberButtons = document.querySelectorAll('[data-number]')

  // вешаем событие на числовые кнопки ====================================================================
  numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault()

      let lastItem = operations.currentOperation[operations.currentOperation.length - 1] 
      let lastIndex = operations.currentOperation.length - 1 

      // Проверяем на наличие текущего результата. Если есть, меняем поля
      if (operations.currentResult) {
        operations.previousResult = operations.currentResult
        operations.currentResult = ''
        operations.previousOperation = operations.currentOperation
        operations.currentOperation = [button.innerText]
        display(operations)
        return
      }

      // не даем ввести число, если последнее число "0" 
      if (lastItem === "0") {
        return
      }
      
      // если последнее значение число или точка, тогда добавляем к числу еще одну цифру
      if (isFinite(lastItem) || lastItem == '.') {
        operations.currentOperation[lastIndex] += button.innerText
      } else {
        operations.currentOperation.push(button.innerText) // иначе создаем новое число
      }
      // стили нажатия кнопки
      button.style.background = '#d8d8da'
      setTimeout(() => button.style.background = '#F0F0F3', 150)

      display(operations)
      return operations
    })
  })
}