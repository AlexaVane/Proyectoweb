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
const usuario_service_1 = require("./usuario.service");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const usuario_create_dto_1 = require("./usuario-create-dto/usuario-create.dto");
let UsuarioController = class UsuarioController {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    crearUsuario(response, mensaje) {
        if (mensaje) {
            response.render('crear-usuario', {
                mensaje: mensaje,
            });
        }
        else {
            response.render('crear-usuario');
        }
    }
    crearUsuarioPost(response, usuarioCrear) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = new usuario_create_dto_1.UsuarioDto;
            usuario.nombre_usuario = usuarioCrear.nombre;
            usuario.email_usuario = usuarioCrear.email;
            usuario.password_usuario = usuarioCrear.password;
            usuario.fecha_nacimiento_usuario = usuarioCrear.fecha_nacimiento;
            const arregloErrores = yield class_validator_1.validate(usuario);
            const existeErrores = arregloErrores.length > 0;
            if (existeErrores) {
                console.error('Errores: Usuario a crear - ', arregloErrores);
                response.render('crear-usuario', { mensaje: 'Datos incorrectos' });
            }
            else {
                yield this._usuarioService.crearUsuario(usuario);
                response.redirect('/login');
            }
        });
    }
    mostrarUsuario(res, sesion, accion, nombre, busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sesion.rol === 'administrador') {
                let mensaje = undefined;
                let usuarios;
                if (busqueda) {
                    const consulta = {
                        where: [
                            {
                                nombre_usuario: typeorm_1.Like(`%${busqueda}%`)
                            },
                            {
                                email_usuario: typeorm_1.Like(`%${busqueda}%`)
                            },
                        ]
                    };
                    usuarios = yield this._usuarioService.buscar(consulta);
                }
                else {
                    usuarios = yield this._usuarioService.buscar();
                }
                res.render('lista-usuarios', {
                    arregloUsuario: usuarios,
                    mensaje: mensaje,
                });
            }
            else {
                throw new common_1.BadRequestException({ mensaje: "No hay permisos aun" });
            }
        });
    }
    borrar(idUsuario, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioEncontrado = yield this._usuarioService
                .buscarPorId(+idUsuario);
            yield this._usuarioService.borrar(Number(idUsuario));
            const parametrosConsulta = `?accion=borrar&nombre=${usuarioEncontrado.nombre_usuario}`;
            response.redirect('/usuario/inicio' + parametrosConsulta);
        });
    }
};
__decorate([
    common_1.Get('crear-usuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('mensaje')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "crearUsuario", null);
__decorate([
    common_1.Post('crear-usuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "crearUsuarioPost", null);
__decorate([
    common_1.Get('inicio'),
    __param(0, common_1.Res()),
    __param(1, common_1.Session()),
    __param(2, common_1.Query('accion')),
    __param(3, common_1.Query('nombre')),
    __param(4, common_1.Query('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "mostrarUsuario", null);
__decorate([
    common_1.Post('borrar/:idUsuario'),
    __param(0, common_1.Param('idUsuario')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "borrar", null);
UsuarioController = __decorate([
    common_1.Controller('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map