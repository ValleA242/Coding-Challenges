function squareSum(numbers){
return numbers.map((x) => x*x).reduce((x,y) => x+y,0)
}
