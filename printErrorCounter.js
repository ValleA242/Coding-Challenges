/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
*/

function printerError(s) {
    let colorArr = s.split('') //split parameter into array for itteration 
    const acceptable = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]; //array of non-error producing characters
    const notAcceptable = ["n","o","p","q","r","s","t","u","v","w","x","y","z"]; //array for error producing characters
    let notAcceptableChars = [] //empty array to push error producing characters into. The length of this array provides the error count.
    for(let i = 0; i < colorArr.length; i++){ //iterate through colorArr for comparison to notAcceptableArr
      for(let j = 0; j < notAcceptable.length; j++){ //iterate through notAcceptableArr for comparison to colorArr
        if(colorArr[i] === notAcceptable[j]){
          notAcceptableChars.push(colorArr[i]) //if a character in colorArr equals a character in notAcceptableArr push that into notAcceptableChars array for error count
        }
      }
    } return `${notAcceptableChars.length}/${colorArr.length}` //returns concat string of ratio of errors to total characters in parameter s
}

printerErrors("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") // returns "3/56" 

