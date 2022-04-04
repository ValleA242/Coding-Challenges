// Write a funtion that takes in an integer. If that integer is negative or zero return that integer. If not return the negative of that integer?

function makeNegative(num) {
  return num <= 0 ? num : num - num * 2;
}
