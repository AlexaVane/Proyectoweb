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
const evento_service_1 = require("./evento.service");
const evento_pelicula_create_dto_1 = require("./evento-pelicula-create-dto/evento-pelicula-create.dto");
const evento_pelicula_update_dto_1 = require("./evento-pelicula-update-dto/evento-pelicula-update.dto");
let EventoPeliculaController = class EventoPeliculaController {
    constructor(_eventoPeliculaService) {
        this._eventoPeliculaService = _eventoPeliculaService;
    }
    findAll() {
        return this._eventoPeliculaService.findAll();
    }
    findOne(id) {
        return this._eventoPeliculaService.findOne(id);
    }
    ver(res, idEventoPelicula) {
        return __awaiter(this, void 0, void 0, function* () {
            let tamaño;
            tamaño = yield this._eventoPeliculaService.obtenerMedicamento(+idEventoPelicula);
            console.log(tamaño);
            res.render('ver-pelicula', {
                arregloEventoPelicula: tamaño
            });
        });
    }
    create(eventoPeliculaCrear) {
        return this._eventoPeliculaService.create(eventoPeliculaCrear);
    }
    eliminarUno(req) {
        return this._eventoPeliculaService.delete(req.params.id);
    }
    editarUno(idEventoPelicula, eventoPeliculaEditar) {
        return this._eventoPeliculaService.update(idEventoPelicula, eventoPeliculaEditar);
    }
};
__decorate([
    common_1.Get('buscar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventoPeliculaController.prototype, "findAll", null);
__decorate([
    common_1.Get('buscarPorId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventoPeliculaController.prototype, "findOne", null);
__decorate([
    common_1.Get('ver-peliculas/:id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EventoPeliculaController.prototype, "ver", null);
__decorate([
    common_1.Post('crear'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evento_pelicula_create_dto_1.EventoPeliculaCreateDto]),
    __metadata("design:returntype", void 0)
], EventoPeliculaController.prototype, "create", null);
__decorate([
    common_1.Delete('eliminar/:id'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventoPeliculaController.prototype, "eliminarUno", null);
__decorate([
    common_1.Post('editar/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, evento_pelicula_update_dto_1.EventoPeliculaUpdateDto]),
    __metadata("design:returntype", void 0)
], EventoPeliculaController.prototype, "editarUno", null);
EventoPeliculaController = __decorate([
    common_1.Controller('evento-pelicula'),
    __metadata("design:paramtypes", [evento_service_1.EventoPeliculaService])
], EventoPeliculaController);
exports.EventoPeliculaController = EventoPeliculaController;
//# sourceMappingURL=evento.controller.js.map