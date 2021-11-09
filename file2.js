const operations = {
    div: (a, b) => {
        if(a === 0 || b === 0) return 'Os números não podem ser 0';
        return a / b;
    },
    sum: (numbers) => {
        return numbers.reduce((a, b) => Number(a) + Number(b), 0)
    },
    sub: (numbers) => {
        return numbers.reduce((a, b) => a - b)
    },
    mult: (numbers) => {
        return numbers.reduce((a, b) => a * b)
    }
}

console.log(operations.div(10, 2))
console.log(operations.sum([1, 2, 3, 4, 5]))
console.log(operations.sub([50, 15, 10, 2]))
console.log(operations.mult([2, 2, 5, 9]))
