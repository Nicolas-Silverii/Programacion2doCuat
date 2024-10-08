"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
// Crear el registro automotor con un nombre
var registro = new registroAutomotor_1.RegistroAutomotor("Registro del Automotor - Olavarría");
// Crear y agregar vehículos
var auto1 = new auto_1.Auto("Toyota", "Corolla", 2020, 4, "ABC123");
var moto1 = new moto_1.Moto("Honda", "XR125L", 2013, 125, "XYZ789");
var camion1 = new camion_1.Camion("Mercedes-Benz", "Actros", 2019, 20000, "TRE316");
registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);
// Mostrar vehículos
console.log("Lista de autos en el registro:", registro.getAutos());
console.log("Lista de motos en el registro:", registro.getMotos());
console.log("Lista de camiones en el registro:", registro.getCamiones());
// Modificar un auto
registro.modificarAuto(0, new auto_1.Auto("Renault", "Clio", 2005, 4, "EXP146"));
console.log("Lista de autos después de la modificación:", registro.getAutos());
// Borrar una moto
registro.borrarMoto(0);
console.log("Lista de motos después de borrar:", registro.getMotos());
