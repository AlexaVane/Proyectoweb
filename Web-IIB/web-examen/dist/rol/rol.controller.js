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
const rol_create_dto_1 = require("./rol-create-dto/rol-create.dto");
const rol_service_1 = require("./rol.service");
let RolController = class RolController {
    constructor(_rolService) {
        this._rolService = _rolService;
    }
    crearRol(response) {
        response.render('crear-rol');
    }
    crearRolPost(response, rolCrear) {
        return __awaiter(this, void 0, void 0, function* () {
            const rol = new rol_create_dto_1.RolDto;
            rol.rol_nombre = rolCrear.nombre,
                yield this._rolService.crearRol(rol);
            response.redirect('asignar-rol');
        });
    }
    asignarRol(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield this._rolService.obtenerRol();
            respuesta.map(res => {
                res.rol_nombre;
            });
            console.log(respuesta);
            response.render('asignar-rol', { respuesta });
        });
    }
};
__decorate([
    common_1.Get('crear-rol'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RolController.prototype, "crearRol", null);
__decorate([
    common_1.Post('crear-rol'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "crearRolPost", null);
__decorate([
    common_1.Get('asignar-rol'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "asignarRol", null);
RolController = __decorate([
    common_1.Controller('rol'),
    __metadata("design:paramtypes", [rol_service_1.RolService])
], RolController);
exports.RolController = RolController;
//# sourceMappingURL=rol.controller.js.map