//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.
let pessoa = 
{
    nome: null,
    idade: null,
    altura: null
};

let pessoa1,pessoa2,result;

pessoa1 = {...pessoa};
pessoa1.nome = "Edward";
pessoa1.idade = 16;
pessoa1.altura = 1.49;

pessoa2 = {...pessoa};
pessoa2.nome = "Raphael";
pessoa2.idade = 18;
pessoa2.altura = 1.80;

result = pessoa1.idade > pessoa2.idade;
console.log(result);

result = pessoa1.altura < pessoa2.altura;
console.log(result);

result = pessoa1.idade >= pessoa2.idade;
console.log(result);

result = pessoa1.nome <= pessoa2.nome;
console.log(result);

result = pessoa1.nome == pessoa2.nome;
console.log(result);

result = pessoa1.nome === pessoa2.idade;
console.log(result);
