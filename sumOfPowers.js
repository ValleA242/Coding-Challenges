/* Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

The next number that experiments this particular behaviour is 370 with the same power.

Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered). */

function eqSumPowdig(hMax, exp) {
let finalAnswer = []
let numberList = []


for(l = 2; l <= hMax; l++){
  numberList.push(l)
}
  
  for (i = 0; i < numberList.length; i++){ //iteration of original array
    var sum = 0
    var seperatedNumbers = numberList[i].toString().split(''); //splits numbers in original array to individual numbers 
    for(j = 0; j < seperatedNumbers.length; j++){ // iterates through individual numbers 
       var expoedNumbers = [] // holds exponent numbers
      expoedNumbers.push(Math.pow(seperatedNumbers[j], exp)); //pushes multiplied numbers to array
      for(k = 0; k < expoedNumbers.length; k++){ //itterates through the mulitplied numbers 
          sum += expoedNumbers[k]
          if(sum === numberList[i]){
            finalAnswer.push(sum);
          }
        }
      }
    }
    return finalAnswer
}
