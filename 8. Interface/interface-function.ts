interface MathOperation {
    (x:number,y:number):number 
}

const add:MathOperation = (a,b) => a + b
const sub:MathOperation = (a,b) => a - b
console.log(add(1,4))
console.log(sub(3,1))