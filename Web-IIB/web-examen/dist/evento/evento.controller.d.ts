import { EventoUpdateDto } from "./evento-update-dto/evento-update.dto";
import { EventoService } from "./evento.service";
import { ProductoService } from "src/pelicula/producto.service";
import { EventoEntity } from "./evento.entity";
import { EventoPeliculaService } from "src/evento-pelicula/evento.service";
export declare class EventoController {
    private readonly _eventoService;
    private readonly _peliculaService;
    private readonly _eventoPeliculaService;
    constructor(_eventoService: EventoService, _peliculaService: ProductoService, _eventoPeliculaService: EventoPeliculaService);
    findAll(): Promise<EventoEntity[]>;
    findOne(id: any): Promise<EventoEntity>;
    evento(res: any, busqueda: string): Promise<void>;
    verPelicula(res: any): void;
    irAEvento(res: any): Promise<void>;
    create(res: any, eventoCrear: EventoEntity): void;
    eliminarUno(req: any): Promise<import("typeorm").DeleteResult>;
    editarUno(idEvento: any, eventoEditar: EventoUpdateDto): Promise<import("typeorm").UpdateResult>;
}
