function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,z) => a-z) 
  return numbers[0] + numbers[1]
}
