/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
*/

function getDivisorsCnt(n){
  let count = []
  for(let i = 0; i < n; i++){
    if(n % i === 0){
      count.push(i)
    }
  } return count.length + 1
}
