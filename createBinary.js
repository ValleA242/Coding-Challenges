//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  let getArr = Array.from(String(x), Number)
  getArr.forEach((ele, ind) =>{
    if(ele >= 5){
      getArr[ind] = 1
    } else {
      getArr[ind] = 0
    }
  })
  return getArr.join('')
}
