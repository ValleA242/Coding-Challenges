function pigIt(str){
  let getArray = str.split(' ')
  let indiLets = []
  let preForm = []
  let finalArr = []
  let newArr = getArray.map((e) =>{
    return [e]
  })
  
  for(let i = 0; i < newArr.length; i++){
    indiLets.push(newArr[i].toString().split(''))
  } 

  for (let i = 0; i < indiLets.length; i++){
    preForm.push(indiLets[i].slice(0,1).join(''))  
    indiLets[i].splice(0,1)  
    }

  for (let i = 0; i < newArr.length; i++){
     finalArr.push(indiLets[i].join('') + preForm[i] + 'ay')
  }

  return finalArr.join(' ')
}

pigIt('Pig latin is cool')
