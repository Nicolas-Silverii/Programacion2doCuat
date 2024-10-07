import { Vehiculo } from './vehiculo';

export class Moto {
    private vehiculo: Vehiculo;
    private cilindrada: number;

    constructor(marca: string, modelo: string, anio: number, cilindrada: number, patente: string) {
        this.vehiculo = new Vehiculo(marca, modelo, anio, patente);
        this.cilindrada = cilindrada;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }

    getMarca(): string {
        return this.vehiculo.getMarca();
    }

    getModelo(): string {
        return this.vehiculo.getModelo();
    }

    getAnio(): number {
        return this.vehiculo.getAnio();
    }

    getPatente(): string {
        return this.vehiculo.getPatente();
    }
}
