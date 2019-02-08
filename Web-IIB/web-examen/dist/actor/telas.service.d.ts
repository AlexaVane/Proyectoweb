import { Repository, FindManyOptions } from "typeorm";
import { ActorEntity } from "./actor.entity";
import { EventoCreateDto } from "./actor-create-dto/actor-create.dto";
import { ProductoService } from "src/pelicula/producto.service";
export declare class TelasService {
    private readonly _usuarioRepository;
    private readonly peliculaService;
    constructor(_usuarioRepository: Repository<ActorEntity>, peliculaService: ProductoService);
    findOne(id: number): Promise<ActorEntity>;
    findAll(parametros?: FindManyOptions<ActorEntity>): Promise<ActorEntity[]>;
    create(datosCrearActor: EventoCreateDto): Promise<EventoCreateDto & ActorEntity>;
    delete(idActor: number): Promise<ActorEntity>;
    update(nuevaMascota: EventoCreateDto): Promise<ActorEntity>;
}
