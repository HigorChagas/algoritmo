const palindrome = (str) => {
   let strFiltered = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
   let strReversed = strFiltered.split('').reverse().join('').toLowerCase();

   return strFiltered === strReversed ? true : false;
}

console.log(palindrome('testando'));


// 1. Quais são os dados de entrada necessários?
// Uma cadeia de caracteres.
// 2. O que devo fazer com estes dados?
// Devo verificar se a string fornecida é um palíndromo
// 3. Quais são as restrições deste problema?
// Somente caracteres alfanuméricos são permitidos
// 4. Qual é o resultado esperado?
// Exibir true caso a string fornecida for um palíndromo.
// 5. Qual é a sequência de passos a serem feitas para chegar ao resultado esperado?
// Pegar a string
// Remover todos os caracteres não alfanuméricos.
// Checar se a string passada contem espaços e remover.
// Transformar todos os caracteres na mesma captalização.





// const jadenCase = new toJadenCase();
// console.log(jadenCase);
// Múltiplique o número por oito se for par e por nove os outros.
// 
// String.prototype.toJadenCase = function() {
    //         return this.split(' ').map(function(word) {
        //             return word.charAt(0).toUpperCase() + word.slice(1);
        //         }).join('');
        // }