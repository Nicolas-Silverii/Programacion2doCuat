"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
// Crear el registro automotor
var registroAuto = new registroAutomotor_1.RegistroAutomotor("Registro-Automotor-Olav");
// Crear vehículos
var auto1 = new auto_1.Auto("Toyota", "Corolla", 2020, 4, "ABC123");
var auto2 = new auto_1.Auto("Ford", "Focus", 2018, 4, "DEF234");
var moto1 = new Moto_1.Moto("Honda", "XR125l", 2013, 12089, "XYZ789");
var moto2 = new Moto_1.Moto("Yamaha", "R6", 2023, 0, "XKF528");
var camion1 = new Camion_1.Camion("Mercedes-Benz", "Actros", 2019, 20000, "TRE316");
var camion2 = new Camion_1.Camion("Iveco", "Tector", 2023, 10200, "LKR625/");
// Agregar vehículos al registro
registroAuto.agregarAuto(auto1);
registroAuto.agregarAuto(auto2);
registroAuto.agregarMoto(moto1);
registroAuto.agregarMoto(moto2);
registroAuto.agregarCamion(camion1);
registroAuto.agregarCamion(camion2);
// Borrar el primer auto
registroAuto.borrarAuto(0);
// Modificar el auto en la posición 0
registroAuto.modificarAuto(0, new auto_1.Auto("Chevrolet", "Onix", 2021, 4, "GHI345"));
// Mostrar los autos restantes
console.log("Autos en el registro:");
console.log(registroAuto.getAuto());
// Mostrar las motos
console.log("Motos en el registro:");
console.log(registroAuto.getMoto());
// Mostrar los camiones
console.log("Camiones en el registro:");
console.log(registroAuto.getCamion());
