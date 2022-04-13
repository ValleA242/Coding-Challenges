/*===============================================
Write a method, that will get an integer array as 
parameter and will process every number from this 
array.

Return a new array with processing every number 
of the input-array like this:

If the number has an integer square root, take
this, otherwise square the number.

The input array will always contain only positive 
numbers, and will never be empty or null.
===============================================*/

function squareOrSquareRoot(array) {
  let finalArr = []
  for(let i = 0; i < array.length; i++){
    if((Math.sqrt(array[i])) - Math.floor(Math.sqrt(array[i])) !== 0){
      finalArr.push(array[i] * array[i])
    } else {
      finalArr.push(Math.sqrt(array[i]))
    } 
  }  return finalArr
}
