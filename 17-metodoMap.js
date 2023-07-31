// Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista: 10, 9.5, 8, 7, 6.

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);

// Sabemos que uma nota não pode passar de 10, então faremos um condicional dentro do map(). Para concluir vamos fazer essa condicional.

// Poderíamos fazer um if/else, mas nesse caso podemos usar um operador ternário para deixar o código mais conciso.

// Queremos vereificar se nota + 1 vai passar de 10. Se passar de 10, deve atribuir apenas a nota 10.

// Então, nota + 1 é maior ou igual a 10, coloca um ponto de interrogação depois da condição e, em seguida, diremos o que retornar se a condição for verdadeira. Então, se a nota somado a 1 for maior ou igual a 10, retorne apenas 10. Se não, colocaremos dois pontos (:) para informar o que retornar caso a condição seja falsa. Vamos retornar nota + 1 caso não seja maior ou igual a 10.