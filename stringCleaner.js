// Write a function that removes numbers from a string but keeps the format, special characters, and spacing of the string intact 

function stringClean(s){
  let stringToArr = s.split('');
  let retArr = [];
  stringToArr.forEach(ele =>{
    if(ele != Number(ele) || ele === ' '){
      retArr.push(ele)
    } else {
      return ''
    }
  })
  return retArr.join('')
}
