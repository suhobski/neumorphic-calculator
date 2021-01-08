// Function for calculating the result from an array ========================================================

export function compute(array) {

  while(true) {

    // if the length of the array is 1, we got the result
    if (array.length === 1) return array[0]

    if (array.includes("×") || array.includes("*")) {
      let index = (array.includes("×")) ? array.indexOf("×") : array.indexOf("*")
      let result = parseFloat(array[index-1]) * parseFloat(array[index+1])
      array.splice(index-1, 3, String(Number(result.toFixed(12))))
      continue  
    }    
    
    if (array.includes("÷") || array.includes("/")) {
      let index = (array.includes("÷")) ? array.indexOf("÷") : array.indexOf("/") 
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