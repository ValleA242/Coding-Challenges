// Write a function that returns the last evens of a given array 

function evenNumbers(array, number) {
  let evenArr = []
  let lastEvens = []
  
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0)
    evenArr.push(array[i])
  } 
  for(let y = evenArr.length - 1; y > evenArr.length - (1 + number); y--){
    lastEvens.push(evenArr[y])
  }
  return lastEvens.reverse()
  
  
}
