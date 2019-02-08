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
const evento_entity_1 = require("src/evento/evento.entity");
let EventoPeliculaEntity = class EventoPeliculaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EventoPeliculaEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => pelicula_entity_1.PeliculaEntity, pelicula => pelicula.id, { eager: true }),
    __metadata("design:type", pelicula_entity_1.PeliculaEntity)
], EventoPeliculaEntity.prototype, "pelicula", void 0);
__decorate([
    typeorm_1.ManyToOne(type => evento_entity_1.EventoEntity, evento => evento.id, { eager: true }),
    __metadata("design:type", evento_entity_1.EventoEntity)
], EventoPeliculaEntity.prototype, "evento", void 0);
EventoPeliculaEntity = __decorate([
    typeorm_1.Entity('evento-pelicula')
], EventoPeliculaEntity);
exports.EventoPeliculaEntity = EventoPeliculaEntity;
//# sourceMappingURL=evento.entity.js.map