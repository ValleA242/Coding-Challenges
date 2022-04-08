/*===================================================================
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
===================================================================*/

function getCount(str) {
  let getArr = str.split('')
  let vowelToaster = []
  for(let i = 0; i < getArr.length; i++){
    if(i < getArr.length && (getArr[i] === 'a' || getArr[i] === 'e' || getArr[i] === 'i' || getArr[i] === 'o' || getArr[i] === 'u')){
      vowelToaster.push(getArr[i])
    }
  }
  let vowelsCount = vowelToaster.length;
  return vowelsCount;
  }
