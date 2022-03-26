//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  let getArr = str.split('')  
  let xCount = []
    let oCount = []
    for( let i = 0; i < getArr.length; i++){
      if(getArr[i] === 'x' || getArr[i] === 'X'){
        xCount.push(getArr[i])
      } else if(getArr[i] === 'o' || getArr[i] === 'O'){
        oCount.push(getArr[i])
      }
    }
  return (xCount.length === oCount.length ? true : false)
