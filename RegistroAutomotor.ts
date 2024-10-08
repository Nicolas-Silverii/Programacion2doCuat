import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

export class RegistroAutomotor {
    private nombre: string;
    private listaMoto: Moto[] = [];
    private listaAuto: Auto[] = [];
    private listaCamion: Camion[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public agregarAuto(auto: Auto): void {
        this.listaAuto.push(auto);
    }

    public agregarMoto(moto: Moto): void {
        this.listaMoto.push(moto);
    }

    public agregarCamion(camion: Camion): void {
        this.listaCamion.push(camion);
    }

    public borrarAuto(index: number): void {
        this.listaAuto.splice(index, 1);
    }

    public borrarMoto(index: number): void {
        this.listaMoto.splice(index, 1);
    }

    public borrarCamion(index: number): void {
        this.listaCamion.splice(index, 1);
    }

    public modificarAuto(index: number, auto: Auto): void {
        this.listaAuto[index] = auto;
    }

    public modificarMoto(index: number, moto: Moto): void {
        this.listaMoto[index] = moto;
    }

    public modificarCamion(index: number, camion: Camion): void {
        this.listaCamion[index] = camion;
    }

    public getAutos(): Auto[] {
        return this.listaAuto;
    }

    public getMotos(): Moto[] {
        return this.listaMoto;
    }

    public getCamiones(): Camion[] {
        return this.listaCamion;
    }
}
