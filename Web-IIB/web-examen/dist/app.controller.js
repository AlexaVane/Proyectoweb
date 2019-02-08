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
const app_service_1 = require("./app.service");
const usuario_service_1 = require("./usuario/usuario.service");
const rolPorUsuario_service_1 = require("./rolPorUsuario/rolPorUsuario.service");
const class_validator_1 = require("class-validator");
const credenciales_dto_1 = require("./dto/credenciales.dto");
let AppController = class AppController {
    constructor(appService, _usuarioService, _rolPorUsuarioService) {
        this.appService = appService;
        this._usuarioService = _usuarioService;
        this._rolPorUsuarioService = _rolPorUsuarioService;
    }
    credenciales(response, mensaje) {
        if (mensaje) {
            response.render('login', {
                mensaje: mensaje,
            });
        }
        else {
            response.render('login');
        }
    }
    metodoCrendenciales(response, session, username_email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let mensaje;
            console.log(username_email, password);
            const usuario = new credenciales_dto_1.CredencialesDto;
            usuario.email_usuario = username_email;
            usuario.password_usuario = password;
            const arregloErrores = yield class_validator_1.validate(usuario);
            const existeErrores = arregloErrores.length > 0;
            if (existeErrores) {
                response.render('login', { mensaje: 'Datos incorrectos' });
            }
            else {
                const respuestaAutenticacion = yield this._usuarioService.credenciales(usuario);
                if (respuestaAutenticacion) {
                    const idUsuario = respuestaAutenticacion.id;
                    const rolUsuario = yield this._rolPorUsuarioService.verificarRol(+idUsuario);
                    if (rolUsuario) {
                        const nombreRol = rolUsuario.rol.rol_nombre;
                        session.rol = nombreRol;
                        session.username_email = username_email;
                        session.idUsuario = idUsuario;
                        switch (nombreRol) {
                            case 'usuario':
                                response.redirect('/evento');
                                break;
                            case 'administrador':
                                response.redirect('/usuario/inicio');
                                break;
                            default:
                                response.render('login');
                        }
                    }
                    else {
                    }
                }
                else {
                    throw new common_1.BadRequestException({ mensaje: 'No a tiene permisos aun' });
                }
            }
        });
    }
    logout(res, sesion) {
        return __awaiter(this, void 0, void 0, function* () {
            sesion.usuario = undefined;
            sesion.destroy();
            res.render('login');
        });
    }
};
__decorate([
    common_1.Get('login'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('mensaje')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "credenciales", null);
__decorate([
    common_1.Post('credenciales'),
    __param(0, common_1.Res()),
    __param(1, common_1.Session()),
    __param(2, common_1.Body('email_usuario')),
    __param(3, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "metodoCrendenciales", null);
__decorate([
    common_1.Get('logout'),
    __param(0, common_1.Res()),
    __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        usuario_service_1.UsuarioService,
        rolPorUsuario_service_1.RolPorUsuarioService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map