// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

function repeater(string, n){
  let repeatString = []
  for(let i = 0; i < n; i++){
    if(i < n){
      repeatString.push(string)
    }
  }  
let newString = repeatString.toString()
return newString.replace(/,/g ,'');
}
