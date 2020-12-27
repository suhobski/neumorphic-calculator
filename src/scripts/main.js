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


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
   
    // добавляем цифру к массиву вычисления
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
  })
})

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
  });
});

dot.addEventListener('click', () => {
  if (!isFinite(cor[cor.length-1])) {
    displayOperation()
    currentOperation.innerText += '.'
    cor.push('.')
    console.log(cor);
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
  currentOperation.innerText = ''
  currentResult.innerText = ''
  console.log(cor);
})

// Равно ( = )  =============================================================================================
equal.addEventListener('click', () => {
  currentResult.innerText = compute(cor)
  cor = []
})

// Процент ( % ) ============================================================================================

// percent.addEventListener('click', () => {
//   console.log("Click");
//   let lastIndex = cor.length-1
//   if (isFinite(cor[lastIndex]) && cor.length >= 3 && (cor[lastIndex-1] === '+' || cor[lastIndex-1] === '-')){
//     cor[lastIndex] = cor[lastIndex-2] / 100 * cor[lastIndex] 
//   }
//   if (isFinite(cor[lastIndex]) && cor.length === 1 || (cor[lastIndex-1] === '*' || cor[lastIndex-1] === '*')){
//     console.log(cor[lastIndex]);
//     cor[lastIndex] = cor[lastIndex] / 100 * cor[lastIndex] 
//   }
// })

function compute(array) {

  while(true) {
    // если длина массива равна 1, мы получили результат
    if (array.length === 1) return array[0]
    
    if (array.includes("*")) {
      let index = array.indexOf("*")
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
      console.log(result);
      array.splice(index-1, 3, String(result))
      console.log(array)
      continue  
    }
  }
}

// previousOperation
// previousResult
// currentOperation 
// currentResult

function displayOperation() {
  if (currentResult.innerText) {
    previousOperation.innerText = currentOperation.innerText
    previousResult.innerText = currentResult.innerText
    currentOperation.innerText = ''
    currentResult.innerText = ''
    cor = []
  }

  currentOperation.innerText = ''
  cor.forEach(item => currentOperation.innerText += item) 
}

