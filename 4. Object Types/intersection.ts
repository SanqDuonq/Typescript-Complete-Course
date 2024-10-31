type UserInfo = {
    first:string
    last:string
    age: number
}

type AccountDetails = {
    email: string,
    password: string
}

type Userr = UserInfo & AccountDetails 

const sanq:Userr = {
    first: 'Sanq',
    last: 'Duonq',
    age: 20,
    email: 'namsang0902s@gmail.com',
    password:'123455'
}

console.log(sanq)

