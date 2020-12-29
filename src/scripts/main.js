// Переменные дисплея
let previousOperation = document.querySelector('.display__previous-operation')
let previousResult = document.querySelector('.display__previous-result')
let currentOperation = document.querySelector('.display__current-operation')
let currentResult = document.querySelector('.display__current-result')

let cor = []


// Переменные кнопок операций
const clear = document.querySelector('.keyboard__btn--clear')
const plusMinus = document.querySelector('.keyboard__btn--plus-minus')
const percent = document.querySelector('.keyboard__btn--percent')
const dot = document.querySelector('.keyboard__btn--dot')
const equal = document.querySelector('.keyboard__btn--equal')

// Переменные числовых кнопок
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')

// Кнопки чисел ============================================================================================
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
   
  if ((isFinite(cor[cor.length-1])  || (cor[cor.length-1]) == '.') && (cor[cor.length-1]) !== "0") {
    cor[cor.length-1] += button.innerText
    // добавляем цифру к строке текущей операции
    currentOperation.innerText += button.innerText
    } else if ((cor[cor.length-1]) !== "0"){
      displayOperation()
      cor.push(button.innerText)
      // добавляем цифру к строке текущей операции
      currentOperation.innerText += button.innerText
    }
    console.log(cor);
    // стили нажатия кнопки
    button.style.background = '#d8d8da'
    setTimeout(() => button.style.background = '#F0F0F3', 150)

    // !Меняем значение кнопки Clear
    if (clear.innerText === 'AC') clear.innerText = 'C'
  })
})

// Операции ( + ), ( - ), ( * ), ( / ) =====================================================================
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (isFinite(cor[cor.length-1])) {
      // добавляем символ к строке текущей операции
      currentOperation.innerText += button.innerText

      // добавляем символ к массиву вычисления
      cor.push(button.innerText)
      console.log(cor);
      
      // стили нажатия кнопки
      button.style.background = '#d8d8da'
      setTimeout(() => button.style.background = '#F0F0F3', 150) 
    }
    
    // использование текущего результата для новых вычислений после нажатия кнопок операций над числами
    if (currentResult.innerText) {
      cor.push(currentResult.innerText.substr(2))
      cor.push(button.innerText)

      previousOperation.innerText = currentOperation.innerText
      previousResult.innerText = currentResult.innerText
      currentOperation.innerText = currentResult.innerText.substr(2) + button.innerText 
      currentResult.innerText = ''

      console.log(cor);
    }
  })
});

// Точка ( . ) ==============================================================================================
dot.addEventListener('click', () => {
  if (!isFinite(cor[cor.length-1])) {
    displayOperation()
    // currentOperation.innerText += '.'
    cor.push('0.')
    console.log(cor);
    displayOperation()

    // !Меняем значение кнопки Clear
    if (clear.innerText === 'AC') clear.innerText = 'C'

  } else if (!cor[cor.length-1].includes('.') && isFinite(cor[cor.length-1])) {
    // добавляем символ к строке текущей операции
    currentOperation.innerText += '.'

    cor[cor.length-1] += '.'
    console.log(cor)
  }
})

// Очистить ( С ) ===========================================================================================
clear.addEventListener('click', () => {
  cor = []
  currentOperation.innerText = '0'
  currentResult.innerText = ''
  console.log(cor)

  if (clear.innerText === 'AC' && previousResult.innerText) {
    previousResult.innerText = ''
    previousOperation.innerText = ''
    clear.innerText = 'C'
  }

  if (previousResult.innerText) {
    clear.innerText = 'AC'
  }
})

// Равно ( = )  =============================================================================================
equal.addEventListener('click', () => {
  if (isFinite(cor[cor.length-1])) {
    currentResult.innerText = '= ' + compute(cor)
    cor = []
  }
})

// Процент ( % ) ============================================================================================

percent.addEventListener('click', () => {
  if (isFinite(cor[cor.length-1])) {
    if(cor.length > 2) {
      (cor[cor.length-1] = cor[cor.length-3] / 100 * cor[cor.length-1])
      displayOperation()
    }
  if (cor.length === 1 && isFinite(cor[0])) {
    cor[0] /= 100
    displayOperation()
  }
    // currentOperation.innerText += "%"
    // cor.push('%')
    console.log(cor);
  }
  // стили нажатия кнопки
  percent.style.background = '#d8d8da'
  setTimeout(() => percent.style.background = '#F0F0F3', 150) 
})

// ( +/- ) ==================================================================================================
plusMinus.addEventListener('click', () => {
  if (isFinite(cor[cor.length-1])) {
    if (!cor[cor.length-1].startsWith('-')) {
      cor[cor.length-1] = '-' + cor[cor.length-1]
    } else {
      cor[cor.length-1] = cor[cor.length-1].substr(1)
    }

    displayOperation()
    console.log(cor);
  }
})

// Функция подсчета результата =============================================================================
function compute(array) {

  while(true) {
    // если длина массива равна 1, мы получили результат
    if (array.length === 1) return array[0]

    if (array.length === 2) return array[0] + array[1]
  
    if (array.includes("×")) {
      let index = array.indexOf("×")
      let result = array[index-1] * array[index+1]
      array.splice(index-1, 3, String(result))
      console.log(array)
      continue  
    }    
    
    if (array.includes("÷")) {
      let index = array.indexOf("÷")
      let result = array[index-1] / array[index+1]
      array.splice(index-1, 3, String(result))
      console.log(array)
      continue  
    }

    if (array.includes("+")) {
      let index = array.indexOf("+")
      let result = +array[index-1] + +array[index+1]
      array.splice(index-1, 3, String(result))
      console.log(array)
      continue  
    }

    if (array.includes("-")) {
      let index = array.indexOf("-")
      let result = parseFloat(array[index-1]) - parseFloat(array[index+1])
      array.splice(index-1, 3, String(result))
      console.log(array)
      continue  
    }
  }
}

function displayOperation() {
  if (currentResult.innerText) {
    previousOperation.innerText = currentOperation.innerText
    previousResult.innerText = currentResult.innerText
    currentOperation.innerText = '0'
    currentResult.innerText = ''
    cor = []
  }

  currentOperation.innerText = ''
  cor.forEach(item => currentOperation.innerText += item) 
}