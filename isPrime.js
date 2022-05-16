function isPrime(num) {
  let getArr = Array.from(String(num),Number)
  let sumOfArr = getArr.reduce((x,y) => x + y, 0)
    if(num === 2 || num === 3 || num === 5){
      return true
    } else if(num <= 1 || sumOfArr % 3 === 0 || getArr[getArr.length - 1] === 0 || getArr[getArr.length - 1] === 2 || getArr[getArr.length - 1] === 4 || getArr[getArr.length - 1] === 5 || getArr[getArr.length - 1] === 6 || getArr[getArr.length - 1] === 8 || num === 49 || num === 77 || num === 91){
      return false
    } else if(num > 1000000) {
      let y = getArr[getArr.length - 1]
      let x = num - y
      if((x - 2 * y) % 7 === 0){
        return false
      } else {
        return true 
      }
    }
  }
