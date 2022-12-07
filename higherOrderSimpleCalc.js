// using higher order functions create a simple calculator that takes in the function "operator" as a parameter. The operator should call another function for each mathematical operator

function calculator (num1, num2, operator) {
  return operator(num1, num2);
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function add (num1, num2) {
  return num1 + num2
}

calculator (4, 5, multiply) //returns 20
