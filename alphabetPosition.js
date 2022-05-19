/*==========================================================
In this kata you are required to, given a string, replace 
every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't 
return it.

==========================================================*/

function alphabetPosition(text) {
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const inputArr = text.toLowerCase().split('')
  let finalArr = []
  for(let i = 0; i < inputArr.length; i++){
    for(let j = 0; j < alphabet.length; j++){
       if(inputArr[i] === alphabet[j]){
        finalArr.push(j + 1)
      }
    }
  } return finalArr.join(' ').toString()
}
