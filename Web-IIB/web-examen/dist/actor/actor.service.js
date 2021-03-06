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
const actor_entity_1 = require("./actor.entity");
const pelicula_service_1 = require("src/pelicula/pelicula.service");
let ActorService = class ActorService {
    constructor(_usuarioRepository, peliculaService) {
        this._usuarioRepository = _usuarioRepository;
        this.peliculaService = peliculaService;
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._usuarioRepository.findOne(id);
        });
    }
    findAll(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._usuarioRepository.find(parametros);
        });
    }
    create(datosCrearActor) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._usuarioRepository.save(datosCrearActor);
        });
    }
    delete(idActor) {
        return __awaiter(this, void 0, void 0, function* () {
            const sedeEntityAEliminar = this._usuarioRepository
                .create({
                id: idActor
            });
            return yield this._usuarioRepository.remove(sedeEntityAEliminar);
        });
    }
    update(nuevaMascota) {
        return __awaiter(this, void 0, void 0, function* () {
            const medicamentoEntity = this._usuarioRepository.create(nuevaMascota);
            return this._usuarioRepository.save(medicamentoEntity);
        });
    }
};
ActorService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(actor_entity_1.ActorEntity)),
    __param(1, common_1.Inject(common_1.forwardRef(() => pelicula_service_1.PeliculaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        pelicula_service_1.PeliculaService])
], ActorService);
exports.ActorService = ActorService;
//# sourceMappingURL=actor.service.js.map