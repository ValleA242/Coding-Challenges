// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) { 
  let dubbedArr = [] //array to push duplocates into  
  for(let i = 0; i < str.length; i++){ //iterate through string 
    dubbedArr.push(`${str[i]}${str[i]}`) //push each letter and a repeat of each letter into dubbedArr
  }
  return dubbedArr.join('') //return joined array 
}
