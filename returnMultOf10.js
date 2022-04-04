// Write a function that returns the next multiple of 10 of a given number 

const closestMultiple10 = num => {
  let roundNum = Math.round(num)
  let getArr = roundNum.toString().split('')
  let lastDigit = Number(getArr[getArr.length - 1])
  if(lastDigit > 5){
    return num + (10 - lastDigit) 
  } else if(lastDigit < 5){
    return num - lastDigit
  } else {
    return num + 5
  }
};
