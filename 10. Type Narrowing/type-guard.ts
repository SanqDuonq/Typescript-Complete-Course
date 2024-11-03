type myType = string | number

function exampleFunc(value:myType):void {
    if (typeof value === 'string'){
        console.log(value.toUpperCase())
    }
    else {
        console.log(value.toFixed(2))
    }
}  

exampleFunc('Hello')
exampleFunc(20)