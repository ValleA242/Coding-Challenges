// Given a sequence of numbers, find the largest pair sum in the sequence.

function largestPairSum (numbers) {
  let orderedArray = numbers.sort((a,b) => a-b)
  return orderedArray[orderedArray.length - 1] + orderedArray[orderedArray.length - 2]
}
