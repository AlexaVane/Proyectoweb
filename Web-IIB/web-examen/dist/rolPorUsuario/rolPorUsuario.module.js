"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_service_1 = require("../rol/rol.service");
const usuario_module_1 = require("src/usuario/usuario.module");
const rol_module_1 = require("src/rol/rol.module");
const rolPorUsuario_entity_1 = require("./rolPorUsuario.entity");
const rolPorUsuario_service_1 = require("./rolPorUsuario.service");
const rolPorUsuario_controller_1 = require("./rolPorUsuario.controller");
let RolPorUsuarioModule = class RolPorUsuarioModule {
};
RolPorUsuarioModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rolPorUsuario_entity_1.RolPorUsuarioEntity]), usuario_module_1.UsuarioModule, rol_module_1.RolModule
        ],
        providers: [rolPorUsuario_service_1.RolPorUsuarioService, rol_service_1.RolService],
        controllers: [rolPorUsuario_controller_1.RolPorUsuarioController],
        exports: [rolPorUsuario_service_1.RolPorUsuarioService]
    })
], RolPorUsuarioModule);
exports.RolPorUsuarioModule = RolPorUsuarioModule;
//# sourceMappingURL=rolPorUsuario.module.js.map