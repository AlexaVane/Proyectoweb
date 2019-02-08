import { Repository, FindManyOptions } from "typeorm";
import { PeliculaEntity } from "./pelicula.entity";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { ActorService } from "src/actor/actor.service";
export declare class PeliculaService {
    private readonly _peliculaRepository;
    private readonly actorService;
    constructor(_peliculaRepository: Repository<PeliculaEntity>, actorService: ActorService);
    findOne(id: number): Promise<PeliculaEntity>;
    findAll(parametrosConsulta?: FindManyOptions<PeliculaEntity>): Promise<PeliculaEntity[]>;
    create(datosCrearPelicula: PeliculaCreateDto): Promise<PeliculaCreateDto & PeliculaEntity>;
    delete(idActor: number): Promise<PeliculaEntity>;
    update(nuevaMascota: PeliculaCreateDto): Promise<PeliculaEntity>;
}
