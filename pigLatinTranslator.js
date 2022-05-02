function pigIt(str){
  let getArray = str.split(' ')
  let indiLets = []
  let preForm = []
  let newArr = getArray.map((e) =>{
    return [e]
  })
  
  for(let i = 0; i < newArr.length; i++){
    indiLets.push(newArr[i].toString().split(''))
  } 

  for (let i = 0; i < indiLets.length; i++){
    preForm.push(indiLets[i].slice(0,2).join(''))  
    indiLets[i].splice(0,2)  
    }
  
  console.log(indiLets[1] + preForm[1])
  
}

pigIt('Pig latin is cool')
