/*
Complete the findNextSquare method that finds the 
next integral perfect square after the one passed 
as a parameter. Recall that an integral perfect 
square is an integer n such that sqrt(n) is also 
an integer.

If the parameter is itself not a perfect square 
then -1 should be returned. You may assume the 
parameter is non-negative.
*/

function findNextSquare(sq) {
  if(Math.sqrt(sq) % 1 != 0){
    return -1
  }
  for(let i = sq; i < 1000000000000000; i++) {
    if(Math.sqrt(i + 1) % 1 === 0){
      return i + 1
    }
  }
}

findNextSquare(58564) // returns 59049
