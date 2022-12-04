let output = []
for(let i = 1; i <= 100; i++){
    output.push(i)
}

for(let y = 0; y <= output.length; y++){
    if(output[y] % 3 === 0 && output[y] % 5 === 0){
        console.log('Fizzbuzz')
    } else if(output[y] % 3 === 0){
        console.log('Fizz')
    } else if(output[y] % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(output[y])
    }
}
