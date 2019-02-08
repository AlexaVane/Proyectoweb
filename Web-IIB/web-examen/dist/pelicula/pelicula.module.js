"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const producto_service_1 = require("./producto.service");
const pelicula_entity_1 = require("./pelicula.entity");
const pelicula_controller_1 = require("./pelicula.controller");
const actor_module_1 = require("src/actor/actor.module");
let PeliculaModule = class PeliculaModule {
};
PeliculaModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => actor_module_1.ActorModule),
            typeorm_1.TypeOrmModule.forFeature([
                pelicula_entity_1.PeliculaEntity
            ])
        ],
        providers: [producto_service_1.ProductoService],
        controllers: [pelicula_controller_1.PeliculaController],
        exports: [producto_service_1.ProductoService],
    })
], PeliculaModule);
exports.PeliculaModule = PeliculaModule;
//# sourceMappingURL=pelicula.module.js.map