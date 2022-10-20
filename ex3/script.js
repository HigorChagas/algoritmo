const numero = document.querySelector('#numero');
const resultado = document.querySelector('.resultado');
const gerar = document.querySelector('#gerar');

const max = 1;
const min = 100;

const aleatorio = Math.floor(Math.random() * (max - min) + min);

let numeroSorteado;
gerar.addEventListener('click', (e) => {
    e.preventDefault();
    
    numeroSorteado = aleatorio;

    if(!numero.value) {
        alert('Por favor, digite um número');
        return;
    }

    if(numero.value > numeroSorteado) {
        resultado.innerHTML += 'O número sorteado é menor<br>';
    } else if (numero.value < numeroSorteado) {
            resultado.innerHTML += 'O número sorteado é maior<br>';
    }   else {
        
        resultado.textContent = `Parabéns!!! Você acertou o número sorteado! Reiniciando jogo em 5 segundos`;
        setInterval(() => {
            document.location.reload(true);
        }, 5000);
    }
});

