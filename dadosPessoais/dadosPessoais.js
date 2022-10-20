const nome = document.querySelector('#nome');
const endereco = document.querySelector('#endereco');
const cidade = document.querySelector('#cidade');
const cep = document.querySelector('#cep');
const telefone = document.querySelector('#telefone');
const profissao = document.querySelector('#profissao');
const enviar = document.querySelector('#enviar');
const resultado = document.querySelector('.resultado');

document.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!nome.value || !endereco.value || !cidade.value || !cep.value || !telefone.value || !profissao.value) {
        alert('Por favor, digite os dados corretamente.');
        return;
    } else {
        resultado.innerHTML = `Olá ${nome.value}, segue abaixo seus dados digitados: <p>Endereço: ${endereco.value}</p><p>Cidade: ${cidade.value}</p><p>CEP: ${cep.value}</p><p>Telefone: ${telefone.value}</p><p>Profissão: ${profissao.value}</p>`;
    }
    
    
});



