"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_module_1 = require("./usuario/usuario.module");
const usuario_entity_1 = require("./usuario/usuario.entity");
const rol_module_1 = require("./rol/rol.module");
const rolPorUsuario_module_1 = require("./rolPorUsuario/rolPorUsuario.module");
const rol_entity_1 = require("./rol/rol.entity");
const rolPorUsuario_entity_1 = require("./rolPorUsuario/rolPorUsuario.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'javier',
                database: 'web',
                synchronize: true,
                dropSchema: false,
                entities: [
                    rol_entity_1.RolEntity,
                    rolPorUsuario_entity_1.RolPorUsuarioEntity,
                    usuario_entity_1.UsuarioEntity
                ],
            }),
            rol_module_1.RolModule,
            rolPorUsuario_module_1.RolPorUsuarioModule,
            usuario_module_1.UsuarioModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map