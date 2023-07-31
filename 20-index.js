// crie uma array de números:
const arrayNums = [1, 2, 3, 4];

// Vamos utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map():

function multiplicaPorDez(num) {
    return num * 10;
}

// Agora podemos chamar o map() para fazer a operação:

const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);