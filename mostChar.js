/*
Complete the function that takes one argument, 
a list of words, and returns the length of the 
longest word in the list.
*/


function longest(words) {
  let lengthArr = words.map(x => x.length).sort((a,b) => a-b) 
  return lengthArr[lengthArr.length - 1]
}
