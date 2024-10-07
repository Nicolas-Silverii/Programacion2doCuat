"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio, cantidadPuertas, patente) {
        this.vehiculo = new vehiculo_1.Vehiculo(marca, modelo, anio, patente);
        this.cantidadPuertas = cantidadPuertas;
    }
    Auto.prototype.getCantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    Auto.prototype.getMarca = function () {
        return this.vehiculo.getMarca();
    };
    Auto.prototype.getModelo = function () {
        return this.vehiculo.getModelo();
    };
    Auto.prototype.getAnio = function () {
        return this.vehiculo.getAnio();
    };
    Auto.prototype.getPatente = function () {
        return this.vehiculo.getPatente();
    };
    return Auto;
}());
exports.Auto = Auto;
