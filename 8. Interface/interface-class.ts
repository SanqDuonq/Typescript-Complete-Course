interface Vehicle {
    start():void
    stop():void
}

class Car implements Vehicle {
    start(): void {
        console.log('Car Started')
    }
    stop(): void {
        console.log('Car Stop')
    }
}

const car = new Car()
car.start()
car.stop()

