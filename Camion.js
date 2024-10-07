"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, anio, capacidadCarga, patente) {
        this.vehiculo = new vehiculo_1.Vehiculo(marca, modelo, anio, patente);
        this.capacidadCarga = capacidadCarga;
    }
    Camion.prototype.getCapacidadCarga = function () {
        return this.capacidadCarga;
    };
    Camion.prototype.getMarca = function () {
        return this.vehiculo.getMarca();
    };
    Camion.prototype.getModelo = function () {
        return this.vehiculo.getModelo();
    };
    Camion.prototype.getAnio = function () {
        return this.vehiculo.getAnio();
    };
    Camion.prototype.getPatente = function () {
        return this.vehiculo.getPatente();
    };
    return Camion;
}());
exports.Camion = Camion;
