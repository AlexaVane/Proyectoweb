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
const usuario_entity_1 = require("./usuario.entity");
const typeorm_2 = require("typeorm");
let UsuarioService = class UsuarioService {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    credenciales(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = {
                where: {
                    email_usuario: usuario.email_usuario,
                    password_usuario: usuario.password_usuario,
                },
            };
            return yield this._usuarioService.findOne(consulta);
        });
    }
    crearUsuario(nuevoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioEntity = this._usuarioService.create(nuevoUsuario);
            const usuarioCreado = yield this._usuarioService.save(usuarioEntity);
            return usuarioCreado;
        });
    }
    buscar(parametros) {
        return this._usuarioService.find(parametros);
    }
    borrar(id) {
        const usuarioEntityEliminar = this._usuarioService.create({
            id,
        });
        return this._usuarioService.remove(usuarioEntityEliminar);
    }
    buscarPorId(id) {
        return this._usuarioService.findOne(id);
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map