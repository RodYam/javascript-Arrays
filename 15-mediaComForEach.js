// Calcule a média entre as seguintes notas usando o forEach: 10, 6.5, 8, 7.5;

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota, indice) {
    somaDasNotas += nota;
    console.log(indice);
});

const media = somaDasNotas / notas.length;
console.log(`A media das notas é ${media}.`);

// odemos perceber que o forEach tem uma lógica parecida com o for of, ele fornece diretamente o valor do elemento do array, que nesse caso nomeamos de nota, e ele também sempre vai do início ao fim do array.

// Mas o forEach tem uma vantagem em relação ao for of. Nos parâmetros da função callback, podemos passar mais um parâmetro, usando uma vírgula entre os parâmetros. Vamos chamá-lo de indice, por exemplo. Agora, além da nota, podemos ter acesso a esse indice.