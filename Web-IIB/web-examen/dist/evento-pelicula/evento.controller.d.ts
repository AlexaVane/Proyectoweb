import { EventoPeliculaService } from "./evento.service";
import { EventoPeliculaCreateDto } from "./evento-pelicula-create-dto/evento-pelicula-create.dto";
import { EventoPeliculaUpdateDto } from "./evento-pelicula-update-dto/evento-pelicula-update.dto";
import { EventoPeliculaEntity } from "./evento.entity";
export declare class EventoPeliculaController {
    private readonly _eventoPeliculaService;
    constructor(_eventoPeliculaService: EventoPeliculaService);
    findAll(): Promise<EventoPeliculaEntity[]>;
    findOne(id: any): Promise<EventoPeliculaEntity>;
    ver(res: any, idEventoPelicula: string): Promise<void>;
    create(eventoPeliculaCrear: EventoPeliculaCreateDto): Promise<EventoPeliculaCreateDto & EventoPeliculaEntity>;
    eliminarUno(req: any): Promise<import("typeorm").DeleteResult>;
    editarUno(idEventoPelicula: any, eventoPeliculaEditar: EventoPeliculaUpdateDto): Promise<import("typeorm").UpdateResult>;
}
