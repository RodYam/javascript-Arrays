// Explorando um pouco como as funções callback ("chamada de volta") funcionam:

const nomes = ["Dakota", "Moti", "Mjolnir"];

nomes.forEach(function(nome){
    console.log(nome);
})

// Você já deve ter visto que em uma função anônima também podemos usar a sintaxe de arrow funtion (=>), em português seria algo como "função flecha". Agora vou escrever esse mesmo código, mas usando uma arrow funtion. Vamos apagar o function e, entre o parênteses e a abertura das chaves, vamos inserir sinal de igual e sinal de maior que: =>.

nomes.forEach((nome) => {
    console.log(nome);
})

// Por fim, temos uma terceira forma de utilizar funções callback. Podemos criar a função callback de forma externa. Vamos escrever function imprimeNome(nome){}, dentro da função vou dar um console.log() no nome que recebi como parâmetro.

// Depois de declarada a função podemos escrever nomes.forEach() e vamos passar a função que acabamos de criar, nomes.forEach(imprimeNome). Apenas isso, ela vai funcionar da mesma forma que as outras funções callback.

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);