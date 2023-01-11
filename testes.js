const getYear = (years, searchYear) => {
    years.find((year) => {
        return year === searchYear;
    });
}

console.log(getYear([2021, 1995, 1786, 2002], 1995));
// 1. Quais são os dados de entrada necessários?
 // Um número
 // 2. O que devo fazer com estes dados?
 // Verificar quantos litros de água Nathan bebe por hora.
 // 3. Quais são as restrições deste problema?
 // Somente números são aceitos como argumento
 // 4. Qual é o resultado esperado?
 //  Exibir a quantidade de água que Nathan bebeu de acordo com o horário fornecido
 // 5. Qual é a sequência de passos a serem feitas para chegar ao resultado esperado?
 // Pegar o número de horas
 // Multiplicar a quantidade de água bebida pelo número de horas
 // Arredondar o valor para baixo.
 // 