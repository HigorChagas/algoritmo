const numero = document.querySelector('#numero');
const resultado = document.querySelector('.resultado');

document.addEventListener('submit', (e) => {
    e.preventDefault();

    const ultimoDigito = numero.value % 10;
    console.log(ultimoDigito);

    if (numero.value % 2 === 0) {
        console.log(`O número ${numero.value} é divisível por 2`);
        return
        
    } else if (ultimoDigito === 0 || ultimoDigito === 5) {
        console.log(`O número ${numero.value} é divisível por 5`);
    } 
    
});
