class Player1 {
    public readonly first:string
    public readonly last:string
    public score: number = 0

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const dog3 = new Player1('Sang','Nam')
console.log(dog3.score)