import { Vehiculo } from './vehiculo';

export class Camion extends Vehiculo {
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, anio: number, capacidadCarga: number, patente: string) {
        super(marca, modelo, anio, patente);
        this.capacidadCarga = capacidadCarga;
    }

    getCapacidadCarga(): number {
        return this.capacidadCarga;
    }
}
