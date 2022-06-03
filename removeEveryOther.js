//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  let everyOtherArr = []
  if(arr.length <= 1){
    return arr
  } else {
  for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0 || i === 0){
      everyOtherArr.push(arr[i])
      }
    }
  } return everyOtherArr
}
