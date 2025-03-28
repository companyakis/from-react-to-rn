let sum = (...args) => {

    return args.reduce((acc, current) => acc + current)
}

console.log(sum(100, -20, 17, 98))

let mult = (...args) => {

    return args.reduce((m, current) => m * current)
}

console.log(mult(3, 12, 4))

// 195
// 144
