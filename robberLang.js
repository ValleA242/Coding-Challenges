function robberEncode(sentence) {
  let sentenceArr = sentence.split('')
  for(let i = 0; i < sentenceArr.length; i++){
    if(sentenceArr[i] === 'a' || sentenceArr[i] === 'e' || sentenceArr[i] ==='i' || sentenceArr[i] === 'o' || sentenceArr[i] === 'u' || sentenceArr[i] === 'y' || sentenceArr[i] === 'A' || sentenceArr[i] === 'E' || sentenceArr[i] ==='I' || sentenceArr[i] === 'O' || sentenceArr[i] === 'U' || sentenceArr[i] === 'Y'|| sentenceArr[i] === ' '){
      sentenceArr[i] = sentenceArr[i]
    } else {
      sentenceArr[i] = `${sentenceArr[i]}o${sentenceArr[i]}`
    }
  } return sentenceArr.join('')
}
