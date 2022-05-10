function noSpace(x){
  let getArr = x.split('')
  let newArr = []
  for (let i = 0; i < getArr.length; i++){
    if(getArr[i] !== ' '){
      newArr.push(getArr[i])
    }
  } return newArr.join('')
}
