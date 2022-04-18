/*==========================================
Write a function that will check if two given 
characters are the same case.

If either of the characters is not a letter,
return -1
If both characters are the same case, return
1
If both characters are letters, but not the 
same case, return 0
==========================================*/



function sameCase(a, b){
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}
