function isCoprime(x, y) {
  //set empty arrays to push factors into 
  let xFacts = []
  let yFacts = []
  let duplicateFactors = []
  
  //check for and push factors of x 
  for(let i = 1; i < x; i++){
    if(x % i === 0){
      xFacts.push(i)
    }  
  }
  
  //check for and push factors of y 
  for(let i = 1; i < y; i++){
    if(y % i === 0){
      yFacts.push(i)
    }  
  }
  
  //check for duplicates in factor arrays 
  for(let i = 0; i < xFacts.length; i++){
    for(let j = 0; j < yFacts.length; j++){
      if(xFacts[i] === yFacts[j]){
        duplicateFactors.push(xFacts[i])
       }
     }
   } 

    //if duplicate factors has a length of 0 and at the 0 index the number pushed is 1 that indicates the only duplicate factor the two arguments have is 1.  
    return (duplicateFactors.length === 1 && duplicateFactors[0] === 1) ? true : false  
  }
