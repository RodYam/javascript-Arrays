// Media em array

/*
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;
*/

const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média das notas é ${media}`);

// Adicionando elementos no array, método push:

const notas2 = [10, 6, 8];

notas2.push(7, 9, 1.5);
console.log(notas2);

const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3] + notas2[4] + notas2[5]) / notas2.length;
console.log(`A média2 das notas2 é ${media2}`);

