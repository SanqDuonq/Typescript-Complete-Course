function getRandomKey<T>(obj: {[key:string]: T}):{key:string,value:T}{
    const keys = Object.keys(obj)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return {key: randomKey,value:obj[randomKey]}
}

const stringObj = {a:'apple', b: 'banana',c: 'cheery'}
const res = getRandomKey<string>(stringObj)
console.log(res)

function filterArray<T>(array:T[],condition:(item:T) => boolean) {
    return array.filter((item) => condition(item))
}

const numberArr = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = filterArray<number>(numberArr,(num) => num % 2 === 0)
console.log(evenNumbers) 

const strArr = ['apple', 'banana', 'cheery','date']
const shortWord = filterArray<string>(strArr,(word) => word.length < 6)
console.log(shortWord)


interface Fruit {
    name: string
    color: string
}

const fruitArr: Fruit[] = [
    {
        name: 'apple',
        color: 'red'
    },
    {
        name: 'banana',
        color: 'yellow'
    },
    {
        name: 'cheery',
        color: 'red'
    }
]

const redFruit = filterArray<Fruit>(fruitArr,(fruit) => fruit.color === 'red')
console.log(redFruit)