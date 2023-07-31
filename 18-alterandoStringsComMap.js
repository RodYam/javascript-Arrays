// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas. ana Julia, Caio vinicius, BIA silva.

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesPadronizados);

// Uma particularidade das arrow functions é que quando tudo o que fazemos dentro da arrow function é retornar um valor, podemos simplesmente omitir a palavra-chave return, vamos apagá-la, e podemos tirar as chaves de abertura e chave de fechamento da função. Então tudo o que ficou como callback foi (nome) => nome.toUpperCase());.

// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

    