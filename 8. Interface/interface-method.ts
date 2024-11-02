interface Person1 {
    firstName:string
    lastName:string
    age:number
    sayHello():void
}

function greet(person:Person1) {
    console.log(`Hello, ${person.firstName}  ${person.lastName}`)
    person.sayHello()
}

const sang:Person1 = {
    firstName: 'Sang',
    lastName: 'Duong',
    age: 20,
    sayHello() {
        console.log('Hello')
    }
}

greet(sang)


interface Song {
    songName: string
    singerName: string
    printSongInfo(songName:string,singerName:string): string
}

const song1: Song = {
    songName: 'Bautroimoi',
    singerName: 'Dalad',
    printSongInfo:(songName,singerName) => {return `Song: ${songName}, Singer: ${singerName}`}
}

console.log(song1.printSongInfo('Bautroimoi','Dalad'))