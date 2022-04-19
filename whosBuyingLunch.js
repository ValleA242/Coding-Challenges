//Write a function that takes in an array of names and randomly selects one. Return a string with that person's name letting them know they are buying lunch.

function whosPaying(names) {
  let randomName = names[Math.floor(Math.random() * names.length)]
  return `${randomName} is going to buy lunch today`
}

whosPaying(['Angela', 'Dwight', 'Micheal', 'Pam', 'Stanley'])
