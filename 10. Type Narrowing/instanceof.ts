class Dog2 {
    bark(): void {
        console.log('Woff woff')
    }
}

class Cat2 {
    meow(): void {
        console.log('Meow meow')
    }
}

function animalSound(animal: Dog2 | Cat2):void {
    if (animal instanceof Dog2){
        animal.bark()
    }
    else 
        animal.meow()
}

const myDog = new Dog2()
const myCat = new Cat2()

animalSound(myCat)