//Create a function that takes in a number and returns a number in descending order
function descendingOrder(n){
  let arr = n.toString().split('')
  arr = arr.map(function (x){
    return parseInt(x, 10)
  })

 arr = arr.sort(function(a,b){
   return b - a
  }) 
  arr = parseInt(arr.join(''))
  return arr
  }
