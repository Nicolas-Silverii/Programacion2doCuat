import { RegistroAutomotor } from './registroAutomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

// Crear el registro automotor con un nombre
const registro = new RegistroAutomotor("Registro del Automotor - Olavarría");

// Crear y agregar vehículos
const auto1 = new Auto("Toyota", "Corolla", 2020, 4, "ABC123");
const moto1 = new Moto("Honda", "XR125L", 2013, 125, "XYZ789");
const camion1 = new Camion("Mercedes-Benz", "Actros", 2019, 20000, "TRE316");

registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);

// Mostrar vehículos
console.log("Lista de autos en el registro:", registro.getAutos());
console.log("Lista de motos en el registro:", registro.getMotos());
console.log("Lista de camiones en el registro:", registro.getCamiones());

// Modificar un auto
registro.modificarAuto(0, new Auto("Renault", "Clio", 2005, 4, "EXP146"));
console.log("Lista de autos después de la modificación:", registro.getAutos());

// Borrar una moto
registro.borrarMoto(0);
console.log("Lista de motos después de borrar:", registro.getMotos());
