//union

let age: string | number;
age = "32";
age = 32;

const sumStringNumber = (num1: string | number, num2: string | number) => {
    return Number(num1) + Number(num2)
}

console.log(sumStringNumber("32", 23));
