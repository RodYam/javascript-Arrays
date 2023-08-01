// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Dentro das chaves da função vamos usar o notasDaSala.reduce(). "Reduce", em português significa "reduzir". Esse método vai iterar sobre o array, então também vamos passar uma função callback como parâmetro para ele, usaremos a arrow function. Mas os parâmetros que essa função recebe são um pouco diferentes, chamaremos o primeiro parâmetro de acumulador e o segundo será o valor do elemento que estamos iterando agora, nota.

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A media da sala JS é ${calculaMedia(salaJS)}`);

console.log(`A media da sala Java é ${calculaMedia(salaJava)}`);

console.log(`A media da sala Python é ${calculaMedia(salaPython)}`);


// O zero está fazendo o papel daquela somaDasNotas que fizemos no forEach(). Vai começar com valor zero e será somada cada uma das notas. Para fazer isso, vamos retornar o acumulador + nota. E daremos um console.log(notasDaSala). O reduce não altera o array original, então precisaremos retornar o valor de reduce para uma nova variável, const somaDasNotas, e damos na verdade o console.log(somaDasNotas). No final do arquivo, vamos executar a função calculaMedia(salaJS).

// Num primeiro momento o reduce pode parecer um pouco mais complicado, ele tem uma lógica bem interna, abstrai bastante coisa. Mas, resumindo, usamos o acumulador, informamos o valor inicial dele no segundo parâmetro do reduce e vamos atualizando o valor do acumulador a cada iteração que fazemos na lista. Por fim, o parâmetro acumulador também é muito chamado de acc, que é uma abreviação do nome dele em inglês. E também podemos usar diretamente o retorno da função arrow function, em vez de usar a palavra return.

/* 
function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
  
    const media = somaDasNotas / notasDaSala.length;
  
    return media;
  }
  */
