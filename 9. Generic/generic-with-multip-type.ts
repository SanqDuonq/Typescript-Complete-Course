function revervePair<T,U>(value1: T, value2:U):[T,U] {
    return [value1,value2]
}

const rever = revervePair('hello',20)
console.log(rever)