/*================================================
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
================================================*/

function abbrevName(name){
let nameArr = name.split('')
let initials = [nameArr[0]]
nameArr.forEach((ele,ind) =>{
    if(ele === ' '){
      initials.push(`.${nameArr[ind + 1]}`)
    }
  })
  return initials.join('').toUpperCase()
}
