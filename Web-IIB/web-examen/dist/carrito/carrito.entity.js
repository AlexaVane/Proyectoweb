"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const venta_entity_1 = require("../venta/venta.entity");
const pelicula_entity_1 = require("../pelicula/pelicula.entity");
let CarritoEntity = class CarritoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CarritoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => venta_entity_1.VentaEntity, venta => venta.carrito),
    __metadata("design:type", venta_entity_1.VentaEntity)
], CarritoEntity.prototype, "venta", void 0);
__decorate([
    typeorm_1.ManyToOne(type => pelicula_entity_1.PeliculaEntity, pelicula => pelicula.carrito),
    __metadata("design:type", pelicula_entity_1.PeliculaEntity)
], CarritoEntity.prototype, "pelicula", void 0);
CarritoEntity = __decorate([
    typeorm_1.Entity('carrito')
], CarritoEntity);
exports.CarritoEntity = CarritoEntity;
//# sourceMappingURL=carrito.entity.js.map