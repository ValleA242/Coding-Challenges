/*
You will be given an array of numbers. 
You have to sort the odd numbers in ascending 
order while leaving the even numbers at their
original positions.
*/

function sortArray(array) {
  const storeIndexes = [];
  const storeOdds = [];

  // Collect odd numbers and their indexes
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      storeIndexes.push(i);
      storeOdds.push(array[i]);
    }
  }

  // Sort the odd numbers
  storeOdds.sort((a, b) => a - b);

  // Insert sorted odd numbers back into the original array
  for (let j = 0; j < storeOdds.length; j++) {
    array[storeIndexes[j]] = storeOdds[j];
  }

  return array;
}
