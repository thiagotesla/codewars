function squareOrSquareRoot(input: any) {
    const array = [];
    for(let i = 0; i < input.length; i++){
        const squareRoot = Math.sqrt(input[i])
        const squareRootFixed = +Math.sqrt(input[i]).toFixed(0)

        if(squareRoot === squareRootFixed){
            let squareRoot = Math.sqrt(input[i])
            array.push(squareRoot) 
        }else{
            let square = Math.pow(input[i], 2)
            array.push(square)
        }
    }
  return array;  
}
