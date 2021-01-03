// Функция вычисления результата

export function compute(array) {

  while(true) {
    // если длина массива равна 1, мы получили результат
    if (array.length === 1) return array[0]

    // на всякий случай, чтобы не повис браузер
    if (array.length === 2) return array[0] + array[1]
  
    if (array.includes("×")) {
      let index = array.indexOf("×") 
      let result = parseFloat(array[index-1]) * parseFloat(array[index+1])
      array.splice(index-1, 3, String(Number(result.toFixed(12))))
      continue  
    }    
    
    if (array.includes("÷")) {
      let index = array.indexOf("÷")
      let result = parseFloat(array[index-1]) / parseFloat(array[index+1])
      array.splice(index-1, 3, String(Number(result.toFixed(12))))
      continue  
    }

    if (array.includes("+")) {
      let index = array.indexOf("+")
      let result = parseFloat(array[index-1]) + parseFloat(array[index+1])
      array.splice(index-1, 3, String(Number(result.toFixed(12))))
      continue  
    }

    if (array.includes("-")) {
      let index = array.indexOf("-")
      let result = parseFloat(array[index-1]) - parseFloat(array[index+1])
      array.splice(index-1, 3, String(Number(result.toFixed(12))))
      continue  
    }
  }
};