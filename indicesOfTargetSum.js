//Write a function that takes an array of numbers (integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value. 
// The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2). 
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted. 
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; 
// target will always be the sum of two different items from that array).

function targetSum(array, target) {

    const seen = new Map(); //store new hash map in variable seen

    for (let i = 0; i < array.length; i++) {
        const difference = target - array[i]; //store hash map in difference variable

        if (seen.has(difference)) { //verifies difference does not already exist in the map
            return [seen.get(difference), i]; //if difference exist return difference and index of difference
        }

        seen.set(numbers[i], i) //insert current value at current idx to seen
    }

}

targetSum([2, 7, 11, 15], 9);