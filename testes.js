function smallEnough(a, limit) {
    return a.every(value => value <= limit);
}
console.log(smallEnough([66, 1, 117, 252], 260))

// String.prototype.toJadenCase = function() {
//         return this.split(' ').map(function(word) {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         }).join('');
// }

// const jadenCase = new toJadenCase();
// console.log(jadenCase);
// Múltiplique o número por oito se for par e por nove os outros.

// 1. Quais são os dados de entrada necessários?
    // Strings
// 2. O que devo fazer com estes dados?
    // Deixa toda primeira letra de cada palavra em uppercase
// 3. Quais são as restrições deste problema?
    // Somente strings são aceitas
// 4. Qual é o resultado esperado?
    // Exibir as primeiras letras de cada palavra em maiúsculo.
// 5. Qual é a sequência de passos a serem feitas para chegar ao resultado esperado?
    // Pegar a string
    // Transformar em um array.
    // Iterar sobre esse array.
    // Transformar todas as primeiras letras em maiúsculas.
    // Retornar a frase.