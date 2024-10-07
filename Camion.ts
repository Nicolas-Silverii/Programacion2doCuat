import { Vehiculo } from './vehiculo';

export class Camion {
    private vehiculo: Vehiculo;
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, anio: number, capacidadCarga: number, patente: string) {
        this.vehiculo = new Vehiculo(marca, modelo, anio, patente);
        this.capacidadCarga = capacidadCarga;
    }

    getCapacidadCarga(): number {
        return this.capacidadCarga;
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
