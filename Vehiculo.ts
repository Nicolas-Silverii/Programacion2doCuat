export class Vehiculo {
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: string;

    constructor(marca: string, modelo: string, anio: number, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    getPatente(): string {
        return this.patente;
    }
}
