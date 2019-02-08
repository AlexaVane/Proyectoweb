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
const producto_entity_1 = require("../producto/producto.entity");
let Proveedorentity = class Proveedorentity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Proveedorentity.prototype, "proveedor_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Proveedorentity.prototype, "e", void 0);
__decorate([
    typeorm_1.ManyToOne(type => producto_entity_1.ProductoEntity, aplicacion => aplicacion.ProductoId),
    __metadata("design:type", producto_entity_1.ProductoEntity)
], Proveedorentity.prototype, "so_id", void 0);
Proveedorentity = __decorate([
    typeorm_1.Entity('proveedor')
], Proveedorentity);
exports.Proveedorentity = Proveedorentity;
//# sourceMappingURL=proveedorentity.js.map