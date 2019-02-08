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
const pelicula_entity_1 = require("src/pelicula/pelicula.entity");
let ActorEntity = class ActorEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ActorEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 40 }),
    __metadata("design:type", String)
], ActorEntity.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 40 }),
    __metadata("design:type", String)
], ActorEntity.prototype, "apellidos", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], ActorEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], ActorEntity.prototype, "numeroPeliculas", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], ActorEntity.prototype, "retirado", void 0);
__decorate([
    typeorm_1.OneToMany(type => pelicula_entity_1.PeliculaEntity, pelicula => pelicula.actor),
    __metadata("design:type", Array)
], ActorEntity.prototype, "pelicula", void 0);
ActorEntity = __decorate([
    typeorm_1.Entity('actor')
], ActorEntity);
exports.ActorEntity = ActorEntity;
//# sourceMappingURL=actor.entity.js.map