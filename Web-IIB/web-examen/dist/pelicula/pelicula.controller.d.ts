import { PeliculaService } from "./pelicula.service";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaEntity } from "./pelicula.entity";
import { ActorService } from "src/actor/actor.service";
export declare class PeliculaController {
    private readonly _peliculaService;
    private readonly _actorService;
    constructor(_peliculaService: PeliculaService, _actorService: ActorService);
    findAll(): Promise<PeliculaEntity[]>;
    findOne(id: any): Promise<PeliculaEntity>;
    crearPelicula(res: any): Promise<void>;
    create(peliculaCrear: PeliculaCreateDto, res: any): Promise<PeliculaCreateDto & PeliculaEntity>;
    eliminar(idPelicula: string, res: any): Promise<void>;
    actualizarEvento(idPelicula: string, response: any, error: string, sesion: any): Promise<void>;
    editarUno(idPelicula: any, res: any, peliculaEditar: PeliculaCreateDto): Promise<void>;
}
