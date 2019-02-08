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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evento_entity_1 = require("./evento.entity");
let EventoService = class EventoService {
    constructor(_eventoRepository) {
        this._eventoRepository = _eventoRepository;
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._eventoRepository.findOne(id);
        });
    }
    findAll(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._eventoRepository.find(parametros);
        });
    }
    create(datosCrearEvento) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._eventoRepository.save(datosCrearEvento);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._eventoRepository.delete(id);
        });
    }
    update(id, datosEditarEvento) {
        return __awaiter(this, void 0, void 0, function* () {
            const editarEvento = this.findOne(id);
            if (editarEvento) {
                return yield this._eventoRepository.update(id, datosEditarEvento);
            }
            else {
                console.log('usuario no econtrado, se lo actualizara');
            }
        });
    }
};
EventoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(evento_entity_1.EventoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventoService);
exports.EventoService = EventoService;
//# sourceMappingURL=evento.service.js.map