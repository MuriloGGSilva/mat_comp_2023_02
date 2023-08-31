class ProgressaoGeometrica_lebc {
    constructor(private primeiroTermo: number, private razao: number) {}

    gerarTermos(n: number): number[] {
        const termos: number[] = [this.primeiroTermo];
        for (let i = 1; i < n; i++) {
            const proximoTermo = termos[i - 1] * this.razao;
            termos.push(proximoTermo);
        }
        return termos;
    }
}

// Criando uma instância da Progressão Geométrica com primeiro termo 2 e razão 3
const pg = new ProgressaoGeometrica(2, 3);

// Gerando os primeiros 50 termos da progressão geométrica
const primeiros50Termos = pg.gerarTermos(50);

console.log(primeiros50Termos);
