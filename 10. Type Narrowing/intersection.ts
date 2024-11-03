type Employee = {
    readonly id: number
    name: string
}

type Manager = {
    department: string
    role: string
}

type ManagerWithEmployee = Employee & Manager 

const manager1: ManagerWithEmployee = {
    id:123,
    name: 'Sanq Duonq',
    department: 'Engineering',
    role: 'Team lead'
}

console.log(manager1.department)