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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const telas_service_1 = require("../actor/telas.service");
const producto_service_1 = require("../pelicula/producto.service");
let ProveedorController = class ProveedorController {
    constructor(_actorService, _telasService) {
        this._actorService = _actorService;
        this._telasService = _telasService;
    }
};
ProveedorController = __decorate([
    common_1.Controller('proveedor'),
    __metadata("design:paramtypes", [telas_service_1.TelasService,
        producto_service_1.ProductoService])
], ProveedorController);
exports.ProveedorController = ProveedorController;
//# sourceMappingURL=proveedor.controller.js.map