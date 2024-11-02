class Player {
    readonly first: string
    readonly last:string
    score: number = 0

    constructor(first:string,last:string){
        this.first = first
        this.last = last
    }
}

const dog2 = new Player('Sang','Nam')
// dog2.first = 'Duonq' // readonly read-only
console.log(dog2)