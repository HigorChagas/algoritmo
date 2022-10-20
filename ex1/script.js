const primeiroNumero = document.querySelector('#primeiro-numero');
const segundoNumero = document.querySelector('#segundo-numero');
const resultado = document.querySelector('.resultado');



document.addEventListener('submit', (e) => {
    e.preventDefault();

    const soma = 8;
    const subtracao = 5
    const conta = Number(primeiroNumero.value) + Number(segundoNumero.value);
    console.log(conta);

    if (conta > 20) {
        resultado.innerHTML = `O resultado da conta é ${conta}, somando 8 é ${conta + soma}`;
    } else {
        resultado.innerHTML = `O resultado da conta é ${conta}, subtraíndo 5 é ${conta - subtracao}`;
    }
});

