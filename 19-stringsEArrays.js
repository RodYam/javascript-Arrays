// “String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres! “Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma: "Alura" = 'A', 'l', 'u', 'r', 'a'. Ou seja, é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings:

const nome = 'Alura';

let nomeMaiusculas = '';

for (let i = 0; i < nome.length; i++) {
    nomeMaiusculas += nome[i].toLocaleUpperCase();
}

console.log(nomeMaiusculas);

const nomeDoCurso = 'Fundamentos de JS';
const nomeDaPlataforma = ' Alura';

const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma);

console.log(nomeCompleto);