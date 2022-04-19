function fibonacciGenerator (n) {
    
    let fiboArr = []
    
    if(n === 1){
        fiboArr = [0]
    } else if(n === 2){
        fiboArr = [0, 1]
    } else {
        fiboArr = [0, 1]
        for(let i = 1; i < n; i++){
            if(i < n){
                fiboArr.push(fiboArr[i] + fiboArr[i - 1])
            }
        }
    }
    return fiboArr
}
