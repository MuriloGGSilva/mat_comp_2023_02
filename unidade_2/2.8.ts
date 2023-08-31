function somaProgressaoAritmeticaRecursiva(n: number, a1: number, r: number): number {
    if (n === 0) {
        return 0;
    } else {
        return a1 + somaProgressaoAritmeticaRecursiva(n - 1, a1 + r, r);
    }
}

const n = 10000;
const a1 = 1;
const r = 3;

console.log(somaProgressaoAritmeticaRecursiva(n, a1, r));

/*comparação:
function somaProgressaoAritmeticaIterativa(n: number, a1: number, r: number): number {
    let soma = 0;
    for (let i = 0; i < n; i++) {
        soma += a1;
        a1 += r;
    }
    return soma;
}

const n = 10000;
const a1 = 1;
const r = 3;

console.log(somaProgressaoAritmeticaIterativa(n, a1, r));*/




/*conclusão:
A conclusão é que a recursão profunda pode levar a problemas de estouro de pilha,
especialmente quando o número de chamadas recursivas é grande. A recursão é mais
elegante em muitos casos e pode ser mais fácil de entender, mas a iteração é geralmente
mais eficiente e mais segura quando o número de iterações é grande. Portanto, é
importante usar recursão com cautela e considerar alternativas iterativas quando a eficiência é um fator importante*/
