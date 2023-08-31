function calcularFatorial(numero: number): number {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

const numeroParaCalcularFatorial = 5;
const fatorial = calcularFatorial(numeroParaCalcularFatorial);

console.log(`O fatorial de ${numeroParaCalcularFatorial} é ${fatorial}`);
