function gimme (triplet) {
    let sortedTriplet = [...triplet].sort((a, b) => a - b) //Make sorted copy of triplet
    let middleValue = sortedTriplet[1]; //Determine middle value

  //find middle value in original array and return the index.
    for (let i = 0; i < triplet.length; i++){ 
      if (triplet[i] === middleValue) {
        return i;
      }
    }
  }
