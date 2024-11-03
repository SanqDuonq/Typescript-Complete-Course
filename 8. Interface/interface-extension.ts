interface Car1 {
    brand: string
    start(): void
}

interface Car1 {
    model: string
    stop():  void
}

const myCar: Car1 = {
    brand: 'Range Rover',
    model: 'Land Rover',
    start() {
        console.log('Car started')
    },
    stop() {
        console.log('Car stopped')
    },
}

console.log(myCar)