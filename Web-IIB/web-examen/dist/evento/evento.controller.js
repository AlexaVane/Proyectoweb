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
const evento_update_dto_1 = require("./evento-update-dto/evento-update.dto");
const evento_service_1 = require("./evento.service");
const producto_service_1 = require("src/pelicula/producto.service");
const evento_entity_1 = require("./evento.entity");
const evento_service_2 = require("src/evento-pelicula/evento.service");
const typeorm_1 = require("typeorm");
let EventoController = class EventoController {
    constructor(_eventoService, _peliculaService, _eventoPeliculaService) {
        this._eventoService = _eventoService;
        this._peliculaService = _peliculaService;
        this._eventoPeliculaService = _eventoPeliculaService;
    }
    findAll() {
        return this._eventoService.findAll();
    }
    findOne(id) {
        return this._eventoService.findOne(id);
    }
    evento(res, busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            let eventos;
            if (busqueda) {
                const consulta = {
                    where: [
                        {
                            nombre: typeorm_1.Like(`%${busqueda}%`)
                        },
                        {
                            fecha: typeorm_1.Like(`%${busqueda}%`)
                        }
                    ]
                };
                eventos = yield this._eventoService.findAll(consulta);
            }
            else {
                eventos = yield this._eventoService.findAll();
            }
            res.render("evento", {
                arreglo: eventos
            });
        });
    }
    verPelicula(res) {
        res.render('ver-pelicula');
    }
    irAEvento(res) {
        return __awaiter(this, void 0, void 0, function* () {
            let peliculas;
            peliculas = yield this._peliculaService.findAll();
            res.render("crear-evento", {
                arreglo: peliculas
            });
        });
    }
    create(res, eventoCrear) {
        const eventoCrearNew = {
            nombre: eventoCrear.nombre,
            fecha: eventoCrear.fecha,
            latitud: eventoCrear.latitud,
            longitud: eventoCrear.longitud,
        };
        const eventoCreado = this._eventoService.create(eventoCrearNew);
        for (let numero of eventoCrear.eventoPelicula) {
            eventoCreado.then((even) => {
                const eventoPelicula = {
                    pelicula: numero,
                    evento: even.id
                };
                this._eventoPeliculaService.create(eventoPelicula);
                console.log(eventoPelicula);
            });
        }
        res.redirect('/evento');
    }
    eliminarUno(req) {
        return this._eventoService.delete(req.params.id);
    }
    editarUno(idEvento, eventoEditar) {
        return this._eventoService.update(idEvento, eventoEditar);
    }
};
__decorate([
    common_1.Get('buscar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "findAll", null);
__decorate([
    common_1.Get('buscarPorId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "findOne", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "evento", null);
__decorate([
    common_1.Get('ver-pelicula'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "verPelicula", null);
__decorate([
    common_1.Get("crear-evento"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "irAEvento", null);
__decorate([
    common_1.Post('crear-evento'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, evento_entity_1.EventoEntity]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "create", null);
__decorate([
    common_1.Delete('eliminar/:id'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "eliminarUno", null);
__decorate([
    common_1.Post('editar/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, evento_update_dto_1.EventoUpdateDto]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "editarUno", null);
EventoController = __decorate([
    common_1.Controller('evento'),
    __metadata("design:paramtypes", [evento_service_1.EventoService,
        producto_service_1.ProductoService,
        evento_service_2.EventoPeliculaService])
], EventoController);
exports.EventoController = EventoController;
//# sourceMappingURL=evento.controller.js.map