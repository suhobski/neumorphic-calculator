// Переменные дисплея
let previousOperation = document.querySelector('.display__previous-operation')
let previousResult = document.querySelector('.display__previous-result')
let currentOperation = document.querySelector('.display__current-operation')
let currentResult = document.querySelector('.display__current-result')

// Переменные кнопок операций
const clear = document.querySelector('.keyboard__btn--clear')
const plusMinus = document.querySelector('.keyboard__btn--plus-minus')
const percent = document.querySelector('.keyboard__btn--percent')
const dot = document.querySelector('.keyboard__btn--dot')
const equal = document.querySelector('.keyboard__btn--equal')


const divide = document.querySelector('.keyboard__btn--divide')
const multiply = document.querySelector('.keyboard__btn--multiply')
const minus = document.querySelector('.keyboard__btn--minus')
const plus = document.querySelector('.keyboard__btn--plus')

// Переменные числовых кнопок
const zero = document.querySelector('.keyboard__btn--zero')
const one = document.querySelector('.keyboard__btn--one')
const two = document.querySelector('.keyboard__btn--two')
const three = document.querySelector('.keyboard__btn--three')
const four = document.querySelector('.keyboard__btn--four')
const five = document.querySelector('.keyboard__btn--five')
const six = document.querySelector('.keyboard__btn--six')
const seven = document.querySelector('.keyboard__btn--seven')
const eight = document.querySelector('.keyboard__btn--eight')
const nine = document.querySelector('.keyboard__btn--nine')

window.addEventListener('keydown', event => {
  switch (event.code) {
    case('Digit1') :
    case ('Numpad1'): {
      currentOperation.innerHTML += 1
      one.style.background = '#d8d8da'
      setTimeout(() => one.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit2') :
    case ('Numpad2'): {
      currentOperation.innerHTML += 2
      two.style.background = '#d8d8da'
      setTimeout(() => two.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit3') :
    case ('Numpad3'): {
      currentOperation.innerHTML += 3
      three.style.background = '#d8d8da'
      setTimeout(() => three.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit4') :
    case ('Numpad4'): {
      currentOperation.innerHTML += 4
      four.style.background = '#d8d8da'
      setTimeout(() => four.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit5') :
    case ('Numpad5'): {
      currentOperation.innerHTML += 5
      five.style.background = '#d8d8da'
      setTimeout(() => five.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit6') :
    case ('Numpad6'): {
      currentOperation.innerHTML += 6
      six.style.background = '#d8d8da'
      setTimeout(() => six.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit7') :
    case ('Numpad7'): {
      currentOperation.innerHTML += 7
      seven.style.background = '#d8d8da'
      setTimeout(() => seven.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit8') :
    case ('Numpad8'): {
      currentOperation.innerHTML += 8
      eight.style.background = '#d8d8da'
      setTimeout(() => eight.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit9') :
    case ('Numpad9'): {
      currentOperation.innerHTML += 9
      nine.style.background = '#d8d8da'
      setTimeout(() => nine.style.background = '#F0F0F3', 150)
      break;
    }
    case('Digit0') :
    case ('Numpad0'): {
      currentOperation.innerHTML += 0
      zero.style.background = '#d8d8da'
      setTimeout(() => zero.style.background = '#F0F0F3', 150)
      break;
    }
  } 
})