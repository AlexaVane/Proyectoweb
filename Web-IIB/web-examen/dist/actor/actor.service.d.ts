import { Repository, FindManyOptions } from "typeorm";
import { ActorEntity } from "./actor.entity";
import { EventoCreateDto } from "./actor-create-dto/actor-create.dto";
import { PeliculaService } from "src/pelicula/pelicula.service";
export declare class ActorService {
    private readonly _usuarioRepository;
    private readonly peliculaService;
    constructor(_usuarioRepository: Repository<ActorEntity>, peliculaService: PeliculaService);
    findOne(id: number): Promise<ActorEntity>;
    findAll(parametros?: FindManyOptions<ActorEntity>): Promise<ActorEntity[]>;
    create(datosCrearActor: EventoCreateDto): Promise<EventoCreateDto & ActorEntity>;
    delete(idActor: number): Promise<ActorEntity>;
    update(nuevaMascota: EventoCreateDto): Promise<ActorEntity>;
}
