/* Write a funtion that, given a string of words, will return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let myArr = s.split(" ")
  
  let smallThings = myArr.reduce(function (a,b) {
    return a.length <= b.length ? a : b
  })
  
  for(let i = 0; i < myArr.length; i++){
    if(myArr[i].length <= smallThings.length){
      return myArr[i].length
    }
  }
}
