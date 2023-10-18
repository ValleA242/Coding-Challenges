/* In Progress */

/* You will be given a number and you will need to r
eturn it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/

function expandedForm(num) {
let numArray = num.toString().split('');
let numPlaceArray = [];

    for(let i = numArray.length; i > 0; i--){
    if(i != 0){
            numPlaceArray.push(Math.pow(10, i - 1))
        } else {
            numPlaceArray.push(1)
        }
    }
    numPlaceArray = numPlaceArray.toString().split(',');
  console.log(numArray)
    
 let newArray = numArray.map((x, index) => x * numPlaceArray[index]);
    var finalExpandedForm = []
    for(let i = 0; i < finalExpandedForm.length; i++){
        if(newArray[i] != 0){
        finalExpandedForm.push(newArray[i]);
        }
    }
    
    return finalExpandedForm.toString().split(',').replaceAll(',', ' + ');
}
