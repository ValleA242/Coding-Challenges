var lengthOfLongestSubstring = function (s) {
    const seen = new Map(); //creates new array when called
    const stringArray = s.split(''); //converts passed in string to an array

    for (let i = 0; i < stringArray.length, i++;) {
        const currentLetter = stringArray[i];
        const previousLetter = stringArray[i - 1];
        let windowStart = 0;

        if (currentLetter === previousLetter) {
            windowStart = i;
        }
    }
};