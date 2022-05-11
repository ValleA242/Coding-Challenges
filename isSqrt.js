// Return true if a number (n) is a perfect square

var isSquare = function(n){
  return Math.sqrt(n) === Math.round(Math.sqrt(n)) ? true : false
}
