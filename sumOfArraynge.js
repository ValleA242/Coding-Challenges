//Create a function that takes in two numbers as a paramenter and returns the sum of the range including the parameters 

function getSum( a,b ){
  let max
  let min
  let getArr = []
  if(a > b){
    max = a
    min = b
  } else {
    max = b
    min = a
  }
  for(let i = min; i <= max; i ++){
    getArr.push(i)
  } 
  return getArr.reduce((x,y) => x + y)
}
