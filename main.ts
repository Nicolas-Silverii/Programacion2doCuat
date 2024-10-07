import { RegistroAutomotor } from './registroAutomotor';
import { Auto } from './auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

// Crear el registro automotor
const registroAuto = new RegistroAutomotor("Registro-Automotor-Olav");

// Crear vehículos
const auto1 = new Auto("Toyota", "Corolla", 2020, 4, "ABC123");
const auto2 = new Auto("Ford", "Focus", 2018, 4, "DEF234");
const moto1 = new Moto("Honda", "XR125l", 2013, 12089, "XYZ789");
const moto2 = new Moto("Yamaha", "R6", 2023, 0, "XKF528");
const camion1 = new Camion("Mercedes-Benz", "Actros", 2019, 20000, "TRE316");
const camion2 = new Camion("Iveco", "Tector", 2023, 10200, "LKR625/");

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
registroAuto.modificarAuto(0, new Auto("Chevrolet", "Onix", 2021, 4, "GHI345"));

// Mostrar los autos restantes
console.log("Autos en el registro:");
console.log(registroAuto.getAuto());

// Mostrar las motos
console.log("Motos en el registro:");
console.log(registroAuto.getMoto());

// Mostrar los camiones
console.log("Camiones en el registro:");
console.log(registroAuto.getCamion());
