import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductoService } from "./producto.service";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaEntity } from "./pelicula.entity";
import { PeliculaController } from "./pelicula.controller";
import { ActorModule } from "src/actor/actor.module";
import { TelasService } from "src/actor/telas.service";

@Module({
    imports: [
        forwardRef(()=> ActorModule)
        ,TypeOrmModule.forFeature([
        PeliculaEntity
    ])],
    providers: [ProductoService],
    controllers: [PeliculaController],
    exports: [ProductoService],
})

export class PeliculaModule {

}
