/*
Exercício de Destructuring em JavaScript

1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.

2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.

*/

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const numbers = [1, 2, 3, 4, 5];
let a,b,c,d,name, age, city,PersonResume;

[a,b,c] = numbers;
[a,b,c, ...d] = numbers;

[name,age,city] = [person.name,person.age,person.city];
[...PersonResume] = [person.name,person.age];

console.log(a," ",b," ",c," ",d);
console.log(name," ",age," ",city);
console.log(PersonResume);