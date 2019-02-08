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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("src/usuario/usuario.service");
const rol_service_1 = require("src/rol/rol.service");
const rolPorUsuario_service_1 = require("./rolPorUsuario.service");
let RolPorUsuarioController = class RolPorUsuarioController {
    constructor(_rolPorUsuarioService, _usuarioService, _rolService) {
        this._rolPorUsuarioService = _rolPorUsuarioService;
        this._usuarioService = _usuarioService;
        this._rolService = _rolService;
    }
    mostrarAsignarRol(response, idUsuario, verificacion, rol, sesion) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sesion.rol === 'administrador') {
                let mensaje = undefined;
                if (verificacion) {
                    mensaje = `El rol ${verificacion} ya existe`;
                }
                let usuarioRoles;
                const usuarioActualizar = yield this._usuarioService.buscarPorId(+idUsuario);
                usuarioRoles = yield this._rolPorUsuarioService.obtenerRoles(+idUsuario);
                const opcionesRoles = yield this._rolService.obtenerRol();
                response.render('asignar-roles', { usuario: usuarioActualizar, rolUsuario: usuarioRoles, opcionesRoles, mensaje });
            }
            else {
                throw new common_1.BadRequestException({ mensaje: "No tiene acceso a esta vista" });
            }
        });
    }
    asginarRol(rol, response, idUsuario, sesion) {
        return __awaiter(this, void 0, void 0, function* () {
            rol.usuario = idUsuario;
            const verificarRolesUsuario = yield this._rolPorUsuarioService.verificarRoles(rol);
            if (verificarRolesUsuario) {
                const parametrosConsulta = `?verificacion=${verificarRolesUsuario.rol.rol_nombre}`;
                response.redirect('/rol-por-usuario/asignar-rol/' + idUsuario + parametrosConsulta);
            }
            else {
                yield this._rolPorUsuarioService.asignarRol(rol);
                response.redirect('/rol-por-usuario/asignar-rol/' + idUsuario);
            }
        });
    }
    borrar(idRolUsuario, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const rolUsuarioEncontrado = yield this._rolPorUsuarioService
                .buscarPorId(+idRolUsuario);
            yield this._rolPorUsuarioService.borrar(Number(idRolUsuario));
            const parametrosConsulta = `?accion=borrar&nombre=${rolUsuarioEncontrado.id}`;
            response.redirect('/rol-por-usuario/asignar-rol/' + rolUsuarioEncontrado.usuario.id);
        });
    }
};
__decorate([
    common_1.Get('asignar-rol/:idUsuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('idUsuario')),
    __param(2, common_1.Query('verificacion')),
    __param(3, common_1.Query('')),
    __param(4, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], RolPorUsuarioController.prototype, "mostrarAsignarRol", null);
__decorate([
    common_1.Post('asignar-rol/:idUsuario'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __param(2, common_1.Param('idUsuario')),
    __param(3, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], RolPorUsuarioController.prototype, "asginarRol", null);
__decorate([
    common_1.Post('borrar/:idRolUsuario'),
    __param(0, common_1.Param('idRolUsuario')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolPorUsuarioController.prototype, "borrar", null);
RolPorUsuarioController = __decorate([
    common_1.Controller('rol-por-usuario'),
    __metadata("design:paramtypes", [rolPorUsuario_service_1.RolPorUsuarioService,
        usuario_service_1.UsuarioService,
        rol_service_1.RolService])
], RolPorUsuarioController);
exports.RolPorUsuarioController = RolPorUsuarioController;
//# sourceMappingURL=rolPorUsuario.controller.js.map