/*======================================
Create a function that determines if a 
given year is a leap year. 
======================================*/

function isLeap(year) {
   return year % 4 === 0 || year % 4 === 0 && year % 100 === 0 && year % 400 ? 'Leap year.' : 'Not leap year.'
}
