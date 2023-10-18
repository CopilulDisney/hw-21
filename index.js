let n1 = 0, n2 =1, nextTerm; //Exercitiu 1

console.log('Sir Fibonacci:')

for (let i = 1; i<= 15; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

const greet = function (arg){ //Exercitiu 2
    return arg + this.nume + ' is a German car company'
}
const obj = {
    nume: "BMW",
    greet: greet
}
const obj1 = {
    nume: "Audi",
    greet: greet

}
const obj2 = {
    nume: "Porsche",
    greet: greet

}
const bound = greet.bind(obj)

console.log(bound('Car guys: '))
console.log(obj1.greet.call(obj1, ['Car guys: ']))
console.log(obj2.greet.apply(obj2, ['Car guys: ']))
