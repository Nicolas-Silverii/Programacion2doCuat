import { Moto } from "./Moto";
import { Auto } from "./auto";
import { Camion } from "./Camion";

export class RegistroAutomotor {
    private nombre: string;
    private listaMoto: Moto[];
    private listaAuto: Auto[];
    private listaCamion: Camion[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.listaMoto = [];
        this.listaAuto = [];
        this.listaCamion = [];
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getAuto(): Auto[] {
        return this.listaAuto;
    }

    public getMoto(): Moto[] {
        return this.listaMoto;
    }

    public getCamion(): Camion[] {
        return this.listaCamion;
    }

    // Métodos para agregar vehículos
    public agregarAuto(auto: Auto): void {
        this.listaAuto.push(auto);
    }

    public agregarMoto(moto: Moto): void {
        this.listaMoto.push(moto);
    }

    public agregarCamion(camion: Camion): void {
        this.listaCamion.push(camion);
    }

    // Métodos para borrar vehículos


    public borrarAuto(index: number): void {
        this.listaAuto.splice(index, 1);
    }

    public borrarMoto(index: number): void {
        this.listaMoto.splice(index, 1); 
    }

    public borrarCamion(index: number): void {
        this.listaCamion.splice(index, 1); 
    }

    // Métodos para modificar vehículos

    
    public modificarAuto(index: number, auto: Auto): void {
        this.listaAuto[index] = auto;
    }

    public modificarMoto(index: number, moto: Moto): void {
        this.listaMoto[index] = moto;
    }

    public modificarCamion(index: number, camion: Camion): void {
        this.listaCamion[index] = camion;
    }
}
