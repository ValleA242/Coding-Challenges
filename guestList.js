/*=======================================
Given an array of names, allow the user
to enter a name to see if they are allowed
into the party. If they are not on the guest
list aka the array of names tell them to 
leave. If they are on the guest list, welcome
them. 
=======================================*/

let guest = prompt('')

let guestList =['Johnny', 'Charlie', 'Kristin', 'Racheal']

const bouncer = () => {
    console.log(guestList.includes('Johnny'))
    return guestList.includes(guest) ? 'Welcome' : 'Leave'

}

console.log(bouncer())
