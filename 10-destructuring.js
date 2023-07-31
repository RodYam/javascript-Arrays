const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// Destructuring (...):
const numeros = [...numerosPares, ...numerosImpares];

//const num1 = 1;
//const num2 = 2;

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 57, 63];

const pessoa = {
    nome: 'Juliana',
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa, telefone: 123123123
}

console.log(num1, num2, outrosNumeros);

console.log(pessoa, pessoaComTelefone);

const {nome} = pessoa;
const {idade} = pessoa;

console.log(nome);
console.log(idade);

function imprimeDados({nome, idade}) {
    console.log(nome, idade);
}

imprimeDados(pessoa);
