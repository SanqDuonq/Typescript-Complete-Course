interface Computer {
    name:string
    ram:number
    hdd:number
}

const computerExample: Computer = {
    name: 'MSI',
    ram: 16,
    hdd: 512
}

console.log(computerExample.name)


interface Movie {
    readonly name: string
    ratings: number
    genra?: string
}

const movie1: Movie = {
    name: 'Star Wars',
    ratings: 8.9,
    genra: 'Action'
}

console.log(movie1.name)

