/*==========================================
Create a function that counts from one and 
adds each number into an array each time it 
is called. With this function created array,
solve the classic fizzbuzz challenge. NO LOOPS
ALLOWED. 
==========================================*/

let output = [];
let count = 1

function fizzbuzz(){
  if(count % 3 === 0 && count % 15 === 0){
    output.push('fizzbuzz')
  } else if(count % 3 === 0){
    output.push('fizz')
  } else if(count % 5 === 0){
    output.push('buzz')
  } else {
    output.push(count)
  }
  count ++;
  console.log(output)
}
