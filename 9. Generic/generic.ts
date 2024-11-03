
//Regular Function
const printString = (x:string) => console.log(x)
const printNumber = (x:number) => console.log(x)
const printBoolean = (x:boolean) => console.log(x)

printString('Hello')
printNumber(3)
printBoolean(true)


//Generic Function
function print<data>(x:data):data {
    return x
}
console.log(print<string>('Hello'))
console.log(print<number>(1))
console.log(print<boolean>(true))