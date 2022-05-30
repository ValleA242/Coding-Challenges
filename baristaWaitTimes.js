/*=========================================================
Instructions in description. Key instuctions: Receive coffee
order time, clean for 2 min between each order, accumulate 
shortest possible wait time for all customers. 
=========================================================*/


function barista(coffees){
  let sortCoffee = coffees.sort((a, b) => {
   
    return b - a
 
  })
  
  let dirtyArr = [] //array for dirty coffee cups
  
  for(let i = sortCoffee.length - 1; i >= 0; i--){
    
    dirtyArr.push(sortCoffee[i] * (i + 1))
 
  }
  
  if(coffees === 0 || coffees === null){
    
    return 0
  
  } else {
  
    return (dirtyArr.reduce((x,y) => x + y, 0)) + (sortCoffee.length * (sortCoffee.length - 1)) 
 
  }
}

barista([1,3,4,5])
