// Um professor acidentalmente adicionou nomes repetidos na lista de chamada: Ana, Clara, Maria, Maria, João, João, João. Remova os nomes repetidos, deixando apenas um de cada.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

// Outra maneira de escrever o código acima:
/*
const nomesAtualizados = [... new Set(nomes)];
*/

console.log(nomesAtualizados);

