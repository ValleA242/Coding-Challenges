function findNextPower(val, pow_) {  
  let exponent = Math.pow(val, pow_)
  for(let i = val; i >= i; i++){
    if(Math.pow(exponent, 1/pow_) === 0){
      return i
    }
  }
}
    

findNextPower(12385, 3);
