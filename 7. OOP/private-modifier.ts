class Player3 {
    public readonly first:string
    public readonly last:string
    private score:number = 0

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
      }
    private secretMethod():void {
        console.log('Secret Method')
    }
}

const dog4 = new Player3('sang','nam')
// console.log(dog4.score) //Private
// dog4.secretMethod()