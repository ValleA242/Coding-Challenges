// Make a snippet that prompts a user to enter their name in order to check if they are on a guest list. The guest list should be in an array and the user should be alerted that they are or are not on the guest list. 

let name = prompt("Enter your name");

let guestList = ["Alicio","Kristin","Janet", "Alex"];

let guestListCheck = guestList.includes(name) ? alert("You are on the guest list") : alert("You are not on the guest list")

console.log(guestListCheck)
