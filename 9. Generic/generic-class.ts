class Box<T> {
    private content: T

    constructor(initalContent: T) {
        this.content = initalContent 
    }

    getContent(): T {
        return this.content
    }

    setContent(newContent: T):void {
        this.content = newContent
    }
}

const strBox = new Box<string>('Hello')
console.log(strBox.getContent())
strBox.setContent('Hello Sanq')
console.log(strBox.getContent())