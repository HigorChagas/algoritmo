const valor = document.querySelector('#valor');
const resultado = document.querySelector('.resultado');

document.addEventListener('submit', (e) => {
    e.preventDefault();

    const lucroAnual = 0.23;
    const lucroObtido = valor.value * lucroAnual;
    const lucroFormatado = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}).value;

    resultado.innerHTML = `O lucro obtido do valor de ${lucroFormatado}R$ é: ${lucroObtido}`;


})