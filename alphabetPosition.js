/*==========================================================
In this kata you are required to, given a string, replace 
every letter with its position in the alphabet.
==========================================================*/

function alphabetPosition(text) {
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // set alphabet for reference 
  const inputArr = text.toLowerCase().split('') //splits the passed string to individual letters for deeper evaluation 
  let finalArr = [] //empty arr to push to
  for(let i = 0; i < inputArr.length; i++){ //itterate and compare alphabet and string 
    for(let j = 0; j < alphabet.length; j++){
       if(inputArr[i] === alphabet[j]){
        finalArr.push(j + 1) //push the position of the letter 
      }
    }
  } return finalArr.join(' ').toString() //return string of converted letters to positions 
}
