// const total = idades.reduce((acc, valor) => {
//     return acc += valor;
// }, 0);

function soma() {
    const idades = [15, 46, 75, 34, 23];
    let total = 0;

    for(let elementos of idades) {
        total += elementos;
    }
    
    return total;
}

console.log(soma());