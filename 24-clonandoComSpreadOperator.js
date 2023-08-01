// Considere o seguinte array de notas:
// Crie um novo array com a nota 10 a mais, sem alterar o array original.

const notas = [7, 7, 8, 9];

// Nós queremos fazer uma cópia do array, mas sem que eles estejam tão interligados assim. Para resolver isso, na linha da atribuição coloremos notas dentro de colchetes e acompanhado de três pontos (...), como reticências.

// Uma última coisa que podemos fazer no código é, em vez de fazer o novasNotas.push(10), podemos apagar essa linha e colocar o número "10" dentro do colchetes depois de notas: [...notas, 10].

const novasNotas = [...notas, 10];

// novasNotas.push(10);

// Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que estamos indicando. É como se copiássemos o conteúdo da lista, "7, 7, 8, 9", e colássemos no lugar do [...notas]. É isso que estamos dizendo para o JavaScript.


console.log(novasNotas);
console.log(notas);

