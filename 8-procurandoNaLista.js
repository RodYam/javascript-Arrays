const alunos = ["Joao", "Vanessa", "Juliana", "Eduardo"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
// o método indexOf() retorna o índice do elemento passado por parâmetro.

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado`);

        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado")
    }
}

exibeNomeENota("Vanessa");