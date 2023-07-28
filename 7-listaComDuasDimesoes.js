const alunos = ["Joao", "Vanessa", "Juliana", "Eduardo"];
const medias = [10, 8, 7.5, 9];

// Array listaDeAlunosEMedias contem 2 arrays dentro dele. Para acessar o valores dos arrays, precisamos de 2 colchetes, o primeiro para escolher qual dos 2 arrays será acessado e o segundo colchete é usado para acessar a informação dentro do array escolhido.
const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);
console.log(`A aluna da posição 1, da lista de alunos, é: ${listaDeAlunosEMedias[0][1]}. A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`);

