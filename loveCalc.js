// Create a love calculator that calculates the percentage a user has to fall in love with a person. Allow the user to enter their potential lover's name in a prompt and alert the chance percentage in an alert box.

let lover = prompt('What is your lovers name?')

function loveCalc(){
    let lovePercentage = Math.floor(Math.random() * 100);
    return alert(`You have a ${lovePercentage}% chance to fall in love with ${lover}`)
}

loveCalc();
