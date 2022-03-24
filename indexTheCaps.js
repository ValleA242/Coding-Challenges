/*===========================================================
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes
of all capital letters in the string.
===========================================================*/

var capitals = function (word) {
  let wordArray = word.split('')
  let indexArray = []
  wordArray.forEach((x, y) => {
    if(x === x.toUpperCase()){
      indexArray.push(y)
    }
  })
  return indexArray
};
