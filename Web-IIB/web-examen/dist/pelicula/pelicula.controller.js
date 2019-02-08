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
const pelicula_service_1 = require("./pelicula.service");
const pelicula_create_dto_1 = require("./pelicula-create-dto/pelicula-create.dto");
const actor_service_1 = require("src/actor/actor.service");
let PeliculaController = class PeliculaController {
    constructor(_peliculaService, _actorService) {
        this._peliculaService = _peliculaService;
        this._actorService = _actorService;
    }
    findAll() {
        return this._peliculaService.findAll();
    }
    findOne(id) {
        return this._peliculaService.findOne(id);
    }
    crearPelicula(res) {
        return __awaiter(this, void 0, void 0, function* () {
            let pelicula;
            pelicula = yield this._actorService.findAll();
            res.render('crear-pelicula', {
                arregloActores: pelicula
            });
        });
    }
    create(peliculaCrear, res) {
        res.redirect("/actor/inicio");
        return this._peliculaService.create(peliculaCrear);
    }
    eliminar(idPelicula, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sedeEncontrada = yield this._peliculaService
                .findOne(+idPelicula);
            yield this._peliculaService.delete(Number(idPelicula));
            const parametrosConsulta = `?accion=borrar&nombre=${sedeEncontrada.nombre}`;
            res.redirect('/actor/inicio' + parametrosConsulta);
        });
    }
    actualizarEvento(idPelicula, response, error, sesion) {
        return __awaiter(this, void 0, void 0, function* () {
            let mensaje = undefined;
            if (error) {
                mensaje = "Datos erroneos";
            }
            const peliculaActualizar = yield this._peliculaService
                .findOne(Number(idPelicula));
            let pelicula;
            pelicula = yield this._actorService.findAll();
            response.render('crear-pelicula', {
                pelicula: peliculaActualizar,
                mensaje: mensaje,
                id: idPelicula,
                arregloActores: pelicula
            });
        });
    }
    editarUno(idPelicula, res, peliculaEditar) {
        return __awaiter(this, void 0, void 0, function* () {
            peliculaEditar.id = +idPelicula;
            yield this._peliculaService.update(peliculaEditar);
            const parametrosConsulta = `?accion=actualizar&nombre=${peliculaEditar.nombre}`;
            res.redirect('/actor/inicio' + parametrosConsulta);
        });
    }
};
__decorate([
    common_1.Get('buscar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "findAll", null);
__decorate([
    common_1.Get('buscarPorId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "findOne", null);
__decorate([
    common_1.Get('crear-pelicula'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PeliculaController.prototype, "crearPelicula", null);
__decorate([
    common_1.Post('crear-pelicula'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pelicula_create_dto_1.PeliculaCreateDto, Object]),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "create", null);
__decorate([
    common_1.Post('eliminar-pelicula/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PeliculaController.prototype, "eliminar", null);
__decorate([
    common_1.Get('actualizar-pelicula/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Query('error')),
    __param(3, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String, Object]),
    __metadata("design:returntype", Promise)
], PeliculaController.prototype, "actualizarEvento", null);
__decorate([
    common_1.Post('actualizar-pelicula/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, pelicula_create_dto_1.PeliculaCreateDto]),
    __metadata("design:returntype", Promise)
], PeliculaController.prototype, "editarUno", null);
PeliculaController = __decorate([
    common_1.Controller('pelicula'),
    __metadata("design:paramtypes", [pelicula_service_1.PeliculaService,
        actor_service_1.ActorService])
], PeliculaController);
exports.PeliculaController = PeliculaController;
//# sourceMappingURL=pelicula.controller.js.map