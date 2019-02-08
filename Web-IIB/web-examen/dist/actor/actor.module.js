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
const telas_service_1 = require("./telas.service");
const actor_controller_1 = require("./actor.controller");
const actor_entity_1 = require("./actor.entity");
const pelicula_module_1 = require("src/pelicula/pelicula.module");
let ActorModule = class ActorModule {
};
ActorModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                actor_entity_1.ActorEntity
            ]), pelicula_module_1.PeliculaModule],
        providers: [telas_service_1.TelasService,
        ],
        controllers: [actor_controller_1.ActorController],
        exports: [telas_service_1.TelasService],
    })
], ActorModule);
exports.ActorModule = ActorModule;
//# sourceMappingURL=actor.module.js.map