import { Vehiculo } from './vehiculo';

export class Auto extends Vehiculo {
    private cantidadPuertas: number;

    constructor(marca: string, modelo: string, anio: number, cantidadPuertas: number, patente: string) {
        super(marca, modelo, anio, patente);
        this.cantidadPuertas = cantidadPuertas;
    }

    getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }
}
