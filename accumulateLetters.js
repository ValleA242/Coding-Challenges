// accum("abcd") -> "A-Bb-Ccc-Dddd"

function accum(s) {
   s = s.toUpperCase();
  let solutionArr = [] //set solution array to push elements into
  let getArr = s.split('')
  let getArrLetters = getArr.map((ele) => {
    return [ele]})
  for(let i = 0; i < getArr.length; i++){
    if(i === 0){
      solutionArr.push(getArr[0] + '-')
    } else {
    for(let j = 0; j <= i; j++){
        if(j === 0){
      solutionArr.push(getArr[i])
    } else if(j === i && i !== getArr.length - 1) {
          solutionArr.push(getArr[i].toLowerCase() + '-')
      } else {
          solutionArr.push(getArr[i].toLowerCase())
        }
      } 
    } 
  } return solutionArr.join('')
}
