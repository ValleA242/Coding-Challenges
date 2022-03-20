/* ============================================================
If we list all the natural numbers below 10 that are multiples 
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in. Additionally, 
if the number is negative, return 0 (for languages that do 
have them).
===============================================================*/

function solution(number){
  let newArray = []
  let multiplesArray = []  
  for(let i = 1; i < number; i++){
    if(i < number){
      newArray.push(i);
    }
  
  } for (let i = 0; i < newArray.length; i++) {
      
    if(newArray[i] % 3 === 0 || newArray[i] % 5 === 0){
      multiplesArray.push(newArray[i])
          }
    }
    
    const sum = multiplesArray.reduce((a, b) =>a + b, 0); 
      
      return sum
}
