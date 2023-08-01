// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos: Ana: 7; Marcos: 4.5; Maria: 8; Mauro: 7.5.

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// Utilizando o método filter. O filter() retorna um novo array. O filter() vai receber uma função callback como parâmetro, vamos inserir uma arrow function, receberemos aluno e precisaremos também do indice porque com ele conseguiremos acessar a média de cada aluno na outra lista.

//
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);

// Para finalizar, não estamos usando o parâmetro aluno, porque dessa vez estávamos interessados apenas no índice. Quando não utilizamos o primeiro parâmetro, uma convenção que você pode encontrar é o uso do underline (_) em vez de nomear o parâmetro, então em vez de alunos.filter(aluno, indice) fica alunos.filter(_, indice). Só de fazer isso o JS vai saber que não estamos utilizando esse parâmetro. É apenas uma convenção da linguagem, não é obrigatório fazer isso. Mas é obrigatório nomear o primeiro parâmetro de alguma forma para podermos acessar o segundo parâmetro, o índice.