class Veiculo_lebc {
    protected latitude: number;
    protected longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    mover(latitude: number, longitude: number): void {
        this.latitude = latitude;
        this.longitude = longitude;
        console.log(`Veículo movido para (${this.latitude}, ${this.longitude})`);
    }
}

class VeiculoEletrico_lebc extends Veiculo_lebc {
    private bateria: number;

    constructor(latitude: number, longitude: number, bateria: number) {
        super(latitude, longitude);
        this.bateria = bateria;
    }

    carregarBateria(novaCarga: number): void {
        this.bateria += novaCarga;
        console.log(`Bateria carregada para ${this.bateria}%`);
    }
}

class VeiculoEletricoVoador_lebc extends VeiculoEletrico_lebc {
    private altitude: number;

    constructor(latitude: number, longitude: number, bateria: number, altitude: number) {
        super(latitude, longitude, bateria);
        this.altitude = altitude;
    }

    mover(latitude: number, longitude: number): void {
        super.mover(latitude, longitude);
        console.log(`Veículo voador movido para (${this.latitude}, ${this.longitude}, ${this.altitude})`);
    }

    moverVoador(latitude: number, longitude: number, altitude: number): void {
        super.mover(latitude, longitude);
        this.altitude = altitude;
        console.log(`Veículo voador movido para (${this.latitude}, ${this.longitude}, ${this.altitude})`);
    }
}

const meuVeiculo = new VeiculoEletricoVoador(0, 0, 80, 100);
meuVeiculo.mover(10, 15);
meuVeiculo.carregarBateria(20);
meuVeiculo.moverVoador(20, 30, 500);


//tsc 2.7.ts
//node 2.7.js
