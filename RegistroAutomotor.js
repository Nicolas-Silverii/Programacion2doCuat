"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre) {
        this.nombre = nombre;
        this.listaMoto = [];
        this.listaAuto = [];
        this.listaCamion = [];
    }
    // Getters
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.getAuto = function () {
        return this.listaAuto;
    };
    RegistroAutomotor.prototype.getMoto = function () {
        return this.listaMoto;
    };
    RegistroAutomotor.prototype.getCamion = function () {
        return this.listaCamion;
    };
    // Métodos para agregar vehículos
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.listaAuto.push(auto);
    };
    RegistroAutomotor.prototype.agregarMoto = function (moto) {
        this.listaMoto.push(moto);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camion) {
        this.listaCamion.push(camion);
    };
    // Métodos para borrar vehículos
    RegistroAutomotor.prototype.borrarAuto = function (index) {
        this.listaAuto.splice(index, 1);
    };
    RegistroAutomotor.prototype.borrarMoto = function (index) {
        this.listaMoto.splice(index, 1);
    };
    RegistroAutomotor.prototype.borrarCamion = function (index) {
        this.listaCamion.splice(index, 1);
    };
    // Métodos para modificar vehículos
    RegistroAutomotor.prototype.modificarAuto = function (index, auto) {
        this.listaAuto[index] = auto;
    };
    RegistroAutomotor.prototype.modificarMoto = function (index, moto) {
        this.listaMoto[index] = moto;
    };
    RegistroAutomotor.prototype.modificarCamion = function (index, camion) {
        this.listaCamion[index] = camion;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
