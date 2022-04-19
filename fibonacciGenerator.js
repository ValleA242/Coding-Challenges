function fibonacciGenerator (n) {
    
    let fiboArr = []
    
    if(n === 1 || n === 0){
        fiboArr = [0]
        return fiboArr
    } else if(n === 2){
        fiboArr = [0, 1]
        return fiboArr
    } else {
        fiboArr = [0, 1]
        for(let i = 1; i < n - 1; i++){
         fiboArr.push(fiboArr[i] + fiboArr[i - 1])
        }
    }
    return fiboArr
}
