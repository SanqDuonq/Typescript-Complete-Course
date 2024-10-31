type User2 = {
    name: string,
    age?:number,
    readonly email:string //Read-only
}

const user2: User2 = {
    name: 'Sanq',
    email: 'namsang0902s@gmail.com'
}

console.log(user2.email) // Valid

// user2.email = 'sangduong0902@gmail.com' //Invalid