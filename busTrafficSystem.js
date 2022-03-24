/*=========================================
There is a bus moving in the city, and it
takes and drop some people in each bus stop.

You are provided with a list (or array) of 
integer pairs. Elements of each pair represent 
number of people get into bus (The first item)
and number of people get off the bus (The 
second item) in a bus stop.

Your task is to return number of people who
are still in the bus after the last bus 
station (after the last array). Even though 
it is the last bus stop, the bus is not empty 
and some people are still in the bus, and
they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases 
ensure that the number of people in the 
bus is always >= 0. So the return integer 
can't be negative.

The second value in the first integer array
is 0, since the bus is empty in the first
bus stop.

=========================================*/

var number = function(busStops){
  let allPeople = []
  let enteringPeople = []
  let exitingPeople = []
  for(let i = 0; i < busStops.length; i++){
    if(i < busStops.length){
      for(let inner = 0; inner < 2; inner++){
        if(inner < 2){
        allPeople.push(busStops[i][inner])
        }
      }
    }
  }
 console.log(allPeople)
  for(let y = 0; y < allPeople.length; y++){
   if(y % 2 === 0){
     enteringPeople.push(allPeople[y])
   } if(y % 2 != 0) {
     exitingPeople.push(allPeople[y])
   }
 }
 let sumOfEntering = enteringPeople.reduce((x, y) => x + y, 0)
  let sumOfExiting = exitingPeople.reduce((x, y) => x + y, 0)
  return sumOfEntering - sumOfExiting
} 

number([[10,0],[3,5],[5,8]])
