/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  
  //alphabet array for index reference 
  const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  //array to store scores of individual letters
  let scoresArray = [];
  
  //splits sentence to individual words
  let wordsArray = x.split(' ');

  //iterates through words
  for(let i = 0; i < wordsArray.length; i++){
    let sum = 0; //establishes sum to count score. Zeros out for each new word
    for(let j = 0; j <= wordsArray[i].length; j++){ //iterates through individual letters
      if(j < wordsArray[i].length){
        sum += alphabet.indexOf(wordsArray[i][j]) + 1; //adds index reference to sum
      } else {
        scoresArray[i] = sum; //once iteration reaches word length, stop loop and push value of sum to scoresArray
      }
    }
  }
  //return the word at the index of the highest score
  return wordsArray[scoresArray.indexOf(Math.max(...scoresArray))]; 
  
}

high('man i need a taxi up to ubud');
