import { Repository } from "typeorm";
import { EventoPeliculaEntity } from "./evento.entity";
import { EventoPeliculaCreateDto } from "./evento-pelicula-create-dto/evento-pelicula-create.dto";
import { EventoPeliculaUpdateDto } from "./evento-pelicula-update-dto/evento-pelicula-update.dto";
export declare class EventoPeliculaService {
    private readonly _eventoPeliculaRepository;
    constructor(_eventoPeliculaRepository: Repository<EventoPeliculaEntity>);
    obtenerMedicamento(idEvento: number): Promise<EventoPeliculaEntity[]>;
    findOne(id: number): Promise<EventoPeliculaEntity>;
    findAll(): Promise<EventoPeliculaEntity[]>;
    create(datosCrearEventoPelicula: EventoPeliculaCreateDto): Promise<EventoPeliculaCreateDto & EventoPeliculaEntity>;
    delete(id: number): Promise<import("../../../../../../../node_modules/typeorm/query-builder/result/DeleteResult").DeleteResult>;
    update(id: number, datosEditarEventoPelicula: EventoPeliculaUpdateDto): Promise<import("../../../../../../../node_modules/typeorm/query-builder/result/UpdateResult").UpdateResult>;
}
