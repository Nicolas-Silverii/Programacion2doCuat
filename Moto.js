"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, anio, cilindrada, patente) {
        this.vehiculo = new vehiculo_1.Vehiculo(marca, modelo, anio, patente);
        this.cilindrada = cilindrada;
    }
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    Moto.prototype.getMarca = function () {
        return this.vehiculo.getMarca();
    };
    Moto.prototype.getModelo = function () {
        return this.vehiculo.getModelo();
    };
    Moto.prototype.getAnio = function () {
        return this.vehiculo.getAnio();
    };
    Moto.prototype.getPatente = function () {
        return this.vehiculo.getPatente();
    };
    return Moto;
}());
exports.Moto = Moto;
