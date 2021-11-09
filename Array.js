const array = ["a", 10, "b", "hola", 122, 15, "f2", "2da"];

const onlyLetters = (arr) => {
    const regex = /([a-zA-Z])/;
    return arr.filter((item) => {
        if (typeof item !== "string") return;
        const splitedItem = item.split("");
        if(splitedItem.every(i => regex.test(i))) return item;
    });
};

const onlyNumbers = (arr) => {
   const regex = /[0-9]/;
   return arr.filter((item) => {
       if(typeof item === "number") return item;
       const splitedItem = item.split("");
       if(splitedItem.every(i => regex.test(i))) return item;
   });
};

const maxValue = (arr) => {
    const numbers = onlyNumbers(arr);
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1]
}


console.log(onlyLetters(array))
console.log(onlyNumbers(array))
console.log(maxValue(array))
