function throwError(msg:string):never {
    throw new Error(msg)
}

function infiniteLoop():never {
    while(true) {}
}