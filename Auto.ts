import { Vehiculo } from './vehiculo';

export class Auto {
    private vehiculo: Vehiculo;
    private cantidadPuertas: number;

    constructor(marca: string, modelo: string, anio: number, cantidadPuertas: number, patente: string) {
        this.vehiculo = new Vehiculo(marca, modelo, anio, patente);
        this.cantidadPuertas = cantidadPuertas;
    }

    getCantidadPuertas(): number {
        return this.cantidadPuertas;
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
