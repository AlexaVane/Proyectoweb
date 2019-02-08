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
const rol_entity_1 = require("../rol/rol.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
let RolPorUsuarioEntity = class RolPorUsuarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RolPorUsuarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => rol_entity_1.RolEntity, rol => rol.rolesPorUsuario, { eager: true }),
    __metadata("design:type", rol_entity_1.RolEntity)
], RolPorUsuarioEntity.prototype, "rol", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.UsuarioEntity, usuario => usuario.rolesPorUsuario),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], RolPorUsuarioEntity.prototype, "usuario", void 0);
RolPorUsuarioEntity = __decorate([
    typeorm_1.Entity('rol_por_usuario')
], RolPorUsuarioEntity);
exports.RolPorUsuarioEntity = RolPorUsuarioEntity;
//# sourceMappingURL=rolPorUsuario.entity.js.map