// remove vowels from inoutted string

function disemvowel(str) {
const vowels = "aeiouAEIOU";
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }

  return result;
}
