import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TelasService } from "./telas.service";
import { ActorController } from "./actor.controller";
import { ActorEntity } from "./actor.entity";
import { ProductoService } from "src/pelicula/producto.service";
import { PeliculaModule } from "src/pelicula/pelicula.module";

@Module({
    imports: [TypeOrmModule.forFeature([
        ActorEntity
    ]), PeliculaModule],
    providers: [TelasService,
    ],
    controllers: [ActorController],
    exports: [TelasService],
})

export class ActorModule {

} 
    