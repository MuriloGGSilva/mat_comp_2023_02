class Pessoa_lebc {
    nome: string;
    genero: string;

    constructor(nome: string, genero: string) {
        this.nome = nome;
        this.genero = genero;
    }
}

class Estudante_lebc extends Pessoa_lebc {
    faculdade: string;
    curso: string;

    constructor(nome: string, genero: string, faculdade: string, curso: string) {
        super(nome, genero);
        this.faculdade = faculdade;
        this.curso = curso;
    }

    apresentacao(): string {
        return `Olá, meu nome é ${this.nome}, sou estudante de ${this.curso} na ${this.faculdade}.`;
    }
}

const estudante1 = new Estudante_lebc("João", "Masculino", "Universidade XYZ", "Engenharia");
console.log(estudante1.apresentacao());

const estudante2 = new Estudante_lebc("Maria", "Feminino", "Faculdade ABC", "Medicina");
console.log(estudante2.apresentacao());
