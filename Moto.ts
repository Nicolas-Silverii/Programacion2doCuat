import { Vehiculo } from './vehiculo';

export class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(marca: string, modelo: string, anio: number, cilindrada: number, patente: string) {
        super(marca, modelo, anio, patente);
        this.cilindrada = cilindrada;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }
}
