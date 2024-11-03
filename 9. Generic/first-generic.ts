// function printNumber(item:number,defaulValue:number): [number,number] {
//     return [item,defaulValue]
// }

// function printString(item:string,defaulValue:string): [string,string] {
//     return [item,defaulValue]
// }

// const num = printNumber(3,2)
// const str = printString('Sang','nam')
// console.log(num)
// console.log(str)

function uniqueDataTypesFunc<Type>(item:Type,defaultValue:Type): [Type,Type] {
    return [item,defaultValue]
}

interface Dog {
    name: string
    breed: string
}

const dog1 = uniqueDataTypesFunc<Dog>({name: 'Buddy', breed: 'Labrador'}, {name: 'Default', breed: 'Unknown'})

console.log(dog1)