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
const telas_entity_1 = require("../../dist/Telas/telas.entity");
let ProductoEntity = class ProductoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "ProductoId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
    }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "precio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "fechaLanzamientoProducto", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "cantidad", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "color", void 0);
__decorate([
    typeorm_1.ManyToOne(type => telas_entity_1.TelasEntity, telas => telas.TelasId),
    __metadata("design:type", telas_entity_1.TelasEntity)
], ProductoEntity.prototype, "TelasId", void 0);
ProductoEntity = __decorate([
    typeorm_1.Entity('db_producto')
], ProductoEntity);
exports.ProductoEntity = ProductoEntity;
//# sourceMappingURL=producto.entity.js.map