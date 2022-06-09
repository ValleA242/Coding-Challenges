//Given an array of numbers return the sum of the 2 smallest numbers

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,z) => a-z) 
  return numbers[0] + numbers[1]
}
