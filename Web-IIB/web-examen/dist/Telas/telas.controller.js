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
var _a, _b;
const common_1 = require("@nestjs/common");
const producto_service_1 = require("../pelicula/producto.service");
const telas_service_1 = require("../actor/telas.service");
let TelasController = class TelasController {
    constructor(_actorService, _telasService) {
        this._actorService = _actorService;
        this._telasService = _telasService;
    }
    findAll() {
        return this._actorService.findAll();
    }
    findOne(id) {
        return this._actorService.findOne(id);
    }
    crearA(res, accion, titulo) {
        return __awaiter(this, void 0, void 0, function* () {
            let mensaje = undefined;
            let clase = undefined;
            if (accion && titulo) {
                switch (accion) {
                    case 'borrar':
                        mensaje = `Registro ${titulo} eliminado`;
                        clase = 'alert alert-danger';
                        break;
                    case 'actualizar':
                        mensaje = `Registro ${titulo} actualizado`;
                        clase = 'alert alert-info';
                        break;
                    case 'crear':
                        mensaje = `Registro ${titulo} creado`;
                        clase = 'alert alert-success';
                        break;
                }
            }
            let producto;
            producto = yield this._telasService.findAll();
            let telas;
            telas = yield this._telasService.findAll();
            res.render('lista-actores', {
                arregloPeliculas: producto,
                arregloActores: telas,
            });
        });
    }
    crearActor(res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('crear-actor');
        });
    }
    create(actorCrear, res) {
        const actorCrearNew = {
            nombres: actorCrear.nombres,
            apellidos: actorCrear.apellidos,
            fechaNacimiento: actorCrear.fechaNacimiento,
            numeroPeliculas: Number(actorCrear.numeroPeliculas),
            retirado: Boolean(actorCrear.retirado),
        };
        this._actorService.create(actorCrearNew);
        const parametrosConsulta = `?accion=crear&nombre=${actorCrear.nombres}`;
        res.redirect('/actor/inicio' + parametrosConsulta);
    }
    eliminar(idActor, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sedeEncontrada = yield this._actorService
                .findOne(+idActor);
            yield this._actorService.delete(Number(idActor));
            const parametrosConsulta = `?accion=borrar&nombre=${sedeEncontrada.nombres}`;
            res.redirect('/actor/inicio' + parametrosConsulta);
        });
    }
    actualizarEvento(idActor, response, error, sesion) {
        return __awaiter(this, void 0, void 0, function* () {
            let mensaje = undefined;
            if (error) {
                mensaje = "Datos erroneos";
            }
            const actorActualizar = yield this._actorService
                .findOne(Number(idActor));
            response.render('crear-actor', {
                actor: actorActualizar,
                mensaje: mensaje,
                id: idActor,
            });
        });
    }
    editarUno(idActor, res, actorEditar) {
        return __awaiter(this, void 0, void 0, function* () {
            const actorCrearNew = {
                id: +idActor,
                nombres: actorEditar.nombres,
                apellidos: actorEditar.apellidos,
                fechaNacimiento: actorEditar.fechaNacimiento,
                numeroPeliculas: Number(actorEditar.numeroPeliculas),
                retirado: Boolean(actorEditar.retirado),
            };
            yield this._actorService.update(actorCrearNew);
            const parametrosConsulta = `?accion=actualizar&nombre=${actorEditar.nombres}`;
            res.redirect('/actor/inicio' + parametrosConsulta);
        });
    }
};
__decorate([
    common_1.Get('buscar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TelasController.prototype, "findAll", null);
__decorate([
    common_1.Get('buscarPorId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TelasController.prototype, "findOne", null);
__decorate([
    common_1.Get('inicio'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('accion')),
    __param(2, common_1.Query('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], TelasController.prototype, "crearA", null);
__decorate([
    common_1.Get('crear-actor'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TelasController.prototype, "crearActor", null);
__decorate([
    common_1.Post('crear-actor'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof EventoCreateDto !== "undefined" && EventoCreateDto) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], TelasController.prototype, "create", null);
__decorate([
    common_1.Post('eliminar-actor/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TelasController.prototype, "eliminar", null);
__decorate([
    common_1.Get('actualizar-actor/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Query('error')),
    __param(3, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String, Object]),
    __metadata("design:returntype", Promise)
], TelasController.prototype, "actualizarEvento", null);
__decorate([
    common_1.Post('actualizar-actor/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_b = typeof EventoCreateDto !== "undefined" && EventoCreateDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], TelasController.prototype, "editarUno", null);
TelasController = __decorate([
    common_1.Controller('actor'),
    __metadata("design:paramtypes", [telas_service_1.TelasService,
        producto_service_1.ProductoService])
], TelasController);
exports.TelasController = TelasController;
//# sourceMappingURL=telas.controller.js.map