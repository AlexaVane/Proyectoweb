import { Repository, FindManyOptions } from "typeorm";
import { PeliculaEntity } from "./pelicula.entity";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { TelasService } from "src/actor/telas.service";
export declare class ProductoService {
    private readonly _peliculaRepository;
    private readonly actorService;
    constructor(_peliculaRepository: Repository<PeliculaEntity>, actorService: TelasService);
    findOne(id: number): Promise<PeliculaEntity>;
    findAll(parametrosConsulta?: FindManyOptions<PeliculaEntity>): Promise<PeliculaEntity[]>;
    create(datosCrearPelicula: PeliculaCreateDto): Promise<PeliculaCreateDto & PeliculaEntity>;
    delete(idActor: number): Promise<PeliculaEntity>;
    update(nuevaMascota: PeliculaCreateDto): Promise<PeliculaEntity>;
}
