/*======================================================
We want to know the index of the vowels in a given word,
for example, there are two vowels in the word super 
(the second and fourth letters).

So given a string "super", we should return a list 
of [2, 4].
======================================================*/

function vowelIndices(word){
  let wordArr = word.split('')
  let indexArr = []
  wordArr.forEach((ele, i) => {
    if(wordArr[i] === 'a' || wordArr[i] === 'A' || wordArr[i] === 'e' || wordArr[i] === 'E' || wordArr[i] === 'i' || wordArr[i] === 'I' || wordArr[i] === 'o' || wordArr[i] === 'O' || wordArr[i] === 'u' || wordArr[i] === 'U' || wordArr[i] === 'y' || wordArr[i] === 'Y'){
      indexArr.push(i + 1) 
    } else {
       return []
    }
  })
    return indexArr
}
