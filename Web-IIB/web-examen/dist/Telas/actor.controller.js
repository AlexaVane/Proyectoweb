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
const actor_service_1 = require("./actor.service");
const actor_create_dto_1 = require("./actor-create-dto/actor-create.dto");
const pelicula_service_1 = require("../pelicula/pelicula.service");
let ActorController = class ActorController {
    constructor(_actorService, _peliculaService) {
        this._actorService = _actorService;
        this._peliculaService = _peliculaService;
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
            let peliculas;
            peliculas = yield this._peliculaService.findAll();
            let actores;
            actores = yield this._actorService.findAll();
            res.render('lista-actores', {
                arregloPeliculas: peliculas,
                arregloActores: actores,
            });
        });
    }
    crearActor(res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('crear-Telas');
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
        res.redirect('/Telas/inicio' + parametrosConsulta);
    }
    eliminar(idActor, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sedeEncontrada = yield this._actorService
                .findOne(+idActor);
            yield this._actorService.delete(Number(idActor));
            const parametrosConsulta = `?accion=borrar&nombre=${sedeEncontrada.nombres}`;
            res.redirect('/Telas/inicio' + parametrosConsulta);
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
            response.render('crear-Telas', {
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
            res.redirect('/Telas/inicio' + parametrosConsulta);
        });
    }
};
__decorate([
    common_1.Get('buscar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "findAll", null);
__decorate([
    common_1.Get('buscarPorId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "findOne", null);
__decorate([
    common_1.Get('inicio'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('accion')),
    __param(2, common_1.Query('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "crearA", null);
__decorate([
    common_1.Get('crear-Telas'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "crearActor", null);
__decorate([
    common_1.Post('crear-Telas'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actor_create_dto_1.EventoCreateDto, Object]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "create", null);
__decorate([
    common_1.Post('eliminar-Telas/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "eliminar", null);
__decorate([
    common_1.Get('actualizar-Telas/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Query('error')),
    __param(3, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String, Object]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "actualizarEvento", null);
__decorate([
    common_1.Post('actualizar-Telas/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, actor_create_dto_1.EventoCreateDto]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "editarUno", null);
ActorController = __decorate([
    common_1.Controller('actor'),
    __metadata("design:paramtypes", [actor_service_1.ActorService,
        pelicula_service_1.PeliculaService])
], ActorController);
exports.ActorController = ActorController;
//# sourceMappingURL=actor.controller.js.map