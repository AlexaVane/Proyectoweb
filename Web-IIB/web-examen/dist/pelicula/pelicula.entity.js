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
const actor_entity_1 = require("src/actor/actor.entity");
const evento_entity_1 = require("src/evento-pelicula/evento.entity");
let PeliculaEntity = class PeliculaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PeliculaEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 40 }),
    __metadata("design:type", String)
], PeliculaEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], PeliculaEntity.prototype, "anioLanzamiento", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], PeliculaEntity.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], PeliculaEntity.prototype, "actoresPrincipales", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], PeliculaEntity.prototype, "sinopsis", void 0);
__decorate([
    typeorm_1.ManyToOne(type => actor_entity_1.ActorEntity, actor => actor.id, { eager: true }),
    __metadata("design:type", actor_entity_1.ActorEntity)
], PeliculaEntity.prototype, "actor", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_entity_1.EventoPeliculaEntity, eventoPelicula => eventoPelicula.id),
    __metadata("design:type", Array)
], PeliculaEntity.prototype, "eventoPelicula", void 0);
PeliculaEntity = __decorate([
    typeorm_1.Entity('pelicula')
], PeliculaEntity);
exports.PeliculaEntity = PeliculaEntity;
//# sourceMappingURL=pelicula.entity.js.map