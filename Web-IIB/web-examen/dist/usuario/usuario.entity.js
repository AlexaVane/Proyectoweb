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
const rolPorUsuario_entity_1 = require("../rolPorUsuario/rolPorUsuario.entity");
let UsuarioEntity = class UsuarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        name: 'nombre_usuario',
        type: 'varchar',
        length: 30,
        default: 'nombre',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre_usuario", void 0);
__decorate([
    typeorm_1.Column({
        name: 'email_usuario',
        type: 'varchar',
        length: 30,
        default: 'email',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "email_usuario", void 0);
__decorate([
    typeorm_1.Column({
        name: 'password_usuario',
        type: 'varchar',
        length: 30,
        default: '1234',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "password_usuario", void 0);
__decorate([
    typeorm_1.Column({
        name: 'fecha_nacimiento_usuario',
        type: 'varchar',
        default: '1/1/1995',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "fecha_nacimiento_usuario", void 0);
__decorate([
    typeorm_1.OneToMany(type => rolPorUsuario_entity_1.RolPorUsuarioEntity, rolPorUsuario => rolPorUsuario.usuario, { eager: true }),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "rolesPorUsuario", void 0);
UsuarioEntity = __decorate([
    typeorm_1.Entity('usuario')
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map