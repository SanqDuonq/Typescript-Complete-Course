let password: string | number = 10

type UserInfo2 = {
    first:string
    last:string
    age: number
}

type AccountDetails2 = {
    email: string,
    password: string
}

let user3: UserInfo2 | AccountDetails2 = {
    first: 'Sang',
    last: 'Duong',
    age: 20,
    email: 'sjadasd'
}

console.log(user3)

const items1: (string | number)[] = [1,'sag']

items1.pop()

console.log(items1)