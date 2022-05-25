/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

function moveZeros(arr) {
  let count = 0 //counts zeros to push 
  let dupArr = []//stores reordered array
  
  for(let i = 0; i < arr.length; i++){ //iterates through argument arr 
    if(arr[i] === 0){ 
      count = ++count // counts the number of zeros to push
    } else { 
      dupArr.push(arr[i]) //pushes everything that is not zero into dupArr keeping the order and element type intact 
    }
  }
  
  for(let i = 0; i < count; i++){
    dupArr.push(0) //pushes the number of zeros in the original arr as determined by the previous iteration above to the end of dupArr
  }
  
  return dupArr //returns dupArr solution 
}
