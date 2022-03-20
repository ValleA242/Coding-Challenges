// Write a function that takes in a string in camelCase and returns it as two seperate words. ie: camelCase -> camel Case

function solution(string) {
    string = string.replace(/([A-Z])/g, ' $1') // Using regExp the function identifies any capital letter, and calls for a space before. The replace method replaces the original string with a new string that contains a space before capital letters. 
    return string // returns new string value 
}

solution(camelCase) //returns camel Case
