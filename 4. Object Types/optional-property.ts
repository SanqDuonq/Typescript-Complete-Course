type User1 = {
    name: string,
    age?:number,
    email:string
}

const user1: User1 = {
    name: 'Sanq',
    email: 'namsang0902s@gmail.com'
}

console.log(user1.age)