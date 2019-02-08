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
const pelicula_entity_1 = require("./pelicula.entity");
const telas_service_1 = require("src/actor/telas.service");
let ProductoService = class ProductoService {
    constructor(_peliculaRepository, actorService) {
        this._peliculaRepository = _peliculaRepository;
        this.actorService = actorService;
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._peliculaRepository.findOne(id);
        });
    }
    findAll(parametrosConsulta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._peliculaRepository.find(parametrosConsulta);
        });
    }
    create(datosCrearPelicula) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._peliculaRepository.save(datosCrearPelicula);
        });
    }
    delete(idActor) {
        return __awaiter(this, void 0, void 0, function* () {
            const sedeEntityAEliminar = this._peliculaRepository
                .create({
                id: idActor
            });
            return yield this._peliculaRepository.remove(sedeEntityAEliminar);
        });
    }
    update(nuevaMascota) {
        return __awaiter(this, void 0, void 0, function* () {
            const medicamentoEntity = this._peliculaRepository.create(nuevaMascota);
            return this._peliculaRepository.save(medicamentoEntity);
        });
    }
};
ProductoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pelicula_entity_1.PeliculaEntity)),
    __param(1, common_1.Inject(common_1.forwardRef(() => telas_service_1.TelasService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        telas_service_1.TelasService])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map