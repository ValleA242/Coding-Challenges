/* ===================================
Write a function, persistence, that takes 
in a positive parameter num and returns 
its multiplicative persistence, which is 
the number of times you must multiply 
the digits in num until you reach a 
single digit.
====================================*/ 
  


function persistence(num, counter = 0) { // funtion takes in a parameter for integer and counts its cycles through the counter. This provides the user with the multiplicative persistence
   let getString = num.toString().split(''); // converts parameter num to individual strings for each number ex: 123 -> '1', '2', '3'
    let getArray = getString.map(Number); // converts the now string made of individual numbers from the entered parameter into an array of integers ex '1', '2', '3' -> [1, 2, 3]

    if(getArray.length === 1){ // conditional that returns counter at 0 in the case of the integer entered being a single digit
        return counter
    }
    
    const multPersis = getArray.reduce((x, y) => // iterates through the get array multiplying the previous element by the current element
        parseInt(x) * parseInt(y)
        
         );
        // the snippet below resets the array getArray and replaces it with the new value generated from the multPersis method. This is the same snippet at the top of the code. 
        getArray = []                                   
        getString = multPersis.toString().split('');
        getArray =  getString.map(Number);

    if(getArray.length === 1){ //If the new updated version of getArray has a length of 1 the multiplicative persistence is complete and the value of counter is returned adding one to the value of counter being that the individual integers had to be multiplied at least one time to reach an array length of 1
        return counter + 1;
        
    } else { // If the new updated version of getArray has a length of anything other than 1 the multiplicative persistence is incomplete and therefore the persistence function must run again with the value generated from the multPersis method. Adds one to the counter signifying another time numbers had to be multiplied to meet the multiplicative persistence 
        return persistence(multPersis, counter + 1)
    } 
        
}  
    

persistence(2423) //returns 3
