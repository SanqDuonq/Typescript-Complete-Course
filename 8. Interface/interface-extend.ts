interface MovieDetails {
    readonly name:string
    rating: number
    printMovieInfo(name:string,price:number,rating:number): string | number
}

interface MovieGenra extends MovieDetails {
    genra:string
}

const movie2:MovieGenra = {
    name: "John Wick",
    rating: 7,
    printMovieInfo(name: string, price: number, ratings: number) {
      return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    },
    genra: "Action",
}

const res = movie2.printMovieInfo('JohnWick',100,8)
console.log(res)