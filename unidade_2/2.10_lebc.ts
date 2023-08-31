class Fibonacci_lebc {
    private memo: Map<number, number> = new Map();

    calcularTermo(n: number): number {
        if (this.memo.has(n)) {
            return this.memo.get(n)!;
        }

        if (n <= 2) {
            return 1;
        }

        const termo = this.calcularTermo(n - 1) + this.calcularTermo(n - 2);
        this.memo.set(n, termo);
        return termo;
    }
}

const fibonacciCalculator = new Fibonacci_lebc();

console.log(fibonacciCalculator.calcularTermo(6)); // Exemplo de cálculo do termo 6
console.log(fibonacciCalculator.calcularTermo(8)); // Exemplo de cálculo do termo 8
