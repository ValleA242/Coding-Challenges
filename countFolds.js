/*
Have you heard about the myth that if you fold a paper enough times,
you can reach the moon with it? Sure you have, but exactly how many?
Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given
distance in units of meters, calculate how many times you have 
to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each 
fold doubles its total thickness.)
*/

function foldTo(distance) {
  let paper = 0.0001;
  let folds = 0;
  if (distance <= 0) {
    return null;
  } else {
    while ( distance > paper ) {
      paper *= 2;
      folds += 1;
    }
  }
  return folds;
}
