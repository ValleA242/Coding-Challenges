// Using a while loop write a function that prints the lyrics to 99 bottles of beer on the wall to the console. 

let beerCount = 99

function beer() {
  
  while(beerCount > 0){ 
    let takeOneBeer = beerCount- 1  
    console.log(`${beerCount} bottles of beer on the wall, ${beerCount} bottles of beer, take one down, pass it around, ${takeOneBeer} bottles of beer on the wall`)
    beerCount = beerCount - 1
  }
  if(beerCount === 0){
    console.log('No more bottles of beer on the wall, no more bottles of beer, go to the store, buy some more, 99 bottles of beer on the wall')
  }
}
