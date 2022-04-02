/* Given two integers a and b, which can be positive or negative,
find the sum of all the integers between and including them and 
return it. If the two numbers are equal return a or b. */

function getSum( a, b ){
  let getArr = []
  for(let i = Math.min(a, b); i <= Math.max(a,b); i++){
    getArr.push(i)
  }
  return getArr.reduce((a,b) => a + b, 0)
}
